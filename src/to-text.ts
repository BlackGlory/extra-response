export function toText(res: Response): Promise<string> {
  return res.text()
}
