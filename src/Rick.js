import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './style.css';

const Rick = () => (
    <ReactFullpage
      //fullpage options
      scrollingSpeed = {1000}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Morty</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default Rick