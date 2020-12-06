import { ok, HTTPError } from '@src/ok'
import { getError } from 'return-style'

describe('ok(res: Response): Response', () => {
  describe('2xx', () => {
    it('return Response', () => {
      const res = new Response(null, { status: 200 })

      const result = ok(res)

      expect(result).toBe(res)
    })
  })

  describe('not 2xx', () => {
    it('throw HTTPError', () => {
      const res = new Response(null, { status: 404 })

      const err = getError(() => ok(res))

      expect(err).toBeInstanceOf(HTTPError)
    })
  })
})
