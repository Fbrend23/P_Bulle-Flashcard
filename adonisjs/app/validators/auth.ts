import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(8).maxLength(512),
    email: vine.string().email(),
  })
)
export const registerValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .minLength(3)
      .maxLength(32)
      .regex(/^[a-zA-Z0-9]+$/)
      .unique(async (query, field) => {
        const user = await query.from('users').where('username', field).first()
        return !user
      }),
    password: vine
      .string()
      .minLength(8)
      .maxLength(512)
      .regex(/^[A-Za-z\d@$!%*?&]+$/),
    email: vine.string().email(),
  })
)

loginValidator.messagesProvider = new SimpleMessagesProvider({
  required: 'Ce champ est requis',
  string: 'Le format de ce champ est invalide',
  email: "L'adresse email est invalide",
  minLength: 'Le champ {{ field }} doit contenir au moins {{ min }} caractères',
  maxLength: 'Le champ {{ field }} ne doit pas dépasser {{ max }} caractères',
})

registerValidator.messagesProvider = new SimpleMessagesProvider({
  'required': 'Ce champ est requis',
  'string': 'Le format de ce champ est invalide',
  'email': "L'adresse email est invalide",
  'minLength': 'Le champ {{ field }} doit contenir au moins {{ min }} caractères',
  'maxLength': 'Le champ {{ field }} ne doit pas dépasser {{ max }} caractères',
  'regex': 'Le format du champ {{ field }} est invalide',
  'username.regex': "Le nom d'utilisateur ne doit contenir que des lettres et des chiffres",
  'password.regex': 'Le mot de passe doit contenir des lettres, chiffres et caractères spéciaux',
  'database.unique': 'La valeur du champ {{ field }} est déjà utilisée',
})
