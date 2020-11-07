import React from "react";
import Container from "react-bootstrap/Container";
import ListaImpresii from "./listaimpresii";

const lista = [
  {
    titlu: "Do not get any service if you want to cancel your subscription",
    text: `Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.`,
    id: 1
  },
  {
    titlu: "Postare 2: Do not get any service",
    text: `Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.`,
    id: 3
  }
];

export default function App() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Impresii</h1>
      <ListaImpresii listaImpresii={lista} />
    </Container>
  );
}
