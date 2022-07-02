import { Col, Row } from "react-bootstrap";
const ExchangerateCard = ({ data }) => {
  const { type, value } = data;
  return (
    <div className="exchangerateCard">
      <Row xs={4} md={4} lg={4}>
        <Col className="flag">
          <img src={`img/${type.title}.png`} className="flag" />
        </Col>
        <Col>
          <span className="text-type-title">{type.title}</span>
          <br />
          <span className="text-type-description w-100">
            {type.description}
          </span>
        </Col>
        <Col>
          <span className="text-title">ALIŞ</span>
          <br />
          <span className="text-description">{value}</span>
        </Col>
        <Col>
          <span className="text-title">SATIŞ</span>
          <br />
          <span className="text-description text-right">{value}</span>
        </Col>
      </Row>
    </div>
  );
};

export default ExchangerateCard;
