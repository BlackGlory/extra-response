export function toJSON<T>(res: Response): Promise<T> {
  return res.json()
}
