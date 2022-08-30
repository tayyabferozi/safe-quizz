import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const NotFound = () => {
  return (
    <Section id="error">
      <img src="/assets/vectors/404.svg" alt="404" title="not found" />
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <div className="mt-40">
        <Button dark>Back to Home</Button>
      </div>
    </Section>
  );
};

export default NotFound;
