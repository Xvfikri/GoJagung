import { Container, Row, Col } from "react-bootstrap"
// import React from "react"
// import HeroImage from "../assets/images/home.png";
// import VectorImage from './assets/images/Vector1.svg';

const vectorImages = [
  'Vector1.svg',
  'Vector2.svg',
  'Vector3.svg',
  'Vector4.svg',
  // Tambahkan nama file vektor sesuai kebutuhan
];

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <div className="cont">
            <Row className="header-box">
              <Col>
                <h1 className="mb-2">
                  Maju Bersama Petani <br /> dengan <span className="Go">Go</span><span className="Jag">Jagung</span>
                </h1>
                <p className="mb-4">
                  Pilih jagung terbaik untuk keluarga Anda! Dengan aplikasi <br /> kami, temukan ragam jagung berkualitas tinggi dan dukung <br /> petani lokal. Ayo, jadilah pelopor perubahan dalam <br /> distribusi jagung!
                </p>
                <button>Mulai Bergabung</button>
              </Col>
            </Row>
          </div>
        </Container>
      </header>

      <div className="layanan w-100 min-vh-100">
        <Row>
          {vectorImages.map((vectorImages, index) => (
            <Col key={index}>
              <div className="minu">
                {/* <img src={process.env.PUBLIC_URL + `/assets/images/${vectorImages}`} alt="" /> */}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default HomePage