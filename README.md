# Admin Frontend

React + TypeScript foundation with a centralized design system.

## Architecture rules

- `design-system/tokens`: canonical colors, typography, spacing, sizing, and motion.
- `design-system/theme`: semantic light and dark theme values.
- `content`: user-facing copy, labels, messages, navigation, and metadata.
- `constants`: stable application, API, route, storage, validation, and feature constants.
- `components/ui`: reusable primitives that consume design tokens.
- `features`: feature-owned UI, hooks, schemas, types, and services.
- `types`: shared domain, API, and UI contracts.

## Consistency rules

1. Do not hardcode colors, font sizes, spacing, or radii in components.
2. Use semantic theme tokens for surfaces, text, borders, and accents.
3. Use typography tokens for every text size and weight.
4. Keep reusable labels and messages in `src/content`.
5. Keep API paths and application settings in `src/constants`.
6. Define feature-specific types beside the feature; share only genuinely shared types.
7. Use CSS variables generated from the token system when styling components.
8. Keep accessibility states, loading labels, and error messages consistent.

Run `npm run dev` to start development.
