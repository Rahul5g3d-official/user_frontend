import type { Intent, Size } from "../primitives";

export type ComponentRecipe = { intent: Intent; size: Size };
export const defaultRecipe: ComponentRecipe = { intent: "primary", size: "md" };
