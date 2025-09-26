import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/cart/Cart"


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default App