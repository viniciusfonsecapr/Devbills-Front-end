import { useCallback, useState } from "react";
import { Dialog } from "../dialog";
import { Button } from "../button";
import { Title } from "../title";
import { Input } from "../input";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { CreateCategoryData } from "../../../validators/types.ts";
import { theme } from "../../../styles/theme.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema } from "../../../validators/schemas.ts.ts";
import { useFetchAPI } from "../../../hooks/useFetchAPI.tsx";

export function CreateCategoryDialog() {
  const { createCategory, fetchCategories } = useFetchAPI();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState } = useForm<CreateCategoryData>({
    defaultValues: {
      title: "",
      color: theme.colors.primary,
    },
    resolver: zodResolver(createCategorySchema),
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data: CreateCategoryData) => {
      console.log(data);

      await createCategory(data);
      await fetchCategories();

      handleClose();
    },
    [handleClose, createCategory]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova Categoria</Button>}
    >
      <Container>
        <Title title={"Nova Categoria"} subtitle={"Crie uma nova categoria"} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="Nome"
              placeholder="Nome da Categoria..."
              {...register("title")}
            />
            <Input label="Cor" type="color" {...register("color")} />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button type="button">Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
