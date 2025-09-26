import Slider from "react-slick";
import mainImg from "../../assets/image (5).png";
import "./main.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next" onClick={onClick}>
            <IoIosArrowForward />
        </div>
    );
};

// Custom Prev Arrow
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            <IoIosArrowBack />
        </div>
    );
};

function Main() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div>
                    <main>
                        <div className="wrapper">
                            <div className="main-text">
                                <h1>All You Need For Perfect Breakfast</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s.
                                </p>
                                <div className="main-buttons">
                                    <button className="main-button">BUY NOW</button>
                                    <button className="main-button">SEE MORE</button>
                                </div>
                            </div>
                            <div className="main-img">
                                <img src={mainImg} alt="Breakfast" />
                            </div>
                        </div>
                    </main>
                </div>

                {/* Slide 2 */}
                <div>
                    <main>
                        <div className="wrapper">
                            <div className="main-text">
                                <h1>Fresh & Healthy Foods</h1>
                                <p>
                                    Discover our wide range of organic products that bring energy
                                    and health to your everyday meals.
                                </p>
                                <div className="main-buttons">
                                    <button className="main-button">SHOP NOW</button>
                                    <button className="main-button">LEARN MORE</button>
                                </div>
                            </div>
                            <div className="main-img">
                                <img src={mainImg} alt="Healthy food" />
                            </div>
                        </div>
                    </main>
                </div>

                {/* Slide 3 */}
                <div>
                    <main>
                        <div className="wrapper">
                            <div className="main-text">
                                <h1>Taste The Difference</h1>
                                <p>
                                    Quality ingredients, carefully selected for the most delicious
                                    meals and unforgettable flavors.
                                </p>
                                <div className="main-buttons">
                                    <button className="main-button">ORDER NOW</button>
                                    <button className="main-button">EXPLORE</button>
                                </div>
                            </div>
                            <div className="main-img">
                                <img src={mainImg} alt="Tasty food" />
                            </div>
                        </div>
                    </main>
                </div>
            </Slider>
        </div>
    );
}

export default Main;