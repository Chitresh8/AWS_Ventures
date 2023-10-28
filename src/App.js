import "./App.css";
import React, { useState } from "react";
import { master } from "./Wahiddetails.js";
import Modal from "./Modal";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [masterDetails, setMasterDetails] = useState(master);
  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const resetClickHandler = () => {
    setSearchInput("");
    setMasterDetails(master);
  };
  const searchClickHandler = () => {
    const datas = masterDetails.filter((el) => {
      return (
        el.mobileUsername
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.email
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.fusionUsername
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        // el.printer
        //   .toLowerCase()
        //   .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.fromDate
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.toDate
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.details
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "") ||
        el.history
          .toLowerCase()
          .includes(searchInput ? searchInput.toLowerCase() : "")
      );
    });
    setMasterDetails(datas);
    console.log(datas);
  };

  const rowClickHandler = (el) => {
    setShow(!show);
    setRowData(el);
    console.log(rowData);
  };

  const closeClickHandler = () => {
    setShow(!show);
    console.log("clicked");
  };

  const muClickHandler = () => {
    const mobUser = [...masterDetails].sort((a, b) => {
      if (a.mobileUsername > b.mobileUsername) {
        return 1;
      } else if (a.mobileUsername < b.mobileUsername) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(mobUser);
  };

  const emailClickHandler = () => {
    const emailId = [...masterDetails].sort((a, b) => {
      if (a.email > b.email) {
        return 1;
      } else if (a.email < b.email) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(emailId);
  };

  const fusionClickHandler = () => {
    const fusionUser = [...masterDetails].sort((a, b) => {
      if (a.fusionUsername > b.fusionUsername) {
        return 1;
      } else if (a.fusionUsername < b.fusionUsername) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(fusionUser);
  };

  const printerClickHandler = () => {
    const printing = [...masterDetails].sort((a, b) => {
      if (a.printer > b.printer) {
        return 1;
      } else if (a.printer < b.printer) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(printing);
  };

  const fromClickHandler = () => {
    const fromPick = [...masterDetails].sort((a, b) => {
      if (a.fromDate > b.fromDate) {
        return 1;
      } else if (a.fromDate < b.fromDate) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(fromPick);
  };

  const toClickHandler = () => {
    const toPick = [...masterDetails].sort((a, b) => {
      if (a.toDate > b.toDate) {
        return 1;
      } else if (a.toDate < b.toDate) {
        return -1;
      } else {
        return 0;
      }
    });
    setMasterDetails(toPick);
  };

  return (
    <div>
      {show ? (
        <Modal
          closeClickHandler={closeClickHandler}
          rowData={rowData}
          mobileUsername={rowData.mobileUsername}
          email={rowData.email}
          fusionUsername={rowData.fusionUsername}
          printer={rowData.printer}
          fromDate={rowData.fromDate}
          toDate={rowData.toDate}
          details={rowData.details}
          history={rowData.history}
        />
      ) : null}

      <header className="header">AWS</header>
      <p className="lowtag">Ventures</p>
      <div className="searchDetails">
        <div>
          <label>Search</label>
          <input
            type="text"
            name="name"
            value={searchInput}
            onChange={searchInputHandler}
          />
        </div>
        <div>
          <button onClick={searchClickHandler}>Search</button>
          <button onClick={resetClickHandler}>Reset</button>
          <button>Master</button>
        </div>
      </div>

      <div class="mainhead">
        <div className="sub-main-head-1">
          <p>All Users</p>
        </div>
        <div className="sub-main-head-2">
          <p>Add</p>
          <p>Import </p>
          <p>Export</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                muClickHandler("mobileUsername");
              }}
            >
              Mobile Username
            </th>
            <th
              onClick={() => {
                emailClickHandler("email");
              }}
            >
              Email
            </th>
            <th
              onClick={() => {
                fusionClickHandler("fusionUsername");
              }}
            >
              Fusion Username
            </th>
            <th
              onClick={() => {
                printerClickHandler("printer");
              }}
            >
              Printer
            </th>
            <th
              onClick={() => {
                fromClickHandler("fromDate");
              }}
            >
              From Date
            </th>
            <th
              onClick={() => {
                toClickHandler("toDate");
              }}
            >
              To Date
            </th>
            <th>Details</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {masterDetails.map((el) => {
            return (
              <tr
                onClick={() => {
                  rowClickHandler(el);
                  // console.log(el);
                }}
                // onClick={() => {
                //   sortClickHandler(el);
                // }}
              >
                <td>{el.mobileUsername}</td>
                <td>{el.email}</td>
                <td>{el.fusionUsername}</td>
                <td>{el.printer}</td>
                <td>{el.fromDate}</td>
                <td>{el.toDate}</td>
                <td>{el.details}</td>
                <td>{el.history}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="checkboxarea">
        <input
          className="checkbox"
          type="checkbox"
          value="agree"
        />
        <p>Agree to the terms and conditions</p>
      </div>
    </div>
  );
};

export default App;
