import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Flashcard from './flashcard.js'

export default class Deck extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare isPublished: boolean

  @column()
  declare userId: number
  //relations
  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasMany(() => Flashcard)
  declare flashcard: HasMany<typeof Flashcard>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
