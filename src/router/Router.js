import React from 'react';
import { connect } from 'react-redux';
import UniversalRouter from 'universal-router';
import routerConfig from './routerConfig';

class Router extends React.Component {
  state = {
    children: null,
  };

  router = new UniversalRouter(routerConfig);

  componentWillMount() {
    this.setPath();
  }

  componentWillUpdate() {
  }

  setPath() {
    this.setState({ children: null });
    this.router.resolve(this.props.currentPath)
      .then((children) => {
        this.setState({ children });
      });
  }

  render() {
    return (
      <div>
        {this.state.children}
      </div>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  currentPath: router.currentPath,
});

export default connect(mapStateToProps)(Router);
