import { z } from "zod";

import {
  createCategorySchema,
  createTransactionSchema,
  financialEvolutionFilterSchema,
  transactionsFilterSchema,
} from "./schemas.ts";

export type CreateCategoryData = z.infer<typeof createCategorySchema>;

export type CreateTransactionData = z.infer<typeof createTransactionSchema>;

export type TransactionsFilterData = z.infer<typeof transactionsFilterSchema>;

export type FinancialEvolutionFilterData = z.infer<
  typeof financialEvolutionFilterSchema
>;
