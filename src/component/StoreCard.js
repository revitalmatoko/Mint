import React from "react";

export default function storeCard(props) {
  const favoriteImg =
    "https://www.flaticon.com/svg/static/icons/svg/1216/1216649.svg";
  const noFavoriteImg =
    "https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg";

  return (
    <a style={{display:"block"}} href={props.websiteUrl}>
      <div className="storeCard">
        <div className="imgPart">
          <img
            className="favoriteIcon"
            src={props.isFavorite ? favoriteImg : noFavoriteImg}
            width="20"
            height="20"
          />

          <img
            src={props.imageUrl}
            width="200"
            height="200"
          />
        </div>
        <div className="contentPart">
          <p className="storeName">{props.name}</p>
          <p className="floorName">{props.floorName}</p>
        </div>
       
      </div>
     </a> 
  );
}
