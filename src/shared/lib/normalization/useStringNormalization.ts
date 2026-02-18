export function useStringNormalization(value: unknown): string | undefined {
  if (typeof value === 'string') {
    return value.toLowerCase().trim()
  }
  return undefined
}
