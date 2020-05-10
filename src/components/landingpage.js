import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import emoji from '../assets/my-emoji.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={emoji}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Frontend Web Developer</h1>

                <hr/>

              <p> JavaScript | ES6 | React | Redux | NodeJS | Express | GraphQL | Firebase | MongoDB | SQL | Performance</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/chihaby/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/chihaby" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
