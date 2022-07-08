import './App.sass';
import Home from './Home';
import Contact from './Contact';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
    </>
  );
}

export default App;
