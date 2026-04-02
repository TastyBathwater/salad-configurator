import { useState, useEffect } from 'react';
import { getBowls, getCategories, getIngredients } from '../services/api';

import BowlSeletion from "../components/BowlSelection"
import BaseSelection from "../components/BaseSelection"
import SummaryBar from '../components/SummaryBar';
import IngredientSection from '../components/IngredientSection';
import CenterBowl from '../components/CenterBowl';
import useIngredientStore from '../store/useIngredientStore';
import type { Bowl, Category, Ingredient } from '../types/';



export function Configurator() {
    const [bowls, setBowls] = useState<Bowl[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const { baseType } = useIngredientStore();

    useEffect(() => {
        async function fetchData() {
        const [fetchedBowls, fetchedCategories, fetchedIngredients] = await Promise.all([
            getBowls(),
            getCategories(),
            getIngredients(),
        ]);
            setBowls(fetchedBowls);
            setCategories(fetchedCategories);
            setIngredients(fetchedIngredients);
        }
        fetchData();
    }, []);

    const filteredBowls = bowls.filter(bowl => bowl.base_type_id === baseType);
    
    const filteredCategories = categories.filter(category => category.base_type_id === baseType);


    return (
        <div className="container mx-auto px-4 py-8">
            <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch">
                    <BowlSeletion bowls={filteredBowls}/>
                    <CenterBowl />
                    <BaseSelection />
                </div>
                <IngredientSection 
                    categories={filteredCategories} 
                    ingredients={ingredients} 
                />
                <SummaryBar />
            </main>
        </div>
    );
}