// This file creates the Product Item Component.
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Inventory } from "../../store/inventory/types";
import { addToCart } from "../../store/cart/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link } from "react-router-dom";
import { addToSelectedItems } from "../../store/selected-product/action";

interface propsFromComponent {
  item: Inventory;
}

interface propsFromDispatch {
  addToCart: (item: any) => any;
  addToSelectedItems: (item: any) => any
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item, addToCart, addToSelectedItems }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  const AddItemToSelectedItems = (item: any) => {
    console.log("8** AddItemToSelectedItems **",item);
    addToSelectedItems(item)
  }

  return (
    <ProductContainer>
     <Link to="/selecteditem" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
      <ProductDetails onClick={() => AddItemToSelectedItems(item)}>
        <ProductFigure>
          <ProductImage src={item.imageLink}/>
        </ProductFigure>
        <ProductHeader>{item.title}</ProductHeader>
        <ProductDescriptionDiv>{item.description}</ProductDescriptionDiv> 
      </ProductDetails>
      </Link> 
      <Link to="/cart">
            <ActionButton onClick={() => AddItemToCart(item)}>Buy Now</ActionButton> 
        </Link> 
      <ActionButton onClick={() => AddItemToCart(item)}>Add To Cart</ActionButton>
    </ProductContainer>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToCart: (item: any) => dispatch(addToCart(item)),
    addToSelectedItems: (item: any) => dispatch(addToSelectedItems(item))
  };
};

// ********** Styles added to the component UI ********************//
const ProductContainer = styled.div`
  background-color: #b1aaaae8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin:1%;
  width:18%;
  height:45vh;
  float:left;
`;

const ProductFigure = styled.figure`
  width: 100%;
  height: 75%;
  margin:0;
  background-color: #c68e8e;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const ProductDetails = styled.div`
  cursor: pointer;
  margin:0;
  padding:0;
  width:100%;
  height:85%;
`;

const ProductHeader = styled.h5`
  text-align: center;
  font-size: 1.3vw;
  margin:0;
  text-decoration:none;
`;

const ProductDescriptionDiv = styled.div`
  margin: 3%;
  font-size: 0.7vw;
  max-width: 100%;
  overflow: hidden;
  height: 4vh;
  text-overflow: ellipsis;
  text-decoration:none;
`;

// const StyledLink = styled.link`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;

const ActionButton = styled.button`
    background-color: #c68e8e;
    border-radius: 0.5vw;
    font-size: 1vw;
    float: left;
    margin-left: 7%;
    padding: 0.6vw;
    color: #ffffff;
    border: 0;
`;

// ********** Styles added to the component UI ********************//
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
