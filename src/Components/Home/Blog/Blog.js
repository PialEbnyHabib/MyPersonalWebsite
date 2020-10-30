import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className="container blog">

            <h1>Welcome</h1>    

              <div>
                  <p>Hooks

Website: reactjs.org/docs/hooks-intro.html
Repository: github.com/facebook/react
GitHub stars: 157,000+
Developer: Facebook
Current version: 16.14.0
Contributors: 1,500+

While not strictly a tool, any developer working with React in 2020 needs to be familiar with hooks. These are a new addition to React as of version 16.8 which unlock useful features in function components. For example, the useState hook allows a function component to have its own state, whereas useEffect allows you to perform side effects after the initial render — for example, manipulating the DOM or data fetching. Hooks can be used to replicate lifecycle methods in functional components and allow you to share code between components.

The following basic hooks are available:

useState: for mutating state in a function component without lifecycle methods
useEffect: for executing functions post-render, useful for firing Ajax requests
useContext: for accessing component context data, even outside component props

Pros:

mitigates state management complexity
supports function components
encourages separation of concerns

Cons:

context data switching can increase cognitive load

If you’d like to find out more about hooks, then check out our tutorial, “React Hooks: How to Get Started & Build Your Own”.
Function Components

Website: reactjs.org/docs/components-and-props.html
Repository: github.com/facebook/react
GitHub stars: 157,000+
Developer: Facebook
Current version: 16.14.0
Contributors: 1,500+

With the advent of hooks, function components — a declarative way to create JSX markup without using a class — are becoming more popular than ever. They embrace the functional paradigm because they don’t manage state in lifecycle methods. This emphasizes focus on the UI markup without much logic. Because the component relies on props, it becomes easier to test. Props have a one-to-one relationship with the rendered output.

This is what a functional component looks like in React:

function Welcome(props) 

Pros:

focuses on the UI
testable component
less cognitive load when thinking about the component

Cons:

no lifecycle methods

Create React App

Website: create-react-app.dev
Repository: github.com/facebook/create-react-app
GitHub stars: 82,000+
Developer: Facebook
Current version: 3.4.1
Contributors: 800+

Create React App is the quintessential tool for firing up a new React project. It manages all React dependencies via a single npm package. No more dealing with Babel, webpack, and the rest. All it takes is one command to set up a local development environment, with React, JSX, and ES6 support. But that’s not all. Create React App also offers hot module reloading (your changes are immediately reflected in the browser when developing), automatic code linting, a test runner and a build script to bundle JS, CSS, and images for production.

It’s easy to get started:

npx create-react-app my-killer-app

And it’s even easier to upgrade later. The entire dependency tool chain gets upgraded with react-scripts in package.json:

npm i react-scripts@latest

Pros:

easy to get started
easy to upgrade
single meta-dependency

Cons:

no server-side rendering, but allows for integration

If you’d like to find out more about using Create React App, please consult our tutorial, “Create React App – Get React Projects Ready Fast”.
Proxy Server

Website: create-react-app.dev/docs/proxying-api-requests-in-development
Repository: github.com/facebook/create-react-app
GitHub stars: 82,000+
Developer: Facebook
Current version: 3.4.1
Contributors: 800+

Starting from version react-scripts@0.2.3 or higher, it’s possible to proxy API requests. This allows the back-end API and local Create React App project to co-exist. From the client side, making a request to /my-killer-api/get-data routes the request through the proxy server. This seamless integration works both in local dev and post-build. If local dev runs on port localhost:3000, then API requests go through the proxy server. Once you deploy static assets, it goes through whatever back end hosts these assets.</p>
              </div>
        </div>
    );
}; 

export default Blog;      