import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/arindewangan" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/in/arindewangan" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/arindewangan" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/arindewangan" },
  { Social: <FaGithub />, link: "https://github.com/arindewangan" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} Copyright{" "}
            <a
              href="https://www.cybsinnovations.com"
              target="_blank"
              rel="noreferrer"
            >
              Cybs Innovations
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
