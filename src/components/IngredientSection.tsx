import React from 'react';
import type { Category, Ingredient } from '../types/';

interface IngredientSectionProps {
    categories: Category[];
    ingredients: Ingredient[];
}

const IngredientSection: React.FC<IngredientSectionProps> = ({ categories, ingredients }) => {
    return (
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full">
            <h2 className="text-lg font-semibold mb-4">Ingredients</h2>
            {categories.map(category => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default IngredientSection;