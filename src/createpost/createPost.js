import React from "react";
import "./createPost.css";

function CreatePost() {
  return (
    <div className="main-box">
      <div className="form-content-right">
        <form id="post" class="form">
          <h2>Create a stock pick!</h2>
          <div className="buySell">
            Buy
            <label class="custom-radio-btn">
              <input type="radio" name="buy" />
              <span class="checkmark"></span>
            </label>
            Sell
            <label class="custom-radio-btn">
              <input type="radio" name="buy" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="form-box">
            <div className="input-ticker">
              <label htmlFor="input-ticker" className="form-label">
                Ticker:{" "}
              </label>
              <input type="text" name="quote" />
            </div>
            <div className="input-price">
              <label htmlFor="input-price" className="form-label">
                Entry:{" "}
              </label>
              <input type="text" name="entry" />{" "}
              <label htmlFor="input-price" className="form-label">
                Price Target:{" "}
              </label>
              <input type="text" name="price-target" />{" "}
              <label htmlFor="input-price" className="form-label">
                Stop Loss:{" "}
              </label>
              <input type="text" name="stop-loss" />
            </div>
            <div className="reasoning-text">
              <label htmlFor="reasoning" className="form-label">
                reasoning:{" "}
              </label>
            </div>
            <div className="reasoning">
              <textarea name="reasoning" rows="4" cols="50"></textarea>
            </div>
            <div className="submit-box">
              <button type="submit">Post!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
