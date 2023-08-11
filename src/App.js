import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import Layout from './layouts/Layout/Layout';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Topics from './components/Topics/Topics';
import Quizes from './components/Quizes/Quizes';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,

      },
      {
        path: '/Topics',
        loader: async ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        element: <Topics></Topics>,
      },
      {
        path: '/Statics',
        element: <Statics></Statics>,
      },
      {
        
        path: '/Blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/About',
        element: <About></About>,
      },
      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
      {
        path: '/Quizes/:paramid',
        loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.paramid}`)
        },
        element: <Quizes></Quizes>,
        
      },
      {
        path: 'Topics/Quizes/:paramid',
        loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.paramid}`)
        },
        element: <Quizes></Quizes>, 
      }
    ]
  },
  
])


function App() { 

  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
