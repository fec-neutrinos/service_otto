import React from "react";
import styled, { css } from "styled-components";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

export const AContainer = styled.a`
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: inherit;
  background: #f0f0f0;
  transition: box-shadow .2s ease-in-out;
  margin: 10px;
  display: grid;
  grid-template-rows: .61fr .39fr;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 5fr;
  margin: 10px;
  grid-template-areas:
    "dropflair . dropfavorite"
    "productpicture productpicture productpicture";
`;

export const DropFlair = styled.div`
  grid-area: dropflair;
  align-self: start;
  justify-self: start;
`;

export const DropFavorite = styled.div`
  grid-area: dropfavorite;
  align-self: start;
  justify-self: end;
  &:hover {
    color: #fdcf41;
  }
`;

export const ProductPicture = styled.div`
  grid-area: productpicture;
  align-self: start;
  justify-self: center;
`;

export const DropCardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // grid-template-rows: 1fr 1fr 2fr;
  padding: 20px 25px;
`;

export const ProductName = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-self: start;
  color: #222;
  font-family: gordita,Helvetica,Arial,Verdana,sans-serif;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  font-size: 18px;
  line-height: 22px;
  min-height: calc(45px);
`;

export const Pricing = styled(ProductName)`
  display: grid;
  grid-template-columns: 1fr 0.75fr 1fr repeat(3, 4fr);
  // grid-template-rows: repeat(5, 1fr);
`;

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  color:rgb(34, 34, 34);
  font-family:gordita, Helvetica, Arial, Verdana, sans-serif;
  font-size:12px;
  font-weight:400;
  height:auto;
  // line-height:18px;
  text-size-adjust:100%;
  white-space:nowrap;
  width:auto;
  -webkit-font-smoothing:antialiased;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;

export const Stars = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, .1fr) 2fr;
`;


export const Comments = styled.div`
  display: grid;
  grid-template-columns: .3fr 1fr 1fr 1fr;
`;

export const ProductsSold = styled.div`
  display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(5, 1fr);
`;


export default function Product(props) {
  let price;
  let discountDaysLeft;
  const filledStars = <StarRoundedIcon style={{ fontSize: 'medium' }}></StarRoundedIcon>;
  const emptyStars = <StarBorderRoundedIcon style={{ fontSize: 'medium' }}></StarBorderRoundedIcon>;
  let stars = [];
  for (let i = 0; i < props.product.rating; i++) {
    stars.push(filledStars);
  }
  for (let i = 0; i < 5 - props.product.rating; i++) {
    stars.push(emptyStars);
  }
  if (props.product.discounted) {
    price = <div>${props.product.discountprice}</div>;
    discountDaysLeft = <div>{props.product.discountdaysleft} days left</div>
  } else {
    price = <div>${props.product.price}</div>;
    discountDaysLeft = <div></div>
  };



  // return (<div className="product">
  //   <p className="productname">{props.product.productname}</p>
  //   <p className="discounted">{props.product.discounted}</p>
  //   <p className="price">{props.product.price}</p>
  //   <p className="discountedprice">{props.product.discountprice}</p>
  //   <p className="comments">{props.product.comments}</p>
  //   <p className="shippingmethod">{props.product.shippingmethod}</p>
  //   <p className="imageurl">{props.product.imageurl}</p>
  //   <p className="newproduct">{props.product.newproduct}</p>
  //   <p className="discountdaysleft">{props.product.discountdaysleft}</p>
  //   <p className="isdropproduct">{props.product.isdropproduct}</p>
  //   <p className="producturl">{props.product.producturl}</p>
  // </div>)
  return (
    <AContainer href={props.product.producturl} style={{position: 'relative', border: 'none'}}>
      <ImageContainer>
        {props.product.isdropproduct && <DropFlair>
          {/* <i className="logo" style={{lineHeight: 1, width: 'auto', fontSize: '12px'}}></i> */}
          <div>D</div>
        </DropFlair>}
        <DropFavorite>
          <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
        </DropFavorite>
        <ProductPicture>
          <div>
            <picture>
              <img alt="" src={props.product.imageurl}/>
            </picture>
          </div>
        </ProductPicture>
      </ImageContainer>
      <DropCardBodyContainer>
        <ProductName>Massdrop x {props.product.productname}</ProductName>
        <Pricing>
            {price}
            <div></div>
            {props.product.discounted && <div style={{color: '#9f9e9e', textDecoration:'line-through'}}>${props.product.price}</div>}
        </Pricing>
        <CardFooter>
          <Stars>
            {stars}
            <div style={{padding: '2px 0px 0px 0px'}}> {props.product.reviews}</div>
          </Stars>
          <Comments>
            <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 'large' }}></ChatBubbleOutlineOutlinedIcon>
            <div>{props.product.comments}</div>
            {discountDaysLeft}
            <div>{props.product.productssold} sold</div>
          </Comments>
        </CardFooter>
      </DropCardBodyContainer>
    </AContainer>
  )
};
