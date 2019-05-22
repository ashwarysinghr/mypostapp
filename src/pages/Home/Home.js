import React from 'react';
import PostList from "../../containers/PostList/PostList";

const Home = () => {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '1rem'}} >
                <div className="row">
                    <PostList/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;