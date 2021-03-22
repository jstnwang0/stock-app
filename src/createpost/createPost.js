import React from "react";
import "./createPost.css";

function CreatePost() {
  const toggles = document.querySelectorAll(".toggle-switch");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
    });
  });
  return (
    <div className="main-box">
      <div className="form-content-right">
        <form className="form">
          <h2>Create a post!</h2>
          <div class="toggled">
            <div class="toggle-switch three" />
          </div>
          <div className="form-box">
            <div className="input-buyrange">
              <label htmlFor="buyRange" className="form-label">
                Buy Range:{" "}
              </label>
              <input
                type="text"
                name="quote"
                placeholder="Enter the buy range"
              />
            </div>
          </div>
          <div className="form-box">
            <div className="input-buyrange">
              <label htmlFor="buyRange" className="form-label">
                Buy Range:{" "}
              </label>
              <input
                type="text"
                name="quote2"
                placeholder="Enter the buy range"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
