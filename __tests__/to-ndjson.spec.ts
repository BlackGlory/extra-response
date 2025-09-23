import { test, expect } from 'vitest'
import { toNDJSON } from '@src/to-ndjson.js'
import { toArrayAsync } from 'iterable-operator'

test('toNDJSON', async () => {
  const jsonArr = [
    { data: 'data1' }
  , { data: 'data2' }
  ]
  const res = new Response(jsonArr.map(x => JSON.stringify(x)).join('\n'))

  const result = toNDJSON(res)
  const proResult = await toArrayAsync(result)

  expect(result[Symbol.asyncIterator]).toBeTruthy()
  expect(proResult).toEqual(jsonArr)
})
