import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layouts/Home/Home'
import ErrorPage from './ErrorPage/ErrorPage';
import SubHeader from './layouts/SubHeader/SubHeader';
import Container from './layouts/Container/Container';
import Body from './layouts/Body/Body';




const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Body></Body>,
        children: [
          {
            path: '/',
            element: <Container></Container>,
          }
        ]
      }
    ]
  }
])


function App() { 
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
