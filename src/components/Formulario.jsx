import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import useSelectMonedas from '../hooks/useSelectMonedas';
import Error from './Error'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9797FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  margin-bottom: 30px;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`;


const Formulario = ({setMonedas}) => {

  // State para las criptos que obtenemos de la API
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false)

  // custom Hook
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
  const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  // usamos useEffect para consumir la api: https://min-api.cryptocompare.com/
  useEffect(() => {

    const consultaAPI = async() => {

      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      // consumimos con fetch
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();      
      // console.log(resultado.Data);

      const arrayCriptos = resultado.Data.map( cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }        
        
        return objeto;
      })

      setCriptos(arrayCriptos)
    }
    consultaAPI();

  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if([moneda, criptomoneda].includes('')) {
      setError(true);
      return
    }

    // si pasa la validación quitamos el Error
    setError(false);

    setMonedas({
      moneda,
      criptomoneda,
    })
  }

  
  return (
    <>
      {error && <Error>Debes seleccionar una Moneda y una Criptomoneda</Error>}

      <form
        onSubmit={handleSubmit}
      >
        <SelectMonedas />
        <SelectCriptomoneda />
        
        <InputSubmit 
          type="submit" value="Cotizar" 
        />
      </form>
    </>
  )
}

export default Formulario