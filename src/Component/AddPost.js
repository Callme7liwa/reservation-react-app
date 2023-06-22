import React, { Component } from 'react'
import { connect } from 'react-redux'
import {v4 as uuidv4} from "uuid"
class AddPost extends Component {
    state = {
        post : {
            id:uuidv4(),
            title:'',
            content:''
        }
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            post:{
                ... this.state.post,
               [e.target.name] : value 
            }
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createPost(this.state.post);
        this.setState({
            post:{
                id:uuidv4(),
                title:'',
                content:'',
            },
        })
    }
    render() {
        return (
            <div className='container' style={ {margin : '4rem auto '}}>
                <h5 className=" blue-text center-align">AyoubBlog</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='post_title'>Title</label>
                        <input onChange={this.handleChange} type="text" value={this.state.post.title} name="title" />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='post_content'>content</label>
                        <textarea onChange={this.handleChange} className="materialize-textarea" value={this.state.post.content} name="content" > </textarea>
                    </div>
                    <div class="input-field">
                        <button type="submit" className="btn blue">
                            Submit
                            <i className='material-icons right'>send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost : (post) => {
            dispatch({type : 'ADD_POST' , post})
        }
    }
}

export default connect(null,mapDispatchToProps) (AddPost)
