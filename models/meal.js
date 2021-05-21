class Meal{
    constructor(id, categoryIds, title, afforadability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree)
    {
        this.id = id,
        this.categoryIds= categoryIds,
        this.title = title,
        this.imageUrl = imageUrl,
        this.ingredients = ingredients,
        this.afforadability = afforadability,
        this.duration = duration,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isLactoseFree=isLactoseFree,
        this.isVegetarian=isVegetarian,
        this.complexity = complexity,
        this.steps = steps

    }
}

export default Meal;