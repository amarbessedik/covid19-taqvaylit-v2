import React, { useState, useEffect } from "react";
import './TextSlider.css';

const TextSlider = () => {
  const titles = [
    "AMḌFAR AGREƔLAN N ANFAFAD N CURUNA WIS-2 (aCuW-2)",
    "WORLDWIDE TRACKER OF THE NOVEL CORONAVIRUS (SARS-CoV-2)",
    "TRAQUEUR INTERNATIONAL DU NOUVEAU CORONAVIRUS (nCoV-19)",
    "المقتفي العالمي لأثر فيروس كورونا المستجد - السارس-2",
  ];

  const [index, setIndex] = useState(0);
  const [classToggle, setClassToggle] = useState("slide-right");


useEffect(() => {
  const interval_left = setInterval(() => {
    setClassToggle("slide-left");
  }, 10000);
  const interval_right = setInterval(() => {
    setClassToggle("slide-right");
    if (index > 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 15000);
  return () => {
    clearInterval(interval_left);
    clearInterval(interval_right);
  };
}, [index]);
   

  return (
    <div className={`main ${classToggle}`}>
      <p>
        {index < titles.length
          ? titles[index]
          : "Tamaziɣt tezmmer ula d nettat atteḍfer tamusni tatrart (Aselkiman) am nettat am timslayin niḍen."}
      </p>
    </div>
  );
};

export default TextSlider;
