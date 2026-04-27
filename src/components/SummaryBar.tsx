import React from "react";
import { Link } from "react-router-dom";
import useIngredientStore from "../store/useIngredientStore";
import { calculateTotalWeight } from "../utils/calculations";

const SummaryBar: React.FC = () => {
    const { slots, removeIngredient } = useIngredientStore();
    const activeIngredients = Object.values(slots).filter(
        (ingredient): ingredient is import("../types").Ingredient => ingredient !== null
    );
    const totalWeight = calculateTotalWeight(activeIngredients);
    return (
         <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">
         <div className="flex-1">
                <h2 className="mb-2 font-semibold">
                    Selected ingredients: ({activeIngredients.length})
                </h2>
                <div className="bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
                    {activeIngredients.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {activeIngredients.map((ingredient) => (
                                <div
                                    key={ingredient.id}
                                    className="flex items-center gap-1 bg-gray-600 rounded-full pl-3 pr-1 py-1 hover:bg-gray-500 transition-colors"
                                >
                                    <span className="text-sm">{ingredient.name}</span>
                                    <button
                                        onClick={() => removeIngredient(ingredient.id)}
                                        className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600 transition-colors"
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center">No ingredients selected</p>
                    )}
                </div>
            </div>

            <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full shadow-md text-center">
                {activeIngredients.length} {activeIngredients.length === 1 ? "item" : "items"}
            </div>

            <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
                {totalWeight} g
            </div>

            <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
                Price:
            </div>

            <Link to="/print">
                <div className="bg-blue-500 text-white font-black text-2xl py-3 px-6 rounded-full mb-2 shadow-md text-center cursor-pointer hover:bg-blue-600 transition-colors">
                    Print
                </div>
            </Link>
        </div>
    );
};

export default SummaryBar;