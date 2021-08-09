import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../components/layout";
import firstPage from "../pages/first";
import secondPage from "../pages/second";
import thirdPage from "../pages/third";

function App() {
    return (
        <Switch>
            <Route path="/first" component={firstPage} />
            <Route path="/layout/:path?" exact>
                <Layout>
                    <Switch>
                        <Route path="/layout/second" component={secondPage} />
                        <Route path="/layout/third" component={thirdPage} />
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    );
}

export default App;
