// This file creates the My Orders Component.
import React from "react";
import styled from "styled-components";
import { ApplicationState } from "../../store";
import { Cart, cartState } from "../../store/cart/types";
import { connect } from "react-redux";

interface propsFromState {
  cartItems: Cart;
  cartState: cartState;
}

type AllProps = propsFromState;

const MyOrdersComponent: React.FC<AllProps> = ({ cartItems, cartState}) => {
    if(cartState.checkout){
        return (
          <MyOrdersContainer>
            {cartItems.items.map(item => {
            return (
            <BookContainer>
                <BookContainerNavBar>
                  <OrderPlacedLabel>Order Placed: 14 May, 2020</OrderPlacedLabel>
                  <StatusDeliveredLabel>Status: Delivered</StatusDeliveredLabel>
                </BookContainerNavBar>
                <BookImageContainer>
                  <BookImage src={item.imageLink}></BookImage>
                </BookImageContainer>
                <BookDetailsContainer>
                  <BookTitle>{item.title}</BookTitle>
                  <BookDetails>{item.author}</BookDetails>
                  <BookDetails>{item.price}</BookDetails>
                </BookDetailsContainer>
              </BookContainer>
            );
          })}
              
          </MyOrdersContainer>
         
        );
    }else {
      return (
        <NoOrder>Sorry, No Orders placed.</NoOrder>
      )
   }
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data,
  cartState: cart
});

const mapDispatchProps = () => {};

// **********  Styles added to the component UI *********//
const MyOrdersContainer = styled.div`
  width: 100%;
  height: 200vh;
  margin: auto;
 `;

 const BookContainer = styled.div `
    width: 99.5%;
    margin: 1% auto;
    height: 20%;
    border: 1px solid gray;
 `;
  const BookContainerNavBar = styled.div `
    width: 100%;
    height: 18%;
    background-color: #d7a3a37d;
  `;
 
  const OrderPlacedLabel = styled.span `
     font-size: 0.9vw;
     float:left;
     padding:1%;
  `;

  const StatusDeliveredLabel = styled.span `
    font-size:0.9vw;
    float:right;
    padding: 1%;
  `
  const BookImageContainer = styled.div`
  width: 10%;
  height: 70%;
  margin: 1%;
display: inline-block;
float:left;
`;

const BookImage = styled.img `
width: 100%;
height: 100%;
object-fit: contain;
object-position: center;
`
  const BookDetailsContainer = styled.div `
    float: left;
    margin:1%;  
    display: inline-block;
  `
const BookDetails = styled.div `
  font-size:1vw;
`;

const BookTitle = styled.div `
  font-size: 1.8vw;
`;

const NoOrder = styled.div `
  font-size: 2.2vw;
  text-align: center;
  color: red;
  padding:5%;
`;
// **********  Styles added to the component UI *********//

export default connect(mapStateToProps, mapDispatchProps)(MyOrdersComponent);