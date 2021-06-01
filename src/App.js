import './App.css';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes/>
      <ToastContainer autoClose={3000} closeButton={true} position={"top-center"} hideProgressBar={true}/>
    </div>
  )
}

export default App;
