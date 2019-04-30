import * as React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header";
import Search from "./components/search";
import {store} from "./store/StoreState";

class App extends React.Component {

    public render() {

        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Header/>
                        <Switch>
                            <Route exact={true} path="/search/:searchString" component={Search}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
