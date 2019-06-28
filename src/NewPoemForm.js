import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: ''
  }



  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input
            onKeyUp={hadleTitleInput}
            placeholder="Name your masterpiece..." />
          <textarea
            onKeyUp={handleContentInput}
             placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
