import React from "react";
import { Link } from "react-router-dom";

import FAQHead from "../../../../partials/FAQHead";
import GridContainer from "../../../../components/GridContainer";
import Section from "../../../../components/Section";
import FAQReview from "../../../../partials/FAQReview";

const FAQsTypes = () => {
  return (
    <Section id="faqs-types" className="pb-100">
      <FAQHead />
      <div className="mt-40">
        <GridContainer>
          <div className="col-xl-9 col-lg-8">
            <p>
              There are <strong>165 articles</strong> in our base.
            </p>

            <div className="question-types mt-3">
              <GridContainer>
                <div className="col-md-4 col-6">
                  <div className="type">
                    <img
                      src="/assets/vectors/faq-general.svg"
                      alt="general"
                      title="general"
                    />
                    <p>General</p>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="type">
                    <img
                      src="/assets/vectors/faq-pricing.svg"
                      alt="pricing"
                      title="pricing"
                    />
                    <p>Pricing</p>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="type">
                    <img
                      src="/assets/vectors/faq-product.svg"
                      alt="product"
                      title="product"
                    />
                    <p>Products &amp; Services</p>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="type">
                    <img
                      src="/assets/vectors/faq-payments.svg"
                      alt="payments"
                      title="payments"
                    />
                    <p>Payments</p>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="type">
                    <img
                      src="/assets/vectors/faq-technical.svg"
                      alt="technical"
                      title="technical"
                    />
                    <p>Technical issues</p>
                  </div>
                </div>
                <div className="col-md-4 col-6 d-flex flex-column">
                  <div className="type half-1">
                    <img
                      src="/assets/vectors/question.svg"
                      alt="question"
                      title="question"
                    />
                    <p>Can't find an answer?</p>
                  </div>
                  <div className="type half-2">
                    <img
                      src="/assets/vectors/email-2.svg"
                      alt="email"
                      title="email"
                    />
                    <p>Email us</p>
                  </div>
                </div>
              </GridContainer>
            </div>

            <div className="mt-60">
              <div className="explore-faqs">
                <h5 className="faq-heading sm">
                  <img src="/assets/vectors/star.svg" alt="star" />
                  Popular question
                </h5>

                <div className="links thin">
                  <div>
                    <GridContainer>
                      <div className="col-lg-6">
                        <Link to="#0">
                          Vestibulum laoreet odio ac fermentum mattis?
                        </Link>
                        <Link to="#0">
                          Aenean commodo dolor vel lacus commodo?
                        </Link>
                        <Link to="#0">Is restibulum dolor sagittis?</Link>
                        <Link to="#0">
                          Nam ac erat cursus, volutpat neque pulvinar lectus?
                        </Link>
                        <Link to="#0">
                          Donec rhoncus nunc nec pellentesque ullamcorper
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <Link to="#0">
                          Vestibulum laoreet odio ac fermentum mattis?
                        </Link>
                        <Link to="#0">
                          Aenean commodo dolor vel lacus commodo?
                        </Link>
                        <Link to="#0">Is restibulum dolor sagittis?</Link>
                        <Link to="#0">
                          Nam ac erat cursus, volutpat neque pulvinar lectus?
                        </Link>
                        <Link to="#0">
                          Donec rhoncus nunc nec pellentesque ullamcorper
                        </Link>
                      </div>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="explore-faqs">
              <h5 className="faq-heading sm">
                <img src="/assets/vectors/links.svg" alt="links" />
                Useful links for you
              </h5>

              <div className="links">
                <Link to="#0">Creating a Quiz</Link>
                <Link to="#0">Joining a Quiz</Link>
                <Link to="#0">Sharing a Quiz</Link>
                <Link to="#0">Reviews</Link>
                <Link to="#0">Contact Form</Link>
              </div>
            </div>
          </div>
        </GridContainer>
      </div>

      <FAQReview />
    </Section>
  );
};

export default FAQsTypes;
