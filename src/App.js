import React, { Component } from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import Login from './scenes/login';
import Home from './scenes/home';
import Notifications from './scenes/notifications';
import DrawerComponent from './components/drawer';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="login"
                        hideNavBar={true}
                        component={Login}
                        initial={true} />
                    <Drawer
                        key="drawer"
                        hideNavBar={true}
                        contentComponent={DrawerComponent}
                        drawerWidth={300}
                        drawerPosition="left">
                        <Scene
                            key="home"
                            hideNavBar={true}
                            component={Home}
                            title="Home" />
                    </Drawer>
                    <Scene
                        key="notifications"
                        hideNavBar={true}
                        component={Notifications}
                        title="Notifications" />
                </Stack>
            </Router>
        )
    }
}