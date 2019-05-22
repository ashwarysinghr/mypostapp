import { connect } from "react-redux";
import React, {Component} from 'react';
import {fetchPosts, deletePost, updatePost} from '../../actions/postAction';
import { bindActionCreators } from 'redux';
import Post from "../../components/Post/Post";
import { Snackbar } from '../../components/Snackbar/Snackbar';

class PostList extends Component{
    snackbarRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            message:'',
            showModal: false
        }
        this.openSnackbar = this.openSnackbar.bind(this);
        this.handleDeletePost = this.handleDeletePost.bind(this);
        this.handleUpdatePost = this.handleUpdatePost.bind(this);
    }

    openSnackbar(message){
        this.snackbarRef.current.openSnackBar(`${message}`);        
    }

    componentDidMount(){
        const { fetchPosts } = this.props.actions;
        fetchPosts();
    }
    
    handleDeletePost(post, e){
        const { deletePost } = this.props.actions;
        deletePost(post);
        this.openSnackbar('Post Deleting');
    }

    handleUpdatePost(post, e){
        const { updatePost } = this.props.actions;
        updatePost(post);
        this.openSnackbar('Post Updating');
    }

    render(){
        const {posts, loading} = this.props;
        
        return (
            loading ? <h1>Loading Posts...</h1> : 
                <><Snackbar ref = {this.snackbarRef} />
                <div className="posts">
                    {
                        posts ? posts.map((product, index) => {
                            return (
                            <Post key={product.id} data={product} 
                               updatePost = {this.handleUpdatePost}
                               deletePost={this.handleDeletePost} showConfirmationMessage={this.showConfirmationMessage}/> 
                        )}) : <h1>No Data</h1>
                    }
                </div></>
        )
    }
    
}

const mapStateToProps = state => {
    const {posts, loading} = state.posts;
    return {posts: posts, loading:loading}
};
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({
        fetchPosts,
        deletePost, updatePost
      }, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostList);