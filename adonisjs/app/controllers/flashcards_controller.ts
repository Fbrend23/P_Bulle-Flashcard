import Deck from '#models/deck'
import Flashcard from '#models/flashcard'
import { cardValidator } from '#validators/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of flashcards for a specific deck.
   */
  async index({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    // On vérifie que le deck appartient bien à l'utilisateur
    // On vérifie que le deck appartient bien à l'utilisateur ou admin
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return view.render('pages/errors/not_found')
    }

    // On récupère les cartes du deck
    const cards = await Flashcard.query().where('deckId', deck.id).orderBy('id')

    return view.render('pages/cards/index', { deck, cards })
  }

  /**
   * Display the form to create a new flashcard.
   */
  async create({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    // Vérification de propriété du deck
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return view.render('pages/errors/not_found')
    }

    return view.render('pages/cards/create', { deck, title: 'Ajouter une carte' })
  }

  /**
   * Handle the form submission to create a new flashcard.
   */
  async store({ request, response, params, auth, session }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return response.unauthorized()
    }

    // Validation des données
    const { question, answer } = await request.validateUsing(cardValidator)

    await deck.related('flashcard').create({
      question,
      answer,
    })

    session.flash('success', 'Carte créée avec succès')
    return response.redirect().toRoute('card.index', { deckId: deck.id })
  }

  /**
   * Display the form to edit an existing flashcard.
   */
  async edit({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    // On récupère la carte et on charge le deck pour vérifier l'appartenance
    const card = await Flashcard.findOrFail(params.cardId)
    await card.load('deck')

    if (card.deck.userId !== user.id && !user.isAdmin) {
      return view.render('pages/errors/not_found')
    }

    return view.render('pages/cards/edit', { card, deck: card.deck, title: 'Modifier la carte' })
  }

  /**
   * Handle the form submission to update an existing flashcard.
   */
  async update({ params, request, response, auth, session }: HttpContext) {
    const card = await Flashcard.findOrFail(params.cardId)
    await card.load('deck')

    // Vérification sécurité
    if (card.deck.userId !== auth.user?.id && !auth.user?.isAdmin) {
      return response.unauthorized()
    }

    const { question, answer } = await request.validateUsing(cardValidator)

    // Mise à jour
    card.merge({
      question,
      answer,
    })
    await card.save()

    session.flash('success', 'Carte modifiée avec succès')
    return response.redirect().toRoute('card.index', { deckId: card.deck.id })
  }

  /**
   * Delete a flashcard by its ID.
   */
  async destroy({ params, response, auth, session }: HttpContext) {
    const card = await Flashcard.findOrFail(params.cardId)
    await card.load('deck')

    if (card.deck.userId !== auth.user?.id && !auth.user?.isAdmin) {
      return response.unauthorized()
    }

    const deckId = card.deck.id
    await card.delete()

    session.flash('success', 'Carte supprimée')
    return response.redirect().toRoute('card.index', { deckId })
  }
}
