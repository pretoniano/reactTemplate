import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductImg from "../../public/imgs/produto.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function DetalhesProduto() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Container className="p-5">
        <Card className="p-2">
          <h2>Detalhes do Produto</h2>
          <strong>Nome</strong>
          <p>Produto {id}</p>

          <strong>Categoria</strong>
          <p>Categoria {id}</p>

          <strong>Preço</strong>
          <p>R$ {id},99</p>

          <strong>Criado em</strong>
          <p>{new Date().toLocaleString()}</p>

          <Col>
            <Image src={ProductImg} />
          </Col>
        </Card>
      </Container>
    </>
  );
}
