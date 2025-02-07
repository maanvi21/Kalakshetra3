import React from 'react';
import './UserHomepage.css';
import carouselItems from '../data/CarouselData.js'
import categories from '../data/CategoriesData.js'
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomepagCarousel from './HomepagCarousel.js';
import CategoriesContainer from '../components/CategoriesContainer';

const UserHomepage = () => {
  return (
    <div className="user-homepage">
      
<Header/>
      <main>
        <HomepagCarousel items={carouselItems}/>

        <section className="offerings">
          {/* categories */}
          
          <h2>What we offer</h2>
          
          <div className="offerings-grid">
          <CategoriesContainer items={categories}/>
          </div>
        </section>

        <section className="branches">
          <h2>Locate our branches</h2>
          <div className="branch-grid">
            
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.185780985396!2d80.22822871538961!3d13.054792390790354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52667bad989ed7%3A0x6d8be7ba2aeb6fa3!2sKalakshetra%20Foundation!5e0!3m2!1sen!2sin!4v1675372741935!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0143426004625!2d80.27096991537866!3d12.993660990880095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268d94a0f1dcd%3A0x2c2db5b3f5b63f5e!2sKalakshetra%20Foundation!5e0!3m2!1sen!2sin!4v1675372808904!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
<Footer/>
    </div>
  );
};

export default UserHomepage;