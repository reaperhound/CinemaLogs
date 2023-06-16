import React, { useEffect, useRef } from "react";

const Modal = ({ ytubeURL, setModalOpen }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="modal-container fixed inset-0 flex justify-center items-center z-[70]">
        <div className="fixed w-full h-full brightness-20 opacity-60 bg-black"></div>
      <div className="modal-content bg-white rounded-lg shadow-lg" ref={modalRef}>
        <div className="modal-body relative z-[100]">
          <iframe
            className="lg:w-[50vw] lg:h-[50vh] w-[90vw] h-[30vh]"
            src={ytubeURL}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="modal-footer px-4 py-3 bg-gray-200 flex justify-end">
          <button
            className="btn bg-gray-500 text-white hover:bg-gray-700"
            onClick={closeModal}
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
