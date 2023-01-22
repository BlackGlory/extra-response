import { mapAsync } from 'iterable-operator'
import { toLines } from './to-lines.js'

export function toNDJSON<T>(res: Response): AsyncIterable<T> {
  return mapAsync(
    toLines(res)
  , text => JSON.parse(text)
  )
}
