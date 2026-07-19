// Next.js inlines this at build time, so it must stay a literal
// `process.env.NEXT_PUBLIC_API_URL` reference — dynamic lookups are not
// replaced. Set it in Vercel's project settings before building.
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";
