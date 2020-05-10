import React, { Component } from 'react';
import pdf from '../files/_Rad.pdf';

class Resume extends Component {
  render() {
    return(
      <div>
        <h1>Resume</h1>
        <div className="pdf">
          <embed src={pdf} width="800px" height="2100px" />
        </div>
      </div>
    )
  }
}

export default Resume;
