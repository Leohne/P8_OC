import bannerKasa from '../assets/BannerKasaContact.svg'
import Dropdown from '../component/Dropdown';

function About () {
  
  
  const About1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  const About2 = "La bienveillance dait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
  const About3 = "La bienveillance dait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
  const About4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos  services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
  return (

    <>
      <div className='banner_div'>
        <img className='banner' src={bannerKasa} alt="Bannière" />
      </div>
      <div className='about_contain'>
        <div className='dropdown_about'>
            <Dropdown title="Fiabilité" contain={About1}/>
        </div>
        <div className='dropdown_about'>
            <Dropdown title="Respect" contain={About2}/>
        </div>
        <div className='dropdown_about'>
            <Dropdown title="Service" contain={About3}/>
        </div>
        <div className='dropdown_about'>
            <Dropdown title="Sécurité" contain={About4}/>
        </div>
      </div>
    </>
  );
}

export default About;
