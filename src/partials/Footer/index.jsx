import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import GridContainer from "../../components/GridContainer";
import Input from "../../components/Input";
import Section from "../../components/Section";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer rowClassName="gy-40">
        <div className="col-xl col-lg-4 col-sm-6">
          <div className="fw-bold">SafeQuizz</div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Packages</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>

        <div className="col-xl col-lg-4 col-sm-6">
          <div className="fw-bold">Support</div>

          <div className="links">
            <Link to="/">Help</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="col-xl col-lg-4 col-sm-6">
          <div className="fw-bold">Need Help?</div>

          <div className="links">
            <Link to="/">
              <img
                src="/assets/vectors/phone.svg"
                alt="phone"
                title="phone"
                className="vector"
              />
              + 39 351 62 10 872
            </Link>
            <Link to="/">
              <img
                src="/assets/vectors/email.svg"
                alt="email"
                title="email"
                className="vector"
              />
              info@safequizz.com
            </Link>
          </div>
        </div>

        <div className="col-xl col-lg-4 col-sm-6">
          <div className="fw-bold">Connect With Us</div>

          <div className="links d-flex gap-1">
            <Link to="/">
              <img src="/assets/vectors/fb.svg" alt="fb" />
            </Link>
            <Link to="/">
              <img src="/assets/vectors/twitter.svg" alt="twitter" />
            </Link>
            <Link to="/">
              <img src="/assets/vectors/insta.svg" alt="insta" />
            </Link>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-sm-12">
          <div className="fs-12 fw-600">Subscribe to SafeQuizz via Email</div>
          <div className="mt-20 fs-14 fw-500">
            Subscribe to our newsletter and receive exclusive offers and
            discounts.
          </div>

          <div className="newsletter">
            <Input placeholder="Email Address" />
            <Button primary textClassName="fs-12">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </GridContainer>
      <div className="copyright">
        <div className="d-flex justify-content-end">
          <div className="fs-10">© 2022 SafeQuizz. All Rights Reserved.</div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
