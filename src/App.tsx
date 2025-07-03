import './App.css';
import Footer from './comps/Footer';
import Header from './comps/Header';
import SubHeader from './comps/SubHeader';
import Main from './Main';

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <SubHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
