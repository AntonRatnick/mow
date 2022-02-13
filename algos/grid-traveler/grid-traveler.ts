export const gridTraveler = (
  h: number,
  w: number,
  memo: Record<string, number> = {},
): number => {
  const key = `${h}/${w}`
  if (key in memo) return memo[key]
  if (h === 1 && w === 1) return 1
  if (h === 0 || w === 0) return 0

  return (memo[key] =
    gridTraveler(h - 1, w, memo) + gridTraveler(h, w - 1, memo))
}
