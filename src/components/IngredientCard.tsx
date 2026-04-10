import type { Category, Ingredient } from "../types";
import useIngredientStore from "../store/useIngredientStore";

type Props = {
  categories: Category[];
  ingredients: Ingredient[];
  searchQuery?: string;
};

const IngredientCard: React.FC<Props> = ({ categories, ingredients, searchQuery = "" }) => {
  const { addIngredient } = useIngredientStore();

  const handleAddIngredient = (ingredient: Ingredient) => {
    addIngredient(ingredient);
    console.log("Added ingredient:", ingredient.name);
  };
  const getFilteredIngredients = (ingredientsList: Ingredient[]) => {
    if (!searchQuery) return ingredientsList;
    return ingredientsList.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 text-black font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      {categories.map((category) => {
        const categoryIngredients = ingredients.filter(
          (ingredient) => ingredient.categoryId === category.id
        );
        const filteredIngredients = getFilteredIngredients(categoryIngredients);

        if (filteredIngredients.length === 0) return null;

        return (
          <div key={category.id} className="mb-4">
            <h3 className="font-bold text-lg mb-2">{category.name}</h3>

            <div className="grid grid-cols-2 gap-4">
              {filteredIngredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  onClick={() => handleAddIngredient(ingredient)}
                  className="p-4 border rounded shadow text-center cursor-pointer hover:shadow-lg transition-shadow hover:bg-gray-50"
                >
                  <div className="font-semibold">
                    {highlightText(ingredient.name, searchQuery)}
                  </div>

                  {ingredient.price && (
                    <div className="text-green-600 font-bold mt-1">
                      {ingredient.price.toFixed(2)} €
                    </div>
                  )}

                  <div className="flex gap-2 mt-2 flex-wrap justify-center">
                    {ingredient.diets?.map((diet) => (
                      <span
                        key={diet}
                        className="text-white text-xs font-bold px-2 py-1 rounded-full bg-gray-500"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddIngredient(ingredient);
                    }}
                    className="mt-3 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Add to Bowl
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IngredientCard;