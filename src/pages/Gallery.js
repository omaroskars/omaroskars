/** @jsx jsx */
import { jsx } from "@emotion/core";

import Layout from "../components/Layout";
import { Columns, Column } from "../components/ui/Column";
import Card from "../components/ui/card/Card";

import budaCover from "../images/budapest/cover.jpg";
import architectCover from "../images/architect/cover.jpg";
import asiaCover from "../images/asia/cover.jpg";
import peopleCover from "../images/people/cover.jpg";
import animalsCover from "../images/animals/cover.jpg";
import landscapeCover from "../images/landscape/cover.jpg";

const PhotoBox = ({ image, title, onClick }) => (
  <Column>
    <Card image={image} content={title} onClick={onClick}></Card>
  </Column>
);
const Gallery = () => {
  return (
    <Layout>
      <Columns>
        <PhotoBox image={budaCover} onClick={() => {}} title="Budapest" />
        <PhotoBox
          image={asiaCover}
          onClick={() => {}}
          title="South-East Asia"
        />
        <PhotoBox image={animalsCover} onClick={() => {}} title="Animals" />
      </Columns>
      <Columns>
        <PhotoBox image={architectCover} onClick={() => {}} title="Architect" />
        <PhotoBox image={peopleCover} onClick={() => {}} title="People" />

        <PhotoBox image={landscapeCover} onClick={() => {}} title="Landscape" />
      </Columns>
    </Layout>
  );
};

export default Gallery;
