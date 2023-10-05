import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  imageUrl = null ? "false" : imageUrl;
  return (
    imageUrl && (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="d-flex justify-content-end">
            <span className="position-absolute badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="" />
          <div
            className="card-body"
            style={{
              color: props.darkMode.mode === "dark" ? "white" : "black",
              backgroundColor:
                props.darkMode.mode === "dark" ? "black" : "white",
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="text-center mb-3">
              <a href={newsUrl} className={`btn btn-danger`}>
                Read More
              </a>
            </div>
            <p className="card-text">
              <small
                className="text-body-secondary"
                style={{
                  color: props.darkMode.mode === "dark" ? "white" : "black",
                }}
              >
                By: {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    )
  );
};
export default NewsItem;
