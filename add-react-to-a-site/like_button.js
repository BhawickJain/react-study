"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    // JSX
    return <button onClick={() => this.setState({ liked: true })}>Like</button>;
  }
}

// get like button container
// note only the first one is considered because of querySelector
const domContainer = document.querySelector("#like_button_container");
// inject like button into container
ReactDOM.render(e(LikeButton), domContainer);
