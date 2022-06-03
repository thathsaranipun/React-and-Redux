import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import store from '../store'
import { selectPost } from '../action/postAction'

class Select extends Component {
    render() {
        if (!this.props.selectPost) {
            return (<h2>Click one</h2>)
        }
        return (
            <div >{this.props.selectPost.id}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectPost: state.selectPost
    }
}

export default connect(mapStateToProps)(Select)