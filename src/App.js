import React from 'react';
import Router from './router'
import './styles.scss'
import TestProvider from './provider';
import ErrorBoundary from './components/error';

const App = () =>
    <ErrorBoundary>
      <TestProvider>
       <Router/>
      </TestProvider>
    </ErrorBoundary>

export default App;
