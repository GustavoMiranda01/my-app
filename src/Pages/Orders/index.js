import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import BagBurger from "../../assets/bagBurger.svg";
import Trash from "../../assets/trash.svg";

import { Container, Image, ContainerIntens, H1, Button, Order } from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fecthOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }

    fecthOrders();
  }, []);

  async function deleteOrder(orderId) {
    // Para deletar do backend
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    history.goBack();
  }

  return (
    <Container>
      <Image alt="Burger-Logo" src={BagBurger} />
      <ContainerIntens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className="paragrafos">
                <p style={{ marginBottom: "40px" }}>{order.order}</p>
                <p>
                  <strong>{order.name}</strong>
                </p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="Lata-de-Lixo" />
              </button>
            </Order>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerIntens>
    </Container>
  );
}

export default Orders;
