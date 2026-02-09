## IMPORTANT! The page should have a hungarian version as well as an English version. The code and the app needs to be simple secure and wll maintanable. We should proceed in small simple steps.

### General

- Always use TypeScript strict types
- Prefer functional components + hooks
- Avoid any regarding TypeScript
- Avoid large components; extract reusable parts
- Use semantic HTML elements
- Use absolute imports and consistent module boundaries

### Next.js Architecture

- Prefer Server Components by default
- Do not use "use client" on page and layout files
- Mark Client Components explicitly with "use client" only when needed
- Keep data fetching on the server when possible
- Prefer Server Actions for mutations where appropriate
- Use Route Handlers only when:
  - integrating with third parties (webhooks)
  - you need a REST endpoint
  - streaming or special headers are required

### Styling

- Prefer Tailwind utility classes
- Avoid deeply nested UI
- Maintain consistent spacing and typography
- Support light / dark mode where applicable

### Accessibility

- Accessibility-first approach
- Always include:
- Proper labels
- Keyboard navigation support
- Focus states
- Readable font sizes
- Never rely on color alone for meaning

### Security & Privacy (GDPR)

- Assume GDPR compliance by default
- Collect only necessary personal data
- Prefer EU data residency if required by the project
- Avoid unnecessary tracking
- Add clear disclaimers where needed
- Never expose secrets to the client
- Validate and sanitize inputs on the server
- Use CSRF-safe patterns (Server Actions or proper protections for forms)

### Error Handling

- Graceful error states
- User-friendly error messages
- Use error.tsx and not-found.tsx where appropriate
- Log errors to Sentry
- Never expose sensitive details

### Performance

- Use next/image for images
- Avoid unnecessary client-side JS
- Prefer dynamic import for heavy client-only widgets
- Keep bundle size small
- Use streaming and suspense where beneficial

### What NOT to Do

- Do not invent backend APIs
- Do not introduce new libraries unless explicitly requested
- Do not over-engineer MVP features
- Do not bypass TypeScript errors
- Do not store secrets in client code
- Do not fetch sensitive data in Client Components unless necessary

### Output Style

- Prefer clear code over commentary
- Be concise when explaining
- When unsure, ask before guessing
- Provide copy-paste ready examples
