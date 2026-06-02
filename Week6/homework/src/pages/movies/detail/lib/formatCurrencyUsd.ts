export function formatCurrencyUsd(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return '-'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

