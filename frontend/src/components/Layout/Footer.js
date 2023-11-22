import React from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube,FaFacebook,FaInstagram} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="row footer d-flex flex-column flex-sm-row flex-md-row flex-lg-row">
    <div className="banner col-12 col-lg-5">
    </div>
    <div className="features col-12 col-lg-2">
      <h5>Features</h5>
      <div>
        <p>How it works</p>
        <p>Pricing</p>
        <p>Tempelates</p>
      </div>


    </div>
    <div className="resouces col-12 col-lg-2">

      <h5>Resources</h5>
      <div>
        <p>Download Apps</p>
        <p>Help Center</p>
        <p>Integrations</p>
      </div>


    </div>
    <div className="company col-12 col-lg-2">
      <h5>Company</h5>
      <div>
        <p>About Us</p>
        <p>Help Center</p>
        <p>Integrations</p>
      </div>


    </div>
    <div className="icons col-12 col-lg-1">
    <IoLogoTwitter />
    <FaYoutube />
    <FaFacebook />
    <FaInstagram />


    </div>
  </div>
  )
}
