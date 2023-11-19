import React, { useState, useEffect } from "react";

import axios from "axios";

import BagBurger from "../../assets/bagBurger.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  Image,
  ContainerIntens,
  H1,
  Button,
  Order,
} from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Para importar os cadastros do backend
  // useEffect(() => {

  //   async function fecthOrders(){
  //     const { data: newOrders } = await axios.get("http://localhost:3001/orders")

  //     setOrders(newOrders);
  //   }

  //   fecthOrders()
  // }, [])

  async function deleteUser(orderId) {

    // Para deletar do backend
    // await axios.delete(`http://localhost:3001/orders/${orderId}`)

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  return (
    <Container>
      <Image alt="Burger-Logo" src={BagBurger} />
      <ContainerIntens>
        <H1>Pedidos</H1>    

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <p>{order.order}</p> <p>{order.name}</p>
              <button onClick={() => deleteUser(order.id)}>
                <img src={Trash} alt="Lata-de-Lixo" />
              </button>
            </Order>
          ))}
        </ul>

        <Button >Voltar</Button>

      </ContainerIntens>
    </Container>
  );
}

export default Orders;
