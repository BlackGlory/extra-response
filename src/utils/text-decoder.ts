import { TextDecoder as NodeTextDecoder } from 'util'

export const TextDecoder = NodeTextDecoder as typeof globalThis.TextDecoder
