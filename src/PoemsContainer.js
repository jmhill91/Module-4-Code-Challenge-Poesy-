import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

     poemContent = () => this.props.poems.map(poem => {
      return  <Poem key={poem.id} singlePoem={poem} />

  })

  render(){
    return (
      <div className="poems-container">
        {this.poemContent()}
      </div>
    );
  }
}

export default PoemsContainer;
