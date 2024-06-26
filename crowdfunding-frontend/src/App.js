import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation";
import RoutesConfig from "./RoutesConfig";

function App() {
  return (
      <Router>
          <RoutesConfig/>
      </Router>
  );
}

export default App;
