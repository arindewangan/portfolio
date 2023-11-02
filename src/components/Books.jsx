import React from "react";

const Books = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid">
            <div className="blog-img">
            <img src={`img/books/book-1.png`} alt="a path to full stack"></img>
            </div>
            <div className="blog-info">
              <div className="meta">02/NOV/2023 - BY ARIN</div>
              <h6>
                <a>
                THE JOURNEY TO FULL-STACK WEB DEVELOPMENT: A COMPREHENSIVE GUIDE
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid">
            <div className="blog-img">
              <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">XX/XXX/2023 - BY ARIN</div>
              <h6>
                <a>
                  Coming Soon
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

      </div>
      {/* End .row */}
    </>
  );
};

export default Books;
