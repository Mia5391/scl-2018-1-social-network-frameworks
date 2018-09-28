import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Timeline from './Components/Timeline/Timeline';
import Login from './Components/Login/Login';
import firebaseIntegration from './firebase';


export default class Router extends Component {
  constructor() {
    super();

    this.state = {
      u: null
    }
  }

  componentDidMount() {
    return firebaseIntegration.auth().onAuthStateChanged((u) => {
      u ? this.setState({ u: u }) : this.setState({ u: null })
    })
  }



  render() {

    return (
      <ReactRouter>
        <App>
          <Route path="/" component={() => {
            return this.state.u !== null ? <Redirect to="/timeline"></Redirect> : <Redirect to="/login"></Redirect>

          }}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/timeline" component={Timeline}></Route>
          {/* <Route path="/register" component={Register}></Route> */}
          {/* <Route path="/publicarreseña" component={PublicarReseña}></Route>
          <Route path="/reseñas" component={Reseñas}></Route>
          <Route path="/perfil" component={UserProfile}></Route>
          <Route path="/eventos" component={Eventos}></Route>
          <Route path="/messages" component={Message} ></Route>
          <Route path="/publicarevento" component={PublicarEvento}></Route> */}
        </App>
      </ReactRouter>
    )

  }
}