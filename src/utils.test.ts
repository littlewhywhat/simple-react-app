import { describe, expect, it } from 'vitest'
import { increment } from './utils'

describe('increment', () => {
  it('works', () => {
    expect(increment(1)).toBe(2)
  })
})
