import { test, expect } from 'vitest'
import { toNDJSON } from '@src/to-ndjson.js'
import { toArrayAsync } from 'iterable-operator'
import { isAsyncIterable } from '@blackglory/prelude'

test('toNDJSON', async () => {
  const lines = [
    { data: 'data1' }
  , { data: 'data2' }
  ]
  const res = new Response(
    lines
      .map(x => JSON.stringify(x))
      .join('\n')
  )

  const iter = toNDJSON(res)
  const result = await toArrayAsync(iter)

  expect(isAsyncIterable(iter)).toBe(true)
  expect(result).toStrictEqual(lines)
})
