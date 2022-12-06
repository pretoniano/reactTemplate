import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import ProductImg from "../../public/imgs/produto.jpg";
import categoryService from "../../services/category.service";
import productService from "../../services/product.service";

export default function CadastrarProduto() {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    categoryService.getCategories().then((r) => setCategoryList(r));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const produto = await productService.createProduct({
      name,
      price,
      category,
    });
    if (produto.id) {
      router.push("/produtos");
    } else {
      alert("falha ao criar o produto, tente novamente");
    }
  }

  return (
    <Container className="p-2">
      <Card className="p-2">
        <Form onSubmit={handleSubmit}>
          <h2>categoria Produto</h2>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do produto"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              placeholder="Insira o reço do produto"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma categoria</option>
              {categoryList.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
