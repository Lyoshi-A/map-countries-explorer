import React from 'react';
import ErrorNotificationBlock from '../error-notification-block'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <ErrorNotificationBlock>
                Internal error
             </ErrorNotificationBlock>
    }

    return this.props.children;
  }
}
