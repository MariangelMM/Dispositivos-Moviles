import React from "react";
import { Route, Switch } from "react-router-dom";

import { main } from "./routes";

const Routing = () => {
    return (
        <Switch>
            <Route path={main.path} component={main.component} />
        </Switch>
    )
}

export default Routing;