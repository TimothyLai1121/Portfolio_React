import React from 'react';
import ModalImage from 'react-modal-image';
import resumeImage from '../assets/Resume.jpg';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <div className="resume-image-container">
        <ModalImage
          small={resumeImage}
          large={resumeImage}
          alt="Resume"
          className="resume-image"
        />
      </div>
    </section>
  );
};

export default Resume;
