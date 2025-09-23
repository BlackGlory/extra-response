import { test, expect } from 'vitest'
import { toLines } from '@src/to-lines.js'
import { toArrayAsync } from 'iterable-operator'
import { isAsyncIterable } from '@blackglory/prelude'

test('toLines', async () => {
  const lines = [
    '1'
  , '2'
  , '3'
  ]
  const res = new Response(lines.join('\n'))

  const iter = toLines(res)
  const result = await toArrayAsync(iter)

  expect(isAsyncIterable(iter)).toBe(true)
  expect(result).toStrictEqual(lines)
})
