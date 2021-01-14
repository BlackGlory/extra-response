import { parse } from 'papaparse'

export async function toCSV(res: Response): Promise<Array<{ [name: string]: string }>> {
  const text = await res.text()
  const result = parse(text, { header: true })
  return result.data as any[]
}
