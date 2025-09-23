import { test, expect } from 'vitest'
import { toJSON } from '@src/to-json.js'

test('toJSON', async () => {
  const json = { test: 'test' }
  const res = new Response(JSON.stringify(json))

  const result = toJSON(res)
  const proResult = await result

  expect(result).toBeInstanceOf(Promise)
  expect(proResult).toEqual(json)
})
