import React from "react";
import Section from "../../../../components/Section";
import FAQItem from "./FAQItem";

const FAQs = () => {
  return (
    <Section id="landing-faqs">
      <img src="/assets/vectors/bg-faq.svg" alt="bg-faq.svg" className="bg" />

      <div className="main">
        <h1>Frequently Asked Questions</h1>

        <div className="faqs">
          {[
            {
              title: "How to Create a Quiz?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
            {
              title:
                "Suspendisse laoreet sapien mattis mauris rhoncus maximus?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
            {
              title: "Maecenas nec arcu vehicula, rhoncus tortor id?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
            {
              title:
                "Donec fermentum, justo et dapibus consequat, arcu tortor auctor massa?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
            {
              title: "Vestibulum bibendum diam ut nunc venenatis faucibus?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
            {
              title: "Nunc pretium diam non viverra porta?",
              body: "Etiam sit amet venenatis lacus, in bibendum mi. Nulla luctus ante vitae velit aliquam, a auctor lacus pulvinar. Phasellus vel tristique lacus. Aliquam sit amet mattis eros. Mauris ut luctus lacus. Vivamus fermentum lorem id interdum gravida. Vestibulum venenatis cursus fermentum. Ut tempor hendrerit quam, eu malesuada est. Phasellus vulputate dictum aliquam. Integer varius justo in metus consequat, id porttitor nibh tincidunt. ",
            },
          ].map((el, idx) => {
            return <FAQItem key={"faq" + idx} num={1 + idx} {...el} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
