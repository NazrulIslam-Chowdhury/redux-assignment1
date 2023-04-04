import { RouterProvider } from 'react-router';
import './App.css';
import router from './Router/Routes';

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
