import * as React from 'react';
import * as ReactDOM from 'react-dom';
import routes from "./routes";
import store from "./store";

ReactDOM.render(routes(store), document.getElementById("root"));
