import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./singleProject.scss";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrimaryButton from "../buttons/primaryButton";

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
  url,
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
      <Modal.Header closeButton closeVariant={"white"}>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a href={url} target="_blank" rel="noreferrer">
          <GatsbyImage image={image} alt={title} />
        </a>
      </Modal.Body>
      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <PrimaryButton onClick={onHide}>Close</PrimaryButton>
      </Modal.Footer>
    </Modal>
  );
}

function SingleProject({ project }) {
  const [modalShow, setModalShow] = useState(false);

  const image = getImage(project.image);
  // const isBrowser = typeof window !== "undefined";

  return (
    <>
      {modalButton(() => setModalShow(true), image, project.title)}

      <MyVerticallyCenteredModal
        title={project.title}
        description={project.description}
        image={image}
        url={project.url}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
}

export default SingleProject;
