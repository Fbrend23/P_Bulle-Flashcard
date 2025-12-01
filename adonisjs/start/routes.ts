/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import CardsController from '#controllers/flashcards_controller'
const HomepagesController = () => import('#controllers/homepages_controller')
const DecksController = () => import('#controllers/decks_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [HomepagesController, 'index'])
router.get('/mydecks', [DecksController, 'index']).as('mydecks.index')
router.get('/decks/:id/show', [DecksController, 'show']).as('deck.show')

//Deck controller
//add
router.get('/decks/create', [DecksController, 'create']).as('deck.create')
router.post('/decks/add', [DecksController, 'store']).as('deck.store')
//edit
router.get('/decks/:id/edit', [DecksController, 'edit']).as('deck.edit')
router.post('/decks/:id/update', [DecksController, 'update']).as('deck.update')
//destroy
router.get('/decks/:id/destroy', [DecksController, 'destroy']).as('deck.destroy')

//Cards
router
  .group(() => {
    router.get('/', [CardsController, 'index']).as('card.index')
    router.get('/show', [CardsController, 'show']).as('card.show')
    router.get('/create', [CardsController, 'create']).as('card.create')
    router.post('/', [CardsController, 'store']).as('card.store')
    router.get('/:id/edit', [CardsController, 'edit']).as('card.edit')
    router.post('/:id', [CardsController, 'update']).as('card.update')
    router.get('/:id/destroy', [CardsController, 'destroy']).as('card.destroy')
  })
  .prefix('/decks/:deckId/cards')
