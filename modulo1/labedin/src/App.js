import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="modulo1/labedin/src/perfil.jpg"
          nome="Carolina Bratos" 
          descricao="Olá, sou desenvolvedora fullstack, a caminhada não foi fácil mas eu venci!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem
          nome="Grupo Boticário" 
          descricao="Transformando tecnologia em beleza!" 
        />
        
        <CardGrande 
          imagem
          nome="Bratos Brownie" 
          descricao="Levando doçura para todo lugar." 
        />
      </div>

    <div>
      <CardPequeno
        imagem="modulo1/labedin/src/email.png"  
        nome="E-mail"
        descricao="carolina.bratos@labenu.com"
        />

      <CardPequeno
        imagem="modulo1/labedin/src/endereco.png"  
        nome="Endereço"
        descricao="Rua das Andorinhas"
        />

    </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
         <ImagemButton 
           imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
           texto="Facebook" 
          />
      


        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
      />        
      </div>
    </div>
  );
}

export default App;
