import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+91 **********",
  email: "arin@cybsinnovations.com",
};

const sliderContent = {
  name: "Arin Dewangan",
  designation: "Entrepreneur",
  description: `I'm a versatile individual who wears several hats. As a coder, I craft digital solutions. As an entrepreneur, I lead the way at Cybs Innovations. As a traveler, I explore the world's wonders. And as an ethical hacker, I ensure digital security.`,
  btnText: "Contact Me",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="/">{conctInfo.phone}</a>
            <a href="mailto:arin@cybsinnovations.com">
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Entrepreneur</p>
                    <p className="loop-text lead">Founder, Cybs Innovations</p>
                    <p className="loop-text lead">CEO, Cybs Innovations</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="#contact"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/arin-image.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
