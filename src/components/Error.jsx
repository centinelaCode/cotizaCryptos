import styled from '@emotion/styled';

const Text = styled.div`
font-family: 'Lato', sans-serif;
text-align: center;
background-color: #dc2626;
color: #FFF;
padding: 10px;
font-size:16px;
text-transform: uppercase;
border-radius: 5px;
font-weight: 700;
`;


const Error = ({children}) => {
  return (
    <Text>
      {children}
    </Text>
  )
}

export default Error