import { describe, test, expect } from 'vitest'
import { toNDJSON } from '@src/to-ndjson.js'
import { toArrayAsync } from 'iterable-operator'
import { go, isAsyncIterable } from '@blackglory/prelude'
import { toReadableStream } from 'extra-stream'

describe('toNDJSON', () => {
  test.each([
    ['\n', '\\n']
  , ['\r\n', '\\r\\n']
  ])('newline $1', async newline => {
    const lines = [
      { data: 'data1' }
    , { data: 'data2' }
    ]
    const res = new Response(
      toReadableStream(go(function* () {
        for (const line of lines) {
          yield JSON.stringify(line)
          yield newline
        }
      }))
        .pipeThrough(new TextEncoderStream())
    )

    const iter = toNDJSON(res, newline)
    const result = await toArrayAsync(iter)

    expect(isAsyncIterable(iter)).toBe(true)
    expect(result).toStrictEqual(lines)
  })
})
