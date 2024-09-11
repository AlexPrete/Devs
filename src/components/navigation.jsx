import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            DEVS
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                COSA FACCIAMO
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                CHI SIAMO
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                SERVIZI
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                GALLERIA
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                RECENSIONI
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                IL NOSTRO TEAM
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                CONTATTI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
