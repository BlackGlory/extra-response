import { Json } from '@blackglory/types'

export function toJSON(res: Response): Promise<Json> {
  return res.json()
}
