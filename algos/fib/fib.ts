export const fib = (q: number, memo: Record<number, number> = {}): number => {
  if (q in memo) return memo[q]
  if (q === 0) return 0
  if (q <= 2) return 1

  return (memo[q] = fib(q - 1, memo) + fib(q - 2, memo))
}
