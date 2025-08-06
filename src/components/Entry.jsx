import React from "react";
function Entry({ title, content, image, type }) {
  return (
    <div className="entry">
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="entry-image">
        <img src={image} alt="Portrait" style={{ borderRadius: 12 }} />
      </div>
    </div>
  );
}

export default Entry;
