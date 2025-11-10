import User from '#models/user'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ params, auth, response }: HttpContext) {
    const user = await User.findOrFail(params.userId)

    const currentUser = auth.user!
    const userId = currentUser.id

    if (userId !== user.id) {
      return response.unauthorized('Accès non autorisé')
    }
    await user.load('deck')

    return view.render('pages/mydecks', { deck })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, auth }: HttpContext) {
    const { title, description, isPublished } = await request.validateUsing(deckValidator)
    const currentUser = auth.user!
    const userId = currentUser.id

    const deck = await Deck.create({
      title,
      description,
      isPublished,
    })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
