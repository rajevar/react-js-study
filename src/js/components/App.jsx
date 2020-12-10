// src/js/components/App.jsx
import React from "react";
import List from "./List";
import Form from "./Form";
import { Counters } from "./counters";
import { Hello } from "./Hello";
import ClickCounter from "./hoc/ClickCounter";
import HoverCounter from "./hoc/HoverCounter";
import RenderProps from "./hoc/RenderProps";
import HookCounter from "./hooks/HookCounter";
import UserStateHook from "./hooks/UserStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import DataFetching from "./hooks/fetch/DataFetching";
import HookPaernt from "./hooks/HookParent";
import CounterReducer from "./hooks/reducer/CounterReducer";

const fun = (c) => console.log(`Calling Parent function from ${c} component.`);
const App = () =>
  (

    <div className="row mt-5 p-3">
      <div className="col-md-3 offset-md-1">
        <RenderProps render={(isLoggedIn) => isLoggedIn ? 'User' : 'Guest'} />
        <ClickCounter name="Btn" />
        <HoverCounter name="Hvr" />
        <br />
        <HookCounter />
        <UserStateHook />
        <UseEffectHook />
        <HookPaernt />
      </div>
      <div className="col-md-2 offset-md-1">
        <h2>Articles</h2>
        <List />
        <Hello parentFunction={fun} />
        <br />
        <DataFetching />
        <br />
        <CounterReducer />

      </div>
      <div className="col-md-4 offset-md-1 pm-3">
        <h2>Add a new article</h2>
        <Form />
        <br />
        <Counters />
      </div>
      {/* <Parent /> */}
      {/* <ErrorComponent>
        <Hero heroName="Spidey" />
        <Hero heroName="Thor" />
        <Hero heroName="Joker" />
      </ErrorComponent> */}
    </div>

  );

export default App;
