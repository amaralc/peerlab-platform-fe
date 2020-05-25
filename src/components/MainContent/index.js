import React from 'react';
import { MainContainer } from './styles';

export default function MainContent() {
  return (
    <>
      <MainContainer>
        <div className="row">
          <div className="col-md-3 mb-5">
            <p>Choose a category</p>
            <hr />
            <a className="btn btn-primary btn-lg" href="/">
              Call to Action &raquo;
            </a>
          </div>
          <div className="col-md-9 mb-5">
            <p>All categories</p>
            <hr />

            <a className="btn btn-primary btn-lg" href="/">
              Call to Action &raquo;
            </a>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
