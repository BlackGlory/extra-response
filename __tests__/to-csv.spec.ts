import { toCSV } from '@src/to-csv'

describe('toCSV(res: Response): Promise<Array<{ [name: string]: string }>>', () => {
  it('return AsyncIterable<string>', async () => {
    const text = 'key,value' + '\n'
               + 'foo,bar' + '\n'
               + 'hello,world' + '\n'
               + ' ' // should be ignored
    const res = new Response(text)

    const result = toCSV(res)
    const proResult = await result

    expect(proResult).toEqual([
      { key: 'foo', value: 'bar' }
    , { key: 'hello', value: 'world' }
    ])
  })
})
