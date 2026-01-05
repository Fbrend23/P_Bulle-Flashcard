import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  /**
   * Display the user registration form.
   */
  async registerForm({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  /**
   * Handle the user registration form submission.
   */
  async register({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)

    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }

  /**
   * Handle the user login form submission.
   */
  async login({ request, response, auth, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)
    session.flash('success', 'Connexion réussie')
    return response.redirect().toRoute('home')
  }

  /**
   * Handle the user logout action.
   */
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
