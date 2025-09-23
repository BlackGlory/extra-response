import { test, expect } from 'vitest'
import { toJSON } from '@src/to-json.js'
import { isPromise } from '@blackglory/prelude'

test('toJSON', async () => {
  const json = { test: 'test' }
  const res = new Response(JSON.stringify(json))

  const promise = toJSON(res)
  const result = await promise

  expect(isPromise(promise)).toBe(true)
  expect(result).toStrictEqual(json)
})
