import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/arindewangan" },
  { Social: <FaTwitter />, link: "https://www.linkedin.com/in/arindewangan" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/arindewangan" },
  { Social: <FaLinkedinIn />, link: "https://twitter.com/arindewangan" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/arindewangan" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
