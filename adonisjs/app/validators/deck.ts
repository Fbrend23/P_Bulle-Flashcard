import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const deckValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3).maxLength(32),
    description: vine.string().maxLength(512),
    isPublished: vine.boolean(),
  })
)

deckValidator.messagesProvider = new SimpleMessagesProvider({
  required: 'Ce champ est requis',
  string: 'Le format de ce champ est invalide',
  minLength: 'Le titre doit contenir au moins {{ min }} caractères',
  maxLength: 'Ce champ ne doit pas dépasser {{ max }} caractères',
  boolean: 'La valeur doit être vraie ou fausse',
})
