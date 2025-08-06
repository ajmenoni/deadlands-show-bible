import React, { act } from "react";
import { useState } from "react";

function HeaderNav({ onTypeChange }) {
  function handleClick(event) {
    const type = event.target.dataset.type;
    onTypeChange(type);
    setSelectedTab(type);
  }

  const selectedStyle = {
    border: "1px solid var(--secondary-color)",
    backgroundColor: "#303030",
  };

  const [selectedTab, setSelectedTab] = useState("cast");

  return (
    <div className="header-nav">
      <h2
        className={`tab ${selectedTab === "cast" ? "selected" : ""}`}
        onClick={handleClick}
        data-type="cast"
      >
        Cast
      </h2>

      <h2
        className={`tab ${selectedTab === "npc" ? "selected" : ""}`}
        onClick={handleClick}
        data-type="npc"
      >
        NPCs
      </h2>

      <h2
        className={`tab ${selectedTab === "place" ? "selected" : ""}`}
        onClick={handleClick}
        data-type="place"
      >
        Places
      </h2>

      <h2
        className={`tab ${selectedTab === "event" ? "selected" : ""}`}
        onClick={handleClick}
        data-type="event"
      >
        Events
      </h2>
    </div>
  );
}

export default HeaderNav;
