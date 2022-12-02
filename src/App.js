import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="App">
      <button className="open-modal-btn">✨ Открыть окно</button>
       <div className="overlay">
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/EizPK3InQbrNK/giphy.gif?cid=790b76114208b238f8daaf04ba7c15c077f656275bfeb171&rid=giphy.gif&ct=g" />
        </div>
      </div>
    </div>
  );
}

export default App;
