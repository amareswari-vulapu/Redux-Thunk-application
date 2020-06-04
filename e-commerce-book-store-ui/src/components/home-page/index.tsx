// This file creates the Home Page Component
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ProductItem from "../product-item";
import { ApplicationState } from "../../store";
import { Inventory } from "../../store/inventory/types";
import { fetchRequest } from "../../store/inventory/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Container>
      <ProductListItems>
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </ProductListItems>
    </Container>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

// **********  Styles added to the component UI *********//
const Container = styled.div`
    width: 100%;  
    margin: auto;
    // border: 0.1vw solid gray;
`;

const ProductListItems = styled.div`

`;
// **********  Styles added to the component UI *********//

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
