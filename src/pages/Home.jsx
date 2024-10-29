import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeImage from '../assets/coffee.png'; 
import coffeeImage2 from '../assets/home.png'; 
import '../style/style.css';


const Home = () => {
    return (
        <div className="container-fluid">
        <header 
            className="text-center my-5 py-5" 
            style={{
                backgroundColor: "#645b5a",
                color: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)"
            }}
        > 
            <h1>Welcome to Café Delight</h1>
            <p className="lead">Your favorite place for delicious coffee and snacks.</p>
        </header>

            <main>
            <section className="mb-4">
                <div className="row">
                    <div className="col-12"> {/* Full-width column for video */}
                        <video 
                            className="w-100"
                            autoPlay 
                            loop 
                            style={{
                                borderRadius: "8px"
                            }}
                        >
                            <source src="src/assets/videocoffe.mp4" type="video/mp4" /> {/* Replace with your video path */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>



                <section className="mb-4 mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-5 ms-4">
                            <img src={coffeeImage} className="img-fluid custom-image" alt="Coffee being made" />
                        </div>
                        <div className="col-md-5 ms-4">
                            <h1 className="mb-4 fw-bold">
                                Crafted with Passion, Brewed with Precision
                            </h1>
                            <p className="fs-6text-muted"> {/* Increased font size */}
                                Our coffee is made with the finest beans, roasted to perfection, and brewed with care.
                                We use only the freshest ingredients and the highest quality equipment to ensure every cup 
                                is a masterpiece. Our commitment to quality means we source our beans from sustainable farms,
                                ensuring not only a rich flavor but also a positive impact on the environment. 
                                Join us for a coffee experience that not only delights your taste buds but also makes you 
                                feel good about your choices. Each cup of coffee tells a story, and we invite you to be a part 
                                of ours as you savor every sip in the cozy ambiance of Café Delight.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Home;
