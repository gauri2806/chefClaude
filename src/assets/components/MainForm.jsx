import OutlinedInput from "@mui/material/OutlinedInput"
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useState } from "react"
import RecipeCode from "./RecipeCode"
import IngredientsList from "./IngredientsList"
import {getRecipeFromMistral} from '../../ai.js'


export default function MainForm() {
    let [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prev) => { return [...prev, newIngredient] });
    }
    async function handleGetRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    return (
        <>
            <Box className="text-gray-700">
                <form noValidate autoComplete="off" action={addIngredient}>
                    <FormControl className="flex-row items-center justify-center w-full gap-8 m-5">
                        <OutlinedInput placeholder="e.g., oregano" className="h-12" name="ingredient" />
                        <Button type="submit" variant="contained">Add Ingredient</Button>
                    </FormControl>
                </form>
                {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} handleGetRecipe={handleGetRecipe} />: null}


                {recipe.length > 0 ? <RecipeCode recipe={recipe} /> : null}
            </Box>
        </>
    )
}