import { describe, it, expect } from 'vitest'
import { toJSON } from '@src/to-json.js'

describe('toJSON(res: Response): Promise<Json>', () => {
  it('return Promise<Json>', async () => {
    const json = { test: 'test' }
    const res = new Response(JSON.stringify(json))

    const result = toJSON(res)
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    /* @ts-ignore */
    expect(proResult).toEqual(json)
  })
})
