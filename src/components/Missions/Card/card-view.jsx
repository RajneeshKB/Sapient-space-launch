import React from "react";
import "./card-view.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardView = ({ data }) => {
  return (
    <div className="card mr-3 mb-3 card-width">
      <div className="card-body">
        <div className="bg-light text-center">
          {/* LazyLoadImage library is used to lazily load images on demand and do not bloc rendering*/}
          <LazyLoadImage
            alt={data.label}
            height="160"
            width="160"
            src={data.imageLink}
          />
        </div>
        <div className="d-flex flex-column">
          <label className="text-primary">{data.label}</label>
          <strong>Mission Ids:</strong>
          {data.missionIds.length ? (
            <ul>
              {data.missionIds.map((id) => {
                return <li key={`mission-${id}`}>{id}</li>;
              })}
            </ul>
          ) : null}
          <div>
            <strong>Launch Year:</strong>
            <span>{data.launchYear}</span>
          </div>
          <div>
            <strong>Successful Launch:</strong>
            <span>{data.launchSuccess ? "true" : "false"}</span>
          </div>
          <div>
            <strong>Successful Landing:</strong>
            <span>{data.landSuccess ? "true" : "false"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
