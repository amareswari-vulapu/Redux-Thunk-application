// This file creates the Cart Component.
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
import { addToMyOrders } from "../../store/cart/action";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/cart/action";

interface propsFromState {
  cartItems: Cart;
}

interface propsFromDispatch {
  addToMyOrders: (item: any) => any;
  removeFromCart:(item: any) => any;
}

type AllProps = propsFromState & propsFromDispatch;

const CartComponent: React.FC<AllProps> = ({ cartItems, addToMyOrders, removeFromCart }) => {
  const RemoveItemFromCart = (item: any) => {
    removeFromCart(item);
  };

  let cartTotalPrice: any = 0;
  
  const AddOrderToMyOrders = (cartItems: any) => {
    addToMyOrders(cartItems);
    window.alert("Your order has been placed. Please check MyOrders page for more details.");
  };
  
  return (
    <CartContainer>
      <CartAddressDiv>
        <Header>Shipping Address</Header>
        <ProductDetails><AddressForm>Addreess form</AddressForm></ProductDetails>
        <Addressbutton>Save Address button</Addressbutton>
        <Addressbutton>Edit Address button</Addressbutton>
      </CartAddressDiv>
      <CartListsDiv>
      <Header>Shopping Bag</Header>
      <ProductDetails>
      {cartItems.items.map(item => {
          cartTotalPrice = cartTotalPrice + item.price;
          return (
              <div><SelectedItemTitle>{item.title}</SelectedItemTitle>
              <RemoveButton onClick={() => RemoveItemFromCart(item)}>Remove</RemoveButton></div>
          );
        })}
      </ProductDetails>
      <Header>Payment Info</Header>
        {cartItems.items.map(item => {
          return (
            <CartListItemDiv>
              <ItemName>{item.title}</ItemName>
              <ItemPrice>&#36; {item.price}</ItemPrice>
            </CartListItemDiv>
          );
        })}
        <hr/>
        <TotalName>Total </TotalName>
        <TotalPrice>&#36;{cartTotalPrice}</TotalPrice>
        <br/>
        <Link to="/myorders">
          <PaymentButton className='checkoutBtn' onClick={() => AddOrderToMyOrders(cartItems)}>Checkout</PaymentButton>
        </Link>
        <PaymentButton>Cancel</PaymentButton>
      </CartListsDiv>
    </CartContainer>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToMyOrders: (cartItems: any) => dispatch(addToMyOrders(cartItems)),
    removeFromCart: (item: any) => dispatch(removeFromCart(item)),
  };
};

// **********  Styles added to the component UI *********//
const CartContainer = styled.div`
  width: 100%;  
  margin: auto;
`;
const Header = styled.div`
font-size: 1.8vw;
margin-top: 4%;
margin-bottom:2%;
`;
const CartTotalPrice = styled.div `

`;
const CartAddressDiv = styled.div`
  width:40%;
  float:left;
  margin:2%
`;

const AddressForm = styled.p `
    font-size: 1.2vw;
    margin:0;
`;

const CartListsDiv = styled.div`
  height: 100%;
  width: 48%;
  float:left;
  margin:2%
`;

const CartListItemDiv = styled.div`
  width:50%;
`;

const ProductDetails = styled.div`
width: 90%;
min-height: 23vh;
padding: 1%;
margin: 0;
background-color: #d7a3a37d;

`;

const Addressbutton = styled.button`
    background-color: #cac9c97d;
    border-radius: 0.5vw;
    font-size: 1.05vw;
    float: left;
    margin: 2%;
    padding: 0.8vw;
    color: #000;
    border: 0;
`;

const ItemName = styled.div`
  width:15vw;
  display:inline-block;
  font-size: 1vw;
`;

const TotalName = styled.div`
width:15vw;
display:inline-block;
font-size: 1vw;
`;

const TotalPrice = styled.div`
padding:1%;
width:5vw;
font-size: 1vw;
margin-top:1%;
display:inline-block;
`;

const ItemPrice = styled.div`
padding:1%;
width:5vw;
font-size: 1vw;
margin-top:1%;
display:inline-block;
`;

const PaymentButton = styled.button`
    background-color: #d7a3a37d;
    border-radius: 0.5vw;
    font-size: 1.2vw;
    float: left;
    margin: 5% 1%;
    padding: 0.6vw;
    border: 0;
`;

const SelectedItemTitle = styled.p `
  display: inline-block;
  margin:1%;
  font-size:1.2vw;
`;

const RemoveButton = styled.button`
background-color: #a28f8f;
    border-radius: 0.5vw;
    font-size: 0.8vw;
    padding: 0.4vw;
    color: #fff;
    border: 0;
`;

// **********  Styles added to the component UI *********//
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
