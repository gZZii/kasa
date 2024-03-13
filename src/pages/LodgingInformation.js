import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import PageNotFound from "../pages/PageNotFound"
import Informations from "../components/Informations";


const LodgingInformation = () => {

  const {id} = useParams();

    const flat = data.find(item => item.id === id);

    if (!flat) {
        
        return <PageNotFound/>;
    }


  return (
    <div>
      <Header />
      <Carousel images={flat.pictures} />
      <Informations id={flat.id}
                    title={flat.title}
                    description={flat.description}
                    location={flat.location}
                    tags={flat.tags}
                    rating={flat.rating}
                    hostname={flat.host.name}
                    hostpicture={flat.host.picture}
                    equipments={flat.equipments} 
      />
      <Footer />
    </div>
  );
};

export default LodgingInformation;
