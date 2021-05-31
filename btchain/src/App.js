
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Title from './Title';
import Footer from './Footer';
import Menu from './Menu';
import Intro from './Intro';
import About from './About';
import Detail from './detail';
import NFT from './NFT';
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Title />
        <Menu />
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/Home' component={Intro} />
          <Route exact path='/About/' component={About} />
          <Route exact path='/NFT/' component={NFT} />
          <Route exact path='/Detail/' component={Detail} />
        </Switch>
        <Route exact path='/Admin/' component={() => {
          window.location.href = 'http://203.255.24.99:3035/admin/';
          return null;
        }} />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
