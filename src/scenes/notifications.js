import React, { Component } from 'react';
import { Container, Content, Text, Header, Left, Body, Button, Title, Icon, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { observer } from "mobx-react/native";
import Store from '../mobx/store';

@observer
export default class Notifications extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => { Actions.pop(); }}>
                            <Icon name='md-arrow-round-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Notifications</Title>
                    </Body>
                </Header>
                <Content>
                    {Store.notifications.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <Body>
                                    <Text>{item.message}</Text>
                                </Body>
                            </ListItem>
                        );
                    })}
                </Content>
            </Container>
        );
    }
}