import React from "react";
import "./Home.css";
import Product from "./Product";
function Home(){
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product 
                            id="12321341"
                            title="Bennett Mystic 15.6 inch Laptop shoulder Messenger Sling Office Bag, Water
                            Repellent fabric for men and women(Blue)"
                            price={11.96}
                            rating={5}
                            image="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwYmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        />
                        <Product 
                            id="49538094"
                            title="IFB 30L convection microwave oven (30BRC2,black,with starter kit)"
                            price={239.0}
                            rating={4}
                            image="https://sathya.in/media/86275/catalog/Oven%2011.png"
                        />
                        
                    </div>
                    <div className="home__row">
                        <Product 
                            id="4903850"
                            title="All the light we cannot see: The Breathtaking world wide bestseller paperback"
                            price={199.99}
                            rating={3}
                            image="https://www.assets.signify.com/is/image/PhilipsLighting/16fbce16ca884251b0c7abf900e5e27e?$jpglarge$&wid=1250"
                        />
                        <Product 
                            id="23445930"
                            title="Amazon Echo (3rd generation) | smart speaker with alexa, charcol fabric"
                            price={98.99}
                            rating={5}
                            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665446481/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/214741_0_ayqzgw.png/mxw_640,f_auto"
                        />
                        <Product 
                            id="3254354345"
                            title="New Apple ipad pro (12.9 inch,wi-fi,128gb)-silver(4th generation)"
                            price={598.99}
                            rating={4}
                            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-2022-hero-blue-wifi-select_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1664387252309"
                        />
                    </div>
                    <div className="home__row">
                        <Product 
                            id="123213498"
                            title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
                            price={560}
                            rating={4}
                            image="https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-2.jpg"
                        />
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home;