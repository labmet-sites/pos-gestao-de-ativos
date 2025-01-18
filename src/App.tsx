import styled from 'styled-components';
import Header from './components/Header/Header';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Body>
      <GlobalStyle />
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 100vw;
  background-color: #f4f4f4;
  position: relative;
  z-index: 1;
`;
