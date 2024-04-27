
import {createBrowserRouter} from "react-router-dom"
import HomePage from "../pages/HomePage";


const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/:view",
                element: <HomePage />,
            },
        ]
    }
])


export default routes