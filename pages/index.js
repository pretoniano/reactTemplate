import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Banner from "../public/imgs/cara3.png";
import HomeStoreList from "../components/HomeStoreList";

export default function Home() {
  return (
    <>
      <Row className="text-center justify-content-center pt-5">
        <Col
          md={6}
          style={{ borderRadius: "24px", backgroundColor: "#2596be" }}
        >
          <Row className="align-items-center mt-3 text-white">
            <Col>
              <Image src={Banner} />
            </Col>
            <Col>
              <h2>O marketplace</h2>
              <h3>Venha vender com a gente</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center p-5">
        <h1>Nossos clientes:</h1>
      </div>
      <HomeStoreList />
    </>
  );
}
