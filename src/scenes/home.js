import React, { Component } from 'react';
import { Container, Content, Spinner, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react';
import Store from '../mobx/store';

@observer
class Home extends Component {

    componentDidMount() {
        // request('notifies', { method: 'GET' })
        //     .then(response => {
        //         Store.setNotifications(response.items);
        //     });
        Store.setMenuItems([
            { label: 'Red theme', color: 'red' },
            { label: 'Blue theme', color: 'blue' },
            { label: 'Green theme', color: 'green' }
        ]);
    }

    render() {

        const content = this.loading ?
            <Content padder><Spinner /></Content> :
            <Content padder></Content>;

        return (
            <Container>
                <Header style={{ backgroundColor: Store.colorTheme }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => { Actions.drawerOpen(); }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => { Actions.notifications(); }}>
                            <Icon name='md-notifications' />
                        </Button>
                    </Right>
                </Header>
                {content}
            </Container >
        );
    }
}

export default Home