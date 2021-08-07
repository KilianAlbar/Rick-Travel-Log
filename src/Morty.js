import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './style.css';

const Morty = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Morty (welcome to fullpage.js)</p>
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

export default Morty

