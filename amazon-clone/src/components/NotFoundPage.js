import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="Not__Found">
      <Link to="/">
      <div>
        <img src="https://cdn.mos.cms.futurecdn.net/ecqVaHGaD39WweAMRC6sDN.jpg" alt="" />
      </div>
    </Link>
    </div>
  );
};

export default NotFoundPage;
