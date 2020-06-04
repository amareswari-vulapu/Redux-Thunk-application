// This file creates the Selected Item Component.
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { SelectedItems } from "../../store/cart/types";
import { addToCart } from "../../store/cart/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Link } from "react-router-dom";
import { ApplicationState } from "../../store";
import { addToSelectedItems } from "../../store/selected-product/action";

interface PropsFromState {
  data: SelectedItems;
}

interface propsFromDispatch {
  addToCart: (item: any) => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const SelectedItem: React.FC<any> = ({ data, addToCart }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  console.log("data is-----", data);
  return (
    <ProductContainer>
      <ProductFigure>
      <ProductImage src={data.imageLink}/>
      </ProductFigure>
      <ProductDetails>
        <ProductHeader>{data.title}</ProductHeader>
        <ProductOtherDetails>{data.price}</ProductOtherDetails>
        <ProductOtherDetails>{data.author}</ProductOtherDetails>
        <ProductOtherDetails>{data.country}</ProductOtherDetails>
        <ProductOtherDetails>{data.year}</ProductOtherDetails>
      <Link to="/cart">
            <ActionButton onClick={() => AddItemToCart(data)}>Buy Now</ActionButton> 
        </Link> 
      <ActionButton onClick={() => AddItemToCart(data)}>Add To Cart</ActionButton>
      <ProductDescriptionDiv>{data.description}</ProductDescriptionDiv>
      </ProductDetails>
    </ProductContainer>
  );
};

const mapStateToProps = ({ selectedItems }: ApplicationState) => ({
  data: selectedItems.items
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    addToCart: (item: any) => dispatch(addToCart(item))
  };
};

// **********  Styles added to the component UI *********//
const ProductContainer = styled.div`
  width: 99.5%;  
  margin: auto;
  border: 0.1vw solid gray;
  height: 80vh;
`;

const ProductFigure = styled.figure`
    width: 15%;
    height: auto;
    margin: 2%;
    float: left;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const ProductDetails = styled.div`
  margin:1%;
  padding:0;
  width:50vw;
  height:auto;
  float:left;
`;

const ProductHeader = styled.p`
  font-size: 1.5vw;
  padding: 1%;
  margin:0;
`;

const ProductOtherDetails = styled.span`
  font-size: 1.2vw;
  display:block;
  padding: 3px;
  margin-left:1%;
`;

const ProductDescriptionDiv = styled.div`
  width:50%;
  height:40%;
  background-color:#e7e8eb;
  font-size: 1vw;
  margin-top: 7%;
  margin-left: 2%;
  padding: 1.5%;
  text-align: left;
`;

const ActionButton = styled.button`
    background-color: #c68e8e;
    border-radius: 0.5vw;
    font-size: 1vw;
    float: left;
    margin: 1%;
    padding: 0.6vw;
    color: #ffffff;
    border: 0;
`;

// **********  Styles added to the component UI *********//



export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);