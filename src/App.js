import React, { Component } from 'react';

import './App.css';
import TemporaryDrawer from "./components/Toolbar/Toolbar";
import Home from "./pages/Home/Home";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Switch, Route } from 'react-router-dom';
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
class App extends Component {

    state = {
        snack_open: false,
        snack_vert: 'top',
        snack_hor: 'center'
    };

    close() {
        this.setState({open: false});
    }

    update() {
        window.reload(true);
    }

    render() {

        const { snack_open, snack_vert, snack_hor } = this.state;

        window['isUpdateAvailable']
            .then(isAvailable => {
                if (isAvailable) {
                    this.setState({open: true});
                }

            });

        return (
            <div className="App">
                <header className="App-header">
                    <TemporaryDrawer/>
                </header>

                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route   path="/about" component={About} />
                        <Route   path="/support" component={Support} />
                    </Switch>
                </main>

                <Snackbar
                    anchorOrigin={{ snack_vert , snack_hor }}
                    open={snack_open}
                    onClose={this.close}
                    ContentProps={{
                        'aria-descri    bedby': 'message-id',
                    }}
                    message={<span id="message-id">Update available! Click the button to reload :D</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.update}>
                            Update
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.close}
                        >
                            <Icon>close</Icon>
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}

export default App;
