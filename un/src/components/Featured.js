function Featured() {
  return (
    <div className="featured">
      <h1 className="f-title">Featured Work</h1>
      <div className="features">
        <div className="feature">
          <img
            src="https://static.wixstatic.com/media/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg"
            alt=""
            className="f-img"
          />
          <p className="f-name shrink">finnis lake</p>
        </div>
        <div className="feature">
          <img
            src="https://static.wixstatic.com/media/a3a7c5_09e68948100640f78678b089f93a57df~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_09e68948100640f78678b089f93a57df~mv2.jpg"
            alt=""
            className="f-img"
          />
          <p className="f-name shrink">Hawks Rise</p>
        </div>
        <div className="feature">
          <img
            src="https://static.wixstatic.com/media/a3a7c5_ce378970b8b043e4932f78d34438f9b4~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_ce378970b8b043e4932f78d34438f9b4~mv2.jpg"
            alt=""
            className="f-img"
          />
          <p className="f-name shrink">the modern belgian</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
