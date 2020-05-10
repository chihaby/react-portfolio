import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import blog from '../assets/blog.jpeg';
import chat from '../assets/chat.png';
import lunch from '../assets/lunch.jpeg';
import marketplace from '../assets/marketplace.jpeg';
import athenation from '../assets/athenation.jpeg';
import carpool from '../assets/carpool.jpeg';
import shoppingList from '../assets/shoppingList.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <h4>Blogging Platform</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${blog})`}} ></CardTitle>
            <CardText>
              Multi-user social blogging web app with real time database, google auth, firebase and sign In sign Up feature. Users can create profile, post contents, share, comment and rate.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://think-piece-live-dc187.web.app/">Demo</a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Chat App</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${chat})`}} ></CardTitle>
            <CardText>
            Chat web app with real time database, Firebase, google auth, React, Redux.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://first-flight-6df89.web.app/">Demo</a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Lunch Vote</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${lunch})`}} >React Project #3</CardTitle>
            <CardText>
              React web application. Users can vote on a restaurant as well as add their favorite to the list. The place with most votes wins
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://lunch-rush-4d021.web.app/">Demo</a> 
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Marketplace</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${marketplace})`}} ></CardTitle>
            <CardText>
              Fully featured Ecommerce web application. One can post items for sale by uploading images and filling descriptions. Equipped with an autocomplete search bar, shop/sell/orders pages, cart system, login, logout, singup, and payment processing.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://onlinestore-next-prod.herokuapp.com/">Demo</a>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Carpool UI</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${carpool})`}} ></CardTitle>
            <CardText>
            Carpool UI. Drivers and riders create profiles and based on their geo location and destination these two are paired as a selection. Featured with Spotify API for sharing musical taste.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=SUr68YFo_rI">Demo</a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Athena-Nation</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${athenation})`}} ></CardTitle>
            <CardText>
              Responsive blog-site featured with admin credentials for uploading images, posting articles, and the ability for readers to comment on articles.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://athenation.com/">Demo</a>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <h4>Shopping List</h4>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${shoppingList})`}} ></CardTitle>
            <CardText>
              Shopping List, adds and delete items as completed.
            </CardText>
            <CardActions border>
              <a target="_blank" rel="noopener noreferrer" href="https://intense-ocean-86370.herokuapp.com/">Demo</a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <h5>dog api</h5>
          <h5>Mern Shopping list https://intense-ocean-86370.herokuapp.com/</h5>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Social</Tab>
          <Tab>Business</Tab>
          <Tab>Personal</Tab>
          <Tab>More</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
