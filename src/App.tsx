import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <Body>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
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
