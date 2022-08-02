import React from "react";
import {Switch, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({setRightButtonText}) => {
    return(
            <Switch>    
                <Route exact path="/add">
                    <AddRecipesPage/>
                </Route> 

                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path="/details/:id">
                    <RecipeDetailPage/>
                </Route>

                <Route exact path="/">
                    <RecipeListPage/>
                </Route>

                <Route exact path="/sign-up">
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>   

                <Route>
                    <ErrorPage/>
                </Route> 
            </Switch>
    )
}    

export default Router