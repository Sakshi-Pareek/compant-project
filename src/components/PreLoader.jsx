import React from "react";
import { Loader } from "./Icons";

const PreLoader = () => {
  return (
    <>
      <div className="loader_container d-flex flex-column justify-content-center align-items-center w-100 vh-100 position-fixed">
        <Loader />
      </div>
    </>
  );
};

export default PreLoader;
