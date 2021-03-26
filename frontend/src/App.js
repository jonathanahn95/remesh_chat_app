import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import Thoughts from './containers/Thoughts';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/conversation/:conversationId/messages/:messageId" component={Thoughts}/>
    </Switch>
  </div>
);
export default App;
