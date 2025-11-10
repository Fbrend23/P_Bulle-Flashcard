import vine from '@vinejs/vine'

export const deckValidator = vine.compile(
  vine.object({
    title: vine
      .string()
      .minLength(3)
      .maxLength(32)
      .regex(/^[a-zA-Z0-9]+$/),
    description: vine
      .string()
      .maxLength(512)
      .regex(/^[a-zA-Z0-9]+$/),
    isPublished: vine.boolean(),
  })
)
