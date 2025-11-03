import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'

export default class AuthController {
  //POST /auth/register
  async register({ request, response, auth }: HttpContext) {
    //data fetch
    const payload = await request.validateUsing(registerValidator)

    //account creation
    const user = await User.create(payload)

    //access token for direct login
    const token = await auth.user('api').createToken(user)

    return response.created({ message: ` Merci pour votre incription ${user.username}`, token })
  }

  //POST /auth/login
  async login({ request, response }: HttpContext) {
    //validation of email and password
    const { email, password } = await request.validateUsing(loginValidator)

    //verification with db
    const user = await User.verifyCredentials(email, password)
    //token
    const token = await auth.use('api').createToken(user)

    return response.ok({ token })
  }

  async logout({ auth, response }: HttpContext) {
    // Retrieves the logged-in/authenticated user and their token
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken.identifier

    // If the token does not exist, return HTTP 400 error
    if (!token) {
      return response.badRequest({ message: 'Token not found' })
    }
    // Delete the token
    await User.accessTokens.delete(user, token)

    // Confirm to the user that the logout was successful
    return response.ok({ message: 'Logged out' })
  }
}
