import Deck from '#models/deck'
import Flashcard from '#models/flashcard'
import User from '#models/user'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  /**
   * Show every decks published
   */
  async index({ view }: HttpContext) {
    //TODO AUTH
    // const user = await User.findOrFail(params.userId)
    // const currentUser = auth.user!
    // const userId = currentUser.id

    const decks = await Deck.query().orderBy('title')

    return view.render('pages/decks', { decks })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
    const { title, description, isPublished } = await request.validateUsing(deckValidator)
    //TODO AUTH
    const deck = await Deck.create({
      title,
      description,
      isPublished,
    })
    return response.redirect().toRoute('deck.show', { deckId: deck.id })
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.deckId).firstOrFail()
    return view.render('pages/decks/show', {
      title: 'Détail du deck ',
      deck,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)
    return view.render('pages/decks/edit', {
      title: 'Modifier le deck',
      deck,
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { title, description, isPublished } = await request.validateUsing(deckValidator)
    const deck = await Deck.findOrFail(params.deckId)

    if (deck) {
      await deck.merge({ title, description, isPublished }).save()
    }
    response.redirect().toRoute('deck.show', { deckId: deck.id })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    //todo auth
    const deck = await Deck.findOrFail(params.deckId)
    if (deck) {
      await deck.delete()
    }
    response.redirect().toRoute('mydecks.index')
  }

  /**
   * add record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/create', { title: 'Créer un deck' })
  }
}
