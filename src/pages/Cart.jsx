import React from 'react';

import Layout from "../components/Layout";
import { CardsCheckout, CardsSubtotal } from "../components/CardsCart";

function Cart() {
  return (
    <>
    <Layout/>
    <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 mt-8">

      <article className="md:col-span-2 p-4">
        <CardsCheckout/>
      </article> 

      <aside className="p-4"> 
        <CardsSubtotal/>
      </aside> 

    </main> 
    </>
  )
};

export default Cart;