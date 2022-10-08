import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size:24px;
  font-weight: 700;
  margin: 15px 0;  
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 5px;
`;

// se le pasan parametros al useSelectMonedas
const useSelectMonedas = (label, opciones) => {

  // se define el state
  const [state, setState] = useState('')
  
  const SelectComponent = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={ e => setState(e.target.value)}
      >
        <option value="">----- Seleccione una moneda -----</option>

        {opciones.map(opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [ state, SelectComponent ];
}

export default useSelectMonedas