import { describe, test, expect } from 'vitest'
import { ok, HTTPError } from '@src/ok.js'
import { getErrorPromise } from 'return-style'

describe('ok', () => {
  test('2xx', async () => {
    const res = new Response(null, { status: 200 })

    const result = ok(res)
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    expect(proResult).toBe(res)
  })

  test('not 2xx', async () => {
    const res = new Response(null, { status: 404 })

    const err = await getErrorPromise(ok(res))

    expect(err).toBeInstanceOf(HTTPError)
  })
})
