import React from "react";

const AwardContnet = [
  {
    img: "ec-council.png",
    awardName: "Ethical Hacking Essentials",
    awardFor: "EC-Council",
    delayAnimation: "0",
  },
  {
    img: "ec-council.png",
    awardName: "Network Defense Essentials",
    awardFor: "EC-Council",
    delayAnimation: "400",
  },
  {
    img: "ec-council-learning.png",
    awardName: "Android Bug Bounty Hunting: Hunt Like a Rat",
    awardFor: "EC-Council Learning",
    delayAnimation: "200",
  },
  {
    img: "hubspot.png",
    awardName: "Digital Advertising Certified",
    awardFor: "Hubspot",
    delayAnimation: "400",
  },
  {
    img: "hubspot.png",
    awardName: "Frictionless Sales",
    awardFor: "Hubspot",
    delayAnimation: "400",
  },
  {
    img: "hackerrank.png",
    awardName: "JavaScript (Intermediate)",
    awardFor: "Hackerrank",
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
