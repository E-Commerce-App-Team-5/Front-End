import React from 'react';

import Layout from "../components/Layout";
import { CardsCheckout, CardsSubtotal } from "../components/CardsCart";

function Cart() {
  return (
    <>
    <Layout/>
    <CardsCheckout/>
    <CardsSubtotal/>
    </>
  )
};

export default Cart;