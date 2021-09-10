// == Import npm
import React from 'react';

// == Import
import './emojiResult.scss';
// == Composant
const EmojiResult = () => (
  // <div className="app">
  //   <img src={reactLogo} alt="react logo" />
  //   <h1>Composant : App</h1>
  // </div>
  <div
  className="component-emoji-result-row copy-to-clipboard"
>
  {/* <img alt={} src={} /> */}
  {/* <span className="title">{}</span> */}
  <span className="info">Click to copy emoji</span>
</div>
);

// == Export
export default EmojiResult;
