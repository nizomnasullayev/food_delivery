import deliveryImg from "../../assets/image (10).png"
import vector from "../../assets/Vector.png"

function Delivery() {
    return (
        <section className="delivery">
            <div className="wrapper">
                <div className="delivery-img-side">
                    <img src={deliveryImg} alt="" />
                </div>
                <div className="delivery-text-side">
                    <h1>Fresh Product Directly To Your Door With Free Delivery</h1>
                    <p>There are many variations of passage Lorem Ipsum available, but te majority hav suffered alteration in some form, by injected humour</p>
                    <p>
                        <span>
                            <img src={vector} alt="" />
                            Free Delivery For All Order
                        </span>
                        <span style={{marginLeft: "10px"}}>
                            <img src={vector} alt="" />
                            Only Fresh Food
                        </span>
                    </p>
                    <button className="main-button">Find Now</button>
                </div>
            </div>
        </section>
    )
}

export default Delivery