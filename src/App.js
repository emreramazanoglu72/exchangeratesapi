import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "./AppProvider";
import ButtomButton from "./components/ButtomButton";
import ExchangerateCard from "./components/exchangerateCard";
import Rectangle from "./components/Rectangle";

const App = () => {
  const { jsonList } = useContext(AppContext);

  return (
    <Container className="app mt-4 pt-4">
      <img src="https://www.mediaclick.com.tr/assets/images/logo-black.svg" />
      <hr class="line" />
      <span className="app-title">Piyasalar</span>
      <hr className="line" />
      <Row>
        <Col xs={12} md="12" sm="12" lg={9}>
          <Row xs={1} md={2} lg={2}>
            {jsonList.map((item, key) => (
              <Col className="mt-2" key={key}>
                <ExchangerateCard data={item} />
                <hr className="line" />
              </Col>
            ))}
          </Row>
        </Col>
        <Col sm="12" md="12" xs="12" lg={3}>
          <Rectangle />
        </Col>
      </Row>
      <ButtomButton />
    </Container>
  );
};

export default App;
