import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./singleProject.scss";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const modalButton = (handleClick, previewImg, alt) => (
  <motion.div
    className="modal-button"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    onClick={handleClick}
  >
    <GatsbyImage image={previewImg} alt={alt} />
  </motion.div>
);

function MyVerticallyCenteredModal({
  title,
  description,
  image,
  show,
  onHide,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a href="#" target="_blank" rel="noreferrer">
          <GatsbyImage image={image} alt={title} />
        </a>
      </Modal.Body>
      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SingleProject({ project }) {
  const [modalShow, setModalShow] = useState(false);
  const image = getImage(project.image);
  console.error(project.title);
  console.error("image=>", project.image);
  return (
    <>
      {modalButton(() => setModalShow(true), image, project.title)}

      <MyVerticallyCenteredModal
        title={project.title}
        description={project.description}
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SingleProject;
