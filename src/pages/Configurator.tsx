import React, { useState } from 'react';
import CenterBowl  from '../components/CenterBowl';

interface Bowl {}
interface Category {}
interface Ingredient {}

export function Configurator() {

    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    return (
        <div className="container mx-auto px-4 py-8">
            <CenterBowl />
        </div>
    );
}