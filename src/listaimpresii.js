import React from "react";
import Impresie from "./impresie";

const ListaImpresii = (props) => {
  const lista = props.listaImpresii.map((item) => {
    const { titlu, text } = item;
    return <Impresie titlu={titlu} text={text} key={item.id} />;
  });

  return lista;
};

export default ListaImpresii;
