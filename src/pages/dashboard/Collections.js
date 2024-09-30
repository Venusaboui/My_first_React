import { useEffect, useState } from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Collections = () => {
  const [newCollections, setNewCollections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReports, setSelectedReports] = useState([]);
  const [selectedCollectionName, setSelectedCollectionName] = useState("");
  const [availableReports, setAvailableReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState("");

  useEffect(() => {
    fetch("https://readindata-zxon.vercel.app/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNewCollections(data);
      });

    fetch("https://readindata-zxon.vercel.app/report")
      .then((res) => res.json())
      .then((data) => {
        setAvailableReports(data);
      });
  }, []);

  const handleCreateCollection = (e) => {
    e.preventDefault();
    const newCollection = {
      name: collectionName,
      reports: [],
    };

    fetch("https://readindata-zxon.vercel.app/newcollections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCollection),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewCollections((prev) => [...prev, data]);
        setShowForm(false);
        setCollectionName("");
      });
  };

  const handleDeleteCollection = (id) => {
    fetch(`https://readindata-zxon.vercel.app/newcollections/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNewCollections((prev) =>
          prev.filter((collection) => collection.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting collection:", error);
      });
  };

  const openModal = (collection) => {
    setSelectedReports(collection.reports || []);
    setSelectedCollectionName(collection.name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReports([]);
    setSelectedCollectionName("");
    setSelectedReport("");
  };

  const addReport = () => {
    if (selectedReport) {
      setSelectedReports((prevReports) => [...prevReports, selectedReport]);
      setSelectedReport(""); // Clear the selected report
    }
  };

  const updateReports = (collectionId) => {
    fetch(`hhttps://readindata-zxon.vercel.app/newcollections/${collectionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reports: selectedReports,
      }),
    })
      .then((res) => res.json())
      .then((updatedCollection) => {
        setNewCollections((prev) =>
          prev.map((col) => (col.id === updatedCollection.id ? updatedCollection : col))
        );
        closeModal(); // Close the modal after saving
      });
  };

  return (
    <DashboardLayout>
      <div className="collectiondiv">
        <div className="collections">
          <p className="fw-bold fs-1">Collections</p>
          <div className="colbutcontainer">
            <button className="colbuttons">All</button>
            <button className="colbuttons">Favorites</button>
          </div>
          <div className="collectionscontainer">
            {newCollections.map((collection) => (
              <div key={collection.id} className="maincollection">
                <div className="collimg"></div>
                <div className="colcontent">
                  <span
                    className="fs-4 fw-bold text-center"
                    onClick={() => openModal(collection)}
                    style={{ cursor: 'pointer' }}
                  >
                    {collection.name}
                  </span>
                  <br />
                  <span className="flex-end">
                    {Array.isArray(collection.reports) ? collection.reports.length : 0} reports
                  </span>
                  <br />
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteCollection(collection.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              className="createcollectionsbutton col-2"
              onClick={() => setShowForm(true)}
            >
              +
            </button>
            {showForm && (
              <form
                onSubmit={handleCreateCollection}
                className="createcollectionform w-50 row"
              >
                <div className="col">
                  <input
                    className="m-2 p-2 colforminput rounded"
                    type="text"
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                    placeholder="Collection Name"
                    required
                  />
                </div>
                <div className="col addcollectionbtn">
                  <button type="submit" className="rounded colforminput addcollection">
                    Add Collection
                  </button>
                  <button
                    type="button"
                    className="rounded close-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="fw-bold">{selectedCollectionName}</h2>
            <ul>
              {selectedReports.map((report, index) => (
                <li key={index}>{report}</li>
              ))}
            </ul>
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="m-2 p-2 selectreport"
            >
              <option value="">Select a report</option>
              {availableReports.map((report) => (
                <option key={report.id} value={report.title}>
                  {report.title}
                </option>
              ))}
            </select>
            <button onClick={addReport} className="addreport">
              Add Report
            </button>
            <br />
            <button
              onClick={() => updateReports(selectedReports.id)} // Use the current collection ID
              className="rounded colforminput"
            >
              Save Reports
            </button>
            <br />
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Collections;
