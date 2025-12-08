import vine from '@vinejs/vine'

export const cardValidator = vine.compile(
  vine.object({
    question: vine.string().minLength(3).maxLength(255),
    answer: vine.string().minLength(1).maxLength(1024),
  })
)
