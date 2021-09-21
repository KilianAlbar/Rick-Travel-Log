import React from "react"

/* Library */
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

/* Components */
import BodyHome from "./components/Home.js";
import Navbar from "./components/Navbar";
import LineScroll from "./components/LineScroll.js";
import RickAnim from './components/RickSanchez.js';
import TinderRick from "./components/TinderRick.js";
import PlanetSlider from './components/PlanetSlider.js';
import PlanetDetails from './components/PlanetDetails.js';

/* Style */
import './style.css';
import './css/rickSanchez.css';

/* Assets */
import rickSanchez from './assets/rickSanchez.png';
import textAreaBasic from './assets/bulleText.png'


class FullpageWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classState : "imgAnim"
    };
  }

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
                  <PlanetSlider />
                </div>
                <div id="slide3" className="slide">
                  <h3>Slide 2.2</h3>
                  <PlanetDetails />
                </div>
                <div id="slide4" className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div id="slide5" className="section">
                <Navbar />
                <TinderRick />
                <LineScroll />
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

