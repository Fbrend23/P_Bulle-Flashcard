import Deck from '#models/deck'
import Flashcard from '#models/flashcard'
import { cardValidator } from '#validators/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Affiche la liste des cartes d'un deck spécifique
   */
  async index({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    // On vérifie que le deck appartient bien à l'utilisateur
    const deck = await Deck.query()
      .where('id', params.deckId)
      .where('userId', user.id)
      .firstOrFail()

    // On récupère les cartes du deck
    const cards = await Flashcard.query().where('deckId', deck.id).orderBy('id')

    return view.render('pages/cards/index', { deck, cards })
  }

  /**
   * Affiche le formulaire de création
   */
  async create({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    // Vérification de propriété du deck
    const deck = await Deck.query()
      .where('id', params.deckId)
      .where('userId', user.id)
      .firstOrFail()

    return view.render('pages/cards/create', { deck, title: 'Ajouter une carte' })
  }

  /**
   * Enregistre la nouvelle carte
   */
  async store({ request, response, params, auth, session }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await Deck.query()
      .where('id', params.deckId)
      .where('userId', user.id)
      .firstOrFail()

    // Validation des données
    const { question, answer } = await request.validateUsing(cardValidator)

    // Création de la carte (Note: mappage de 'answer' vers 'anwser' à cause de la typo en BDD)
    await deck.related('flashcard').create({
      question,
      anwser: answer,
    })

    session.flash('success', 'Carte créée avec succès')
    return response.redirect().toRoute('card.index', { deckId: deck.id })
  }

  /**
   * Affiche le formulaire d'édition
   */
  async edit({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    // On récupère la carte et on charge le deck pour vérifier l'appartenance
    const card = await Flashcard.findOrFail(params.id)
    await card.load('deck')

    if (card.deck.userId !== user.id) {
      return view.render('pages/errors/not_found') // Ou forbidden
    }

    return view.render('pages/cards/edit', { card, deck: card.deck, title: 'Modifier la carte' })
  }

  /**
   * Met à jour la carte
   */
  async update({ params, request, response, auth, session }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    await card.load('deck')

    // Vérification sécurité
    if (card.deck.userId !== auth.user?.id) {
      return response.unauthorized()
    }

    const { question, answer } = await request.validateUsing(cardValidator)

    // Mise à jour (toujours avec la gestion de la typo 'anwser')
    card.merge({
      question,
      anwser: answer,
    })
    await card.save()

    session.flash('success', 'Carte modifiée avec succès')
    return response.redirect().toRoute('card.index', { deckId: card.deck.id })
  }

  /**
   * Supprime la carte
   */
  async destroy({ params, response, auth, session }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    await card.load('deck')

    if (card.deck.userId !== auth.user?.id) {
      return response.unauthorized()
    }

    const deckId = card.deck.id
    await card.delete()

    session.flash('success', 'Carte supprimée')
    return response.redirect().toRoute('card.index', { deckId })
  }
}
