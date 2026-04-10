import React, { useState } from "react";
import type { Category, Ingredient } from "../types";
import IngredientCard from "./IngredientCard";

type Props = {
  categories: Category[];
  ingredients: Ingredient[];
};

const IngredientSection: React.FC<Props> = ({ categories, ingredients }) => {
  const [searchQuery,setSearchQuery] = useState("");
  const filteredIngredients = ingredients.filter((ingredient) =>
  ingredient.name.toLowerCase().includes(searchQuery.yoLowerCase()));
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const filteredIngredients =
  activeCategory === "all"
    ? ingredients
    : ingredients.filter(
        (ingredient) => ingredient.categoryId === activeCategory
      );
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135]"
        />
        {/* Show clear button if search has text */}
        {searchQuery && (
          <button onClick={() => setSearchQuery("")}
          className ="ml-2 text-gray-400 hover:text-white"
          >
            ✕ Clear
          </button>
        )}
      </div>
       
       {/* Show results count */}
      <div className="text-sm text-gray-400 mb-3">
        {filteredIngredients.length} ingredient(s) found
      </div>

      {/* Category Buttons (all categories included) */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full"
          >
            {category.name}
          </button>
        ))}
      </div>

       {/* Ingredient Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredIngredients.length > 0 ? (
          filteredIngredients.map((ingredient) => (
            <div key={ingredient.id} className="mt-4">
              <IngredientCard
                ingredient={ingredient}
                categories={categories}
                ingredients={filteredIngredients}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-400">
            No ingredients found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientSection;