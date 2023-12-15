import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    localStorage.getItem("token") ?
      <Route path='/' element={<MainLayout />}>
        <>
          <Route index element={<Main isIndex />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </>
      </Route>
      :
      <Route path='/' element={<AuthLayout />}>
        <>
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </>
      </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}



export default App
