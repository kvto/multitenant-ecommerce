import z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const registerSchema = z.object({
            email: z.string().email(),
            password: z.string().min(3),
            username: z
            .string()
            .min(3, "Usuario debe tener al menos 3 caracteres")
            .max(63, "Usuario debe tener menos de 63 caracteres")
            .regex(
                /^[a-z0-9][a-z0-9]*[a-z0-9]$/,
                "Usuario solo puede contener letras minúsculas, números y guiones. Debe empezar y terminar con una letra o un número."
            )
            .refine(
                (val) => !val.includes("--"), "Usuario no puede contener guiones consecutivos"
            )
            .transform((val) => val.toLowerCase())
        })