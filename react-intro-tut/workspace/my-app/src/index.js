import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            {/* status */}
            <Hello></Hello>
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
// insert game component into root div

// Create Hello component which uses Time component
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is <Time></Time>.
        </h2>
      </div>
    );
  }
}

// Time component is still rendered even when declared after Hello
class Time extends React.Component {
  render() {
    return <span className="time">{new Date().toLocaleTimeString()}</span>;
  }
}

function tick() {
  const element = <Time></Time>;
  // ReactDOM.render(element, document.getElementById("root"));
  // You are only supposed to call it once however.
  ReactDOM.render(<Game />, document.getElementById("root"));
}

setInterval(tick, 1000);

// Render must the last bit however!
ReactDOM.render(<Game />, document.getElementById("root"));
