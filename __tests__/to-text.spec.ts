import { describe, test, expect } from 'vitest'
import { toText } from '@src/to-text.js'

describe('toText', () => {
  test('without charset', async () => {
    const text = 'test'
    const res = new Response(text)

    const result = toText(res)
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    expect(proResult).toBe(text)
  })

  test('with charset', async () => {
    const text = 'test'
    const res = new Response(text)

    const result = toText(res, 'utf-8')
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    expect(proResult).toBe(text)
  })
})
