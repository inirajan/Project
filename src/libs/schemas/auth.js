import z from "zod";

const loginSchema = z.object({
  email: z.email(),
  passwrod: z.string().min(6),
});

export default loginSchema;
