import React, { FC } from "react";

const IngredientSection: FC = () => {
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

      {/* Category Pill Placeholders */}
      <div className="flex flex-wrap gap-3">
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full"></span>
        Vegetables
        </span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Proteins
        </span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Grains
        </span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Sauces
        </span>
        <span className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Toppings
        </span>
      </div>
    </div>
    );
};

export default IngredientSection;