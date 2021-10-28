import { Component } from 'react';
import Container from './components/Container';
import UserForm from './components/UserForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <UserForm />
        </Container>
      </div>
    );
  }
}
