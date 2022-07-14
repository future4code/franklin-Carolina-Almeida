import axios from "axios";
import './App.css';

const App = () => {

  const getAllUsers = () => {
    axios.get(https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users {
      headers: {
        "Content-Type": application/json",
        "Authorization": "carolina-almeida-franklin"
      }
    })

    request.then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.message)
    })
  }
}