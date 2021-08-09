import React from "react"
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import './style.css';
import BodyHome from "./Home.js";
import Navbar from "./Navbar"
import LineScroll from "./LineScroll.js";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div id="slide1" className="section section1">
                <Navbar />
                <BodyHome />
                <LineScroll />
              </div>
              <div className="section">
                <div id="slide2" className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div id="slide3" className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div id="slide4" className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div id="slide5" className="section">
                <h3>Section 3</h3>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;

