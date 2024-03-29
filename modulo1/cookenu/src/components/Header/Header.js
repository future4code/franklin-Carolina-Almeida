import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import {goToRecipeList, goToLogin} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"


const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
  

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToRecipeList(history)} color="inherit">Cookenu</Button>
          <Button onClick={(rightButtonAction) => goToLogin(history)} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header