import { Button } from "../components/button";
import { Logo } from "../components/logo";
import { Title } from "../components/title";
import { Filters, Header, Main, Section } from "./styles";

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova Transação</Button>
          <Button>Nova Categoria</Button>
          <Button>Apenas Gerar commit </Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
          </Filters>
        </Section>
        <aside></aside>
      </Main>
    </>
  );
}
