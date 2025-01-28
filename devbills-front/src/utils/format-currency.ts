export function formatCurrency(
  value: number | null,
  isInCents: boolean = true
) {
  value = value ?? 0; // Se o valor for null ou undefined, usa 0 como padrão

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(isInCents ? value / 100 : value);
}
