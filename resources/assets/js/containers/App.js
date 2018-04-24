import React from 'react';
import { connect } from 'react-redux'

import { Main } from '../components/Main';
import { User } from '../components/User';
import { setName } from '../actions/userActions';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={ () => this.props.setName("Anna") }/>
                <User username={ this.props.user.name }/>
            </div>
        )
    }
}

// Defines the properties to use from the global state to be used by this component
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

// Defines the actions the component can execute and send to the store
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); // Hooks up `App` component