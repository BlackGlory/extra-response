import { describe, test, expect } from 'vitest'
import { toNDJSON } from '@src/to-ndjson.js'
import { toArrayAsync } from 'iterable-operator'
import { go, isAsyncIterable } from '@blackglory/prelude'
import { toReadableStream } from 'extra-stream'

describe('toNDJSON', () => {
  test('newline \\n', async () => {
    const lines = [
      { data: 'data1' }
    , { data: 'data2' }
    ]
    const res = new Response(
      toReadableStream(go(function* () {
        for (const line of lines) {
          yield JSON.stringify(line)
          yield '\n'
        }
      }))
        .pipeThrough(new TextEncoderStream())
    )

    const iter = toNDJSON(res, '\n')
    const result = await toArrayAsync(iter)

    expect(isAsyncIterable(iter)).toBe(true)
    expect(result).toStrictEqual(lines)
  })

  test('newline \\r\\n', async () => {
    const lines = [
      { data: 'data1' }
    , { data: 'data2' }
    ]
    const res = new Response(
      toReadableStream(go(function* () {
        for (const line of lines) {
          yield JSON.stringify(line)
          yield '\r\n'
        }
      }))
        .pipeThrough(new TextEncoderStream())
    )

    const iter = toNDJSON(res, '\r\n')
    const result = await toArrayAsync(iter)

    expect(isAsyncIterable(iter)).toBe(true)
    expect(result).toStrictEqual(lines)
  })
})
