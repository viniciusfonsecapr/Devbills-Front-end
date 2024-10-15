import { Button } from "../components/button";
import { Logo } from "../components/logo";
import { Title } from "../components/title";
import { Input } from "../components/input";
import { Filters, Header, Main, Section, InputGroup } from "./styles";
import { InputMask } from "@react-input/mask";

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
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/yyyy"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/yyyy"
              />
            </InputGroup>
          </Filters>
        </Section>
        <aside></aside>
      </Main>
    </>
  );
}
