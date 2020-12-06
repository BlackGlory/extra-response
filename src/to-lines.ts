export async function* toLines(res: Response): AsyncIterable<string> {
  const reader = res.body!
    .pipeThrough(new TextDecoderStream())
    .getReader()

  let buffer = ''
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    let remains = value!
    while (remains.includes('\n')) {
      const newlinePos = remains.indexOf('\n')
      yield remains.slice(0, newlinePos)
      remains = remains.slice(newlinePos + 1)
    }
    buffer += remains
  }
  if (buffer) yield buffer
}
