import { Button, Col, Row } from "react-bootstrap";

const ButtomButton = () => {
  return (
    <Row xs={2} md={2} sm={7} lg={2} className={"mt-4 mb-4"}>
      <Col sm={12} xs={12}>
        <Button variant="secondary" size="lg" className="w-100">
          Detaylı Bilgi
        </Button>
      </Col>
      <Col sm={12} xs={12}>
        <Button variant="light" size="lg" className="w-100">
          Tüm Piyasalar <img src="img/left.png" />
        </Button>
      </Col>
    </Row>
  );
};

export default ButtomButton;
