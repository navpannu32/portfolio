import React from 'react';
import './App.css'; // You can import your CSS styles here
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import TechList from './components/TechList';
import DeveloperSetup from './components/DeveloperSetup';
import Resources from './components/Resources';
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>My Portfolio</h1>
      </header>

      {/* Basic Information */}
      <BasicInformation />

      {/* Work Section */}
      <Work />

      {/* Tech List */}
      <TechList />

      {/* Developer Setup */}
      <DeveloperSetup />

      {/* Developer Setup */}
      <Resources />
    </div>
  );
}

export default App;
