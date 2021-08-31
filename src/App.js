import React from "react"
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import './style.css';
import BodyHome from "./components/Home.js";
import Navbar from "./components/Navbar";
import LineScroll from "./components/LineScroll.js";
import RickAnim from './components/RickSanchez.js';
import './css/rickSanchez.css';
import rickSanchez from './assets/rickSanchez.png';
import textAreaBasic from './assets/bulleText.png'
import './css/PlanetSlider.css';

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
                <RickAnim rickAnimation="rickFromLeft" rickImage={rickSanchez} rickTextArea={textAreaBasic} rickSay="Best website ever seen ! Blurp !" />
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
                <div className="cardBattle">
                </div>
              </div>
              <div id="slide6" className="section">
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

