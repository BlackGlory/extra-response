export async function toText(res: Response, charset?: string): Promise<string> {
  if (charset) {
    const buffer = await res.arrayBuffer()
    return new TextDecoder(charset).decode(buffer)
  } else {
    return await res.text()
  }
}
