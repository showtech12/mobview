// src/ButtonTabs.js
import React, { useState } from 'react';
import { Button, Nav, Tab, Container, Row, Col } from 'react-bootstrap';
import '../styles/navbar.scss';

const ButtonTabs = () => {
  const [activeKey, setActiveKey] = useState('tab1');

  return (
    <Container className="my-5">
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Container className="content-area bg-info h-100" >
          <Tab.Content style={{height:"900px"}}>
            <Tab.Pane eventKey="tab1">
              <h4>Tab 1 Content</h4>
              <p>This is the content of Tab 1.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">
              <h4>Tab 2 Content</h4>
              <p>This is the content of Tab 2.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab3">
              <h4>Tab 3 Content</h4>
              <p>This is the content of Tab 3.</p>
            </Tab.Pane>
          </Tab.Content>
        </Container>

        {/* Fixed Bottom Tab Navigation */}
        <Nav className="nav-buttons fixed-bottom bg-light justify-content-around">
          <Nav.Item>
            <Button
              variant={activeKey === 'tab1' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveKey('tab1')}
            >
              Tab 1
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant={activeKey === 'tab2' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveKey('tab2')}
            >
              Tab 2
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant={activeKey === 'tab3' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveKey('tab3')}
            >
              Tab 3
            </Button>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </Container>
  );
};

export default ButtonTabs;
