import { describe, test, expect } from 'vitest'
import { toLines } from '@src/to-lines.js'
import { toArrayAsync } from 'iterable-operator'
import { go, isAsyncIterable } from '@blackglory/prelude'
import { toReadableStream } from 'extra-stream'

describe('toLines', () => {
  test.each([
    ['\n', '\\n']
  , ['\r\n', '\\r\\n']
  ])('newline $1', async newline => {
    const lines = [
      '1'
    , '2'
    ]
    const res = new Response(
      toReadableStream(go(function* () {
        for (const line of lines) {
          yield line
          yield newline
        }
      }))
        .pipeThrough(new TextEncoderStream())
    )

    const iter = toLines(res, newline)
    const result = await toArrayAsync(iter)

    expect(isAsyncIterable(iter)).toBe(true)
    expect(result).toStrictEqual(lines)
  })
})
