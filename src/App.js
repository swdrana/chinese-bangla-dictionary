import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddWord from './components/pages/AddWord';
import Home from './components/pages/Home';
import Nav from './components/shared/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-word' element={<AddWord/>}/>
      </Routes>
    </div>
  );
}

export default App;
