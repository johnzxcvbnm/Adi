const container =
  <div className="container flexy">
  </div>

const leftSide =
  <div className="left flexy">
    <h3>Dashboard</h3>
    <h3>Widget</h3>
    <h3>Reviews</h3>
    <h3>Custormers</h3>
    <h3>Online Analysis</h3>
    <h3>Settings</h3>
  </div>

const rightSide =
  <div className="right flexy">
  </div>

const box1 =
  <div className="box">
    <h3>Reviews</h3>
    <h2>1,281</h2>
  </div>

const box2 =
  <div className="box">
    <h3>Average Rating</h3>
    <h2>4.6</h2>
  </div>

const box3 =
  <div className="box">
    <h3>Sentiment Analysis</h3>
    <h2 className="centerText">960</h2>
    <h2 className="centerText">122</h2>
    <h2 className="centerText">321</h2>
  </div>

const largeBox =
  <div className="box largeBox">
    <h3>Website Visitors</h3>
    <h2>821</h2>
    <section className="largeImage">
    </section>
  </div>


ReactDOM.render(
  container,
  document.querySelector('main')
);

ReactDOM.render(
  [leftSide, rightSide],
  document.querySelector('.container')
);

ReactDOM.render(
  [box1, box2, box3, largeBox],
  document.querySelector('.right')
);
