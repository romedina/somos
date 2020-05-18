import handyMandPicture from '../assets/portfolio/handyman.png'
import handymandpicture1 from '../assets/portfolio/handyman_1.png'
import handymandpicture2 from '../assets/portfolio/handyman_2.png'
import handymandpicture3 from '../assets/portfolio/handyman_3.png'
import handymandpicture4 from '../assets/portfolio/handyman_4.png'
import handymandpicture5 from '../assets/portfolio/handyman_5.png'
import handymandIcon from '../assets/portfolio/handyman-icon.png'

const portfolio = {
  handyman: {
    title: 'handyman',
    picture: handyMandPicture,
    icon: handymandIcon,
    description: [
      `Construimos herramientas digitales para emprendedores,
      profesionistas y pymes con la finalidad de ayudarles a sostener sus
      ingresos y no depender de la venta presencial.`,
      `Cada proyecto lo diseñamos a la medida de cada cliente y de acuerdo a
      sus capacidades y solvencia económica.`
    ]
    ,
    pictures: [
      {src: handymandpicture1},
      {src: handymandpicture2},
      {src: handymandpicture3, fullWidth: true},
      {src: handymandpicture4},
      {src: handymandpicture5},
    ]
  }
}

export default portfolio
