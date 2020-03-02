import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import intro from "./developer/en/api/dummy1/intro";
import guide from "./developer/en/api/dummy1/guide";
import reference from "./developer/en/api/dummy1/reference";
import CardComponent from "./CardComponent"
import { Container, Row, Col } from 'reactstrap';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Authentication",
          description: "Generate tokens based on the OAuth 2.0 standard to authenticate requests made to Forge APIs and SDKs to display and extend your data in ways that add value and extend."
        },
        {
          id: 2,
          name: "BIM 360",
          description: "Integrate with the Autodesk BIM 360 platform to extend its capabilities to reach segments of the construction ecosystem that don’t have direct access to BIM data."
        },
        {
          id: 3,
          name: "Data Management",
          description: "Access data across BIM 360 team, Fusion Team, BIM 360 Docs, and the Object Storage Service to build apps to display and extend your data in ways that add value to your users."
        },
        {
          id: 4,
          name: "Model Derivative",
          description: "Derive outputs viewable by the Forge Viewer from more than 60 CAD file formats, and extract metadata about the models as well as the individual objects within the model."
        }
      ]
    }
  }

  render() {
    let apiCards = this.state.people.map(api => {
      return (
        <Col col-sm-6 col-md-4>
          <CardComponent key={api.id} api={api} />
        </Col>
      )
    })
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul>
          <h1>Applicantz Assignment</h1>
          <Container fluid>
            <Row>
              {apiCards}
            </Row>
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default Main;