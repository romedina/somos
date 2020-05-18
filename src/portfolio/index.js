import { getUrl } from '../model/firestore'

const portfolio = [
  {
    thumb: getUrl('projects/handyman/thumb.png'),
    title: 'HandyMan',
    type: 'Identidad de marca',
    picture: getUrl('projects/handyman/cover.png'),
    id: 'handyman',
    icon: getUrl('projects/handyman/icon.png'),
    description: [
      `Construimos herramientas digitales para emprendedores,
      profesionistas y pymes con la finalidad de ayudarles a sostener sus
      ingresos y no depender de la venta presencial.`,
      `Cada proyecto lo diseñamos a la medida de cada cliente y de acuerdo a
      sus capacidades y solvencia económica.`
    ]
    ,
    pictures: [
      {src: getUrl('projects/handyman/1.png')},
      {src: getUrl('projects/handyman/2.png')},
      {src: getUrl('projects/handyman/3.png'), fullWidth: true},
      {src: getUrl('projects/handyman/4.png')},
      {src: getUrl('projects/handyman/5.png')},
    ]
  },
  {
    thumb: getUrl('projects/handyman/thumb.png'),
    title: 'HandyMan',
    type: 'Identidad de marca',
    picture: getUrl('projects/handyman/cover.png'),
    id: 'handyman',
    icon: getUrl('projects/handyman/icon.png'),
    description: [
      `Construimos herramientas digitales para emprendedores,
      profesionistas y pymes con la finalidad de ayudarles a sostener sus
      ingresos y no depender de la venta presencial.`,
      `Cada proyecto lo diseñamos a la medida de cada cliente y de acuerdo a
      sus capacidades y solvencia económica.`
    ]
    ,
    pictures: [
      {src: getUrl('projects/handyman/1.png')},
      {src: getUrl('projects/handyman/2.png')},
      {src: getUrl('projects/handyman/3.png'), fullWidth: true},
      {src: getUrl('projects/handyman/4.png')},
      {src: getUrl('projects/handyman/5.png')},
    ]
  },
  {
    title: 'Teatreritos',
    type: 'Identidad de marca',
    thumb: getUrl('projects/teatreritos/thumb.jpg'),
    fullWidth: true
  }
]

export default portfolio
