import './App.css';
import Home from './routes/home/home.component';
import Navigation from './components/navigation/navigation.component';
import { Routes, Route, Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
