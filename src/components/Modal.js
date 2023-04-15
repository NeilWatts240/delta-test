function Modal({ modalLink, setModalOpened }) {
  return (
    <div className="modalWindow">
      <div className="modalContent">
        <img src={modalLink} alt="Image" />
        <div className="modalComment">
          <br />
          Comment
          <br />
          <textarea />
          <br />
          <p> Write a few sentences about the photo.</p>
          <br />
        </div>
        <button onClick={() => setModalOpened(false)}>Save</button>
      </div>
    </div>
  );
}

export default Modal;
