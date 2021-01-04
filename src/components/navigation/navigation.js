import { categorias } from '../pages/home/Categoria.svelte'

export default [
  {
    titulo: 'Cursos',
    alt: 'Categorías de nuestros cursos',
    childrens: [
      ...categorias,
      {
        titulo: 'Todas las categorías',
        href: ' https://yescampus.teachlr.com/#courses-online/',
      }
    ],
  },
  {
    titulo: 'For Business',
    alt: '¿Qué ofrecemos?',
    childrens: [
      {
        titulo: 'Asesorías',
        href: '/business#financiamiento-e-inversion',
      },
      {
        titulo: 'Mentorías',
        href: '/business#formacion-in-company',
      },
      {
        titulo: 'Financiamientos',
        href: '/business#financiamiento-e-inversion',
      },
      {
        titulo: 'Diseño de proyectos',
        href: '/business#financiamiento-e-inversion',
      },
      {
        titulo: 'Todos los servicios',
        href: '/business',
      }
    ],
  },
  {
    titulo: 'Programas',
    header: false,
    alt: 'Nuestros programas',
    childrens: [
      {
        titulo: 'Young Entrepreneur',
        href: '/young-entrepreneur',
      },
      {
        titulo: 'Young Entrepreneur Full Inclusion',
        href: '/full-inclusion',
      },
      {
        titulo: 'Young Leaders',
        href: '/leaders',
      },
    ],
  },
  {
    titulo: 'Comunidad',
    alt: 'Que impulsa',
    childrens: [
      {
        titulo: 'YES Talks',
        href: '/talks',
      },
      {
        titulo: 'Comunidad YES',
        href: '/historias',
      },
      {
        titulo: 'Aliados',
        href: '/aliados',
      },
      {
        titulo: 'Blog',
        href: '/blog',
      },
      {
        titulo: 'Nosotros',
        alt: '¿Quiénes somos?',
        href: '/nosotros',
      },
    ],
  },
]
