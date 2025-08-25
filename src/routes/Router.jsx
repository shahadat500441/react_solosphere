import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>,
       
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Register></Register>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
      },
      {
        path:"/add-job",
        element:<AddJob></AddJob>
      }
    ]
  },
]);
export default router