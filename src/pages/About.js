import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import aboutBackgroundBanner from "../assets/img/img-banner-about.png";
import Collapse from "../components/Collapse";

const About = () => {
  let reliability = {
    label: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  };

  let respect = {
    label: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };

  let service = {
    label: "Service",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };

  let security = {
    label: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <div>
      <Header />
      <Banner img={aboutBackgroundBanner} />
      <div className="collapse-container">
        <Collapse {...reliability} />
        <Collapse {...respect} />
        <Collapse {...service} />
        <Collapse {...security} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
