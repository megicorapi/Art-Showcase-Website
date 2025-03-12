import React, { useState } from "react";
import ArtBox from "../components/ArtBox";
import data from "../data/data.json";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", title: "" });

  const openModal = (image, title) => {
    setModalContent({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Featured Artworks</h1>
        <p style={styles.headerText}>
          Step into the world of Van Gogh's masterpieces and witness his genius.
        </p>
      </div>

      <div style={styles.galleryContainer}>
        {data.map((art, index) => (
          <ArtBox
            key={index}
            image={art.image}
            altText={art.altText}
            title={art.title}
            year={art.year}
            medium={art.medium}
            onImageClick={openModal} 
          />
        ))}
      </div>

      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={modalContent.image}
              alt={modalContent.title}
              style={styles.modalImage}
            />
            <p style={styles.modalTitle}>{modalContent.title}</p>
            <button style={styles.modalCloseButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#f7f7f7",
    padding: "40px 0",
    textAlign: "center",
    marginBottom: "40px",
  },
  headerTitle: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  headerText: {
    fontSize: "18px",
    color: "#666",
  },
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    padding: "20px 0",
    gap: "35px" 
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    marginBottom: "10px",
  },
  modalTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  modalCloseButton: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Gallery;
