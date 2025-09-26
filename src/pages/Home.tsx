import BestProducts from "../components/bestProducts/BestProducts"
import BestSelling from "../components/bestSelling/BestSelling"
import Delivery from "../components/delivery/Delivery"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import OnlineShop from "../components/onlineShop/OnlineShop"
import Products from "../components/products/Products"
import SpecialService from "../components/specialService/SpecialService"


function Home() {
    return (
        <div>
            <Header />
            <Main/>
            <Products/>
            <SpecialService/>
            <BestProducts/>
            <Delivery/>
            <BestSelling/>
            <OnlineShop/>
            <Footer/>
        </div>
    )
}

export default Home