import BigCard from '../components/BigCard/BigCard';
import Header from '../components/Header/Header';
import { HomeStyles } from './HomeStyles';
import Title from '../components/Title/Title';
import lattesLogo from '../assets/lattes-logo.svg';
import ufcgLogo from '../assets/ufcg-logo.png';

export default function Home() {
  const today = new Date();

  const startDate = new Date('2025-02-27T00:00:00');
  const endDate = new Date('2025-03-09T23:59:59');

  const isAvailable = today >= startDate && today <= endDate;

  return (
    <HomeStyles>
      <Header />
      <BigCard />
      <div className="small-cards">
        <div className="small-card">
          <h4 className="small-card-title">Instituicão</h4>
          <h3 className="small-card-name">
            Universidade Federal de Campina Grande
          </h3>
          <div className="small-card-info">
            <h3 className="small-info-left">{`Endereço:`}</h3>
            <h3 className="small-info-right">
              Rua Aprígio Veloso, 882 <br />
              Bairro Universitário <br />
              CEP: 58429-900 <br />
              Campina Grande - PB
            </h3>
          </div>
          <div className="small-card-info">
            <h3 className="small-info-left">
              Telefone: <strong>{'(83) 2101-1000'}</strong>
            </h3>
          </div>
        </div>
        <div className="small-card">
          <h4 className="small-card-title">Secretaria do Curso</h4>
          <div className="small-card-info">
            <h3 className="small-info-left">
              Telefone: <strong>{`(83) 99873-5103`}</strong>
            </h3>
          </div>
          <div className="small-card-info">
            <h3 className="small-info-left">Emails:</h3>
            <h3 className="small-info-right">
              {`jader.morais@professor.ufcg.edu.br`}
              <br />
              {`gestaodeativos@ufcg.edu.br`}
            </h3>
          </div>
        </div>
      </div>
      <Title text={`Concepção do Curso`} />
      <div className="about-text">
        {`A`} <strong>{`gestão de ativos`}</strong>{' '}
        {`tem como foco principal, buscar extrair o máximo valor de ativos da empresa, a partir de ações estratégicas que 
        levem em consideração, o mapeamento, o planejamento, as oportunidades e riscos, o balanceamento de custos, a performance dos ativos, dentre outros fatores, 
        observando-se também os avanços tecnológicos atualmente em curso e os aspectos legais e requisitos mínimos, a fim de garantir a conformidade e a segurança dos processos. 
         `}
      </div>
      <div className="about-text">
        {`Com um conjunto de disciplinas ajustadas às necessidades do mercado e professores com experiência na área, o Curso de Gestão de Ativos promove uma formação técnica 
        sólida em suas múltiplas dimensões, mediante o desenvolvimento das competências necessárias ao exercício de atividades que necessitem de gestão de ativos tangíveis 
        (prédios, máquinas, estoques etc). Tudo em sintonia com a dinâmica da sociedade e do mercado de trabalho, nas suas demandas sociais, econômicas, políticas, culturais, 
        ambientais, científico-tecnológicas e educacionais. `}
      </div>
      <Title text={`Professores`} />
      <ul className="professors">
        <li className="professor-li">
          <h1 className="professor-name">{`Herbert Ricardo Garcia Viana`}</h1>
          <a
            href={`http://lattes.cnpq.br/4617469809005234`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Juscelino de Farias Maribondo`}</h1>
          <a
            href={`http://lattes.cnpq.br/5177641988447089`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Josenildo Brito de Oliveira`}</h1>
          <a
            href={`http://lattes.cnpq.br/4767705355607282`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Vanessa Batista Schramm`}</h1>
          <a
            href={`http://lattes.cnpq.br/7505499644517781`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Edmar Candeia Gurjão`}</h1>
          <a
            href={`http://lattes.cnpq.br/9200464668550566`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Iony Patriota de Siqueira`}</h1>
          <a
            href={`http://lattes.cnpq.br/6395538047388012`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Fernando Schramm`}</h1>
          <a
            href={`http://lattes.cnpq.br/3122316792974996`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Kliver Lamarthine Alves Confessor`}</h1>
          <a
            href={`http://lattes.cnpq.br/6761541646953979`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
        <li className="professor-li">
          <h1 className="professor-name">{`Rennan Pereira de Gusmão`}</h1>
          <a
            href={`http://lattes.cnpq.br/1660302572995238`}
            className="lattes-link"
            target="_blank"
          >
            <img className="lattes-img" src={lattesLogo}></img>
          </a>
        </li>
      </ul>
      <Title text={`Estrutura Curricular`} />
      <div className="div-1 disciplines">
        <h1 className="level-title">{`1. Núcleo Básico`}</h1>
        <h2 className="discipline">{`1.1 Metodologia da Pesquisa Científica (15h) `}</h2>
        <h2 className="discipline">{`1.2 Estatística Básica (30h)`}</h2>
        <h2 className="discipline">{`1.3 Fundamentos da Gestão de Ativos (30h)`}</h2>
        <h2 className="discipline">{`1.4 Normas e Padrões (15h)`}</h2>
        <h2 className="discipline">{`1.5 Introdução à Otimização: Programação Linear (30h)`}</h2>
        <h2 className="discipline">{`1.6 Introdução a Sistemas Inteligentes (30h)`}</h2>
      </div>
      <div className=" div-2 disciplines">
        <h1 className="level-title">{`2. Núcleo Profissional`}</h1>
        <h2 className="discipline">{`2.1 Gestão da Manutenção (30h)`}</h2>
        <h2 className="discipline">{`2.2 Gestão de Projetos (30h)`}</h2>
        <h2 className="discipline">{`2.3 Riscos e Investimentos na Gestão de Ativos (30h)`}</h2>
        <h2 className="discipline">{`2.4 Gestão de Ativos Informacionais e Inovação (30h)`}</h2>
        <h2 className="discipline">{`2.5 Custos Industriais e Análise de Investimentos em Ativos Físicos(30h)`}</h2>
      </div>
      <div className="div-3 disciplines">
        <h1 className="level-title">{`3. Núcleo Prático`}</h1>
        <h2 className="discipline">{`3.1 Sistemas Inteligentes para Gestão de Ativos (60h)`}</h2>
        <h2 className="discipline">{`3.2 TCC`}</h2>
      </div>
      <Title text={`Investimento`} />
      <ul className="professors">
        <li className="professor-li">
          <h1 className=" under-text professor-name ">{`18 parcelas de R$600,00 (Seiscentos Reais)`}</h1>
        </li>
      </ul>
      <Title text={`Inscrições`} />
      <ul className="professors">
        <li className="professor-li">
          <h1 className="under-text professor-name">{`27 de fevereiro até 09 de Março`}</h1>
        </li>
      </ul>
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdTt1HTPc3K6Jzhk27oGsjm2ZtuZ0YBZ00Q_VGxzxri5jk8sQ/viewform?usp=sharing"
        className={`form-subscribe ${isAvailable ? '' : 'disabled'}`}
        style={{
          pointerEvents: isAvailable ? 'auto' : 'none',
          opacity: isAvailable ? 1 : 0.5,
        }}
      >
        {`Formulário de Inscrição`}
      </a>
      <footer>
        <img src={ufcgLogo} />
        <p>Universidade Federal de Campina grande</p>
      </footer>
    </HomeStyles>
  );
}
