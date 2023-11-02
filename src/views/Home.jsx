import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Resume from "../components/Resume";
import Books from "../components/Books";
import Contact from "../components/contact/Contact";
import ContactInfo from "../components/contact/ContactInfo";
import Footer from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

const Home = () => {
  useDocumentTitle(
    "Arin Dewangan - Portfolio"
  );
  return (
    <div className="main-left theme-dark">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>My Books</h3>
          </div>
          <Books />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default Home;
