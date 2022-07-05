import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  
    const Post = () => {
      
      const [state, setState] = useState({

        post: [
          {
            nomeUsuario: "paulinha"
            fotoUsuario="https://picsum.photos/50/50"
            fotoPost="https://picsum.photos/200/150"
          },
          {
            nomeUsuario: "carolina"
            fotoUsuario="https://picsum.photos/50/50"
            fotoPost="https://picsum.photos/200/150"
          },
          {
            nomeUsuario: "leticia"
            fotoUsuario="https://picsum.photos/50/50"
            fotoPost="https://picsum.photos/200/150"
          }
        ]
      });

      const listaDeComponentes = state.post.map((post) => {
        return (
          <p>
            {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}
          </p>
        );
      });
        
      return(
          <MainContainer>
            {listaDeComponentes}
          </MainContainer>
        );
    };

};


export default App;
