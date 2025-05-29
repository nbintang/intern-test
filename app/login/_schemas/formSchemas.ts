import * as z from "zod";

const baseSchema = z.object({
  email: z.string().email({
    message: "Your email is not valid email",
  }),
  password: z.string().min(8, {
    message: "Minimum of password text length is 8",
  }),
  error: z.array(z.string()),
  loading: z.boolean(),
});

export const formDataSchema = baseSchema.pick({
  email: true,
  password: true,
});
export const conditionSchema = baseSchema.pick({
  error: true,
  loading: true,
});

export type FormDataType = z.infer<typeof formDataSchema>;
export type ConditionsType = z.infer<typeof conditionSchema>;
