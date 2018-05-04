import React from 'react';
import photo from './StackDocs-photo.png';

const StackDocs = () => {
  return (
    <div className="Projects">
      <div className="Projects-left">
        <div className="description">
          <h1 className="Projects-title">
            StackDocs
          </h1>
          <br />
          <p>
          A chrome extension that facilitates collaboration among software engineers and students on technical documentation. It allows users to highlight text, and post questions or annotations about that highlighted text for other users to read and respond to.
          </p>
          <br />
          <h3> Chrome Webstore: </h3>
          <a href="https://chrome.google.com/webstore/detail/stackdocs/fpcnhiglpjhcmfebebobiailbkldlemd">
            bit.ly/StackDocs
          </a>
          <br />
          <br />
          <h3> GitHub Repository: </h3>
          <a href="https://github.com/StackDocs/StackDocs">
            https://github.com/StackDocs/StackDocs
          </a>
          <br />
          <br />
          <h3> Presentation Video: </h3>
          <a href="https://www.youtube.com/watch?v=qLbGun0nR-k">
            https://www.youtube.com/watch?v=qLbGun0nR-k
          </a>
        </div>
      </div>
      <div className="Projects-right">
        <img src={photo} alt="screenshot" />
      </div>
    </div>
  );
}

export default StackDocs;
