
import './App.css';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position='top-center'/>
      <main >
        <Outlet />
      </main>
    </>

  );
}

export default App;
