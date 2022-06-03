import React, { Component } from 'react'
import { postAction } from '../action/postAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.postAction}>Click Me</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postAction: postAction }, dispatch)
}
export default connect(null, mapDispatchToProps)(Button)