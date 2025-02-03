import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import { zodResolver } from "@hookform/resolvers/zod";

import { TransactionsFilterData } from "../../validators/types";
import { transactionsFilterSchema } from "../../validators/schemas";

import { Logo } from "../components/logo";
import { Title } from "../components/title";
import { Input } from "../components/input";
import { ButtonIcon } from "../components/button-icon";
import {
  Filters,
  Header,
  Main,
  Section,
  InputGroup,
  Balance,
  ChartContainer,
  ChartContent,
  ChartAction,
  Aside,
  SearchTransaction,
  TransactionGroup,
} from "./styles";
import { Card } from "../components/card";
import { Transaction } from "../components/transaction";
import { CreateCategoryDialog } from "../components/create-category-dialog";
import { CreateTransactionDialog } from "../components/create-transaction-dialog";
import {
  CategoriesPieChart,
  CategoryProps,
} from "../components/categories-pie-chart";
import { FinancialEvolutionBarChart } from "../components/financial-evolution-bar-chart";
import { useCallback, useState } from "react";

export function Home() {
  const transactionsFilterForm = useForm<TransactionsFilterData>({
    defaultValues: {
      title: "",
      categoryId: "",
      beginDate: dayjs().startOf("month").format("DD/MMMM/YYYYY"),
      endDate: dayjs().endOf("month").format("DD/MMMM/YYYY"),
    },
    resolver: zodResolver(transactionsFilterSchema),
  });

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null);

  const handleSelectCategory = useCallback(
    ({ id, title, color }: CategoryProps) => {
      setSelectedCategory({ id, title, color });
      transactionsFilterForm.setValue("categoryId", id);
    },
    [transactionsFilterForm]
  );

  const handleDeselectCategory = useCallback(() => {
    setSelectedCategory(null);
    transactionsFilterForm.setValue("categoryId", "");
  }, [transactionsFilterForm]);

  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateTransactionDialog />
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
                error={
                  transactionsFilterForm.formState.errors.beginDate?.message
                }
                {...transactionsFilterForm.register("beginDate")}
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
                error={transactionsFilterForm.formState.errors.endDate?.message}
                {...transactionsFilterForm.register("endDate")}
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no periodo"
              />
            </header>
            <ChartContent>
              <CategoriesPieChart onClick={handleSelectCategory} />
            </ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saida, Receitas e Gastos no Ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent>
              <FinancialEvolutionBarChart />
            </ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title
              title={"Transações"}
              subtitle={"Receitas e gastos no periodo"}
              {...transactionsFilterForm.register("title")}
            />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar transação..." />
              <ButtonIcon />
            </SearchTransaction>
          </header>

          <TransactionGroup>
            <Transaction
              id={1}
              amount={20000}
              date="09/09/2023"
              category={{ title: "Alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={20000}
              date="09/09/2023"
              category={{ title: "Alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={20000}
              date="09/09/2023"
              category={{ title: "Alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={20000}
              date="09/09/2023"
              category={{ title: "Alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  );
}
