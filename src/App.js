import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Table from './components/AdminComponent/Table';
import Userdashboard from './components/UserComponent/UserDashboard';
import AddFlight from './components/AdminComponent/AddFlight';
import Book from './components/UserComponent/Book';
import PaymentOpen from './components/PaymentComponent/PaymentOpen';
import Home from './components/HomeComponent/Home';
import Admindashboard from './components/AdminComponent/AdminDashboard';
import AddVacancy from './components/AdminComponent/AddVacancy';
import UpdateFlight from './components/AdminComponent/UpdateFlight';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/flightcrud' element={<Table />} />
    <Route path='/userdashboard' element={<Userdashboard />} />
    <Route path='/addflight' element={<AddFlight />} />
    <Route path='/updateflight' element={<UpdateFlight />} />
    <Route path='/admindashboard' element={<Admindashboard />} />
    <Route path='/addvacancy' element={<AddVacancy />} />
    <Route path='/book' element={<Book />} />
    <Route path='/payment' element={<PaymentOpen />} />
    <Route path='/deleteflight' element={<flightcrud/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
     
    
  );
}

export default App;