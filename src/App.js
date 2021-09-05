import React, {Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  // Definiar la categoria y noticias
  const [categoria,guardarCategoria ] = useState('');
  const [noticias, guardarNoticias] = useState([])
  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = 'f5c7158292234566b1140169b9e53878';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])

  return (
      <Fragment>
        <Header
          titulo="Buscador de Noticias"
        />
        <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias
            noticias={noticias}
          />
        </div>
      </Fragment>
  );
}

export default App;
