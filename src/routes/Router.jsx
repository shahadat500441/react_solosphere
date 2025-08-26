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
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

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
      },
      {
        path:"/my-posted-jobs",
        element:<MyPostedJobs></MyPostedJobs>
      },
      {
        path:"/update/:id",
        element:<UpdateJob></UpdateJob>,
        loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
        
      }
    ]
  },
]);
export default router