import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipeDetailPage = () => {
    useProtectedPage()
    return (
        <sdiv>
            <h1>RecipeDetailPage</h1>
        </sdiv>
    )
}

export default RecipeDetailPage