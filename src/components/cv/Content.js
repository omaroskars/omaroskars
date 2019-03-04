import React from "react";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";

function Education() {
  return (
    <div>
      <Title text="Menntun" className="is-5" />
      Háskólinn í Reykjavík
    </div>
  );
}

function Experience() {
  return (
    <div>
      <Title text="Starfsreynsla" className="is-5" />
      <div>
        <Title text="Advania" className="is-6" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          tristique nisi. Duis sagittis maximus dui sit amet iaculis. Integer at
          rhoncus eros, vitae venenatis tortor. Phasellus ac suscipit elit, non
          fermentum eros.
        </Paragraph>
      </div>

      <div>
        <Title text="Sendiráðið" className="is-6" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          tristique nisi. Duis sagittis maximus dui sit amet iaculis. Integer at
          rhoncus eros, vitae venenatis tortor. Phasellus ac suscipit elit, non
          fermentum eros.
        </Paragraph>
      </div>
    </div>
  );
}
function Content() {
  return (
    <Section>
      <Paragraph>
        After leading a developer-team of 5 people I have gained excperience in
        fields of
        <ul>
          <li>software architecture</li>
          <li>continous delivery</li>
          <li>deployment</li>
        </ul>
        One of my strong suit is creating solid ground for a web application so
        it can scale without a problem.
      </Paragraph>

      <Paragraph>
        A successful professional with a wealth of transferable skills gained in
        the retail sector. Possesses a commitment to delivering customer service
        excellence and a reputation for ensuring complete customer satisfaction.
        Able to reduce costs by implementing processes that are more efficient.
        Maximises profits by analysing trends and providing advice and guidance
        to junior colleagues. Currently undertaking additional training in food
        hygiene, in order to access a career in the hospitality industry.
      </Paragraph>

      <Experience />
      <Education />
    </Section>
  );
}

export default Content;
