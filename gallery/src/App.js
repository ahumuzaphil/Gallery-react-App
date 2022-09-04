import './App.css';
import Header from './Header.js';
import Introduction from './Introduction.js';
import Main from './Main';
import Subject from './Subject';
import data from './data';

function App() {
  const cards = data.map(item =>{
    return(<Main
      key={item.id} 
      items={item}
    />
    )
  })
  return (
    <div >
     <Header />
     <Introduction />
     <Subject />
     <section className="container">
     {cards}
     </section>

     
    </div>
  )
}

export default App;
