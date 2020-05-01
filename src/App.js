import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import StepComponent from './components/step/step.component';

import UploadPage from './pages/uploadpage/uploadpage.component';
import GuidePage from './pages/guidepage/guidepage.component';
import MakePage from './pages/makepage/makepage.component';
import ExportPage from './pages/exportpage/exportpage.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <StepComponent />
        <Switch>
          <Route exact path='/upload' component={UploadPage} />
          <Route exact path='/guide' component={GuidePage} />
          <Route exact path='/make' component={MakePage} />
          <Route exact path='/export' component={ExportPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
