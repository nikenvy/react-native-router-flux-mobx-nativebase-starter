import React, { Component } from 'react';
import { Container, Text, Content, Form, Item, Input, Label, Button, Spinner, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Login extends Component {

    @observable loading = false;

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = async () => {
        this.loading = true;
        Actions.home();
    }

    render() {
        // const logoUrl = "";
        const content = this.loading ?
            <Content padder><Spinner /></Content> :
            <Content
                padder
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {/* <Thumbnail square large source={{ uri: logoUrl }} /> */}
                <Form
                    style={{ width: 300 }}>
                    <Label style={{ marginTop: 25 }}>Username</Label>
                    <Item regular>
                        <Input
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email} />
                    </Item>

                    <Label style={{ marginTop: 25 }}>Password</Label>
                    <Item regular last>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password} />
                    </Item>
                    <Button
                        block
                        primary
                        rounded
                        style={{ marginTop: 25 }}
                        onPress={this.handleLogin.bind(this)}>
                        <Text>Enter</Text>
                    </Button>
                </Form>

            </Content>;

        return (
            <Container>
                {content}
            </Container >
        );
    }
}

export default Login