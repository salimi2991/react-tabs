import React, { useState } from "react";
import "./tabs.css";
import { tabsData } from "./tabsData";

export const Tabs = () => {
  //State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  //Event handler to set the active tab when a tab is clicked
  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs-container">
      <ul>
        {tabsData.map((tab, i) => (
          //Apply "active" class if it's the active tab
          <li
            key={i}
            className={activeTab === i ? "active" : ""}
            //Call handleClick when the tab is clicked
            onClick={() => handleClick(i)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="content">
        {tabsData.map((data, i) => (
          //Apply "active" class if it's the active tab
          <div className={`desc ${activeTab === i ? "active" : ""}`} key={i}>
            {data.desc}
          </div>
        ))}
      </div>
    </div>
  );
};
