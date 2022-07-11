import './style.css'
import kwinmedia from '../../assets/images/kwin-media.png'
import gelid from '../../assets/images/gelid.png'

const Companies = () => {
  return (
    <section className='companies'>
        <img className='kwin-m-img' src={kwinmedia} alt="Kwin Media logo" />
        <img className='gelid-img' src={gelid} alt="Gelid logo" />
    </section>
  )
}

export default Companies