import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom";
import useCartItems from "./customHooks/useCartItems";


const MainLayout = () => {

    const { cartItems, addToBag, deleteItem } = useCartItems();

    return (
        <>
        <div className="content-area">
        <Header items={ cartItems } handleChange={ addToBag } deleteItem={ deleteItem } />
            <Outlet context={ addToBag }/>
        </div>
        <Footer />
        </>
    )
}

export default MainLayout;