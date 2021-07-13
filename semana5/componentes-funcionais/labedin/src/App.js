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
          imagem="https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.18169-9/27067856_1306864306080346_366953429971340331_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=mVdqbVcYb0IAX9deF2S&_nc_ht=scontent.fbsb3-1.fna&oh=495d1dbe63e7df3e82577bada5d974cb&oe=60F20471" 
          nome="Leandro Wilker Paulino Sousa" 
          descricao="Eu sou o Leandro Wilker sou aluno Web Full Stack da Labenu, tenho 27 anos, gosto de dança de salão e comida!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className= "page-section-container">
          <h2>Informações</h2>
          <CardPequeno
            endereco="Narnia - Rua CondeBolado - Castelo 33"
            email="principeboladão@narniamail.com"
          />

        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
