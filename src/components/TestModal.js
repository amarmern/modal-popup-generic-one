// import Modal from "../modules/modals/components/Modal";
import Modal from "../modules/modals/components/modal.js";
import ModalBody from "../modules/modals/components/ModalBody";
import ModalHeader from "../modules/modals/components/ModalHeader";
import ModalFooter from "../modules/modals/components/ModalFooter";

export default function TestModal(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
        <button onClick={handleSubmit} className="btn btn-primary">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
}
