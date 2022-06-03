import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPost } from '../action/postAction'
import Select from './Select'

class PostView extends Component {

    creatList() {
        return this.props.allPosts.map((post) => {
            return (
                <li key={post.userId} onClick={() => this.props.selectPost(post)}>{post.id} - {post.title}</li>
            )
        })
    }
    render() {
        if (!this.props.allPosts) {
            return (
                <h2>Click Button</h2>
            )
        }
        return (
            <div>
                <div>{this.creatList()}</div>

                <Select />
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        allPosts: state.allPosts
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectPost: selectPost }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PostView)