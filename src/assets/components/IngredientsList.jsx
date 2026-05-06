import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function IngredientsList(props){
    
    return (
        <>
            <Stack className="items-center m-5">
                    <Typography variant="h5" className="m-4 ">Ingredients in hand </Typography>
                    <Box>
                        {props.ingredients.map(
                            (ing) => {
                                return <Typography key={ing} variant="body1">{ing}</Typography>
                            }
                        )}
                    </Box>

                    {props.ingredients.length > 3 ? <Box className="flex w-xl m-10 bg-blue-100 p-4 h-24 gap-20 items-center">
                        <Box className="flex flex-col  gap-2 align-top">
                            <Typography variant="h6">Ready for a recipe?</Typography>
                            <Typography variant="body-2" className="">Generate a recipe from your list of ingredients</Typography>
                        </Box>
                        <Button variant="contained" className="h-8" onClick={props.handleGetRecipe}>Get a recipe</Button>
                    </Box> : null}
                </Stack> 
        </>
    )
}