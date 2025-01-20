import BigCard from '../components/BigCard/BigCard';
import Header from '../components/Header/Header';
import { HomeStyles } from './HomeStyles';
import Title from '../components/Title/Title';
import lattesLogo from '../assets/lattes-logo.svg';

export default function Home() {
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
          <h4 className="small-card-title">Coordenador do Curso</h4>
          <h3 className="small-card-name">{`Prof. Dr. Jader Morais Borges`}</h3>
          <div className="small-card-info">
            <h3 className="small-info-left">
              Unidade: <strong>{`UAEM/CCT/UFCG`}</strong>
            </h3>
          </div>
          <div className="small-card-info">
            <h3 className="small-info-left">
              Telefone: <strong>{`(83) 98874-4407`}</strong>
            </h3>
          </div>
          <div className="small-card-info">
            <h3 className="small-info-left">
              Email: <strong>{`jader.morais@professor.ufcg.edu.br`}</strong>
            </h3>
          </div>
        </div>
      </div>
      <Title text={`Concepção do Curso`} />
      <div className="about-text">
        {`A formação de profissionais Especialistas em 
        Gestão de Ativos do Setor Elétrico, amplia a possibilidade de, 
        diante de desafios em um mercado em constante evolução, que exige 
        muita eficiência em sua gestão e por tratar de um recurso importante 
        para o desenvolvimento da economia do país, necessitam de profissionais 
        dotados de competências profissionais para atuar de forma ética na 
        sociedade, assim a UAEM – UFCG tem se esforçado para desenvolver ações 
        que fomentem a formação dos alunos de acordo com as demandas 
        mercadológicas.`}
      </div>
      <Title text={`Professores`} />
      <ul className="professors">
        <li className="professor-li">
          <h1 className="professor-name">{`Jader Morais Borges`}</h1>
          <a
            href={`http://lattes.cnpq.br/7480774279022780`}
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
          <h1 className="professor-name">{`Roberto José Ribeiro Gomes da Silva`}</h1>
          <a
            href={`http://lattes.cnpq.br/5161408779864017`}
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
          <h1 className="professor-name">{`Gesinaldo Ataíde Cândido`}</h1>
          <a
            href={`http://lattes.cnpq.br/2771934125977891`}
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
      </ul>
      <Title text={`Estrutura Curricular`} />
      <div className="div-1 disciplines">
        <h1 className="level-title">{`1. Núcleo Básico`}</h1>
        <h2 className="discipline">{`1.1 Metodologia da Pesquisa Científica (10h) `}</h2>
        <h2 className="discipline">{`1.2 Estatística Básica (30h)`}</h2>
        <h2 className="discipline">{`1.3 Fundamentos da Gestão de Ativos (30h)`}</h2>
        <h2 className="discipline">{`1.4 Normas e Padrões (20h)`}</h2>
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
        <h2 className="discipline">{`3.2 TCC (---)`}</h2>
      </div>
    </HomeStyles>
  );
}
