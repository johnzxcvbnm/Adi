const containerStyle = {
  width: "95%",
  minHeight: "200px",
  // border: "1px solid black",
  padding: "20px"
};

const headerStyle = {
  color: "grey",
  opacity: ".7"
};

const articleStyle = {
  width: "100%"
}

class Header extends React.Component {
  render() {
    return (
      <h1 style={headerStyle}>Brook & Lyn</h1>
    )
  }
}

class Article extends React.Component {
  render() {
    return (
      <img style={articleStyle} src={this.props.path} />
    )
  }
}

class TextArticle extends React.Component {
  render() {
    return (
      <div style={headerStyle}>
        <h4>Our Latest Collection</h4>
        <a href="#">May 25, 2012</a>
        <p>Quickly re-engineer business growth strategies with sustainable web-readiness.  Collaboratively create visionary growth strategies vis-a-vis cooperative functionalities.  Holisticaly extend cross-media technologies rather than cutting-edge experiences.</p>
        <p>Quickly re-engineer business growth strategies with sustainable web-readiness.  Collaboratively create visionary growth strategies vis-a-vis cooperative functionalities.  Holisticaly extend cross-media technologies rather than cutting-edge experiences.  <a href="#">Read More...</a></p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <Header />
        <Article path="/images/home-bloghero.png" />
        <Article path="/images/home-rings.png" />
        <TextArticle />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
