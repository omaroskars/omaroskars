import React from "react";
import classNames from "classnames";
import "./card.scss";

function Card({ content, image, onClick = null, ...props }) {
  return (
    <div
      className={classNames("card", {
        clickable: onClick !== null
      })}
    >
      <div className="card-image img-hover-zoom" onClick={() => onClick()}>
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div class="content" onClick={() => onClick()}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Card;
