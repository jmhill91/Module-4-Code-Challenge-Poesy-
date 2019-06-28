import React from 'react';

class Poem extends React.Component {
  render(){
    return (
      <div style={{color: "black"}}>
        <h3>{this.props.singlePoem.title}</h3>
        <p>{this.props.singlePoem.content}</p>
        <strong>- By {this.props.singlePoem.author}</strong>
      </div>
    );
  }
}

export default Poem;
