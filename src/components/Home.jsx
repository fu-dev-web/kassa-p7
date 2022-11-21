import '../App.css';
// import infoLogement from '../data/kassa.json';
import BannerImg from '../assets/Home/bannerImg.png'
import "../styles/home.css"


function App() {
  return (
      
    <main className='home'>
       <section className="home-section">
          <p className='banner-text'>Chez vous, partout et ailleurs</p>
          <div className='banner-img'>
          <img src={BannerImg} alt="décor naturel" />
          </div>
        </section>
        
    </main>
  );
}

export default App;
