import React from 'react';
import useIngredientStore from '../store/useIngredientStore';
import type { Ingredient } from '../types/';

interface IngredientCardProps {
    ingredient: Ingredient;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
    const { addIngredient } = useIngredientStore();

    const handleAddIngredient = () => {
        addIngredient(ingredient);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">{ingredient.name}</h3>
            {ingredient.price && (
                <p className="text-green-600 font-bold">{ingredient.price.toFixed(2)} €</p>
            )}
            {ingredient.diets && ingredient.diets.length > 0 && (
                <div className="flex gap-1 mt-2">
                    {ingredient.diets.includes('vegetarian') && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">🌱</span>
                    )}
                </div>
            )}
            <button
                onClick={handleAddIngredient}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
                Add to Bowl
            </button>
        </div>
    );
};

export default IngredientCard;