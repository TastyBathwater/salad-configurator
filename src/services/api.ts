async function getBowls() {
  try {
    const response = await fetch('https://fresse-api.onrender.com/api/bowls');
    if (!response.ok) throw new Error('Bowl not found');
    const bowls = await response.json();
    return bowls;
    } catch (error) {
    console.error('Bowl brocken </3');
    return[];
  }
}

async function getCategories() {
  try {
    const response = await fetch('https://fresse-api.onrender.com/api/categories');
    if (!response.ok) throw new Error('Categories not found');
    const bowls = await response.json();
    return bowls;
    } catch (error) {
    console.error('Categories brocken </3');
    return[];
  }
}

async function getIngredients() {
  try {
    const response = await fetch('https://fresse-api.onrender.com/api/Ingredients');
    if (!response.ok) throw new Error('Ingredients not found');
    const bowls = await response.json();
    return bowls;
    } catch (error) {
    console.error('Ingredient brocken </3');
    return[];
  }
}

export { getBowls, getCategories, getIngredients };