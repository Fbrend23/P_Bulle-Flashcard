import Deck from '#models/deck'
import User from '#models/user'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

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
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).firstOrFail()

    return view.render('pages/decks/show', { title: 'Détail du deck ', deck })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
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
    const deck = await Deck.findOrFail(params.id)

    if (deck) {
      await deck.merge({ title, description, isPublished }).save()
    }
    console.log('Deck modifié')
  }

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
