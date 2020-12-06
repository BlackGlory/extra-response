import { fromCode } from '@blackglory/http-status'
export { HTTPError } from '@blackglory/http-status'

export function ok(res: Response): Response {
  if (!res.ok) throw fromCode(res.status)
  return res
}
