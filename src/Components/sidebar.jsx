import React, { Component } from "react";

import {
  Button,
  Container,
  Icon,
  Menu,
  Sidebar,
  Header,
  Divider,
} from "semantic-ui-react";

// import { Button } from "react-bootstrap";

// import { Button } from "react-bootstrap";

class Sidenav extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={this.props.onHideSidebar}
            vertical
            visible={this.props.visible}
            direction="right"
            width="wide"
          >
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="user outline" circular={true} />
                  My profile
                </Header>
              </Button>
            </Container>
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="bookmark outline" circular={true} />
                  Bookmarks
                </Header>
              </Button>
            </Container>
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="list" circular={true} />
                  Lists
                </Header>
              </Button>
            </Container>
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="setting" circular={true} />
                  Settings
                </Header>
              </Button>
            </Container>

            <Divider clearing />

            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="credit card outline" circular={true} />
                  Your Cards (to subscribe)
                </Header>
              </Button>
            </Container>
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="money bill alternate outline" circular={true} />
                  Add Bank (to earn)
                </Header>
              </Button>
            </Container>

            <Divider clearing />

            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="help" circular={true} />
                  Help and Support
                </Header>
              </Button>
            </Container>
            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="moon outline" circular={true} />
                  Dark Mode
                </Header>
              </Button>
            </Container>

            <Divider clearing />

            <Container>
              <Button size="tiny">
                <Header textAlign="left">
                  <Icon name="log out" circular={true} />
                  Log Out
                </Header>
              </Button>
            </Container>
          </Sidebar>

          <Sidebar.Pusher dimmed={this.props.visible}></Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Sidenav;
