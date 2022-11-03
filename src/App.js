import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './comeponents/Home';
import AddUser from './comeponents/AddUser';
import Update from './comeponents/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
