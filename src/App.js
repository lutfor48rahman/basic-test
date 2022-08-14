import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Signup from './component/Signup/Signup';
import SendInformation from './component/Navbar/SendInformation/SendInformation'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ViewInfo from './component/ViewInfo/ViewInfo';
import RequireAuth from './component/RequiredAuth/RequiredAuth';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/info' element={<RequireAuth>
          <SendInformation></SendInformation>
        </RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/view-info' element={<ViewInfo></ViewInfo>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
