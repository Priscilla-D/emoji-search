// == Import npm
import React from 'react';

import EmojiResult from 'src/components/emojiResult';
import SearchInput from 'src/components/searchInput';

import initialTasks from 'src/data/emojiList';


// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    {/* <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1> */}
    <EmojiResult />
    <SearchInput />
  </div>
);

// == Export
export default App;
