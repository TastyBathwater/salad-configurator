import type { Ingredient } from "../types";

export const calculateTotalWeight = (ingredients: Ingredient[]) => {
  return ingredients.reduce((total, ingredient) => {
    return total + (ingredient.weight_grams ?? 0);
  }, 0);
};