import { vi } from 'vitest'

vi.stubGlobal('useNuxtApp', () => ({
  $refreshAos: vi.fn(),
}))
