import { mapAsync } from 'iterable-operator'
import { toLines } from './to-lines.js'

export function toNDJSON<T>(res: Response, newline: string = '\n'): AsyncIterable<T> {
  return mapAsync(
    toLines(res, newline)
  , text => JSON.parse(text)
  )
}
