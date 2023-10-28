import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <div className="sub-modal-content-1">
            <h1>UserDetails</h1>
          </div>
          <div className="content">
            <div className="sub-modal-content-2">
              <h5>Hour</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Minute</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Seconds</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Data Locale</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
            <div className="sub-modal-content-2">
              <h5>Parameterized</h5>
              <p>You must take a selection</p>
            </div>
          </div>

          <div className="close-btn">
            <button onClick={props.closeClickHandler}>Close</button>
          </div>
        </div>
        <div className="sub-modal-content-3">
          <div className="sub-modal-content-4">
            <h3>User Details</h3>
            <div className="sub-modal-content-5">
              <h5>Mobile Username: </h5>
              <p>{props.mobileUsername}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>Email:</h5>
              <p>{props.email}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>Fusion Username:</h5>
              <p>{props.fusionUsername}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>Printer:</h5>
              <p>{props.printer}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>From Date:</h5>
              <p>{props.fromDate}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>To Date:</h5>
              <p>{props.toDate}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>Details:</h5>
              <p>{props.details}</p>
            </div>
            <div className="sub-modal-content-5">
              <h5>History:</h5>
              <p>{props.history}</p>
            </div>
          </div>
          <div className="close-btn">
            <button onClick={props.closeClickHandler}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
