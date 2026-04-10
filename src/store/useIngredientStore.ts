import { create } from 'zustand';
import type { Ingredient, Bowl } from '../types';

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

export const useIngredientStore = create<IngredientStore>((set, get) => ({
  slots: {},
  baseType: 1,
  selectedBowl: null,

  setBaseType: (id) => set({ baseType: id }),
  setBowl: (bowl) => set({ selectedBowl: bowl }),
  clearSelection: () => set({ slots: {}, selectedBowl: null, baseType: 1 }),

  addIngredient: (item) => {
    set((state) => {
    
      if (item.categoryId === 6) {
        console.log('Adding base ingredient:', item.name);
        return {
          slots: { ...state.slots, "base": item }
        };
      }
      
      
      const slotCount = state.selectedBowl?.slot_count || 0;
      
      if (slotCount === 0) {
        console.warn('No bowl selected or bowl has no slots');
        return state;
      }
      
      const newSlots = { ...state.slots };
      
      for (let i = 1; i <= slotCount; i++) {
        const slotKey = `slot-${i}`;
        if (!state.slots[slotKey]) {
          newSlots[slotKey] = item;
          console.log(`Added ${item.name} to ${slotKey}`);
          return { slots: newSlots };
        }
      }
      
      console.warn('No empty slots available');
      return state;
    });
  },

  removeIngredient: (id) => {
    set((state) => {
      const newSlots = { ...state.slots };
      
      const slotKeyToRemove = Object.keys(newSlots).find(
        (key) => newSlots[key]?.id === id
      );
      
      if (slotKeyToRemove) {
        const removedIngredient = newSlots[slotKeyToRemove];
        newSlots[slotKeyToRemove] = null;
        console.log(`Removed ${removedIngredient?.name} from ${slotKeyToRemove}`);
      } else {
        console.warn(`Ingredient with id ${id} not found`);
        return state;
      }
      
      return { slots: newSlots };
    });
  },
}));

export default useIngredientStore;