import { getPayload } from "payload";
import config from "@payload-config";


const categories = [
  {
    name: "Todo",
    slug: "todo",
  },
  {
    name: "Negocios y Dinero",
    color: "#FFB347",
    slug: "negocios-dinero",
    subcategories: [
      { name: "Contabilidad", slug: "contabilidad" },
      { name: "Emprendimiento", slug: "emprendimiento" },
      { name: "Trabajos y Proyectos Paralelos", slug: "trabajos-proyectos-paralelos" },
      { name: "Inversiones", slug: "inversiones" },
      { name: "Gestión y Liderazgo", slug: "gestion-liderazgo" },
      { name: "Marketing y Ventas", slug: "marketing-ventas" },
      { name: "Redes, Carreras y Empleos", slug: "redes-carreras-empleos" },
      { name: "Finanzas Personales", slug: "finanzas-personales" },
      { name: "Bienes Raíces", slug: "bienes-raices" },
    ],
  },
  {
    name: "Desarrollo de Software",
    color: "#7EC8E3",
    slug: "desarrollo-software",
    subcategories: [
      { name: "Desarrollo Web", slug: "desarrollo-web" },
      { name: "Desarrollo Móvil", slug: "desarrollo-movil" },
      { name: "Desarrollo de Videojuegos", slug: "desarrollo-videojuegos" },
      { name: "Lenguajes de Programación", slug: "lenguajes-programacion" },
      { name: "DevOps", slug: "devops" },
    ],
  },
  {
    name: "Escritura y Publicación",
    color: "#D8B5FF",
    slug: "escritura-publicacion",
    subcategories: [
      { name: "Ficción", slug: "ficcion" },
      { name: "No Ficción", slug: "no-ficcion" },
      { name: "Blogging", slug: "blogging" },
      { name: "Redacción Publicitaria", slug: "redaccion-publicitaria" },
      { name: "Autoedición", slug: "autoedicion" },
    ],
  },
  {
    name: "Otros",
    slug: "otros",
  },
  {
    name: "Educación",
    color: "#FFE066",
    slug: "educacion",
    subcategories: [
      { name: "Cursos en Línea", slug: "cursos-en-linea" },
      { name: "Tutoría", slug: "tutoria" },
      { name: "Preparación para Exámenes", slug: "preparacion-examenes" },
      { name: "Aprendizaje de Idiomas", slug: "aprendizaje-idiomas" },
    ],
  },
  {
    name: "Superación Personal",
    color: "#96E6B3",
    slug: "superacion-personal",
    subcategories: [
      { name: "Productividad", slug: "productividad" },
      { name: "Desarrollo Personal", slug: "desarrollo-personal" },
      { name: "Atención Plena", slug: "atencion-plena" },
      { name: "Crecimiento Profesional", slug: "crecimiento-profesional" },
    ],
  },
  {
    name: "Salud y Fitness",
    color: "#FF9AA2",
    slug: "salud-fitness",
    subcategories: [
      { name: "Planes de Entrenamiento", slug: "planes-entrenamiento" },
      { name: "Nutrición", slug: "nutricion" },
      { name: "Salud Mental", slug: "salud-mental" },
      { name: "Yoga", slug: "yoga" },
    ],
  },
  {
    name: "Diseño",
    color: "#B5B9FF",
    slug: "diseno",
    subcategories: [
      { name: "UI/UX", slug: "ui-ux" },
      { name: "Diseño Gráfico", slug: "diseno-grafico" },
      { name: "Modelado 3D", slug: "modelado-3d" },
      { name: "Tipografía", slug: "tipografia" },
    ],
  },
  {
    name: "Dibujo y Pintura",
    color: "#FFCAB0",
    slug: "dibujo-pintura",
    subcategories: [
      { name: "Acuarela", slug: "acuarela" },
      { name: "Acrílico", slug: "acrilico" },
      { name: "Óleo", slug: "oleo" },
      { name: "Pastel", slug: "pastel" },
      { name: "Carbón", slug: "carbon" },
    ],
  },
  {
    name: "Música",
    color: "#FFD700",
    slug: "musica",
    subcategories: [
      { name: "Composición de Canciones", slug: "composicion-canciones" },
      { name: "Producción Musical", slug: "produccion-musical" },
      { name: "Teoría Musical", slug: "teoria-musical" },
      { name: "Historia de la Música", slug: "historia-musica" },
    ],
  },
  {
    name: "Fotografía",
    color: "#FF6B6B",
    slug: "fotografia",
    subcategories: [
      { name: "Retrato", slug: "retrato" },
      { name: "Paisaje", slug: "paisaje" },
      { name: "Fotografía Callejera", slug: "fotografia-callejera" },
      { name: "Naturaleza", slug: "naturaleza" },
      { name: "Macro", slug: "macro" },
    ],
  },
];


const seed = async () => {
    const payload = await getPayload({ config });

    for (const category of categories){
        const parentCategory = await payload.create({
            collection: "categories",
            data: {
                name: category.name,
                slug: category.slug,
                color: category.color,
                parent: null,
            }
        });

        for (const subCategory of category.subcategories || []) {
            await payload.create({
                collection: "categories",
                data: {
                    name: subCategory.name,
                    slug: subCategory.slug,
                    parent: parentCategory.id,
                }
            })
        }
    }
}

try{
await seed();
console.log("Seeding completed successfully");
process.exit(0);
} catch (error){
console.error("Error during seeding:", error);
process.exit(1);
}


