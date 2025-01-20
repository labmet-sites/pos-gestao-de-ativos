import { HeaderStyles } from './HeaderStyles';
import ufcg from '../../assets/ufcg-logo.png';

export default function Header() {
  return (
    <HeaderStyles>
      <h1 className="ufcg-title">Universidade Federal de Campina Grande</h1>
      <h2 className="sub">Pró Reitoria de Pós-graduação e Pesquisa</h2>
      <img src={ufcg} className="ufcg-logo" />
    </HeaderStyles>
  );
}
