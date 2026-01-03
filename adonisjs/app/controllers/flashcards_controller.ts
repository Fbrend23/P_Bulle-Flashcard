import Deck from '#models/deck'
import Flashcard from '#models/flashcard'
import { cardValidator } from '#validators/card'
import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)
    const cards = await Flashcard.query().where('deckId', deck.id).orderBy('id')
    return view.render('pages/cards/index', { deck, cards })
  }

  /**
   * Display form to create a new record
   */
  async create({ params, view }: HttpContext) {
    const deckId = params.deckId
    return view.render('pages/cards/create', { deckId, title: 'Créer une carte' })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, params }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)
    const data = await request.validateUsing(cardValidator)

    await deck.related('flashcard').create(data)

    return response.redirect().toRoute('deck.show', { deckId: deck.id })
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    await card.load('deck')
    return view.render('pages/cards/show', { card, title: 'Détail de la carte' })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    return view.render('pages/cards/edit', { card, title: 'Modifier la carte' })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    const data = await request.validateUsing(cardValidator)

    card.merge(data)
    await card.save()

    return response.redirect().toRoute('deck.show', { deckId: card.deckId })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const card = await Flashcard.findOrFail(params.id)
    await card.load('deck')
    const deckId = card.deck.id

    await card.delete()

    return response.redirect().toRoute('deck.show', { deckId: deckId })
  }
}
