import Stack from "@mui/material/Stack";
import Header from "../../components/header/Header"
import useContextPro from "../../hooks/useContextPro"
import type { Product } from './../../types/types';
import Rating from "@mui/material/Rating";

function Cart() {

    const { state: { cart } } = useContextPro()

    return (
        <div className="cart">
            <Header />
            <div className="wrapper">
                {cart.map((p: Product) => (
                    <div key={p.id} className='small-cards'>
                        <img className='small-card-img' src={p.imgUrl} alt={p.title} />
                        <div className="small-cards-text">
                            <p>{p.title}</p>
                            <p>
                                <span className='line-through'>${p.oldPrice}</span>
                                <span className='exact-price'>${p.price}</span>
                            </p>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={p.rating} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart