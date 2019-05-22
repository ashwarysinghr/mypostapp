import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = ({postsLength}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Posts</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="navbar-brand" to="/">
                                <span>No. of posts {postsLength ? `(${postsLength})`: ''}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => ({
    postsLength:state.posts.posts.length
})
export default connect(mapStateToProps, null)(Header);