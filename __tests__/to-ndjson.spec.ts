import { toNDJSON } from '@src/to-ndjson.js'
import { toArrayAsync } from 'iterable-operator'

describe('toNDJSON(res: Response): AsyncIterable<Json>', () => {
  it('return AsyncIterable<Json>', async () => {
    const jsonArr = [
      { data: 'data1' }
    , { data: 'data2' }
    ]
    const res = new Response(jsonArr.map(x => JSON.stringify(x)).join('\n'))

    const result = toNDJSON(res)
    const proResult = await toArrayAsync(result)

    expect(result[Symbol.asyncIterator]).toBeTruthy()
    expect(proResult).toEqual(jsonArr)
  })
})
