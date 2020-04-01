import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import JSX from "./components/JSX";
import Home from "./components/Home";
import Components from "./components/Components";
import StateAndLifecycle from "./components/StateAndLifecycle";
import EventHandling from "./components/EventHandling";
import ConditionalRendering from "./components/ConditionalRendering";
import ListAndKey from "./components/ListAndKey";
import Form from "./components/Form";
import ComponentsComposition from "./components/ComponentsComposition";
import CodeSplitting from './components/CodeSplitting';

const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    content: <Home />,
  },
  {
    path: "/jsx",
    title: "JSX",
    content: <JSX />,
  },
  {
    path: "/components",
    title: "Components and Props",
    content: <Components />,
  },
  {
    path: "/stateandlifecycle",
    title: "State and Lifecycle",
    content: <StateAndLifecycle />,
  },
  {
    path: "/eventhandling",
    title: "Event Handling",
    content: <EventHandling />,
  },
  {
    path: "/conditionalrendering",
    title: "Conditional Rendering",
    content: <ConditionalRendering />,
  },
  {
    path: "/listandkey",
    title: "List and Key",
    content: <ListAndKey />,
  },
  {
    path: "/form",
    title: "Form",
    content: <Form />,
  },
  {
    path: "/composition",
    title: "Components Composition",
    content: <ComponentsComposition />,
  },
  {
    path: "/codesplitting",
    title: "Code Splitting",
    content: <CodeSplitting />
  }
];

function App() {
  return (
    <>
      <Router>
        <div className="side-bar">
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-wrap">
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                children={route.content}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
