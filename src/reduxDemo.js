import React, { Component } from "react";
import { createStore } from "redux";
export default class ReduxDemo extends Component {
  render() {

    //Step 2: create a reduces with state and action;
    const reducer = (state, action) => {
        if (action.type === "ATTACK") {
        return action.payload;
        }
        return state;
    };

    // stet 1: creat a store with reducer and state
    const store = createStore(reducer, "peace");

    //Step 3: subscribe
    store.subscribe(() => {
      console.log("store is now", store.getState());
    });

    // Step 4: action dispatch
    store.dispatch({type:"ATTACK", payload:"Iron Man"})

    return <div>test</div>;
  }
}
