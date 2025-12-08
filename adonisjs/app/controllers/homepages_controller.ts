import Deck from '#models/deck'
import { HttpContext } from '@adonisjs/core/http'

export default class HomepagesController {
  /**
   * Show every decks published
   */
  async index({ view }: HttpContext) {
    const decks = await Deck.query().orderBy('title').where('isPublished', 1)

    return view.render('pages/home', { decks })
  }
}
