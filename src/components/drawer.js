import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, ListItem, Text, Body, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { observer } from "mobx-react/native";
import Store from '../mobx/store';

@observer
class DrawerComponent extends Component {

    go(item) {
        Store.setColorTheme(item.color);
        Actions.drawerClose();
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: Store.colorTheme }}>
                    <Thumbnail
                        circle
                        large
                        source={{ uri: Store.avatar }}
                        style={{ marginTop: 10 }} />
                </Header>
                <StatusBar
                    backgroundColor={Store.colorTheme}
                    barStyle="light-content" />
                <Content>
                    {Store.menuItems.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                onPress={() => { this.go(item) }}>
                                <Body>
                                    <Text>{item.label}</Text>
                                </Body>
                            </ListItem>
                        );
                    })}
                </Content>
            </Container>
        );
    }
}

export default DrawerComponent;