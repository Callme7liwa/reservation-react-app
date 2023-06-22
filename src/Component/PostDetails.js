import React, { Component } from 'react'

import {connect} from 'react-redux'

export class PostDetails extends Component {
    render() {
        const {post} = this.props  ; 
        return (
            <div className='col s12 m6'>
                <div className='card'>
                    <div class="card-content">
                        <span className='card-title'> {this.props.post.title}</span>
                        <p>{this.props.post.content} {this.props.id}</p>
                    </div> 
                    <div className='card-action'>
                        <button onClick={() => this.props.deletePost(post.id)}  className='btn red'> delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {
            dispatch({type : 'DELETE_POST',id} )
        }
    }
}

export default connect(null,mapDispatchToProps) (PostDetails)
