import useIngredientStore from '../store/useIngredientStore';

export function CenterBowl() {
    const { setBaseType, baseType, slots, removeIngredient, selectedBowl, clearSelection  } = useIngredientStore();

    const activeIngredients = Object.values(slots).filter(ingredient => ingredient !==null);

    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
            <div className="flex gap-3 mb-6 items-center">
              <button
                onClick={() => setBaseType(1)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  baseType === 1
                    ? 'bg-green-600 text-white'
                    : 'bg-green-500 text-white hover:bg-yellow-600'
                }`}
              >
                Salaatti
              </button>
            
              <button
                onClick={() => setBaseType(2)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  baseType === 2
                    ? 'bg-yellow-600 text-white'
                    : 'bg-yellow-500 text-white hover:bg-green-600'
                }`}
              >
                Rahka
              </button>
            
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to empty the bowl?')) {
                    clearSelection();
                  }
                }}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                title="Clear bowl"
              >
                🗑️
              </button>
            
              <button
                onClick={() => alert('Feature coming soon!')}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                title="Undo"
              >
                ↩️
              </button>

              <button
                onClick={() => alert('Feature coming soon!')}
                className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"
                title="Save bowl"
              >
                💾
              </button>
            </div>

            {/* Bowl */}
            <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative">

                {activeIngredients.length === 0 ? (
                    <div className="text-center">
                        <p className="text-gray-400">Empty Bowl</p>
                        <p className="text-sm text-gray-400 mt-2">
                            Base: {baseType === 1 ? "Salaatti" : "Rahka"}
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-2 justify-center p-4">
                        {activeIngredients.map((ingredient, idx) => (
                            <div 
                                key={ingredient.id}
                                className="relative group"
                            >
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm shadow inline-block">
                                {ingredient.name}
                                </span>
                            <button
                            onClick={() => removeIngredient(ingredient.id)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                x
                            </button>
                        </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-6 text-center">
                <p className="text-lg font-semibold">100 g / 1,99 €</p>
                <p className="text-md">
                    {selectedBowl ? selectedBowl.volume : 0} ml
                </p>
            </div>
        </div>
    );
}

export default CenterBowl;