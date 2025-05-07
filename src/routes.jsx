import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";


const routes = [
{
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
},
{
    path: "shop", 
    element: <Shop />
}
]

export default routes;