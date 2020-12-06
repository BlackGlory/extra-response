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
