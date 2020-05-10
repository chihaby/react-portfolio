import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import emoji from '../assets/my-emoji.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Radouane Chihaby</h2>
            <img
              src={emoji}
              alt="avatar"
              style={{height: '250px'}}
              />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a Frontend developer with industry experience in building websites and web applications. I specialize in JavaScript and have professional experience working with Node and React</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (510) 630-9741
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Chihaby@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
