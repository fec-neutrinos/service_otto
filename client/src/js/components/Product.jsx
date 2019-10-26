import React from "react";
import styled, { css } from "styled-components";

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
`;

export const ProductPicture = styled.div`
  grid-area: productpicture;
  align-self: start;
  justify-self: center;
`;

export const DropCardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, .20fr);
  padding: 20px 25px;
`;

export const ProductName = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-self: start;

  // grid-template-rows: repeat(5, 1fr);
`;

export const Pricing = styled.div`
  // display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(5, 1fr);
`;

export const CardFooter = styled.div`
  display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(5, 1fr);
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
          <i className="logo" style={{lineHeight: 1, width: 'auto', fontSize: '12px'}}></i>
          <div className="DropFlair__text__ivBkr Text__text__PazWx Text__type--callout__2aZn6 ">D</div>
        </DropFlair>}
        <DropFavorite>
          <div style={{position: 'relative', display: 'inline-block'}}>
            <div style={{cursor: 'pointer'}}>
              <i contentid="46477" contenttype="drop-discussion" dropid="87615" tooltipposition="bottom" tooltiparrowposition="right" favorites="Map { &quot;name&quot;: &quot;Favorites&quot;, &quot;content&quot;: List [] }" tooltipcontent="Save to Profile" className="material-icons material-icon--bookmark_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', pointerEvents: 'none'}}>F</i>
            </div>
          </div>
        </DropFavorite>
        <ProductPicture style={{paddingBottom: '5%'}}>
          <div>
            <picture>
              <img alt="" src={props.product.imageurl} className="responsive"/>
            </picture>
          </div>
        </ProductPicture>
      </ImageContainer>
      <DropCardBodyContainer>
        <ProductName>{props.product.productname}</ProductName>
        <Pricing>
            <div className="wdio__price Text__text__PazWx Text__type--price__1mumP ">${props.product.price}</div>
        </Pricing>
        <div className="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 flexContainer wd_alignItems--flexStart d_alignItems--flexStart wt_alignItems--flexStart nt_alignItems--flexStart p_alignItems--flexStart wd_flexDirection--column d_flexDirection--column wt_flexDirection--column nt_flexDirection--column p_flexDirection--column DropCard__breadcrumbs_container__3l3Eb">
          <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
            <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
            <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: '100%', fontSize: '12px', position: 'absolute', overflow: 'hidden', top: '0px', left: '1px'}}></i>
          </div>
          <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
            <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
            <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
          </div>
          <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
            <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
            <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
          </div>
          <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
            <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
            <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
          </div>
          <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
            <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
            <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}></i>
          </div>
          <div className="Spacer___hsize--5__3rShg"></div>
          <div className="Text__text__PazWx Text__type--footnote__3k2Zo ">{props.product.rating}</div>
        </div>
        <div>{props.product.shippingmethod}</div>
        <CardFooter>
          <Comments>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="Icon__color--black__lGnv2 " style={{display: "inline", lineHeight: 1, width: 'auto', fontSize: '18px', transform: 'scaleX(-1)', pointerEvents: 'none', marginTop: '2px'}}>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"></path>
            </svg>
            <span className="Text__text__PazWx Text__type--footnote__3k2Zo Text__color--black__1GptT " style={{textTransform: 'lowercase'}}> {props.product.comments} </span>
            <div></div>
            <div className="Text__text__PazWx Text__type--footnote__3k2Zo " style={{textTransform: 'lowercase'}}> {props.product.productssold} sold</div>
          </Comments>
        </CardFooter>
      </DropCardBodyContainer>
    </AContainer>
  )
};
