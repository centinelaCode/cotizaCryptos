import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
  /* display: block; */
`;

// se le pasan parametros al useSelectMonedas
const useSelectMonedas = (label, opciones) => {
  
  const SelectComponent = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">----- Seleccione una moneda -----</option>

        {opciones.map(opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [ SelectComponent ];
}

export default useSelectMonedas