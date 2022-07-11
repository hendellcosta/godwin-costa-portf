import "./style.css";
import pfp from "../../assets/images/godwin-costa-2.jpg";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { RiSoundcloudLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const LinksComp = () => {
  return (
    <section className="home">
      <img
        src={pfp}
        alt="VJ Pir profile picture"
        className="home-godwin-costa-pfp"
      />

      <span className='home-identifiers-texts'>
        <h2 className='home-name'>Godwin Costa</h2>
        <h3><span>Transformo Talentos em Negócio</span> <br/>
        <span>CEO: <a href="https://www.instagram.com/gelid_limpezas" target='_blank' rel="noreferrer"><u>Gelid</u></a> |
         <a href="https://www.instagram.com/kwin_agencia" rel='noreferrer'><u> Kwin Media</u></a></span></h3>
      </span>

      <div className="home-social-medias">

        <a href="https://www.instagram.com/godwincosta_patto" target='_blank' rel="noreferrer">
          <BsInstagram />
          <span className="home-socials-text">Instagram</span>
        </a>

        <a href="https://www.linkedin.com/in/godwin-costa-48b986134/" target='_blank' rel="noreferrer">
          <FiLinkedin />
          <span className="home-socials-text">Linkedin</span>
        </a>

        <a href="https://m.facebook.com/godwin.costa" target='_blank' rel="noreferrer">
          <FiFacebook />
          <span className="home-socials-text">Facebook</span>
        </a>
        
      </div>

    </section>
  );
};

export default LinksComp;
