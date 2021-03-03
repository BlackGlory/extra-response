import { fromCode } from '@blackglory/http-status'
export { HTTPError } from '@blackglory/http-status'

/**
 * @throws {HTTPError}
 */
export async function ok(res: Response): Promise<Response> {
  if (!res.ok) {
    const text = await res.text()
    throw fromCode(res.status, text)
  }
  return res
}
