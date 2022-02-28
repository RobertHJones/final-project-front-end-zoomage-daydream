import React from "react";
import css from "../Card/card.module.css";

function EmptyCard({ address, starttime, endtime, image }) {
  console.log(image);
  return (
    <div className={css.card}>
      <div>
        <img src={image} className={css.image} alt="cardPic" />
      </div>
      <div className={css.details}>
        <p>{address}</p>
        <p>
          {starttime}-{endtime}
        </p>
        <p>4.7*</p>
      </div>
    </div>
  );
}

export default EmptyCard;
