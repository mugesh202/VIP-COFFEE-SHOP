import AppBanner from './Component/AppBanner/AppBanner';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Services from './Component/Services/Services';
import WhereToBuy from './Component/WhereToBuy/WhereToBuy';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer /> 
    </div>
  );
}

export default App;
