import z from "zod";

const productSchema = z.object({
  name: z.string({ error: "Product name is required." }),
  brand: z.email().optional(),
  category: z.string().optional(),
  price: z
    .number({
      error: (value) =>
        value == undefined
          ? " price must be numbered."
          : "Product price is required.",
    })
    .min(1)
    .max(9999999),
  stock: z.number().min(1).optional(),
  imageUerls: z.array(z.string()),
});

export { productSchema };
