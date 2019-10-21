import React from 'react'
import logo from './logo.svg'
import './App.css'
import MapView from './components/MapView.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={MapView} />
    </Router>
  );
}

export default App;