import React, { useState } from "react";

function Entry({ title, content, image, type }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;

  const overMax = content.length > maxLength;
  const displayContent = expanded
    ? content
    : content.slice(0, maxLength) + (overMax ? "..." : "");

  return (
    <div className="entry">
      <div className="content">
        <h3>{title}</h3>
        <p>{displayContent}</p>
        {overMax && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "var(--secondary-font-color)",
              padding: 0,
              fontSize: "0.9rem",
              marginTop: "0.25rem",
              outline: "none",
              outlineOffset: "2px",
            }}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      {image && (
        <div className="entry-image">
          <img src={image} alt="Portrait" style={{ borderRadius: 12 }} />
        </div>
      )}
    </div>
  );
}

export default Entry;
