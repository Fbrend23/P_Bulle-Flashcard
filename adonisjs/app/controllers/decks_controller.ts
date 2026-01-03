import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  /**
   * Show every decks published
   */
  async index({ view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    const decks = await user.related('deck').query().orderBy('updated_at', 'desc')
    return view.render('pages/myDecks', { decks })
  }
  /**
   * Handle form submission for the create action
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/create', { title: 'Créer un deck' })
  }

  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(deckValidator)
    // https://docs.adonisjs.com/guides/authentication/custom-auth-guard#implementing-the-getuserorfail-method
    // "Returns an instance of the logged-in user or throws an exception"
    const user = auth.getUserOrFail()

    // Relationship query builder

    // You can also access the query builder for a relationship using the related method. The relationship queries are always scoped to a given parent model instance.

    // Lucid will automatically add the where clause for limiting the posts to the given user in the following example.

    // const user = await User.find(1)
    // const posts = await user.related('posts').query()

    // The query method returns a standard query builder instance, and you can chain any methods to it to add additional constraints.
    // https://lucid.adonisjs.com/docs/relationships#relationship-query-builder

    // Vu sur mes projets personnels
    const deck = await user.related('deck').create(data)

    return response.redirect().toRoute('deck.show', { deckId: deck.id })
  }
  /**
   * Show individual record
   */
  async show({ params, view, auth }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId === auth.user?.id || deck.isPublished) {
      return view.render('pages/decks/show', { deck, title: deck.title })
    }
    return view.render('pages/errors/not_found')
  }
  /**
   * Edit individual record
   */
  async edit({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await user.related('deck').query().where('id', params.deckId).firstOrFail()
    return view.render('pages/decks/edit', { title: 'Modifier le deck', deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await user.related('deck').query().where('id', params.deckId).firstOrFail()
    const data = await request.validateUsing(deckValidator)

    await deck.merge(data).save()
    return response.redirect().toRoute('deck.show', { deckId: deck.id })
  }

  /**
   * Delete record
   */
  async destroy({ params, response, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await user.related('deck').query().where('id', params.deckId).firstOrFail()
    await deck.delete()
    return response.redirect().toRoute('mydecks.index')
  }
}
