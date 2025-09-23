import { describe, test, expect } from 'vitest'
import { ok, HTTPError } from '@src/ok.js'
import { getErrorPromise } from 'return-style'
import { isPromise } from '@blackglory/prelude'

describe('ok', () => {
  test('2xx', async () => {
    const res = new Response(null, { status: 200 })

    const promise = ok(res)
    const result = await promise

    expect(isPromise(promise)).toBe(true)
    expect(result).toBe(res)
  })

  test('not 2xx', async () => {
    const res = new Response(null, { status: 404 })

    const err = await getErrorPromise(ok(res))

    expect(err).toBeInstanceOf(HTTPError)
  })
})
