export const goToLogin = (history) => {
    history.push("/login")
}

export const goToAddRecipes = (history) => {
    history.push("/add")
}

export const goToRecipeDetail = (history, id) => {
    history.push(`/details/${id}`)
}

export const goToRecipeList = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/sign-up")
}