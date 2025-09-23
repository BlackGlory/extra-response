import { test, expect } from 'vitest'
import { toLines } from '@src/to-lines.js'
import { toArrayAsync } from 'iterable-operator'

test('toLines', async () => {
  const text = '1\n2\n3'
  const res = new Response(text)

  const result = toLines(res)
  const proResult = await toArrayAsync(result)

  expect(result[Symbol.asyncIterator]).toBeTruthy()
  expect(proResult).toEqual(['1', '2', '3'])
})
