import { useContext, useState } from "react";
import { Product } from "../../models";
import { CheckoutCard } from "../CheckoutCard";

import { ClothingShopContext} from '../useContext';
import { Labels, PlaceOrder, PriceContainer, ProductsWrapper, Title, Total, TotalAmount, TotalAmountLabel, TotalItems, TotalItemsLabel } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total, totalitems } = useContext(ClothingShopContext);

  const checkout = () => {
    alert(`Checkout - Total: $${total} 
    \nThank you for purchasing!`);
  
  }
 
  return (
    <>
    <Title>
         { products.length > 0 ? " Ready for checkout! ": " Empty! Add an item to your cart "}
    </Title>
    <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      <Total>
      <Labels>
          <TotalAmountLabel>Total Amount:</TotalAmountLabel>
          <TotalItemsLabel>Total Items:</TotalItemsLabel>
        </Labels>
        <PriceContainer>
          <TotalAmount>${total}.00</TotalAmount>
          <TotalItems>{totalitems}</TotalItems>
        </PriceContainer>
      </Total>
      <PlaceOrder onClick={checkout}>Place Order</PlaceOrder>
    </>
  );
};