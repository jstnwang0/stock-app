import React from "react";
import "./createPost.css";

function CreatePost() {
  return (
    <div className="main-box">
      <div className="form-content-right">
        <form className="form">
          <h2>Create a stock pick!</h2>
          <div className="buySell">
            Buy
            <label class="custom-radio-btn">
              <input type="radio" name="sample" />
              <span class="checkmark"></span>
            </label>
            Sell
            <label class="custom-radio-btn">
              <input type="radio" name="sample" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-box">
            <div className="input-ticker">
              <label htmlFor="input-ticker" className="form-label">
                Buy Range:{" "}
              </label>
              <input
                type="text"
                name="quote"
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
