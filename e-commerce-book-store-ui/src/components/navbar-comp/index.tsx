// This file creates the Navbar Component.
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";

interface propsFromState {
  data: Cart;
  loading: boolean;
  errors?: string;
}

type AllProps = propsFromState;

const Navbar: React.FC<AllProps> = ({ data, loading, errors, children }) => {
  return (
    <div>
      <NavContainer>
          <Link to="/">
            <NavHeader>eCommerce Site</NavHeader>
          </Link>
        <NavCart>
          <Link to="/">
          <NavSpan>Home | </NavSpan>
          </Link>
          <Link to="/myorders">
          < NavSpan>My Orders |</NavSpan>
          </Link>
          <Link to="/cart">
          <NavSpan>Cart </NavSpan> 
          <CartSize>{data.items.length}</CartSize> 
          </Link>
        </NavCart>

      </NavContainer>
      {children}
    </div>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  loading: cart.loading,
  errors: cart.errors
});

const mapDispatchProps = () => {};

// *********** Styles added to the component ********* //
const NavContainer = styled.div`
  width: 100%;  
  margin: auto;
  height: 3.5vw;
  // border: 0.1vw solid gray;
  background: #e7e8eb;
`;

const NavHeader = styled.div`
  width: 20%;
  float: left;
  font-size: 1.5vw;
  padding: 0.4vw;
`;

const NavCart = styled.div`
    float: right;
    margin: 0.4vw;
    cursor: pointer;
    text-align: center;
`;

const NavSpan = styled.div`
    display: inline-block;
    font-size: 1.2vw;
    padding: 0.4vw;
`;

const CartSize = styled.span`
font-size: 1.1vw;
    background: blue;
    border-radius: 50%;
    height: 1.5vw;
    width: 1.5vw;
    line-height: 1.5vw;
    color: #fff;
    display: inline-block;
`;

// *********** Styles added to the component ********* //

export default connect(mapStateToProps, mapDispatchProps)(Navbar);
