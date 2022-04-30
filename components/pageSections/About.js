import React, { useState } from "react";
import PhotoBio from "../common/PhotoBio";
import connor from "./../../assets/connor.jpg";
import ModalBase from "../common/ModalBase";
import ProfileModal from "../common/ProfileModal";

function About() {
  const [showSuhailModal, setSuhailModal] = useState(false);
  const [showSimonModal, setSimonModal] = useState(false);
  const [showConnorModal, setConnorModal] = useState(false);

  const exitModal = () => {
    setSuhailModal(false);
    setSimonModal(false);
    setConnorModal(false);
  };

  return (
    // flex flex-col sm:flex sm:flex-row justify-center sm:space-x-[10%]
    // make them much smaller now? ^^
    <div>
      <div className="mx-[4%] mt-[4%] mb-[4%]">
        <div className="font-sans mb-[4%] text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Meet Our Team
        </div>
        <div className="flex flex-col sm:flex sm:flex-row justify-center sm:space-x-[10%]">
          <button
            type="button"
            onClick={() => setSuhailModal(!showSuhailModal)}
          >
            <PhotoBio
              image={connor}
              name="Suhail Younus"
              position="Placeholder Position"
            />
          </button>
          <button
            type="button"
            onClick={() => setSimonModal(!showSimonModal)}
          >
            <PhotoBio
              image={connor}
              name="Simon Yuen"
              position="Placeholder Position"
            />
          </button>
          <button
            type="button"
            onClick={() => setConnorModal(!showConnorModal)}
          >
            <PhotoBio
              image={connor}
              name="Connor Chen"
              position="Placeholder Position"
            />
          </button>
        </div>
        <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          We are a team of three highly motivated university students. Our
          idea was born out of a desire to make a difference in the complex
          college application process.
        </div>
      </div>
      {showSuhailModal && (
        <ModalBase
          modalInput={
            <ProfileModal
              image={connor}
              name="Suhail Younus"
              position="Placeholder Position"
              linkedin="suhail-younus-229356165"
              bio="Undergrad at Cornell University"
            />
          }
          exitFunction={exitModal}
        />
      )}
      {showSimonModal && (
        <ModalBase
          modalInput={
            <ProfileModal
              image={connor}
              name="Simon Yuen"
              position="Placeholder Position"
              linkedin="simon-yuen-cs"
              bio="Undergrad at UMass Amherst"
            />
          }
          exitFunction={exitModal}
        />
      )}
      {showConnorModal && (
        <ModalBase
          modalInput={
            <ProfileModal
              image={connor}
              name="Connor Chen"
              position="Placeholder Position"
              linkedin="connorjchen"
              bio="Connor is a currently a Computer Science student at Cornell University. On campus, he is a member of Cornell Data Science and the president of the Cornell Computer Reuse Association. Outside of academics, he enjoys activities like rock climbing, volleyball, and skiing."
            />
          }
          exitFunction={exitModal}
        />
      )}
    </div>
  );
}

export default About;
