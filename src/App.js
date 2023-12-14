
import './App.css';
import { IconName } from 'react-bootstrap-icons';
import NavBar  from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Colegio } from './Components/Colegio';
import { Historia } from './Components/Historia';
import { La_Salle } from './Components/La_Salle';
import { Ubicacion } from './Components/Ubicacion';
import { Educacion } from './Components/Educacion';
import { Login } from './Components/Login';
import { Creditos } from './Components/Creditos';
import { Bolmun } from './Components/Bolmun';
import { Convivencia } from './Components/Convivencia';
import { Años_100 } from './Components/Años_100';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path='/' element={<Colegio/>} />
          <Route path='historia' element={<Historia/>} />
          <Route path='la_salle' element={<La_Salle/>} />
          <Route path='ubicacion' element={<Ubicacion/>} />
          <Route path='educacion' element={<Educacion/>} />
          <Route path='login' element={<Login/>} />
          <Route path='creditos' element={<Creditos/>} />
          <Route path='bolmun' element={<Bolmun/>} />
          <Route path='Convivencia' element={<Convivencia/>} />
          <Route path='año_100' element={<Años_100/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
