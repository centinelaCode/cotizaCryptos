import styled from '@emotion/styled';

const ContenedorResultado = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  
  display: flex;
  gap: 1rem;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const Texto = styled.p`
  font-size: 18px;
  span { 
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span { 
    font-weight: 700;
  }
`;

const ImageCrypto = styled.img`
  display: block;
  width: 120px;
  align-items: start;

`;


const Resultados = ({resultado}) => {

  const { PRICE, CHANGEPCT24HOUR, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE } = resultado;

  console.log(resultado)

  return (
    <ContenedorResultado>
      <ImageCrypto 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" 
      />
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span> </Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span> </Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span> </Texto>
        <Texto>Validación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span> </Texto>    
      </div>
    </ContenedorResultado>
  )
}

export default Resultados