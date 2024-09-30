import React from "react";

export const Filterbar = () => {
  return (
    <div className="Filterbar fw-bold" style={{ color: "white" }}>
      <h3 style={{ marginLeft: "1cm" }}> Filter by </h3>
      <br />
      <div className="fbcontent fw-bold">
        <div className="Theme">
          {/* THEME FILTER */}
          <p>Theme</p>
          <div className="input-group p-2 ">
            <div className="Author flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input style={{color:"white"}} type="text" value="A-Z"  className=" themefilterbox  " />
          </div>
        </div>
        <br />
        {/* LIKES FILTER////////////////////// */}
        <div className="input-group p-2 ">
            <div className="Author flter m-2">
              <input className="form-check-input mt-0" type="checkbox" />
            </div>
            <input style={{color:"white"}} type="text" value="Likes"  className=" themefilterbox  " />
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
