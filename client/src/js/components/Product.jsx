import React from "react";
import styled, { css } from "styled-components";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

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
  background-color: white;
  // padding: 10px;
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
  grid-template-rows: 1fr 1fr 1.75fr;
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
  font-size: 19px;
  line-height: 22px;
  min-height: calc(45px);
  font-weight: 500;
`;

export const Pricing = styled(ProductName)`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr repeat(3, 4fr);
  align-items: center;
  font-size: 18px;
  // grid-template-rows: repeat(5, 1fr);
`;

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  color:rgb(34, 34, 34);
  font-family:gordita, Helvetica, Arial, Verdana, sans-serif;
  font-size:11px;
  font-weight:325;
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
  grid-template-columns: 1.6fr 1fr 1fr;
`;

export const ChatBubble = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.3fr;
  &:hover {
    color: #fdcf41;
  }
`;


export const ProductsSold = styled.div`
  display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: repeat(5, 1fr);
`;



export default function Product(props) {
  let price;
  let discountDaysLeft;
  let stars = [];
  const filledStars = <StarRoundedIcon style={{ fontSize: 'medium' }}></StarRoundedIcon>;
  const emptyStars = <StarBorderRoundedIcon style={{ fontSize: 'medium' }}></StarBorderRoundedIcon>;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  for (let i = 0; i < props.product.rating; i++) {
    stars.push(filledStars);
  }
  for (let i = 0; i < 5 - props.product.rating; i++) {
    stars.push(emptyStars);
  }
  if (props.product.discounted) {
    price = <div>${props.product.discountprice}</div>;
    discountDaysLeft = <div style={{ justifySelf: 'end' }}>{props.product.discountdaysleft} days left</div>
  } else {
    price = <div>${props.product.price}</div>;
    discountDaysLeft = <div></div>
  };

  return (
    <AContainer href={props.product.producturl} >
      <ImageContainer>
        {props.product.isdropproduct && <DropFlair>
          <div>D</div>
        </DropFlair>}
        <DropFavorite>
          <BookmarkBorderOutlinedIcon
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
          </BookmarkBorderOutlinedIcon>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography style={{ font: 'inherit'}}>Save to Profile</Typography>
          </Popover>
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
          <div>{props.product.shippingmethod}</div>
          <Comments>
            <ChatBubble>
              <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 'large' }}></ChatBubbleOutlineOutlinedIcon>
              <div>{props.product.comments}</div>
            </ChatBubble>
            {discountDaysLeft}
            <div style={{ justifySelf: 'end' }}>{props.product.productssold} sold</div>
          </Comments>
        </CardFooter>
      </DropCardBodyContainer>
    </AContainer>
  )
};
