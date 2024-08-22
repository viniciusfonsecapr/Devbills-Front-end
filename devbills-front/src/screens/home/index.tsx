import { Button } from "../components/button";
import { Logo } from "../components/logo";
import { Header } from "./styles";

export function Home() {
  return (
    <Header>
      <Logo />
      <div>
        <Button>Nova Transação</Button>
        <Button>Nova Categoria</Button>
      </div>
    </Header>
  );
}
