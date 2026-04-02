import React from 'react';
import IngredientCard from './IngredientCard';
import type { Category, Ingredient } from '../types/';

interface IngredientSectionProps {
    categories: Category[];
    ingredients: Ingredient[];
}

const IngredientSection: React.FC<IngredientSectionProps> = ({ categories, ingredients }) => {
    const ingredientsByCategory = categories.map(category => ({
        ...category,
        items: ingredients.filter(ingredient => ingredient.categoryId === category.id)
    }));

    return (
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            
            {ingredientsByCategory.map(category => (
                <div key={category.id} className="mb-6">
                    <h3 className="text-lg font-medium mb-3 text-gray-300">{category.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map(ingredient => (
                            <IngredientCard key={ingredient.id} ingredient={ingredient} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IngredientSection;