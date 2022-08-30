import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const TimedOut = () => {
  return (
    <Section id="error">
      <img src="/assets/vectors/408.svg" alt="408" title="request timed out" />
      <h1>Connection Timed Out.</h1>
      <p>Please check your internet connection and try again.</p>

      <div className="mt-40">
        <Button dark onClick={() => window.location.reload()}>
          Reload Page
        </Button>
      </div>
    </Section>
  );
};

export default TimedOut;
