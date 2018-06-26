import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                         {/*You also can override the active class to your class or style it inline with activeStyle object*/}
                            <li><NavLink to="/" 
                                        exact
                                        // activeClassName="my-active"
                                        // activeStyle={{
                                        //     color: 'green',
                                        //     textDecoration: 'underline'
                                        // }}
                                >Home
                                </NavLink></li>
                            {/* Example with more complex 'to' definition*/} 
                            <li><NavLink to={{
                                pathname: "/new-post",
                                exact: true,
                                // hash: '#submit',
                                // search: '?quick-submit: true'
                            }}>Add Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*With render we can render any JSX code
                 <Route path='/' exact render={() => <h1>Home</h1>} /> */}

                 {/* With component we render a React component */}
                 {/* With switch the 1st child that match path get rendered, others don't. The order is important! */}
                 <Route path="/" exact component={Posts} />
                 <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                 </Switch>


            </div>
        )
    }
}

export default Blog;