import type { Category, Ingredient } from "../types";

type Props = {
  categories: Category[];
  ingredients: Ingredient[];
};

const IngredientCard: React.FC<Props> = ({ categories, ingredients }) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className="mb-4">
          <h3 className="font-bold text-lg mb-2">{category.name}</h3>

          <div className="grid grid-cols-2 gap-4">
            {ingredients
              .filter((ingredient) => ingredient.categoryId === category.id)
              .map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="p-4 border rounded shadow text-center"
                >
                  <div>{ingredient.name}</div>

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
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientCard;