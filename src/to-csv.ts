import { parse } from 'papaparse'

export async function toCSV(res: Response): Promise<Array<{ [name: string]: string }>> {
  const text = await res.text()
  const result = parse(text, {
    header: true
  , skipEmptyLines: 'greedy'
  })
  return result.data as any[]
}
