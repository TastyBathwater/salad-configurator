export interface Ingredient {
  id: number;
  name: string;
  diets: ("G" | "L" | "V")[];
}

interface Props {
  ingredient: Ingredient;
}

const IngredientCard: React.FC<Props> = ({ ingredient }) => {
  return (
    <div className="p-4 border rounded shadow text-center">
      <div>{ingredient.name}</div>

      <div className="flex gap-2 mt-2 flex-wrap justify-center">
        {ingredient.diets.map((diet) => (
          <span key={diet} className="text-white text-xs font-bold px-2 py-1 rounded-full bg-gray-500">
            {diet}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientCard;