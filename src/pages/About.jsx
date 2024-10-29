import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafeImage from '../assets/cafe.jpeg'; 
import '../style/style.css';

const About = () => {
    return (
        <div className="container-fluid" style={{ marginTop: '120px', width: '1519px' }}>
                <section className="mb-5 mt-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-5 ms-5">
                            <img src={cafeImage} className="img-fluid custom-image" alt="Coffee being made" />
                        </div>
                        <div className="col-md-5 ms-5">
                            <h1 className="mb-4 fw-bold">
                                OUR STORY
                            </h1>
                            <p className="fs-6 text-muted">
                                The founder of <strong>Café Delight</strong> has traveled extensively, experiencing the richness of coffee culture across more than 30 countries, from vibrant Southeast Asia and diverse South Asia to the heart of the Middle East, North Africa, and the Americas. These travels offered a unique insight into the universal love for coffee, as well as the diverse ways people from all backgrounds, occupations, and traditions celebrate this cherished drink.
                            </p>
                            <p className="fs-6 text-muted">
                                Driven by a passion for exceptional coffee and quality living, the founder created <strong>Café Delight</strong> to blend these global inspirations into an experience that resonates with coffee enthusiasts everywhere. <strong>Café Delight</strong> aims to bring this ‘coffee culture’ to life, where every cup embodies dedication, artistry, and authenticity.
                            </p>
                            <p className="fs-6 text-muted">
                                The name <strong>Café Delight</strong> symbolizes both the joy of the present moment and the anticipation of good things yet to come. Our mission is to craft every cup of coffee with heart and purpose, encouraging everyone to savor the moment while looking forward to new horizons.
                            </p>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default About;
