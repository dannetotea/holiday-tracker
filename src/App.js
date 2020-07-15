import React, { useState } from "react";
import "@syneto/compass-react/lib/styles.css";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Layout, Button } from "@syneto/compass-react";
import Centralizator from "./pages/Centralizator";
import Desfasurator from "./pages/Desfasurator";

function App() {
  const [showAddModal, toggleAddModal] = useState(false);
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/centralizator" />
      </Route>
      <Route path="/centralizator">
        <Layout
          hasDrawer={false}
          header={
            <div className="d-flex pl-5 py-2 bg-brand-light-80">
              <div className="pt-2 pr-4">Syneto Vacation Tracker</div>
              <Button
                role="tertiary"
                onClick={() => {
                  toggleAddModal(true);
                }}
              >
                Add Employee
              </Button>
            </div>
          }
          content={
            <Centralizator
              showAddModal={showAddModal}
              toggleAddModal={toggleAddModal}
            />
          }
        />
      </Route>
      <Route path="/desfasurator/:id">
        <Layout
          hasDrawer={false}
          header={
            <div className="d-flex pl-5 py-2 bg-brand-light-80">
              <div className="pt-2 pr-4">Syneto Vacation Tracker</div>
              <Button
                role="tertiary"
                onClick={() => {
                  history.push("/centralizator");
                }}
              >
                Centralizator
              </Button>
            </div>
          }
          content={<Desfasurator />}
        />
      </Route>
    </Switch>
  );
}

export default App;
