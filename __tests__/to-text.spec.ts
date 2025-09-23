import { describe, test, expect } from 'vitest'
import { toText } from '@src/to-text.js'
import { isPromise } from '@blackglory/prelude'

describe('toText', () => {
  test('without charset', async () => {
    const text = 'test'
    const res = new Response(text)

    const promise = toText(res)
    const result = await promise

    expect(isPromise(promise)).toBe(true)
    expect(result).toBe(text)
  })

  test('with charset', async () => {
    const text = 'test'
    const res = new Response(text)

    const promise = toText(res, 'utf-8')
    const result = await promise

    expect(isPromise(promise)).toBe(true)
    expect(result).toBe(text)
  })
})
