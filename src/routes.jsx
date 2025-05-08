import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Shop from "./pages/Shop/Shop";


const routes = [
{
    path: "/",
    element: 
    <>
    <Header />
    <Home />
    <Footer />
    </>
    ,
    errorElement: <ErrorPage />
},
{
    path: "/shop", 
    element: 
    <>
    <Header />
    <Shop />
    <Footer />
    </>
},
{
    path: "/product/:id",
    element: 
    <>
    <Header />
    <ProductPage />
    <Footer />
    </>
}
]

export default routes;