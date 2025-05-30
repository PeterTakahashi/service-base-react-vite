// 1000 -> 10.00 usd
export const toUsdFloat = (value: number): number => {
  if (value === 0) return 0;
  if (value < 0) throw new Error("Value must be a positive number");

  const usdValue = value / 100;
  return parseFloat(usdValue.toFixed(2));
};
