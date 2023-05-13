import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Navbar2 from './components/Navbar2';
import Hero2 from './components/Hero2';
import Card from './components/Card';
import data from './data';


function App() {
  const cards = data.map(cardData => { // map kisaltilmis bir for döngüsü
    return (
      <Card data={cardData} />
      /** yukaridakinin aynisi 
       * <Card data={data[0]}/>
       * <Card data={data[1]}/>
       * <Card data={data[2]}/>
       */

    )
  })

  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Navbar2 />
        <Hero2 />


        <section className="cards-list">
          {cards}
        </section>


      </div>



    </>
  );
}

export default App;
