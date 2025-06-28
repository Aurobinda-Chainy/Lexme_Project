import React from "react";
import Slider from "react-slick";
import PatientStoryCard from "./PatientStoryCard";

const patientStories = [
    {
        id:1,
        description:
         "Mr. Aurobinda from Kenya had a congenital malformation called Arnold Chiari Malformation. Dr. Gurneet Sawhney, Consultant Neurosurgery, Fortis Hospital, Mulund performed Cerebro Subdivide Surgery. Immediately post-surgery, we observed good results and the patient could fly back home within a short time.",
         hospital: "Fortis Hospital, Mulund, Mumbai",
    },
    
    {
        id:2,
        description:
         "Ms. Shreya from Kenya had a congenital malformation called Arnold Chiari Malformation. Dr. Gurneet Sawhney, Consultant Neurosurgery, Fortis Hospital, Mulund performed Cerebro Subdivide Surgery. Immediately post-surgery, we observed good results and the patient could fly back home within a short time.",
         hospital: "Fortis Hospital, Mulund, Mumbai",
    },
    
    {
        id:3,
        description:
         "Ms. Subhra from Kenya had a congenital malformation called Arnold Chiari Malformation. Dr. Gurneet Sawhney, Consultant Neurosurgery, Fortis Hospital, Mulund performed Cerebro Subdivide Surgery. Immediately post-surgery, we observed good results and the patient could fly back home within a short time.",
         hospital: "Fortis Hospital, Mulund, Mumbai",
    },

];

const PatientStoriesSection = () => {
     const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  }

     return (
        
         <section className="py-8 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our Patient’s Stories
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {patientStories.map((story) => (
            <div key={story.id} className="px-3">
              <PatientStoryCard story={story} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PatientStoriesSection;
