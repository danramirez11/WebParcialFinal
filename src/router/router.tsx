import {
  createBrowserRouter
} from "react-router-dom";
import Intro from "../screens/Intro/Intro";
import Dashboard from "../screens/Dashboard/Dashboard";
import Detail from "../screens/Detail/Detail";
import Form from "../screens/Form/Form";

const router = createBrowserRouter([
    { path: "/", element: <Intro /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/detail", element: <Detail poem={{}} onBack={() => {}} /> },
    { path: "/form", element: <Form /> },
])

export default router;