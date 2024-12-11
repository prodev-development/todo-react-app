import { Container } from '@mui/material';
import React from 'react';

import Header from './components/layout/Header';
import Todo from './pages/Todo';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Todo />
    </Container>
  );
};

export default App;
