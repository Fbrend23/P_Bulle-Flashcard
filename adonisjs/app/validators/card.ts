import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const cardValidator = vine.compile(
  vine.object({
    question: vine.string().minLength(3).maxLength(255),
    answer: vine.string().minLength(1).maxLength(1024),
  })
)

cardValidator.messagesProvider = new SimpleMessagesProvider({
  required: 'Ce champ est requis',
  string: 'Le format de ce champ est invalide',
  minLength: 'Ce champ doit contenir au moins {{ min }} caractères',
  maxLength: 'Ce champ ne doit pas dépasser {{ max }} caractères',
})
