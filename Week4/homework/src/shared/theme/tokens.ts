export type AppTheme = {
  color: {
    primary: string
    primaryForeground: string
    accent: string
    accentForeground: string
    ring: string
  }
}

export const theme: AppTheme = {
  color: {
    primary: "oklch(0.58 0.2 255)",
    primaryForeground: "oklch(0.985 0 0)",
    accent: "oklch(0.96 0.03 255)",
    accentForeground: "oklch(0.22 0.02 255)",
    ring: "oklch(0.64 0.16 255)",
  },
}
