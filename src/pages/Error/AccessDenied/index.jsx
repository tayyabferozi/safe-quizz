import React from "react";
import Button from "../../../components/Button";
import Section from "../../../components/Section";

const AccessDenied = () => {
  return (
    <Section id="error">
      <img src="/assets/vectors/403.svg" alt="403" title="access denied" />
      <h1>Access Denied</h1>
      <p>You do not have access to this page.</p>

      <div className="mt-40">
        <Button dark>Back to Home</Button>
      </div>
    </Section>
  );
};

export default AccessDenied;
