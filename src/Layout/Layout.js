import React from "react";
import { withRouter } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import BgImg from "../assets/images/octane.png";

class Layout extends React.Component {
  render() {
    return (
      <main
        className="container-fluid bg-danger "
        style={{
          height: "100vh",
          backgroundImage:
            this.props.location.pathname === "/" ? `url(${BgImg})` : null,
          backgroundRepeat: "no-repeat",
          backgroundSize: "center"
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-6 col-md-4 mx-auto ">
              <img
                src={Logo}
                className="img-fluid "
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="col-md-6 mx-auto">{this.props.children}</div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Layout);
