import React from "react";
import Social from "./Social";
import Services from "./Services";
import Awards from "./Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/arin-image-2.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Founder, Cybs Innovations</p>
                  <h3>Arin Dewangan</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                    Arin is an entrepreneur from India, currently runs the IT
                    Services Company. His journey in the tech world began with a
                    fascination for all things digital. He started as a
                    freelance developer, helping people with websites and apps.
                    What made him stand out was his obsession with getting every
                    detail just right, his constant pursuit of excellence, and
                    his knack for coming up with smart solutions to problems.
                  </p>
                  <p>
                    Today, Arin is the CEO of Cybs Innovations, a company known
                    for its wide range of tech services, from building websites
                    and apps to keeping things safe from cyber threats. But
                    Arin's not just about technology; he's all about teaching
                    and sharing his knowledge. He believes that in tech, there's
                    always something new to learn. It's not just about writing
                    code; it's about thinking, solving problems, and being
                    creative.
                  </p>
                  <p>
                    Arin's goal is to guide you on your own tech journey,
                    whether you're just starting or you're an experienced pro.
                    His story shows that in the tech world, there are no limits
                    to what you can achieve with the right attitude, hard work,
                    and a bit of creativity.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Birthday: </label>
                          <span>7th Mar 2004</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Bengaluru, India</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Blood Group</label>
                          <span>O+</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>arin@cybsinnovations.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          {/* <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services /> */}

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          <div className="title">
            <h3>Awards & Certifications.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

        </div>
      </section>
    </>
  );
};

export default About;
