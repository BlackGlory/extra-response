import { assert } from '@blackglory/prelude'

export async function* toLines(res: Response): AsyncIterable<string> {
  assert(res.body, 'The response has no body')

  const reader = res.body
    .pipeThrough(new TextDecoderStream())
    .getReader()

  let remains = ''
  while (true) {
    const { value, done } = await reader.read()
    if (done) break

    remains += value

    let newlineIndex: number
    while (newlineIndex = remains.indexOf('\n'), newlineIndex >= 0) {
      yield remains.slice(0, newlineIndex)

      remains = remains.slice(newlineIndex + 1)
    }
  }
  if (remains) yield remains
}
