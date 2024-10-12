import React from "react";
import "./Form.css";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";

const Form = ({ children }) => {
  return (
    <div className="form">
      <div className="top">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Ghgn7fgiyk_79b1T2_gy8N1tknORntOrO7oVmVoAA=s96-c"
          alt="avatar of logged in user"
        />
        <input type="text" placeholder="Start a post, try writting with AI" />
      </div>
      <div className="bottom">
        <div className="type">
          <MovieRoundedIcon />
          <h3>Media</h3>
        </div>
        <div className="type">
          <WorkspacesRoundedIcon />
          <h3>Contributions</h3>
        </div>
        <div className="type">
          <NewspaperRoundedIcon />
          <h3>Write Artical</h3>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Form;
