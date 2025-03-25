import { describe, it, expect } from 'vitest'
import { ok, HTTPError } from '@src/ok.js'
import { getErrorPromise } from 'return-style'

describe('ok(res: Response): Promise<Response>', () => {
  describe('2xx', () => {
    it('return Response', async () => {
      const res = new Response(null, { status: 200 })

      const result = ok(res)
      const proResult = await result

      expect(result).toBeInstanceOf(Promise)
      expect(proResult).toBe(res)
    })
  })

  describe('not 2xx', () => {
    it('throw HTTPError', async () => {
      const res = new Response(null, { status: 404 })

      const err = await getErrorPromise(ok(res))

      expect(err).toBeInstanceOf(HTTPError)
    })
  })
})
