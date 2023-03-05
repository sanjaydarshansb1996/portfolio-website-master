import styled from "styled-components";
import { Timeline, Event } from "../";

export const TimelineSection = () => {
  return (
    <TimelineWrapper>
      <span className="title">Professional Carrier Timeline</span>
      <Timeline>
        <Event
          interval={"June 2020 - Present"}
          title={"Software Engineer"}
          subtitle={"Products and Innovations Team - Ecs Fin Inc."}
        >
          <h4 style={{ fontWeight: "700" }}>
            Enterprise Integrator Application
          </h4>
          <p>
            Enterprise Integrator visualizes messages from various sources
            systems in different formats such as tables, graphs and all.
          </p>
          <ul>
            <li>
              Built an UI using ReactJS for visualizing transactions involved in
              banking.
            </li>
            <br></br>
            <li>
              <h5 style={{ fontWeight: "600" }}>Tech stack </h5> ReactJS, Ant
              Design, Styled-Components, Redux Toolkit, React Flow, Keycloak,
              React Query
            </li>
          </ul>
          <br></br>
          <h4 style={{ fontWeight: "700" }}>IMS - Hub Application</h4>
          <p>
            IMS Hub visualizes suite of different products specific to a
            financial institution.
          </p>
          <ul>
            <li>
              Built an UI using ReactJS for detailed showcase of IMS products
              specific to a financial institution.
            </li>
            <br></br>
            <li>
              <h5 style={{ fontWeight: "600" }}>Tech stack </h5> ReactJS,
              Keycloak, React Query
            </li>
          </ul>
          <br></br>
          <h4 style={{ fontWeight: "700" }}>
            Enterprise Integrator API Server
          </h4>
          <p>
            Handles the API calls to the different spring boot micro services.
          </p>
          <ul>
            <li>
              Built multiple routes using Express.js for fetching response to
              the GUI application.
            </li>
            <br></br>
            <li>
              <h5 style={{ fontWeight: "600" }}>Tech stack </h5>
              NodeJS, Express.js, Axios
            </li>
          </ul>
          <br></br>
          <h4 style={{ fontWeight: "700" }}>Realtime Payment Processing</h4>
          <p>
            RPP visualizes the real time payment messages sent from IMS to the
            financial institution.
          </p>
          <ul>
            <li>
              Authentication and authorization implemented in the server side.
            </li>
            <br></br>

            <li>
              Built an UI using ReactJS for visualizing real time payments.
            </li>

            <br></br>
            <li>
              <h5 style={{ fontWeight: "600" }}>Tech stack </h5>
              ReactJS, Ant Design, NodeJS, Express.js, Axios{" "}
            </li>
          </ul>
          <br></br>
          <h4 style={{ fontWeight: "700" }}>Cash Position Application</h4>
          <p>
            Cash Position visualizes accounts and transaction listing along with
            various form inputs to modify account details
          </p>
          <ul>
            <li>
              Built an UI using ReactJS for visualizing accountsand transactions
              involved in banking.
            </li>

            <br></br>
            <li>
              <h5 style={{ fontWeight: "600" }}>Tech stack </h5>
              ReactJS, Antd Design, Styled-Components, Redux Toolkit, React
              Flow, Keycloak, React Query{" "}
            </li>
          </ul>
          <br></br>
        </Event>
        <Event
          interval={"2014 - 2018"}
          title={"Bachelor of Technology in Computer Science"}
          subtitle={"Kerala University"}
        >
          CGPA:8.39/10
        </Event>
      </Timeline>
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  margin: 0 0.4rem;
  .title {
    max-width: 800px;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${(props) => props.theme.text};
    font-size: 2rem;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    .title {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 576px) {
    .title {
      font-size: 1.5rem;
    }
  }
`;

export default TimelineSection;
