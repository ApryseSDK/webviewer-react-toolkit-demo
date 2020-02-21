import { Button, ButtonGroup } from '@pdftron/webviewer-react-toolkit';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <div className="app__placeholder">Click Load PDF to begin organizing pages.</div>
      </main>
      <footer className="app__footer">
        <ButtonGroup>
          <Button buttonStyle="borderless">Load PDF</Button>
          <Button disabled>Download PDF</Button>
        </ButtonGroup>
      </footer>
    </div>
  );
}

export default App;
