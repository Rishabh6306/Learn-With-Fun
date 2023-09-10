import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { useDocsState, useDocsFunctions } from '../utilsForDocs/docsUtils';
import Header from '../Header';
import Content from '../Content';

function ReactJsDocs() {

  const data = {
    "Getting Started": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Getting Started with React.js</h1>

        <p className='my-3'>
          <span className='text-3xl text-orange-400'>React.js</span> is a powerful JavaScript library for building user interfaces. It allows you to create interactive and dynamic web applications with ease.
        </p>

        <p className='my-3'>React.js, often referred to simply as React, is a widely-used JavaScript library for building user interfaces. Developed and maintained by Facebook, React has gained immense popularity for its efficient and declarative approach to building interactive web applications.</p>
        <p className="my-3">React allows developers to create UI components that can be seamlessly reused throughout an application, making the codebase modular and easier to maintain. It employs a virtual DOM (Document Object Model) for optimizing rendering performance, ensuring that updates are made efficiently without unnecessary re-renders of the entire page.</p>
        <p className="my-3">Furthermore, React follows a unidirectional data flow, which simplifies state management and ensures predictable behavior, especially in complex applications. This library has revolutionized front-end development by enabling developers to build highly responsive and interactive web interfaces while maintaining code readability and organization.</p>

        <h2 className='text-3xl font-bold my-3'>1. Setting Up a React.js Project</h2>

        <p className='my-3'>
          To start using React, you'll need Node.js and npm (Node Package Manager) installed on your computer. Here are the steps to create a new React project:  Let's get started with React.js!
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`# 1. Install Create React App globally (if not already installed)
                  npm install -g create-react-app
    
                  # 2. Create a new React project
                  npx create-react-app my-react-app
    
                   # 3. Navigate to the project directory
                  cd my-react-app
    
                  # 4. Start the development server
                  npm start
    `}
          </code>
        </pre>

        <p className='my-3'>
          Your React application is now running, and you can access it at <code>http://localhost:3000</code>. You can start editing your React components in the <code>src</code> directory.
        </p>

        <h2 className='text-3xl font-bold my-3'>2. Creating Your First React Component</h2>

        <p className='my-3'>
          React is all about building reusable components. Let's create your first React component:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React from 'react';
    
    function MyComponent() {
      return (
        <div>
          <h1>Hello, React!</h1>
          <p>This is my first React component.</p>
        </div>
      );
    }
    
    export default MyComponent;
    `}
          </code>
        </pre>

        <p className='my-3'>
          You can use this component within your application by importing it and including it in your JSX.
        </p>

        <h2 className='text-3xl font-bold my-3'>3. Building Your React Application</h2>

        <p className='my-3'>
          React encourages you to break your UI into reusable components. You can build complex applications by composing these components together. Explore React's rich ecosystem of libraries and tools to enhance your development experience.
        </p>

        <p className='my-3'>
          Congratulations! You've taken the first steps to becoming proficient with React.js. Dive deeper into the React documentation to explore more advanced concepts and features.
        </p>
      </div>
    ),
    "History of React.js": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>History of React.js</h1>

        <p className='my-3'>
          React.js, commonly known as React, is an open-source JavaScript library for building user interfaces. It was developed by Facebook, and its first release was in May 2013. React quickly gained popularity for its innovative approach to web development.
        </p>

        <h2 className='text-3xl font-bold my-3'>Why React?</h2>

        <p className='my-3'>
          In the early days of web development, building complex user interfaces was challenging. Changes to a web page's state often required significant manual manipulation of the DOM (Document Object Model), leading to performance issues and code complexity.
        </p>

        <p className='my-3'>
          React was created to address these challenges. It introduced a component-based architecture, allowing developers to break down user interfaces into reusable, self-contained components. React's virtual DOM (a lightweight copy of the actual DOM) optimized the process of updating the user interface efficiently.
        </p>

        <h2 className='text-3xl font-bold my-3'>Key Milestones</h2>

        <p className='my-3'>
          React has seen several significant milestones and improvements since its inception:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>React Native (2015):</strong> React expanded its reach beyond the web to mobile app development with React Native. It allowed developers to use React to build native mobile apps for iOS and Android platforms.
          </li>
          <li>
            <strong>React Fiber (2017):</strong> React Fiber was an internal rewrite of React's core algorithm. It improved performance, making React even faster and more efficient.
          </li>
          <li>
            <strong>React Hooks (2019):</strong> React introduced hooks, which are functions that allow functional components to manage state and side effects. Hooks simplified component logic and eliminated the need for class components in many cases.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>Community and Ecosystem</h2>

        <p className='my-3'>
          React's success can be attributed to its active and supportive community. It has a vast ecosystem of libraries, tools, and resources, including React Router for routing, Redux for state management, and Material-UI for component styling.
        </p>

        <h2 className='text-3xl font-bold my-3'>Conclusion</h2>

        <p className='my-3'>
          React.js has revolutionized web development by simplifying the creation of interactive and efficient user interfaces. Its commitment to improving performance, developer experience, and flexibility has made it a favorite among developers worldwide.
        </p>
      </div>
    ),
    "JSX": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JSX (JavaScript XML)</h1>

        <p className='my-3'>
          JSX, which stands for JavaScript XML, is a syntax extension for JavaScript. It is commonly used with React.js to describe the structure and content of user interfaces. JSX allows developers to write HTML-like code within their JavaScript files, making it easier to create and manage the UI components of web applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>Key Features of JSX</h2>

        <p className='my-3'>
          JSX combines the best aspects of JavaScript and HTML, providing several key features:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Expressive:</strong> JSX allows you to express the structure and appearance of UI elements in a concise and visually intuitive manner.
          </li>
          <li>
            <strong>Component-Based:</strong> JSX is well-suited for creating reusable UI components. You can define custom components and compose them to build complex interfaces.
          </li>
          <li>
            <strong>JavaScript Integration:</strong> JSX seamlessly integrates with JavaScript. You can embed JavaScript expressions and logic directly within JSX code.
          </li>
          <li>
            <strong>Compile-Time Checking:</strong> JSX code is typically transpiled to regular JavaScript using tools like Babel. During this process, static type checking and validation can catch errors early.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>Using JSX in React.js</h2>

        <p className='my-3'>
          React.js, a popular JavaScript library for building user interfaces, heavily relies on JSX. React components are often defined using JSX syntax. Here's a simple example of JSX code within a React component:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`}
          </code>
        </pre>

        <p className='my-3'>
          JSX allows you to interpolate JavaScript expressions within curly braces (<code>{'{}'}</code>), as shown in the example above.
        </p>

        <h2 className='text-3xl font-bold my-3'>Conclusion</h2>

        <p className='my-3'>
          JSX is a powerful tool that simplifies the process of building user interfaces in JavaScript applications, particularly in the context of React.js. Its ability to blend JavaScript and HTML makes it a favorite choice among web developers.
        </p>
      </div>
    ),
    "Components": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>React Components: Building Blocks of UIs</h1>

        <p className='my-3'>
          React, also known as React.js, is a popular JavaScript library for building user interfaces. It introduces the concept of <span className='text-orange-400'>components</span>, which are the foundation of React-based applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>Functional Components</h2>

        <p className='my-3'>
          Functional components are JavaScript functions that return JSX (JavaScript XML). They are a simple and concise way to create components. Here's an example:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }`}
          </code>
        </pre>

        <p className='my-3'>
          In this example, the <code>Greeting</code> component accepts a <code>name</code> prop and displays a greeting message.
        </p>

        <h2 className='text-3xl font-bold my-3'>Class Components</h2>

        <p className='my-3'>
          Class components are JavaScript classes that extend <code>React.Component</code>. They have an internal state and lifecycle methods. Here's a class component example:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    
      render() {
        return <p>Count: {this.state.count}</p>;
      }
    }`}
          </code>
        </pre>

        <p className='my-3'>
          The <code>Counter</code> component maintains a count in its state and displays it. State allows class components to manage data that can change over time.
        </p>

        <h2 className='text-3xl font-bold my-3'>Props: Passing Data to Components</h2>

        <p className='my-3'>
          Props are used to pass data from a parent component to a child component. They allow components to be configured dynamically. Here's an example of passing a prop to a functional component:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }
    
    // Usage
    <Greeting name="Alice" />`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>State: Managing Component Data</h2>

        <p className='my-3'>
          State is used to manage data that can change during a component's lifecycle. Class components use <code>this.state</code> to manage state, while functional components can use React Hooks. Here's a state example:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    
      increment() {
        this.setState({ count: this.state.count + 1 });
      }
    
      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.increment()}>Increment</button>
          </div>
        );
      }
    }`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Lifecycle Methods</h2>

        <p className='my-3'>
          Class components have lifecycle methods that allow you to respond to component events like mounting, updating, or unmounting. Common lifecycle methods include <code>componentDidMount</code> and <code>componentDidUpdate</code>.
        </p>

        <h2 className='text-3xl font-bold my-3'>React Components in Action</h2>

        <p className='my-3'>
          React components can be used to build complex user interfaces, from simple buttons to entire web applications. They promote code reusability and maintainability by breaking down the UI into smaller, manageable parts.
        </p>

        <p className='my-3'>
          To learn more about React components and their usage, explore the official React documentation on the <a href='https://reactjs.org/' className='text-orange-400' target='_blank' rel='noopener noreferrer'>React website</a>.
        </p>
      </div>
    ),
    "State": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding State in React.js</h1>

        <p className='my-3'>
          In the world of React.js, <strong>state</strong> is a pivotal concept that plays a fundamental role in building interactive and dynamic user interfaces. It provides a mechanism for React components to manage and store data that can change over time, ensuring that your web applications stay up-to-date and responsive.
        </p>

        <h2 className='text-3xl font-bold my-3'>The Significance of State</h2>

        <p className='my-3'>
          Think of state as a container that holds information relevant to your components. This information can be a wide range of data types, including text, numbers, objects, or arrays. State enables components to keep track of this data, and when the data changes, React knows to re-render the component to reflect the updated information. This is crucial for creating web interfaces that respond to user interactions and external data sources.
        </p>

        <h2 className='text-3xl font-bold my-3'>Working with State in React Components</h2>

        <p className='my-3'>
          To harness the power of state in React components, you'll often use the <code>useState</code> hook (for functional components) or the <code>setState</code> method (for class components).
        </p>

        <p className='my-3'>
          In functional components, the <code>useState</code> hook allows you to declare a piece of state and a function to update it. Here's an example of using <code>useState</code> to create a simple counter:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React, { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }`}
          </code>
        </pre>

        <p className='my-3'>
          In this example, the <code>count</code> variable represents the state, and <code>setCount</code> is the function used to update it. When the "Increment" button is clicked, it triggers a state update, causing the component to re-render with the new count value.
        </p>

        <h2 className='text-3xl font-bold my-3'>The Advantages of Using State</h2>

        <p className='my-3'>
          State in React is essential for creating interactive and dynamic user interfaces. It enables components to respond to user actions, manage form input, fetch data from APIs, and synchronize with external data sources. Stateful components lie at the heart of React development, allowing you to build feature-rich and engaging web applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>Conclusion</h2>

        <p className='my-3'>
          In summary, state is a critical concept in React.js that empowers components to handle dynamic data effectively. Whether you're building a simple counter or a complex web application, understanding how to work with state is key to creating robust and interactive user interfaces.
        </p>

        <p className='my-3'>
          For more in-depth information on React.js state management, you can explore the official React documentation on this topic.
        </p>

        <p className='my-3 text-orange-400'>
          Learn more about React.js state management on <a href='https://reactjs.org/docs/state-and-lifecycle.html' target='_blank' rel='noopener noreferrer'>React's official documentation</a>.
        </p>
      </div>
    ),
    "Props": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding Props in React.js</h1>

        <p className='my-3'>
          In the world of React.js, <strong>props</strong> (short for "properties") are a fundamental concept that enables you to pass data from one component to another. They provide a way to make your React components dynamic and reusable by allowing you to configure their behavior and appearance based on external data.
        </p>

        <h2 className='text-3xl font-bold my-3'>The Importance of Props</h2>

        <p className='my-3'>
          Props are at the core of React's component-based architecture. They allow you to create components that can be customized and composed to build complex user interfaces. Instead of hardcoding values inside components, you can pass data to them as props, making your components versatile and adaptable.
        </p>

        <h2 className='text-3xl font-bold my-3'>Passing Props</h2>

        <p className='my-3'>
          To pass props to a child component, you include them as attributes when rendering the child component. Here's an example of a parent component passing a "name" prop to a child component:
        </p>

       
        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`// ParentComponent.js
    import React from 'react';
    import ChildComponent from './ChildComponent';
    
    function ParentComponent() {
      const name = 'Alice';
    
      return (
        <div>
          <ChildComponent name={name} />
        </div>
      );
    }`}
          </code>
        </pre>

        <p className='my-3'>
          In this example, the "name" prop is passed to the "ChildComponent." The child component can then access and use this prop.
        </p>

        <h2 className='text-3xl font-bold my-3'>Using Props in a Component</h2>

        <p className='my-3'>
          Inside a component, you can access props through the function's argument. Functional components receive props as an argument, while class components access props using <code>this.props</code>. Here's how you can use props in both types of components:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`// Functional Component
    function ChildComponent(props) {
      return (
        <div>
          <p>Hello, {props.name}!</p>
        </div>
      );
    }
    
    // Class Component
    class ChildComponent extends React.Component {
      render() {
        return (
          <div>
            <p>Hello, {this.props.name}!</p>
          </div>
        );
      }
    }`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Making Components Reusable</h2>

        <p className='my-3'>
          One of the primary benefits of props is reusability. You can reuse the same component with different data by passing different props. This makes your code more efficient and maintains a clear separation of concerns.
        </p>

        <h2 className='text-3xl font-bold my-3'>Default Props</h2>

        <p className='my-3'>
          React allows you to define default values for props, which are used when a prop is not provided. This can be useful to ensure your component behaves gracefully even when certain props are missing.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`function Greeting(props) {
      return (
        <div>
          <p>Hello, {props.name}!</p>
        </div>
      );
    }
    
    Greeting.defaultProps = {
      name: 'Guest',
    };`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Conclusion</h2>

        <p className='my-3'>
          Props are a cornerstone of React development, allowing you to pass data and configure components dynamically. By understanding how to use props effectively, you can create versatile and reusable components, making your React applications more maintainable and powerful.
        </p>

        <p className='my-3'>
          To explore more about React.js and props, refer to the official React documentation for an in-depth guide.
        </p>

        <p className='my-3 text-orange-400'>
          Learn more about React.js props on <a href='https://reactjs.org/docs/components-and-props.html' target='_blank' rel='noopener noreferrer'>React's official documentation</a>.
        </p>
      </div>
    ),
    "Hooks": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding React Hooks</h1>

        <p className='my-3'>
          React Hooks are a powerful addition to React introduced in version 16.8. They allow you to use state and other React features without writing class components. Hooks provide a more straightforward and functional way to manage component logic, making your code cleaner and easier to understand.
        </p>

        <h2 className='text-3xl font-bold my-3'>Why Use Hooks?</h2>

        <p className='my-3'>
          Before the introduction of Hooks, managing state and lifecycle in React components was primarily done using class components. While class components are powerful, they can lead to complex and verbose code, especially when dealing with shared logic or side effects.
        </p>

        <p className='my-3'>
          Hooks address these issues by allowing you to reuse stateful logic between components without changing the component hierarchy. They enable functional components to manage local component state, effects, context, refs, and more.
        </p>

        <h2 className='text-3xl font-bold my-3'>Commonly Used Hooks</h2>

        <p className='my-3'>
          React provides several built-in hooks to cover various aspects of component logic. Here are some commonly used hooks:
        </p>

        <h3 className='text-2xl font-bold my-3'>1. useState</h3>

        <p className='my-3'>
          <code>useState</code> allows functional components to manage local component state. It returns an array with the current state value and a function to update it.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React, { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }`}
          </code>
        </pre>

        <h3 className='text-2xl font-bold my-3'>2. useEffect</h3>

        <p className='my-3'>
          <code>useEffect</code> allows you to perform side effects in functional components. It replaces lifecycle methods like <code>componentDidMount</code> and <code>componentDidUpdate</code>.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React, { useState, useEffect } from 'react';
    
    function Timer() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, [count]);
    
      return <p>Elapsed Time: {count} seconds</p>;
    }`}
          </code>
        </pre>

        <h3 className='text-2xl font-bold my-3'>3. useContext</h3>

        <p className='my-3'>
          <code>useContext</code> allows you to access a context value in a functional component. It simplifies working with context in a more concise manner.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React, { useContext } from 'react';
    
    const ThemeContext = React.createContext('light');
    
    function ThemedComponent() {
      const theme = useContext(ThemeContext);
    
      return <p>Current Theme: {theme}</p>;
    }`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Custom Hooks</h2>

        <p className='my-3'>
          In addition to built-in hooks, you can create custom hooks to reuse stateful logic across different components. Custom hooks follow the naming convention of starting with "use."
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import { useState } from 'react';
    
    function useCounter(initialValue) {
      const [count, setCount] = useState(initialValue);
    
      const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);
    
      return { count, increment, decrement };
    }`}
          </code>
        </pre>

        <p className='my-3'>
          Hooks have revolutionized the way React applications are built. They simplify component logic, improve code reuse, and make it easier to manage state and effects. By embracing hooks, you can write cleaner, more maintainable React code.
        </p>

        <p className='my-3 text-orange-400'>
          To dive deeper into React Hooks, explore the official React documentation on <a href='https://reactjs.org/docs/hooks-intro.html' target='_blank' rel='noopener noreferrer'>React Hooks</a>.
        </p>
      </div>
    ),
    "Routing": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding Routing in React</h1>

        <p className='my-3'>
          Routing is a crucial aspect of building single-page applications (SPAs) with React. While it's not a core part of React itself, several libraries and packages make it easier to implement routing in your React applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>Why Routing?</h2>

        <p className='my-3'>
          In traditional multi-page applications, navigating between different pages is achieved through server-side routing. When a user clicks a link, the server sends a request to load a new HTML page. However, SPAs aim to provide a smoother user experience by loading only the necessary content without full-page refreshes.
        </p>

        <p className='my-3'>
          Routing in React allows you to manage different "views" or components based on the URL without requiring a full server request. This results in faster and more seamless navigation within your application.
        </p>

        <h2 className='text-3xl font-bold my-3'>Popular Routing Libraries</h2>

        <p className='my-3'>
          To implement routing in your React applications, you can choose from several libraries. Some of the most popular ones include:
        </p>

        <h3 className='text-2xl font-bold my-3'>1. React Router</h3>

        <p className='my-3'>
          React Router is one of the most widely used routing libraries for React. It provides a declarative way to define routes and manage navigation within your application. React Router offers features like nested routes, route parameters, and navigation guards.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
    
    function App() {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Router>
      );
    }`}
          </code>
        </pre>

        <h3 className='text-2xl font-bold my-3'>2. Reach Router</h3>

        <p className='my-3'>
          Reach Router is another routing library designed for React. It focuses on accessibility and is known for its simple API. Reach Router allows you to create accessible route transitions and nested routes.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import { Router, Link } from '@reach/router';
    
    function App() {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Home path='/' />
          <About path='/about' />
          <Contact path='/contact' />
        </Router>
      );
    }`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Using Routing in React</h2>

        <p className='my-3'>
          To implement routing, you typically define a set of routes that map to specific components. When a user navigates to a route, the corresponding component is rendered. You can also pass route parameters and query parameters to components for dynamic behavior.
        </p>

        <p className='my-3 text-orange-400'>
          While routing libraries offer various features and approaches, choosing the right one depends on your project's requirements and preferences. You can explore each library's documentation to get a deeper understanding of its capabilities.
        </p>
      </div>
    ),
    "Context API": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding React's Context API</h1>
        <p className='my-3'>
          React's Context API is a powerful feature that allows you to manage global state and share data across components without the need for prop drilling (passing props down multiple levels). It simplifies state management in large-scale React applications and promotes cleaner and more maintainable code.
        </p>

        <h2 className='text-3xl font-bold my-3'>Why Use Context API?</h2>

        <p className='my-3'>
          In React, data typically flows from parent components to child components through props. While this works well for most cases, it can become cumbersome when you have deeply nested components or when you need to pass data between unrelated components. Context API solves these problems by providing a way to share state across the component tree without manually passing props through intermediate components.
        </p>

        <p className='my-3'>
          Key benefits of using the Context API include:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Global State:</strong> You can maintain global application state that can be accessed and modified from any component in your application.
          </li>
          <li>
            <strong>Reduced Prop Drilling:</strong> It eliminates the need to pass props down through multiple levels of components, leading to cleaner and more readable code.
          </li>
          <li>
            <strong>Component Isolation:</strong> Each component can focus on its specific functionality without needing to be aware of the entire state structure.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>How Context API Works</h2>

        <p className='my-3'>
          Context API consists of three main parts:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Context Object:</strong> You create a context object using the <code>createContext</code> function. This object will hold your global state.
          </li>
          <li>
            <strong>Provider Component:</strong> You wrap your application or a specific part of it with a <code>Provider</code> component. This component accepts a <code>value</code> prop that defines the state you want to share.
          </li>
          <li>
            <strong>Consumer Component:</strong> In any component that needs access to the shared state, you use the <code>Consumer</code> component to access the data provided by the <code>Provider</code>.
          </li>
        </ul>

        <p className='my-3'>
          Here's a basic example of how to use the Context API:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`import React, { createContext, useContext, useState } from 'react';
    // Create a context object
    const MyContext = createContext();
    
    // Create a provider component
    function MyProvider({ children }) {
    const [state, setState] = useState('Hello from Context!');
    
    return (
    <MyContext.Provider value={{ state, setState }}>
    {children}
    </MyContext.Provider>
    );
    }
    
    // Create a consumer hook
    function useMyContext() {
    return useContext(MyContext);
    }
    
    export { MyProvider, useMyContext };
    `}
          </code>
        </pre>
        <p className='my-3'>
          In this example, we create a context object <code>MyContext</code>, wrap our application with a <code>MyProvider</code> component to provide the state, and then use the <code>useMyContext</code> hook in any component that needs access to the shared state.
        </p>

        <h2 className='text-3xl font-bold my-3'>When to Use Context API</h2>

        <p className='my-3'>
          Context API is a great choice when you have data or state that needs to be accessed by multiple components at different levels of your component tree. It's especially useful for managing application themes, user authentication, or any global settings.
        </p>

        <p className='my-3 text-orange-400'>
          While Context API is powerful, it's important to consider its usage carefully. Overusing context can lead to complex and hard-to-maintain code. It's best suited for scenarios where shared state simplifies your application's architecture.
        </p>
      </div>
    ),
    "More Info": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Understanding React, Redux, and Redux Toolkit</h1>
    
        <p className='my-3'>
          To dive deeper into React, Redux, and Redux Toolkit and explore advanced concepts, here are some valuable resources to help you expand your knowledge:
        </p>
    
        <ol className='list-decimal list-inside my-3'>
          <li>
            <strong>Official React Documentation:</strong> The official React documentation is an excellent place to start. It covers everything from the basics to advanced topics. <a href='https://reactjs.org/docs/getting-started.html' target='_blank' rel='noopener noreferrer'>Read the Official Documentation</a>
          </li>
          <li>
            <strong>React's Advanced Guides:</strong> React provides a set of advanced guides that delve into topics like Context, Hooks, and Concurrent Mode. These guides offer in-depth explanations and examples. <a href='https://reactjs.org/docs/concurrent-mode-intro.html' target='_blank' rel='noopener noreferrer'>Explore Advanced Guides</a>
          </li>
          <li>
            <strong>React YouTube Channel:</strong> React's official YouTube channel features video tutorials, talks, and conference presentations that cover a wide range of React-related topics. <a href='https://www.youtube.com/c/ReactJS' target='_blank' rel='noopener noreferrer'>Visit the React YouTube Channel</a>
          </li>
          <li>
            <strong>Advanced React and Redux Course on Udemy:</strong> If you prefer structured courses, this Udemy course covers advanced React and Redux concepts and is highly rated by students. <a href='https://www.udemy.com/course/react-redux-tutorial/' target='_blank' rel='noopener noreferrer'>Check out the Course</a>
          </li>
          <li>
            <strong>Official Redux Documentation:</strong> Redux is a popular state management library for React. The official Redux documentation provides comprehensive guidance on using Redux with React. <a href='https://redux.js.org/introduction/getting-started' target='_blank' rel='noopener noreferrer'>Read the Redux Documentation</a>
          </li>
          <li>
            <strong>Redux YouTube Channel:</strong> Redux's official YouTube channel offers tutorials and talks to help you understand and use Redux effectively with React. <a href='https://www.youtube.com/c/Reduxjs' target='_blank' rel='noopener noreferrer'>Visit the Redux YouTube Channel</a>
          </li>
          <li>
            <strong>Redux Toolkit Documentation:</strong> Redux Toolkit is the official recommended way to write Redux logic. You can learn more about Redux Toolkit and its usage in the official documentation. <a href='https://redux-toolkit.js.org/' target='_blank' rel='noopener noreferrer'>Explore Redux Toolkit</a>
          </li>
          <li>
            <strong>React-Redux Library:</strong> The react-redux library provides official bindings for Redux in React applications. You can learn more about integrating Redux with React on their GitHub page. <a href='https://github.com/reduxjs/react-redux' target='_blank' rel='noopener noreferrer'>Explore React-Redux</a>
          </li>
        </ol>
    
        <p className='my-3'>
          These resources cover React, Redux, and Redux Toolkit and will help you become proficient in building complex and scalable applications with these technologies.
        </p>
      </div>
    ),    
  }

  const { activeHeading, showHeader, setActiveHeading, setShowHeader } = useDocsState();
  const { handleHeadingClick, toggleHeader } = useDocsFunctions(data, showHeader, setShowHeader, activeHeading, setActiveHeading);

  return (
    <div className='flex pt-5 md:pt-12 flex-col md:flex-row'>
      {/* Conditionally render the icon if screen width is less than 768px */}
      <span
        className='text-red-600 relative top-10 ssm:bottom-4 text-3xl block md:hidden cursor-pointer' onClick={toggleHeader}
      >
        <BsCaretLeft />
      </span>

      {/* Conditionally render the Header component based on showHeader state */}
      {showHeader && <Header headings={Object.keys(data)} activeHeading={activeHeading} handleHeadingClick={handleHeadingClick} />}
      <Content content={data} activeHeading={activeHeading} />
    </div>
  );
}

export default ReactJsDocs;