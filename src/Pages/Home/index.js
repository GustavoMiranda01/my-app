import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Burger from "../../assets/burgerLogo.svg";

import {
  Container,
  Image,
  ContainerIntens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrders() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: inputOrder.current.value,
        name: inputName.current.value,
      }
    );

    setOrders([...orders, newOrder]);

    history.push('/orders')
  }

  return (
    <Container>
      <Image alt="Burger-Logo" src={Burger} />
      <ContainerIntens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada..." />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <Button onClick={addNewOrders}>Novo Pedido</Button>
      </ContainerIntens>
    </Container>
  );
}

export default App;
