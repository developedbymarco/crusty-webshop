import './App.css';
import Home from './routes/home/home.component';
import Navigation from './components/navigation/navigation.component';
import SignIn from './routes/home/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom';

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
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
