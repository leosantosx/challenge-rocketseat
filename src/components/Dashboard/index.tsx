import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <div>
        <h1>Campanha: Internet para todos</h1>
        <p>
          O objetivo dessa campanha é promover conhecimento, informação e até
          diversão para a população. Dessa forma, será possível melhorar a
          comunicação e a educação, além de democratizar o acesso à internet.
          Essa é a verdadeira inclusão digital e social.
        </p>
        <a href="https://strawpoll.com/8oaj7sruq">Apoiar campanha</a>
      </div>
      <img src="logo.svg" alt="Logo" />

      <footer>
          <p>&copy; 2021 - Leo santos</p>
          <p>Todos os direitos reservados</p>
      </footer>
    </Container>
  );
}
