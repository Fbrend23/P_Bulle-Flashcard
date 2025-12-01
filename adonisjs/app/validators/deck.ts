import vine from '@vinejs/vine'

export const deckValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(3).maxLength(32),
    description: vine.string().maxLength(512),
    isPublished: vine.boolean(),
  })
)
