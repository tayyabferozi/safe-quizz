import React from "react";
import Button from "../../../../components/Button";
import GridContainer from "../../../../components/GridContainer";
import Section from "../../../../components/Section";

const Hero = () => {
  return (
    <Section id="landing-hero">
      <GridContainer className="main">
        <div className="col-lg-7 d-flex align-items-center">
          <div>
            <h2>
              Create Your <span className="text-primary-1 fw-bold">Quiz</span>{" "}
              in Minutes.
            </h2>

            <p className="text-light-1">
              Add your own questions, Set custom timers and Images, Share with
              your friends or students.
            </p>

            <div className="mt-40 d-flex btns">
              <Button primary>Create Quiz</Button>
              <Button>Learn More</Button>
            </div>

            <div className="steps">
              <div className="step">
                <div className="number">1</div>

                <div className="title fw-600">Sign Up For Free</div>
                <p className="mt-20">
                  Create a free Teacher or Student account, or play as guest.
                </p>
              </div>
              <div className="step">
                <div className="number">2</div>

                <div className="title fw-600">Create Your Quiz</div>
                <p className="mt-20">
                  Add your own questions and set preferences to get the Quiz
                  Link.
                </p>
              </div>
              <div className="step">
                <div className="number">3</div>

                <div className="title fw-600">Share Everywhere</div>
                <p className="mt-20">
                  Share the Quiz Link with your students or friends and get live
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex align-items-center">
          <div>
            <h1>
              Perfect for{" "}
              <span className="text-primary-1 fw-bold">Teachers</span>
            </h1>

            <p className="text-light-1">
              Create scheduled tests, monitor every screen, get real-time score
              updates and much more!
            </p>

            <div className="mockup-container">
              <img
                className="d-block max-width-100 mx-auto mt-80"
                src="/assets/vectors/test-mockup.svg"
                alt="mockup"
              />
              <img
                className="mockup-2"
                src="/assets/vectors/test-mockup-2.svg"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Hero;
