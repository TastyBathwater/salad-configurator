import React, { useState, useEffect } from 'react';
import CenterBowl  from '../components/CenterBowl';
import { getBowls } from '../services/api';
import { getCategories } from '../services/api';

interface Bowl {}
interface Category {}
interface Ingredient {}

interface Bowl {}
interface Category {}
interface Ingredient {}

export function Configurator() {

    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        async function fetchData() {
        const [fetchedBowls, fetchedCategories] = await Promise.all([
            getBowls(),
            getCategories(),
        ]);
            setBowls(fetchedBowls);
            setCategories(fetchedCategories);
        }
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <CenterBowl />
        </div>
    );
}