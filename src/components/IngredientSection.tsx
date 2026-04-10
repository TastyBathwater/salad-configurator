import React, { useState } from "react";
import type { Category, Ingredient } from "../types";
import IngredientCard from "./IngredientCard";

type Props = {
  categories: Category[];
  ingredients: Ingredient[];
};

const IngredientSection: React.FC<Props> = ({ categories, ingredients }) => {

  const [activeCategory, setActiveCategory] = useState("all");
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">
      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search ingredients..."
          className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135]"
        />
      </div>

      {/* Category Buttons (all categories included) */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Ingredient Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="mt-4">
          <IngredientCard
            categories={categories}
            ingredients={ingredients}
          />
        </div>
      </div>
    </div>
  );
};

export default IngredientSection;