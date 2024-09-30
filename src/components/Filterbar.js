import React, { useState } from "react";

export const Filterbar  = ({ reports, setFilteredReports }) => {

  const [themeFilter, setThemeFilter] = useState("");
  const [isThemeChecked, setIsThemeChecked] = useState(false);

  const applyFilters = () => {
    let filteredReports = reports;

    // Filter by theme if the checkbox is checked
    if (isThemeChecked && themeFilter) {
      filteredReports = filteredReports.filter(report =>
        report.theme.toLowerCase().includes(themeFilter.toLowerCase())
      ).sort((a, b) => a.theme.localeCompare(b.theme)); // Sort alphabetically by theme
    }

    setFilteredReports(filteredReports);
  };

  return (
    <div className="Filterbar fw-bold" style={{ color: "white" }}>
      <h3 style={{ marginLeft: "1cm" }}> Filter by </h3>
      <br />
      <div className="fbcontent fw-bold">
      <div className="Theme">
          <p>Theme</p>
          <div className="input-group p-2">
            <div className="flter m-2">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                checked={isThemeChecked}
                onChange={() => {
                  setIsThemeChecked(!isThemeChecked);
                  applyFilters(); // Apply filters whenever checkbox is toggled
                }}
              />
            </div>
            <input
              style={{ color: "white" }}
              type="text"
              value={themeFilter}
              onChange={(e) => {
                setThemeFilter(e.target.value);
                applyFilters(); // Apply filters as user types
              }}
              className="themefilterbox"
            />
          </div>
        </div>
        {/* AUTHOR FILTER//////////////////////////// */}
        <div className="Author">
          <p>Author</p>
          <div className="input-group p-2 ">
            <div className="Author flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" className=" filterbox " />
          </div>
        </div>
        <br />

        <div className="Year">
          <p>Year</p>
          <div className="input-group p-2">
            <div className="Year flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" className=" filterbox " />
          </div>
        </div>
        <br />

        <div className="Examiner">
          <p>Examiner</p>
          <div className="input-group p-2 ">
            <div className="Examiner flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" className=" filterbox " />
          </div>
        </div>
        <br />

        <div className="Reporter">
          <p>Reporter</p>
          <div className="input-group p-2 ">
            <div className="Reporter flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input type="text" className=" filterbox " />
          </div>
        </div>
      </div>
    </div>
  );
};
