import product1 from '../../assets/Image (7).png'
import fruit from '../../assets/Fruits.png'

function Products() {
    return (
        <section className="products">

            <div className="product-category">
                {[1,2,3,4,5,6,7,8].map((_, i) => (
                    <div className="p-categ" key={i}>
                        <img src={fruit} alt="" />
                    </div>
                ))}
            </div>

            <div className="wrapper">
                <h2 style={{textAlign: "center"}}>--New Products--</h2>
                <div className="products-in">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div className="product" key={i}>
                            {/* Default state */}
                            <div className="product-default">
                                <img src={product1} alt="Fresh Vegetable" />
                                <p>Fresh Vegetable</p>
                                <span className='product-price'>$30.00</span>
                            </div>

                            {/* Hover state */}
                            <div className="product-hover">
                                <img src={product1} alt="Fresh Vegetable" />
                                <span className='product-text'>Pro Cooking</span>
                                <h3>Fresh Vegetable</h3>
                                <button>Order Now</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Products