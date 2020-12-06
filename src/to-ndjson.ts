import { Json } from '@blackglory/types'
import { mapAsync } from 'iterable-operator'
import { toLines } from './to-lines'

export function toNDJSON(res: Response): AsyncIterable<Json> {
  return mapAsync(
    toLines(res)
  , text => JSON.parse(text)
  )
}
