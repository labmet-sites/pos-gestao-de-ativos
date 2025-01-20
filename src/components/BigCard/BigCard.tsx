import { BigCardStyles } from './BigCardStyles';

export default function BigCard() {
  return (
    <BigCardStyles>
      <div className="left-card">Jorge</div>
      <div className="right-card">
        <h5 className="cart-title">Categoria:</h5>
        <h6 className="cart-response">Especialização Res 07/01 CNE/CES</h6>
        <h5 className="cart-title">Modalidade:</h5>
        <h6 className="cart-response">EAD</h6>
        <h5 className="cart-title">Caga Horária:</h5>
        <h6 className="cart-response">360 horas</h6>
        <h5 className="cart-title">Número de Vagas:</h5>
        <h6 className="cart-response">100 vagas</h6>
        <h5 className="cart-title">Perído de Realização:</h5>
        <h6 className="cart-response">Junho/2024 até Junho/2025</h6>
        <h5 className="cart-title">Público:</h5>
        <h6 className="cart-response">
          Serão admitidos alunos advindos dos cursos de graduação em qualquer
          área com formação pré-existente de Graduação, reconhecida pelo MEC em
          Bacharel, Tecnólogos e Licenciatura, na busca por conhecimento no
          campo da gestão de ativos.
        </h6>
      </div>
    </BigCardStyles>
  );
}
