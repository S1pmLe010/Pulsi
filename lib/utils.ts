export const money = (n: number) =>
  new Intl.NumberFormat("uz-UZ").format(n) + " UZS";

export const pct = (a: number, b: number) =>
  b <= 0 ? 0 : Math.min(100, Math.max(0, Math.round((a / b) * 100)));
