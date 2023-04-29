import Image from 'next/image'
import logo from '../images/logos/doragonmedia.png'



export function Logo(className) {
  return (
    <div className="w-40" >
      <Image
        src={logo}
        alt="Doragon Media Logo"
      />
    </div>


    // <img src="../images/logos/doragonmedia.png"/>
  )
}
