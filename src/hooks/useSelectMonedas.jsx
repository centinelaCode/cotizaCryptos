import styled from '@emotion/styled';

const Label = styled.label`
  color: #FFF;
  /* display: block; */
`;

// se le pasan parametros al useSelectMonedas
const useSelectMonedas = (label) => {
  
  const SelectComponent = () => (
    <>
      <Label>{label}</Label>
      
    </>
  );

  return [ SelectComponent ];
}

export default useSelectMonedas