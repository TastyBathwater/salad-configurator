import { create } from 'zustand';
import type { Ingredient, Bowl } from '../types/';


interface IngredientStore {
   
    slots: Record<string, Ingredient | null>;
   
    baseType: number;
    
    selectedBowl: Bowl | null;
    
    setBaseType: (id: number) => void;
    setBowl: (bowl: Bowl) => void;
    clearSelection: () => void;
    
    addIngredient: (item: Ingredient) => void;
    removeIngredient: (id: number) => void;
}

const useIngredientStore = create<IngredientStore>((set) => ({
   
    slots: {},
    baseType: 1,
    selectedBowl: null,
    
    setBaseType: (id) => set({ baseType: id }),
    
    setBowl: (bowl) => set({ selectedBowl: bowl }),
    
    clearSelection: () => set({ 
        slots: {}, 
        baseType: 1, 
        selectedBowl: null 
    }),
    
    addIngredient: (item) => {
        console.log('Add ingredient:', item);
        set((state) => ({ slots: state.slots }));
    },
    
    removeIngredient: (id) => {
        console.log('Remove ingredient:', id);
        set((state) => ({ slots: state.slots }));
    },
}));

export default useIngredientStore;