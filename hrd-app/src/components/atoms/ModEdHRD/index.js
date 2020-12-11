import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalEdHRD = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link color="danger" onClick={toggle}>
        {buttonLabel}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Nilai HRD</ModalHeader>
        <ModalBody>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio1" value="option1" />
            <label className="form-check-label" for="radio1">1</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio2" value="option2" />
            <label className="form-check-label" for="radio2">2</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio3" value="option3" />
            <label className="form-check-label" for="radio3">3</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio4" value="option4" />
            <label className="form-check-label" for="radio4">4</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio5" value="option5" />
            <label className="form-check-label" for="radio5">5</label>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Simpan
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEdHRD;
