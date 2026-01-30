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
const CardsController = () => import('#controllers/flashcards_controller')
const HomepagesController = () => import('#controllers/homepages_controller')
const DecksController = () => import('#controllers/decks_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [HomepagesController, 'index']).as('home')

//Deck controller
router
  .group(() => {
    router.get('/mydecks', [DecksController, 'index']).as('mydecks.index')
    router.get('/decks/:deckId/show', [DecksController, 'show']).as('deck.show')
    //add
    router.get('/decks/create', [DecksController, 'create']).as('deck.create')
    router.post('/decks/add', [DecksController, 'store']).as('deck.store')
    //edit
    router.get('/decks/:deckId/edit', [DecksController, 'edit']).as('deck.edit')
    router.post('/decks/:deckId/update', [DecksController, 'update']).as('deck.update')
    //destroy
    router.get('/decks/:deckId/destroy', [DecksController, 'destroy']).as('deck.destroy')
  })
  .use(middleware.auth())
//Cards
router
  .group(() => {
    router.get('/', [CardsController, 'index']).as('card.index')
    // router.get(':cardId/show', [CardsController, 'show']).as('card.show')
    router.get('/create', [CardsController, 'create']).as('card.create')
    router.post('/create', [CardsController, 'store']).as('card.store')
    router.get('/:cardId/edit', [CardsController, 'edit']).as('card.edit')
    router.post('/:cardId/edit', [CardsController, 'update']).as('card.update')
    router.get('/:cardId/destroy', [CardsController, 'destroy']).as('card.destroy')
  })
  .prefix('/decks/:deckId/cards')
  .use(middleware.auth())

// Authentication
router.post('/login', [AuthController, 'login']).as('login')
router.get('/logout', [AuthController, 'logout']).as('logout').use(middleware.auth())
router.get('/register', [AuthController, 'registerForm']).as('register.show')
router.post('/register', [AuthController, 'register']).as('register')
