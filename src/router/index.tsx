import Main from 'views/Main';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <Switch>
      <div>
        <Route path={'/'} component={Main} />
      </div>
    </Switch>
  );
};

export default Router;
