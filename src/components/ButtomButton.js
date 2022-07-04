import { Button, Col, Row } from "react-bootstrap";

const ButtomButton = () => {
  return (
    <div className="mt-1 mb-4 ">
      <div className="footer-buttons w-75">
        <button variant="secondary" size="lg" className="btn-detay w-100">
          Detaylı Bilgi
        </button>
        <div class="space"></div>

        <button variant="light" size="lg" className="btn-all w-100">
          Tüm Piyasalar <img src="img/left.png" />
        </button>
      </div>
    </div>
  );
};

export default ButtomButton;
