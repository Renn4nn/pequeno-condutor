import { z } from '@repo/config';

/**
 * Força o Zod a reportar um esquema JSON customizado para o Swagger.
 * Isso resolve o erro "Date cannot be represented in JSON Schema".
 */
function overrideJSONSchema<T>(
  parser: z.ZodType<T>,
  customJSONSchema: any,
): z.ZodType<T> {
  // Acessa as propriedades internas do Zod para sobrescrever a geração do Schema
  (parser as any)._zod.toJSONSchema = () => customJSONSchema;
  return parser;
}

/**
 * Codec que aceita Date ou String, converte para Date internamente,
 * mas se apresenta ao Swagger como uma String ISO.
 */
export function dateTime() {
  const schema = z.union([
    z.date(),
    z.string().datetime().pipe(z.coerce.date())
  ]);

  return overrideJSONSchema(
    schema,
    { type: 'string', format: 'date-time' } // O que o Swagger verá
  );
}