# Context: CMTecnologia Elite V2 Reconstruction

## Decisions (Locked)
- **Framework:** Next.js (App Router) is mandatory for SEO and performance.
- **Language:** TypeScript for structural stability.
- **Form Handling:** No more `alert()`. Use `Zod` + `Sonner/Toasts`.
- **i18n:** Roteamento real (/pt, /en) via `next-intl`.
- **Deployment:** Vercel.

## Agent Discretion (Freedom Areas)
- **UI Components:** PixelPerfect has freedom to choose between building from scratch with Tailwind or using a base like Radix/Shadcn UI for speed/accessibility, as long as it looks "Elite".
- **Animation Strategy:** PixelPerfect decides between `framer-motion` triggers (scroll vs viewport).

## Deferred Ideas (Out of Scope)
- **CMS Integration:** For now, content will be static/JSON based to prioritize performance and launch speed.
- **Complex Backend:** We will use Next.js Route Handlers for the contact form initially.
