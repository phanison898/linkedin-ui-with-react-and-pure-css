import React from "react";
import "./style.css";

const TextIcon = ({ icon, text, axes }) => {
  const style = {
    Width: "100%",
    Height: "100%",
    display: "flex",
    flexDirection: axes != null && axes === "y" ? "column" : "row", // If axes is 'y', set column, else row
    justifyContent: "center",
    alignItems: "center", // Optional: aligns items vertically in a row, or horizontally in a column
    gap: "7px",
  };

  return (
    <div className="text_icon" style={style}>
      {icon}
      <h5>{text}</h5>
    </div>
  );
};

export default TextIcon;
