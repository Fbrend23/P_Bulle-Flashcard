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
const HomepagesController = () => import('#controllers/homepages_controller')
const DecksController = () => import('#controllers/decks_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [HomepagesController, 'index'])
router.get('/mydecks', [DecksController, 'index'])
router.get('/decks/:id/show', [DecksController, 'show']).as('deck.show')
//Deck Edit
router.get('/decks/:id/edit', [DecksController, 'edit']).as('deck.edit')
router.post('/decks/:id/update', [DecksController, 'update']).as('deck.update')
