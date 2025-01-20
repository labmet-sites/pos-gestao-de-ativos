import { BigCardStyles } from './BigCardStyles';
import pdfGestao from '../../assets/PPC_GestaoDeAtivos_2024.pdf';

export default function BigCard() {
  return (
    <BigCardStyles>
      <div className="left-card">
        <h2>{`Projeto de Pós-Graduação`}</h2>
        <h3>{`LATO SENSU`}</h3>
        <h4>{`Unidade Acadêmica de Engenharia Mecânica (CCT/UFCG)`}</h4>
        <div className="pos-title">
          <h5>{'Curso:'}</h5>
          <h6>
            {`Gestão de Ativos`} <br /> {`para o setor Elétrico`}
          </h6>
        </div>
        <a href={pdfGestao} target="_blank" className="more-button">
          {'Mais Informações'}
        </a>
      </div>
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
