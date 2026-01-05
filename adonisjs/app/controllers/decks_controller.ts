import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'
import type { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  /**
   * Display a list of all decks belonging to the authenticated user.
   */
  async index({ view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    const decks = await user.related('deck').query().orderBy('updated_at', 'desc')
    return view.render('pages/myDecks', { decks })
  }
  /**
   * Display the form to create a new deck.
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/create', { title: 'Créer un deck' })
  }

  /**
   * Handle the form submission to create a new deck.
   */
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
   * Display a single deck by its ID.
   */
  async show({ params, view, auth }: HttpContext) {
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId === auth.user?.id || deck.isPublished || auth.user?.isAdmin) {
      return view.render('pages/decks/show', { deck, title: deck.title })
    }
    return view.render('pages/errors/not_found')
  }
  /**
   * Display the form to edit an existing deck.
   */
  async edit({ params, view, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return view.render('pages/errors/not_found')
    }
    return view.render('pages/decks/edit', { title: 'Modifier le deck', deck })
  }

  /**
   * Handle the form submission to update an existing deck.
   */
  async update({ params, request, response, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return response.unauthorized()
    }

    const data = await request.validateUsing(deckValidator)

    await deck.merge(data).save()
    return response.redirect().toRoute('deck.show', { deckId: deck.id })
  }

  /**
   * Delete a deck by its ID.
   */
  async destroy({ params, response, auth }: HttpContext) {
    const user = auth.getUserOrFail()
    const deck = await Deck.findOrFail(params.deckId)

    if (deck.userId !== user.id && !user.isAdmin) {
      return response.unauthorized()
    }

    await deck.delete()
    return response.redirect().toRoute('mydecks.index')
  }
}
