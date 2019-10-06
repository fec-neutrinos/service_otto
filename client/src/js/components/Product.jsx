import React from "react";
import ReactDOM from "react-dom";
import { relative } from "path";

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
    <a href={props.product.producturl} className="Grid__gridItemInner__1hwGE  Link2__link__1aAsF Grid__gridItemInner__1hwGE" style={{position: 'relative', border: 'none'}}>
      <div className="DropCard__drop_img__nAn9b">
        <div className="Rectangle__container__2vkeP" style={{paddingBottom: '100%'}}>
          <div>
            <picture>
              <img alt="" src={props.product.imageurl} className="responsive"/>
            </picture>
          </div>
        </div>
      </div>
      {props.product.isdropproduct && <div className="Flex___alignItems--center__1dynp     Flex___justifyContent--center__2oWty DropFlair__flair__2co7j DropFlair__responsive_size__xpIQR Flex__flexContainer__3Xtgv  Flex__flexItem__7-27F">
        <i className="icon-d-logo Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px'}}>::before</i>
        <div className="DropFlair__text__ivBkr Text__text__PazWx Text__type--callout__2aZn6 "></div>
      </div>}
      <div className="Card__favorite__AV5uy">
        <div style={{position: 'relative', display: 'inline-block'}}>
          <div>
            <div style={{cursor: 'pointer'}}>
              <i contentid="46477" contenttype="drop-discussion" dropid="87615" tooltipposition="bottom" tooltiparrowposition="right" favorites="Map { &quot;name&quot;: &quot;Favorites&quot;, &quot;content&quot;: List [] }" tooltipcontent="Save to Profile" className="material-icons material-icon--bookmark_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '24px', pointerEvents: 'none'}}>bookmark_border</i>
            </div>
          </div>
        </div>
      </div>
      <div className="DropCard__body_container__3N3Sy">
        <div className="Card__body__tkP6i">
          <div>
            <div className="Text__text__PazWx Text__type--headline__2tK0P Text__line_clamp--2__2UPZw " style={{fontSize: '12px', lineHeight: '16px', minHeight: 'calc(33px)', maxHeight: 'calc(32px)'}}>{props.product.productname}</div>
            <div className="Spacer__s4_vsize--15__24vzy Spacer__s3_vsize--15__3i2-Q Spacer__s2_vsize--15__26_sl Spacer__s1_vsize--10__3KdGY Spacer__s0_vsize--10__1j6RA"></div>
            <div className="  Flex___alignItems--baseline__34BBM     Flex___justifyContent--spaceBetween__1zwUi  Flex__flexContainer__3Xtgv  Flex__flexItem__7-27F ">
              <div className="Flex__flexContainer__3Xtgv  Flex__flexItem__7-27F ">
                <div className="wdio__price Text__text__PazWx Text__type--price__1mumP ">${props.product.price}</div>
              </div>
              <div className="Card__hide_wide_tablet__xBDxZ Card__hide_desktop__nx_hg">
                <div className="Text__text__PazWx Text__type--footnote__3k2Zo ">{props.product.productssold} sold</div>
              </div>
            </div>
          </div>
          <div className="Spacer___vsize--15__L0Mr1  Flex___flexGrow--0__fyPmm  Flex__flexItem__7-27F  "></div>
          <div className="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 flexContainer wd_alignItems--flexStart d_alignItems--flexStart wt_alignItems--flexStart nt_alignItems--flexStart p_alignItems--flexStart wd_flexDirection--column d_flexDirection--column wt_flexDirection--column nt_flexDirection--column p_flexDirection--column DropCard__breadcrumbs_container__3l3Eb">
            <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
              <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star_border</i>
              <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: '100%', fontSize: '12px', position: 'absolute', overflow: 'hidden', top: '0px', left: '1px'}}>star</i>
            </div>
            <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
              <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star_border</i>
              <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star</i>
            </div>
            <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
              <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star_border</i>
              <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star</i>
            </div>
            <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
              <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star_border</i>
              <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star</i>
            </div>
            <div className="RatingBar__rating_star__JtSB5 " style={{padding: '0px 1px', lineHeight: '12px'}}>
              <i className="material-icons material-icon--star_border Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star_border</i>
              <i className="material-icons material-icon--star Icon__icon__1AvBb Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '12px', display: 'block', visibility: 'visible'}}>star</i>
            </div>
            <div className="Spacer___hsize--5__3rShg"></div>
            <div className="Text__text__PazWx Text__type--footnote__3k2Zo ">backlog item rating!</div>
          </div>
          <div className="Spacer___vsize--0__2f-Ky    Flex__flexItem__7-27F  "></div>
          <div className="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_justifyContent--spaceBetween d_justifyContent--spaceBetween wt_justifyContent--spaceBetween nt_justifyContent--spaceBetween p_justifyContent--spaceBetween">
            <div className="Card__footer_element__22kkG" style={{whiteSpace: 'nowrap'}}>
              {/* <a href={props.product.producturl} className="Link2__link__1aAsF " style={{cursor: 'pointer'}}> */}
                <div className="flexItem flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexDirection--row d_flexDirection--row wt_flexDirection--row nt_flexDirection--row p_flexDirection--row wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="Icon__color--black__lGnv2 " style={{lineHeight: 1, width: 'auto', fontSize: '18px', transform: 'scaleX(-1)', pointerEvents: 'none', marginTop: '2px'}}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"></path>
                  </svg>
                  <div className="hSpacer wd_hSpacerSize--3 d_hSpacerSize--3 wt_hSpacerSize--3 nt_hSpacerSize--3 p_hSpacerSize--3"></div>
                  <div className="Text__text__PazWx Text__type--footnote__3k2Zo Text__color--black__1GptT " style={{textTransform: 'lowercase'}}>{props.product.comments}</div>
                </div>
              {/* </a> */}
            </div>
          </div>
          <div className="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap Card__footer_section__314t0">
            <div className="Card__footer_element__22kkG Card__hide_mobile__23rAL" style={{whiteSpace: 'nowrap'}}>
              <div className="Text__text__PazWx Text__type--footnote__3k2Zo " style={{textTransform: 'lowercase'}}>{props.product.productssold} sold</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
};
