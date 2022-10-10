import { useState, useEffect } from 'react'
import styled from '@emotion/styled';

import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario';
import Resultados from './components/Resultados';
import Spinner from './components/Spinner';


// crean los styled components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2F2;
    display: block;
    margin: 10px auto 0 auto;  
  }
`;

function App() {

  // state para poder obtener de formulario la moneda y la cripto que selecciono
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  // Effect para hacer otra llamada a la API para cotizarar el valor
  useEffect(() => {
    // prevenimo la ejecucion cuando aun no tenemos datos
    if(Object.keys(monedas).length > 0) {

      const {moneda, criptomoneda} = monedas;

      const cotizarCripto = async () => {
        // empieza a cotizar y mostramos el mensaje Cargando
        setCargando(true)
        setResultado({})

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        console.log(url)

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);

        // finaliza la llamada  ala API quitamos el Cargando...        
        setCargando(false);
      }
      cotizarCripto();
    }
  }, [monedas])


  return (
    <Container>
      <Imagen 
        src={ImagenCripto}
        alt="imagen criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />

        { cargando && <Spinner /> }

        {/* Validamos que ya tengamos datos de la llamada a la API (propiedad PRICE) */}
        { resultado .PRICE && <Resultados  resultado={resultado} /> }      
      </div>

    </Container>
   )
}

export default App
