import { toText } from '@src/to-text'

describe('toText(res: Response): Promise<string>', () => {
  it('return Promise<string>', async () => {
    const text = 'test'
    const res = new Response(text)

    const result = toText(res)
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    expect(proResult).toBe(text)
  })
})

describe('toText(res: Response, charset: string): Promise<string>', () => {
  it('return Promise<string>', async () => {
    const text = 'test'
    const res = new Response(text)

    const result = toText(res, 'utf-8')
    const proResult = await result

    expect(result).toBeInstanceOf(Promise)
    expect(proResult).toBe(text)
  })
})
