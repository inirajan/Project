import z from "zod";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../../constants/roles.js";

const addressSchema = z.object({
  city: z.string({ error: "Address city   is required." }),
  province: z.string({ error: " Address province iss required." }),
  street: z.string().optional(), // to make optional if not needed
  country: z.string().optional(),
});

const userSchema = z.object({
  name: z.string({ error: "Name is required." }).trim(),
  email: z.email(),
  passwrod: z.string().min(6),
  phone: z.string().min(6).max(13),
  address: addressSchema,
  roles: z.array(z.enum([ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER])).optional(),
  profileImageUrl: z.string().optional(),
  isActive: z.boolean().optional(),
});

export default userSchema;
