import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { useDocsState, useDocsFunctions } from '../utilsForDocs/docsUtils';
import Header from '../Header';
import Content from '../Content';

function JavaScriptDocs() {
  const data = {
    "Getting Started": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript: The Versatile Language for Web Development</h1>

        <div className='my-3'>
          JavaScript is a versatile and essential programming language used in web development. It enables developers to create dynamic, interactive, and responsive web applications. Unlike HTML and CSS, which focus on content structure and styling, JavaScript brings functionality and behavior to web pages. It's a client-side scripting language, meaning it runs directly in the user's web browser.
        </div>

        <div className='my-3'>
          JavaScript is integral to modern web development for several reasons:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Interactivity:</strong> JavaScript allows developers to create interactive elements such as forms, sliders, and real-time updates. This interactivity enhances the user experience and engagement.
          </li>
          <li>
            <strong>Dynamic Content:</strong> With JavaScript, you can dynamically load and update content on a web page without requiring a full page refresh. This dynamic behavior is crucial for single-page applications (SPAs).
          </li>
          <li>
            <strong>Cross-Browser Compatibility:</strong> JavaScript helps ensure that your web applications work consistently across various web browsers. Libraries and frameworks like React further simplify cross-browser development.
          </li>
          <li>
            <strong>API Integration:</strong> JavaScript facilitates interaction with external services and APIs, enabling features like maps, social media integration, and data retrieval.
          </li>
        </ul>

        <div className='my-3'>
          JavaScript code is typically embedded within HTML documents and executed by the user's browser. When a web page loads, the browser interprets and runs the JavaScript code, allowing it to manipulate the Document Object Model (DOM). The DOM represents the structured content of a web page, and JavaScript can modify it in real-time.
        </div>

        <div className='my-3'>
          The JavaScript ecosystem is vast and includes a rich collection of libraries, frameworks, and tools. Some popular JavaScript libraries and frameworks include React, Angular, and Vue.js. These tools simplify various aspects of web development, from UI components to state management.
        </div>

        <div className='my-3'>
          For aspiring web developers, learning JavaScript is essential. It opens up countless opportunities to build interactive web applications, improve user experiences, and collaborate on exciting web projects. JavaScript skills are in high demand in the job market, making it a valuable language to master.
        </div>

        <h2 className='text-3xl font-bold my-3'>10 Key Points About JavaScript</h2>

        <ol className='list-decimal list-inside my-3'>
          <li>JavaScript is a high-level, interpreted scripting language.</li>
          <li>It was created by Brendan Eich in 1995 while working at Netscape Communications Corporation.</li>
          <li>JavaScript is often abbreviated as JS.</li>
          <li>It is used for both client-side and server-side web development.</li>
          <li>JavaScript is an essential technology for building modern web applications, including SPAs.</li>
          <li>ECMAScript is the standardized specification for JavaScript.</li>
          <li>Popular front-end libraries and frameworks like React, Angular, and Vue.js are built with JavaScript.</li>
          <li>JavaScript supports asynchronous programming, allowing non-blocking execution of code.</li>
          <li>Node.js enables server-side JavaScript development, making it a full-stack language.</li>
          <li>JavaScript is known for its active and supportive developer community.</li>
        </ol>

        <h2 className='text-3xl font-bold my-3'>JavaScript in Action: ReactJS and Tailwind CSS</h2>

        <div className='my-3'>
          JavaScript truly shines when combined with powerful front-end libraries and frameworks. ReactJS is one such framework that simplifies the development of user interfaces. It allows developers to create reusable UI components, manage application state efficiently, and build dynamic web applications with ease.
        </div>

        <div className='my-3'>
          Tailwind CSS, on the other hand, is a utility-first CSS framework that pairs perfectly with JavaScript frameworks like React. It provides a set of pre-defined classes that streamline styling and ensure a consistent and responsive design across your web application.
        </div>

        <div className='my-3'>
          When you bring JavaScript, ReactJS, and Tailwind CSS together, you have a powerful stack for building modern, interactive, and aesthetically pleasing web applications.
        </div>

        <h2 className='text-3xl font-bold my-3'>Learning Resources</h2>

        <div className='my-3'>
          If you're ready to embark on your JavaScript journey, there are numerous learning resources available. Websites like MDN Web Docs offer comprehensive guides and tutorials to help you master JavaScript. You can explore real-world projects, participate in coding challenges, and join developer communities to enhance your skills.
        </div>

        <div className='my-3'>
          So, whether you're a beginner exploring the basics of JavaScript or an experienced developer looking to create cutting-edge web applications, JavaScript is your gateway to the world of web development.
        </div>

        <div className='my-3'>
          <strong>For more information and in-depth tutorials, you can visit the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer' className='text-orange-400 hover:underline'>MDN Web Docs JavaScript page</a>.</strong>
        </div>
      </div>
    ),
    "History of JavaScript": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>The Evolution of JavaScript: From LiveScript to ECMAScript</h1>

        <div className='my-3'>
          JavaScript, originally developed by Brendan Eich in 1995 while he was working at Netscape Communications Corporation, has undergone significant transformations and standardizations over the years. Let's delve into the fascinating history of this versatile programming language.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Birth of JavaScript</h2>

        <div className='my-3'>
          JavaScript was initially known as "LiveScript" but was later renamed "JavaScript" to leverage the popularity of Java at the time. Contrary to its name, JavaScript and Java are entirely different programming languages.
        </div>

        <h2 className='text-3xl font-bold my-3'>2. Netscape Navigator and Browser Wars</h2>

        <div className='my-3'>
          JavaScript was first introduced in Netscape Navigator 2.0. Its primary purpose was to enable client-side scripting in web browsers, allowing developers to create interactive web pages. During the "Browser Wars" era of the late 1990s, Microsoft introduced JScript in Internet Explorer, creating a competition in the realm of client-side scripting.
        </div>

        <h2 className='text-3xl font-bold my-3'>3. ECMAScript Standardization</h2>

        <div className='my-3'>
          To bring consistency and standardization to the language, JavaScript was submitted to the European Computer Manufacturers Association (ECMA) International. This led to the creation of the ECMAScript specification, which is the official standard for JavaScript. The first edition of ECMAScript, known as ES1, was published in 1997.
        </div>

        <h2 className='text-3xl font-bold my-3'>4. The JavaScript Renaissance</h2>

        <div className='my-3'>
          JavaScript experienced a renaissance with the advent of AJAX (Asynchronous JavaScript and XML), which allowed web applications to send and receive data from servers without page reloads. This marked the beginning of modern web development.
        </div>

        <h2 className='text-3xl font-bold my-3'>5. The Rise of Libraries and Frameworks</h2>

        <div className='my-3'>
          As web development grew in complexity, JavaScript libraries and frameworks like jQuery, Angular, and React emerged. These tools made it easier to build dynamic and interactive web applications.
        </div>

        <h2 className='text-3xl font-bold my-3'>6. ECMAScript 6 (ES6) and Beyond</h2>

        <div className='my-3'>
          The release of ECMAScript 6 (ES6) in 2015 introduced many new features and syntax enhancements to JavaScript. ES6 brought about a more modern and developer-friendly version of the language. Subsequent versions of ECMAScript continued to add new features and improvements.
        </div>

        <h2 className='text-3xl font-bold my-3'>7. Node.js and Server-Side JavaScript</h2>

        <div className='my-3'>
          Node.js, developed by Ryan Dahl in 2009, allowed JavaScript to be used for server-side programming. This expanded JavaScript's versatility beyond the browser and contributed to the rise of full-stack JavaScript development.
        </div>

        <h2 className='text-3xl font-bold my-3'>8. JavaScript in Modern Development</h2>

        <div className='my-3'>
          Today, JavaScript is a fundamental part of web development. It powers both client-side and server-side applications and is used in various contexts, from web and mobile app development to game development and even machine learning.
        </div>

        <h2 className='text-3xl font-bold my-3'>9. The Future of JavaScript</h2>

        <div className='my-3'>
          JavaScript continues to evolve with ongoing updates to the ECMAScript specification. WebAssembly (Wasm) and progressive web apps (PWAs) are among the innovations shaping the future of web development.
        </div>

        <h2 className='text-3xl font-bold my-3'>10. Conclusion</h2>

        <div className='my-3'>
          JavaScript's journey from its humble beginnings to its present-day prominence in web development is a testament to its adaptability and enduring relevance. As the web continues to evolve, JavaScript remains at the forefront of innovation, empowering developers to create dynamic and interactive web experiences.
        </div>
      </div>
    ),
    "Data Types": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Data Types</h1>

        <div className='my-3'>
          Data types are essential concepts in programming languages, including JavaScript. They define the kind of data that can be stored and manipulated in a program. JavaScript supports several data types, categorized into two main groups: primitive data types and reference data types.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Primitive Data Types</h2>

        <div className='my-3'>
          Primitive data types represent single values and include the following types:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Number (Ank)</strong>: Represents numeric values, including integers and floating-point numbers.
          </li>
          <li>
            <strong>String (Shreni)</strong>: Represents text and is enclosed in single or double quotes.
          </li>
          <li>
            <strong>Boolean (Boolean)</strong>: Represents true or false values, used for logical operations.
          </li>
          <li>
            <strong>Undefined (Anirdisht)</strong>: Represents a variable that has been declared but has not been assigned a value.
          </li>
          <li>
            <strong>Null (Shoonya)</strong>: Represents the intentional absence of any object or value.
          </li>
          <li>
            <strong>Symbol (Pratik)</strong>: Introduced in ECMAScript 6 (ES6), symbols are unique and immutable values, often used as object property keys.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>2. Reference Data Types</h2>

        <div className='my-3'>
          Reference data types are more complex and can hold multiple values. They include:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Object (Vastu)</strong>: Represents a collection of key-value pairs and is used for more complex data structures.
          </li>
          <li>
            <strong>Array (Ank Shreni)</strong>: A special type of object used to store ordered lists of values.
          </li>
          <li>
            <strong>Function (Kriya)</strong>: Represents reusable blocks of code and is a fundamental building block of JavaScript.
          </li>
          <li>
            <strong>Date (Tarikh)</strong>: Represents dates and times.
          </li>
          <li>
            <strong>RegExp (RegExp)</strong>: Represents regular expressions for pattern matching in strings.
          </li>
        </ul>

        <div className='my-3'>
          Understanding JavaScript data types is crucial for effective programming. It helps determine how data is stored, manipulated, and processed within a program, leading to better code quality and performance.
        </div>
      </div>
    ),
    "Variables": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Variables</h1>

        <div className='my-3'>
          Variables are fundamental elements in JavaScript and other programming languages. They are used to store and manage data within a program. In JavaScript, you can create variables to hold various types of data, such as numbers, text, or objects.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Declaring Variables</h2>

        <div className='my-3'>
          In JavaScript, you can declare variables using the <code>var</code>, <code>let</code>, or <code>const</code> keywords. These keywords determine the variable's behavior and scope:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong><code>var</code> (Pravrtti)</strong>: Variables declared with <code>var</code> have function-level scope and can be re-declared within the same function.
          </li>
          <li>
            <strong><code>let</code> (Anivarya)</strong>: Variables declared with <code>let</code> have block-level scope and can be reassigned new values, but they cannot be re-declared within the same block.
          </li>
          <li>
            <strong><code>const</code> (Stirna)</strong>: Variables declared with <code>const</code> are also block-scoped but cannot be reassigned after their initial value is set. However, the content of objects and arrays declared with <code>const</code> can be modified.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>2. Variable Naming</h2>

        <div className='my-3'>
          When naming variables in JavaScript, adhere to these rules:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            Variable names are case-sensitive, meaning <code>myVariable</code> and <code>myvariable</code> are different variables.
          </li>
          <li>
            Variable names must begin with a letter, underscore (<code>_</code>), or dollar sign (<code>$</code>).
          </li>
          <li>
            Subsequent characters can also include numbers (digits).
          </li>
          <li>
            Variable names cannot be JavaScript keywords, such as <code>if</code>, <code>while</code>, or <code>function</code>.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>3. Assigning Values to Variables</h2>

        <div className='my-3'>
          You can assign values to variables using the assignment operator (<code>=</code>). For example:
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            <span className='text-green-500'>var</span> myVariable <span className='text-blue-500'>=</span> <span className='text-red-500'>'Hello, World!'</span>;
            <br />
            <span className='text-green-500'>let</span> count <span className='text-blue-500'>=</span> <span className='text-purple-500'>10</span>;
            <br />
            <span className='text-green-500'>const</span> pi <span className='text-blue-500'>=</span> <span className='text-yellow-500'>3.14159</span>;
          </code>
        </pre>

        <div className='my-3'>
          Variables can hold different types of data, such as strings, numbers, booleans, objects, or even functions, depending on the assigned value.
        </div>
      </div>
    ),
    "Operators": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Operators</h1>

        <div className='my-3'>
          Operators are essential components of JavaScript that allow you to perform various operations on data, such as arithmetic calculations, comparisons, and logical evaluations. Understanding JavaScript operators is crucial for writing effective and expressive code.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Arithmetic Operators</h2>

        <div className='my-3'>
          Arithmetic operators are used to perform mathematical calculations in JavaScript. These operators include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
        </div>

        <h2 className='text-3xl font-bold my-3'>2. Comparison Operators</h2>

        <div className='my-3'>
          Comparison operators are used to compare values in JavaScript. These operators include equal to {'(==)'}, not equal to {'(!=)'}, strict equal to {'(===)'}, strict not equal to {'(!==)'}, greater than {'(>)'}, less than {'(<)'}, greater than or equal to {'(>=)'}, and less than or equal to {'(<=)'}.
        </div>

        <h2 className='text-3xl font-bold my-3'>3. Logical Operators</h2>

        <div className='my-3'>
          Logical operators are used to combine or manipulate boolean values. These operators include logical AND (&&), logical OR (||), and logical NOT (!).
        </div>

        <h2 className='text-3xl font-bold my-3'>4. Assignment Operators</h2>

        <div className='my-3'>
          Assignment operators are used to assign values to variables. The basic assignment operator is the equals sign (=), but JavaScript also provides compound assignment operators like +=, -=, *=, and /=.
        </div>

        <h2 className='text-3xl font-bold my-3'>5. Conditional (Ternary) Operator</h2>

        <div className='my-3'>
          The conditional operator (also known as the ternary operator) is a concise way to write conditional statements in JavaScript. It has the syntax: <code>condition ? expression1 : expression2</code>. If the condition is true, expression1 is executed; otherwise, expression2 is executed.
        </div>

        <h2 className='text-3xl font-bold my-3'>6. Bitwise Operators</h2>

        <div className='my-3'>
          Bitwise operators are used to manipulate individual bits of numbers in JavaScript. These operators include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift {'(<<)'}, and right shift {'(>>)'}.
        </div>

        <h2 className='text-3xl font-bold my-3'>7. typeof Operator</h2>

        <div className='my-3'>
          The typeof operator is used to determine the data type of a value or variable in JavaScript. It returns a string representing the data type, such as "number," "string," "object," or "function."
        </div>

        <h2 className='text-3xl font-bold my-3'>8. Other Operators</h2>

        <div className='my-3'>
          JavaScript also includes other operators like the comma operator (,), the in operator (used to check if a property exists in an object), and the instanceof operator (used to check the object type).
        </div>
      </div>
    ),
    "Conditional Statements": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Conditional Statements</h1>

        <div className='my-3'>
          Conditional statements are a fundamental part of JavaScript that allow you to make decisions and control the flow of your code based on specified conditions. These statements enable your code to execute different blocks of code depending on whether a condition is true or false.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. if Statement</h2>

        <div className='my-3'>
          The <code>if</code> statement is used to execute a block of code if a specified condition is true. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'if (condition) {'}<br />
              {'  // Code to execute if condition is true'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>2. else Statement</h2>

        <div className='my-3'>
          The <code>else</code> statement is used in conjunction with the <code>if</code> statement to execute a block of code if the specified condition is false. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'if (condition) {'}<br />
              {'  // Code to execute if condition is true'}<br />
              {'} else {'}<br />
              {'  // Code to execute if condition is false'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>3. else if Statement</h2>

        <div className='my-3'>
          The <code>else if</code> statement is used to specify a new condition to test if the previous conditions are false. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'if (condition1) {'}<br />
              {'  // Code to execute if condition1 is true'}<br />
              {'} else if (condition2) {'}<br />
              {'  // Code to execute if condition2 is true'}<br />
              {'} else {'}<br />
              {'  // Code to execute if all conditions are false'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>4. switch Statement</h2>

        <div className='my-3'>
          The <code>switch</code> statement is used to perform different actions based on different conditions. It provides a cleaner way to handle multiple conditions compared to a series of <code>if...else if...else</code> statements. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'switch (expression) {'}<br />
              {'  case value1:'}<br />
              {'    // Code to execute if expression equals value1'}<br />
              {'    break;'}<br />
              {'  case value2:'}<br />
              {'    // Code to execute if expression equals value2'}<br />
              {'    break;'}<br />
              {'  default:'}<br />
              {/* {'    // Code to execute if expression doesn't match any case'}<br /> */}
              {'}'}
            </code>
          </pre>
        </div>

        <div className='my-3'>
          These conditional statements in JavaScript give you the flexibility to make decisions and create logic that responds to various conditions, allowing your code to be more dynamic and adaptable.
        </div>
      </div>
    ),
    "Loops": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Loops</h1>

        <div className='my-3'>
          Loops are essential constructs in JavaScript that allow you to repeat a block of code multiple times. They are crucial for tasks that involve iterating over arrays, processing lists of data, and performing repetitive operations.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. for Loop</h2>

        <div className='my-3'>
          The <code>for</code> loop is used when you know beforehand how many times you want to execute a block of code. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'for (initialization; condition; iteration) {'}<br />
              {'  // Code to execute'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>2. while Loop</h2>

        <div className='my-3'>
          The <code>while</code> loop is used when you want to execute a block of code as long as a condition is true. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'while (condition) {'}<br />
              {'  // Code to execute'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>3. do...while Loop</h2>

        <div className='my-3'>
          The <code>do...while</code> loop is similar to the <code>while</code> loop but guarantees that the block of code is executed at least once before checking the condition. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'do {'}<br />
              {'  // Code to execute'}<br />
              {'} while (condition);'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>4. for...in Loop</h2>

        <div className='my-3'>
          The <code>for...in</code> loop is used to iterate over the properties of an object. It is commonly used for object iteration. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'for (variable in object) {'}<br />
              {'  // Code to execute'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>5. for...of Loop</h2>

        <div className='my-3'>
          The <code>for...of</code> loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It simplifies the process of iterating over the values of an iterable. It has the following syntax:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'for (variable of iterable) {'}<br />
              {'  // Code to execute'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <div className='my-3'>
          Loops are powerful tools that allow you to automate repetitive tasks and efficiently process data. Choosing the right loop for your specific task is essential for writing clean and effective JavaScript code.
        </div>
      </div>
    ),
    "Functions": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Functions</h1>

        <div className='my-3'>
          Functions are a fundamental concept in JavaScript that allows you to encapsulate reusable blocks of code. They are essential for organizing and simplifying your code, making it more modular and maintainable.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Declaring Functions</h2>

        <div className='my-3'>
          You can declare a function using the <code>function</code> keyword, followed by the function name and a pair of parentheses. Here's an example of a simple function:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'function greet(name) {'}<br />
              {'  return "Hello, " + name;'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>2. Function Parameters</h2>

        <div className='my-3'>
          Functions can accept parameters, which are placeholders for values you want to pass into the function. These parameters make functions more versatile. Here's an example with a parameter:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'function add(a, b) {'}<br />
              {'  return a + b;'}<br />
              {'}'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>3. Calling Functions</h2>

        <div className='my-3'>
          To use a function, you need to call it by its name and provide values for its parameters (if any). Here's how you call the previous functions:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'const greeting = greet("Alice");'}<br />
              {'const sum = add(5, 3);'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>4. Function Expressions</h2>

        <div className='my-3'>
          JavaScript allows you to define functions using function expressions. These are often used for anonymous functions or when assigning a function to a variable. Here's an example:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'const multiply = function (x, y) {'}<br />
              {'  return x * y;'}<br />
              {'};'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>5. Arrow Functions</h2>

        <div className='my-3'>
          Arrow functions are a concise way to write functions, especially for simple one-liners. They are often used for callbacks and in modern JavaScript. Here's an example:
          <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
            <code>
              {'const square = (n) => n * n;'}
            </code>
          </pre>
        </div>

        <h2 className='text-3xl font-bold my-3'>6. Function Types</h2>

        <div className='my-3'>
          JavaScript functions can have different types, such as regular functions, anonymous functions, callback functions, and more. Their usage depends on the context of your code.
        </div>

        <h2 className='text-3xl font-bold my-3'>7. Returning Values</h2>

        <div className='my-3'>
          Functions can return values using the <code>return</code> statement. This allows you to pass data back to the code that called the function. If a function doesn't explicitly return a value, it returns <code>undefined</code>.
        </div>

        <h2 className='text-3xl font-bold my-3'>8. Function Scope</h2>

        <div className='my-3'>
          JavaScript has function scope, meaning variables declared inside a function are only accessible within that function. This helps prevent naming conflicts and keeps your code organized.
        </div>

        <h2 className='text-3xl font-bold my-3'>9. Higher-Order Functions</h2>

        <div className='my-3'>
          JavaScript supports higher-order functions, which are functions that can take other functions as arguments or return them as results. This is a powerful feature for working with collections of data.
        </div>

        <h2 className='text-3xl font-bold my-3'>10. Best Practices</h2>

        <div className='my-3'>
          When writing functions in JavaScript, it's important to follow best practices to maintain code quality. This includes providing clear names, using comments, and keeping functions focused on a single task.
        </div>

        <div className='my-3'>
          JavaScript functions are a cornerstone of web development, allowing you to create reusable and efficient code. Understanding how to declare, call, and work with different types of functions is essential for building robust web applications.
        </div>
      </div>
    ),
    "Objects": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Objects</h1>

        <div className='my-3'>
          In JavaScript, an object is a versatile and fundamental data structure that allows you to store and organize data in key-value pairs. Objects are used to represent and manipulate complex data structures, making them a vital part of the language. Here's how objects work in JavaScript:
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Creating Objects</h2>

        <div className='my-3'>
          You can create objects using two common approaches: object literals and the <code>Object()</code> constructor.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// Using Object Literal'}
            {'const person = {'}<br />
            {'  firstName: "John",'}<br />
            {'  lastName: "Doe",'}<br />
            {'};'}

            {'// Using Object Constructor'}
            {'const car = new Object();'}
            {'car.make = "Toyota";'}
            {'car.model = "Camry";'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Accessing Object Properties</h2>

        <div className='my-3'>
          You can access object properties using dot notation or square brackets.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'const personName = person.firstName; // Using Dot Notation'}
            {'const carMake = car["make"]; // Using Square Brackets'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Adding and Modifying Properties</h2>

        <div className='my-3'>
          Objects are mutable, so you can add or modify properties and their values.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'person.age = 30; // Adding a Property'}
            {'car.make = "Honda"; // Modifying a Property'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Methods</h2>

        <div className='my-3'>
          Objects can contain methods, which are functions associated with the object. These methods can perform actions related to the object.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'const math = {'}<br />
            {'  add: function(x, y) {'}<br />
            {'    return x + y;'}<br />
            {'  },'}<br />
            {'};'}

            {'const result = math.add(5, 3); // Calling a Method'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Object Iteration</h2>

        <div className='my-3'>
          You can iterate through an object's properties using loops or built-in methods like <code>for...in</code>.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'for (const key in person) {'}<br />
            {'  console.log(`${key}: ${person[key]}`);'}<br />
            {'}'}
          </code>
        </pre>

        <div className='my-3'>
          JavaScript objects are a powerful way to structure and manage data. They are used extensively in web development to represent everything from user profiles to complex data structures like JSON. Understanding how to work with objects is essential for becoming proficient in JavaScript.
        </div>
      </div>
    ),
    "Arrays": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Arrays</h1>

        <div className='my-3'>
          In JavaScript, an array is a versatile and fundamental data structure used to store and manage collections of items. Arrays can hold multiple values, which can be of various data types, making them a powerful tool for organizing and manipulating data. Here's how arrays work in JavaScript:
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Creating Arrays</h2>

        <div className='my-3'>
          You can create arrays using two common approaches: array literals and the <code>Array()</code> constructor.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// Using Array Literal'}
            {"const fruits = ['apple', 'banana', 'orange']"}

            {'// Using Array Constructor'}
            {'const numbers = new Array(1, 2, 3, 4, 5);'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Accessing Array Elements</h2>

        <div className='my-3'>
          You can access array elements by their index, with indexing starting from 0.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'const firstFruit = fruits[0]; // Accessing the first element (apple)'}
            {'const thirdNumber = numbers[2]; // Accessing the third element (3)'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Modifying Arrays</h2>

        <div className='my-3'>
          Arrays are mutable, meaning you can add, modify, or remove elements.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {"fruits.push('kiwi'); // Adding an element to the end of the array"}
            {'numbers[1] = 10; // Modifying an element (changing 2 to 10)'}
            {'fruits.pop(); // Removing the last element (kiwi)'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Array Methods</h2>

        <div className='my-3'>
          JavaScript provides many built-in methods for working with arrays, such as <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>slice</code>, <code>splice</code>, and <code>concat</code>, to name a few.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {"fruits.push('mango'); // Adding an element to the end"}
            {`fruits.splice(1, 1, 'grape'); // Replacing an element at index 1 with "grape"`}
            {'const slicedFruits = fruits.slice(1, 3); // Extracting a portion of the array'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Array Iteration</h2>

        <div className='my-3'>
          You can iterate through array elements using loops like <code>for</code> and <code>for...of</code>, or by using higher-order array methods like <code>forEach</code>.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'for (let i = 0; i < fruits.length; i++) {'}<br />
            {'  console.log(fruits[i]);'}<br />
            {'}'}

            {'fruits.forEach(function (fruit) {'}<br />
            {'  console.log(fruit);'}<br />
            {'});'}
          </code>
        </pre>

        <div className='my-3'>
          JavaScript arrays are versatile and widely used for tasks ranging from storing lists of items to managing complex data structures. They are a fundamental part of the language and a key tool for web developers.
        </div>
      </div>
    ),
    "Events": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>JavaScript Events</h1>

        <div className='my-3'>
          In web development, events refer to interactions or occurrences that happen in the web browser. These interactions can include a user clicking a button, moving the mouse, pressing a key, or a web page finishing loading. JavaScript allows developers to capture and respond to these events, making web applications interactive and responsive.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Event Handling</h2>

        <div className='my-3'>
          Event handling in JavaScript involves defining actions or functions that should execute when a specific event occurs. For example, you can create an event handler to display an alert message when a button is clicked.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// HTML button element'}
            {'<button id="myButton">Click Me</button>'}

            {'// JavaScript event handling'}
            {'const button = document.getElementById("myButton");'}
            {'button.addEventListener("click", function() {'}
            {'  alert("Button Clicked!");'}
            {'});'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Event Types</h2>

        <div className='my-3'>
          There are numerous types of events in web development, categorized into different groups such as:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Mouse Events:</strong> These events are triggered by mouse interactions, like clicks, hover, and dragging.
          </li>
          <li>
            <strong>Keyboard Events:</strong> These events respond to keyboard inputs, including key presses and releases.
          </li>
          <li>
            <strong>Form Events:</strong> Form events relate to HTML form elements, such as submitting a form or changing input values.
          </li>
          <li>
            <strong>Document and Window Events:</strong> These events are related to the document or browser window, like page load, resize, or scroll.
          </li>
          <li>
            <strong>Custom Events:</strong> Developers can also create custom events for specific interactions or scenarios.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>3. Event Object</h2>

        <div className='my-3'>
          When an event occurs, JavaScript provides an event object that carries information about the event, such as the type of event, target element, and more. Developers can access this event object within event handlers to gather relevant data.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'button.addEventListener("click", function(event) {'}
            {'  console.log("Event Type:", event.type);'}
            {'  console.log("Target Element:", event.target);'}
            {'});'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Event Propagation</h2>

        <div className='my-3'>
          In the DOM (Document Object Model), events follow a propagation order known as "bubbling" or "capturing." Understanding event propagation is essential when dealing with nested elements or multiple event listeners.
        </div>

        <div className='my-3'>
          JavaScript events are a fundamental part of web development, enabling interactivity and dynamic behavior in web applications. By mastering event handling, developers can create engaging and responsive user experiences.
        </div>
      </div>
    ),
    "DOM": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>DOM (Document Object Model)</h1>

        <div className='my-3'>
          The Document Object Model (DOM) is a critical concept in web development, particularly when working with JavaScript. It represents the structured content of a web page as a hierarchical tree of objects. Each element on a web page, such as headings, paragraphs, images, and buttons, is part of this tree and can be accessed and manipulated using JavaScript.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. The DOM Tree Structure</h2>

        <div className='my-3'>
          The DOM tree structure starts with the <code className='bg-gray-200 p-1'>document</code> object, which represents the entire web page. The document object has child nodes that correspond to HTML elements within the <code className='bg-gray-200 p-1'>body</code> element.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'<!DOCTYPE html>'}
            {'<html>'}
            {'  <head>'}
            {'    <title>My Web Page</title>'}
            {'  </head>'}
            {'  <body>'}
            {'    <h1>Welcome to My Web Page</h1>'}
            {'    <p>This is a paragraph.</p>'}
            {'    <button>Click Me</button>'}
            {'  </body>'}
            {'</html>'}
          </code>
        </pre>

        <div className='my-3'>
          In this example, the DOM tree structure starts with the <code className='bg-gray-200 p-1'>document</code> object, followed by the <code className='bg-gray-200 p-1'>html</code> element, <code className='bg-gray-200 p-1'>head</code> element, and <code className='bg-gray-200 p-1'>body</code> element. Inside the <code className='bg-gray-200 p-1'>body</code>, there are child nodes representing the <code className='bg-gray-200 p-1'>h1</code>, <code className='bg-gray-200 p-1'>p</code>, and <code className='bg-gray-200 p-1'>button</code> elements.
        </div>

        <h2 className='text-3xl font-bold my-3'>2. Accessing and Manipulating the DOM</h2>

        <div className='my-3'>
          JavaScript allows developers to access and manipulate the DOM to dynamically update web pages. You can select elements by their IDs, classes, or HTML tag names and perform actions like changing content, adding or removing elements, and responding to user interactions.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// Selecting an element by ID'}
            {'const heading = document.getElementById("myHeading");'}
            {'heading.textContent = "Hello, DOM!";'}

            {'// Creating a new element'}
            {'const newParagraph = document.createElement("p");'}
            {'newParagraph.textContent = "This is a new paragraph.";'}
            {'document.body.appendChild(newParagraph);'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Event Handling and the DOM</h2>

        <div className='my-3'>
          One of the most common uses of the DOM with JavaScript is event handling. You can attach event listeners to elements and specify functions to run when certain events, like clicks or key presses, occur.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'const button = document.getElementById("myButton");'}
            {'button.addEventListener("click", function() {'}
            {'  alert("Button Clicked!");'}
            {'});'}
          </code>
        </pre>

        <div className='my-3'>
          The DOM plays a fundamental role in modern web development, enabling dynamic and interactive web pages. It allows developers to create user interfaces that respond to user actions, making web applications more engaging and functional.
        </div>
      </div>
    ),
    "Error Handling": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Error Handling in JavaScript</h1>

        <div className='my-3'>
          Error handling is a vital part of JavaScript programming. It involves the process of identifying, catching, and managing errors that may occur during the execution of your code. Proper error handling not only helps prevent crashes but also provides a way to gracefully handle unexpected situations.
        </div>

        <h2 className='text-3xl font-bold my-3'>1. Types of Errors</h2>

        <div className='my-3'>
          In JavaScript, errors can be categorized into three main types:
        </div>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Syntax Errors:</strong> These errors occur due to incorrect syntax in your code and prevent the code from executing. Common examples include missing semicolons or closing brackets.
          </li>
          <li>
            <strong>Runtime Errors:</strong> Runtime errors occur during code execution. They can be caused by various factors, such as invalid data, undefined variables, or division by zero.
          </li>
          <li>
            <strong>Logical Errors:</strong> Logical errors are the trickiest to identify because they do not produce explicit error messages. They occur when your code does not behave as intended. Effective debugging is essential for finding and fixing logical errors.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>2. The try...catch Statement</h2>

        <div className='my-3'>
          JavaScript provides the <code className='bg-gray-200 p-1'>try...catch</code> statement for handling exceptions (runtime errors). You can wrap the code that might throw an error within a <code className='bg-gray-200 p-1'>try</code> block and specify how to handle the error in the corresponding <code className='bg-gray-200 p-1'>catch</code> block.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'try {'}
            {'  // Code that might throw an error'}
            {'} catch (error) {'}
            {'  // Handle the error here'}
            {'}'}
          </code>
        </pre>

        <div className='my-3'>
          The <code className='bg-gray-200 p-1'>catch</code> block receives the error object, which contains information about the error, including its type and message. You can use this information to log the error or take appropriate action.
        </div>

        <h2 className='text-3xl font-bold my-3'>3. The throw Statement</h2>

        <div className='my-3'>
          You can deliberately throw errors in your code using the <code className='bg-gray-200 p-1'>throw</code> statement. This allows you to create custom error messages and control the flow of your program.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'function divide(x, y) {'}
            {'  if (y === 0) {'}
            {'    throw new Error("Division by zero is not allowed.");'}
            {'  }'}
            {'  return x / y;'}
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Handling Different Error Types</h2>

        <div className='my-3'>
          You can catch and handle specific types of errors by using multiple <code className='bg-gray-200 p-1'>catch</code> blocks with different error types.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'try {'}
            {'  // Code that might throw different errors'}
            {'} catch (syntaxError) {'}
            {'  // Handle syntax errors here'}
            {'} catch (runtimeError) {'}
            {'  // Handle runtime errors here'}
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. The finally Block</h2>

        <div className='my-3'>
          The <code className='bg-gray-200 p-1'>try...catch</code> statement can also include a <code className='bg-gray-200 p-1'>finally</code> block. Code within the <code className='bg-gray-200 p-1'>finally</code> block always runs, whether an error occurs or not. It is typically used for cleanup tasks.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'try {'}
            {'  // Code that might throw an error'}
            {'} catch (error) {'}
            {'  // Handle the error here'}
            {'} finally {'}
            {'  // Perform cleanup tasks here'}
            {'}'}
          </code>
        </pre>

        <div className='my-3'>
          Effective error handling is essential for writing reliable and maintainable JavaScript code. It ensures that your applications can gracefully handle unexpected situations and provide meaningful feedback to users or developers.
        </div>
      </div>
    ),
    "Modules": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Modules in JavaScript</h1>

        <div className='my-3'>
          In JavaScript, modules are a way to organize and structure your code into reusable pieces. They help keep your codebase clean, maintainable, and promote code reusability. There are two commonly used module systems in JavaScript: CommonJS and ES6 modules.
        </div>

        <h2 className='text-3xl font-bold my-3'>CommonJS Modules</h2>

        <div className='my-3'>
          CommonJS modules are primarily used in Node.js for organizing and sharing code. They follow the CommonJS specification and allow you to create modules by encapsulating code in separate files. These modules can then be imported and used in other parts of your application.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// Exporting a variable\nconst greeting = "Hello, World!";\nmodule.exports = greeting;\n\n// Importing the module\nconst importedGreeting = require(\'./example\');\nconsole.log(importedGreeting); // Output: "Hello, World!"'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>ES6 Modules</h2>

        <div className='my-3'>
          ES6 (ECMAScript 2015) introduced a built-in module system for JavaScript. ES6 modules provide a more modern and standardized way to structure and share code in both web browsers and Node.js. They use the `import` and `export` keywords.
        </div>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {'// Exporting a variable\nexport const greeting = "Hello, World!";\n\n// Importing the module\nimport { greeting } from \'./example\';\nconsole.log(greeting); // Output: "Hello, World!"'}
          </code>
        </pre>

        <div className='my-3'>
          When choosing between CommonJS and ES6 modules, consider your environment (Node.js or web browser), the tools you're using (webpack, Babel, etc.), and your project's requirements. ES6 modules are becoming the standard for modern JavaScript development, especially in web browsers, but CommonJS remains prevalent in Node.js and existing projects.
        </div>
      </div>
    ),
    "Promises": (
      <div className="py-3">
        <h1 className="text-4xl font-bold">Promises in JavaScript</h1>

        <div className="my-3">
          Promises are a fundamental concept in JavaScript, especially in modern web development. They provide an elegant way to work with asynchronous operations, making your code more organized and maintainable.
        </div>

        <h2 className="text-3xl font-bold my-3">1. Understanding Promises</h2>

        <div className="my-3">
          In JavaScript, Promises represent a value that may not be available yet but will be at some point in the future. They are commonly used for handling tasks such as data fetching, making API calls, or executing time-consuming operations without blocking the main thread.
        </div>

        <pre className="my-3">
          <code>
            {`const fetchData = () => {
      return new Promise((resolve, reject) => {
        // Simulate an asynchronous task
        setTimeout(() => {
          if (Math.random() < 0.5) {
            resolve("Data fetched successfully!");
          } else {
            reject("Error: Unable to fetch data.");
          }
        }, 2000); // Simulated delay of 2 seconds
      });
    };`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">2. Using Promises in ReactJS</h2>

        <div className="my-3">
          In a ReactJS application, Promises play a crucial role in managing asynchronous tasks. For example, when fetching data from an API, you can use Promises to handle success and error cases gracefully.
        </div>

        <pre className="my-3">
          <code>
            {`import React, { useEffect, useState } from 'react';
    
    function MyComponent() {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetchData()
          .then((result) => {
            setData(result);
          })
          .catch((error) => {
            setError(error);
          });
      }, []);
    
      return (
        <div>
          {data ? (
            <p>Data: {data}</p>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      );
    }
    
    export default MyComponent;`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">3. Styling with Tailwind CSS</h2>

        <div className="my-3">
          Tailwind CSS is a popular utility-first CSS framework that simplifies the process of creating responsive and visually appealing user interfaces. You can easily integrate Tailwind CSS into your ReactJS project to style components and layouts.
        </div>

        <pre className="my-3">
          <code>
            {`import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles`}
          </code>
        </pre>

        <div className="my-3">
          By combining Promises for asynchronous tasks and Tailwind CSS for styling, you can build modern and efficient web applications that provide a seamless user experience.
        </div>
      </div>
    ),
    "Classes": (
      <div className="py-3">
        <h1 className="text-4xl font-bold">JavaScript Classes</h1>

        <div className="my-3">
          JavaScript classes are a fundamental feature introduced in ECMAScript 6 (ES6) that allow you to define blueprints for creating objects. They provide a more organized and efficient way to create and manage objects and their behavior in JavaScript.
        </div>

        <h2 className="text-3xl font-bold my-3">1. Declaring a Class</h2>

        <div className="my-3">
          To declare a class in JavaScript, you use the <code>class</code> keyword followed by the class name. You can also include a constructor method to initialize the object's properties.
        </div>

        <pre className="my-3">
          <code>
            {`class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }
    const person1 = new Person("Alice", 30);
    console.log(person1.name); // Output: "Alice"
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">2. Class Methods</h2>

        <div className="my-3">
          You can define methods within a class to specify the behavior of objects created from that class.
        </div>

        <pre className="my-3">
          <code>
            {`class Calculator {
      add(a, b) {
        return a + b;
      }
    
      subtract(a, b) {
        return a - b;
      }
    }
    const calculator = new Calculator();
    console.log(calculator.add(5, 3)); // Output: 8
    console.log(calculator.subtract(10, 4)); // Output: 6
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">3. Inheritance and Subclasses</h2>

        <div className="my-3">
          JavaScript classes support inheritance, allowing you to create a subclass that inherits properties and methods from a parent class.
        </div>

        <pre className="my-3">
          <code>
            {`class Animal {
      constructor(name) {
        this.name = name;
      }
    
      speak() {
        console.log(\`\${this.name} makes a sound.\`);
      }
    }
    
    class Dog extends Animal {
      speak() {
        console.log(\`\${this.name} barks.\`);
      }
    }
    
    const dog = new Dog("Buddy");
    dog.speak(); // Output: "Buddy barks."
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">4. Static Methods</h2>

        <div className="my-3">
          You can define static methods within a class that are called on the class itself rather than on instances of the class.
        </div>

        <pre className="my-3">
          <code>
            {`class MathUtils {
      static square(x) {
        return x * x;
      }
    }
    
    console.log(MathUtils.square(5)); // Output: 25
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">5. Getters and Setters</h2>

        <div className="my-3">
          JavaScript classes support getter and setter methods that allow you to control access to object properties.
        </div>

        <pre className="my-3">
          <code>
            {`class Circle {
      constructor(radius) {
        this._radius = radius;
      }
    
      get radius() {
        return this._radius;
      }
    
      set radius(newRadius) {
        if (newRadius >= 0) {
          this._radius = newRadius;
        }
      }
    }
    
    const circle = new Circle(5);
    console.log(circle.radius); // Output: 5
    circle.radius = 10; // Setter
    console.log(circle.radius); // Output: 10
    `}
          </code>
        </pre>

        <div className="my-3">
          JavaScript classes provide a powerful and structured way to work with objects and their behavior, making your code more maintainable and easier to understand.
        </div>
      </div>
    ),
    "Local Storage and Session Storage": (
      <div className="py-3">
        <h1 className="text-4xl font-bold">Local Storage and Session Storage</h1>

        <div className="my-3">
          Local Storage and Session Storage are two web storage options available in modern web browsers that allow you to store key-value pairs locally on the user's device. These storage options are useful for persisting data between web sessions and can be accessed using JavaScript.
        </div>

        <h2 className="text-3xl font-bold my-3">1. Local Storage</h2>

        <div className="my-3">
          Local Storage is designed for long-term storage of data, and the data you store here will persist even after the user closes the browser. It's an excellent choice for storing user preferences, settings, and other data that should be available across multiple sessions.
        </div>

        <pre className="my-3">
          <code>
            {`// Storing data in Local Storage
    localStorage.setItem("username", "john_doe");
    
    // Retrieving data from Local Storage
    const username = localStorage.getItem("username");
    console.log(username); // Output: "john_doe"
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">2. Session Storage</h2>

        <div className="my-3">
          Session Storage is similar to Local Storage, but it's designed for short-term storage. The data stored in Session Storage is available only for the duration of the page session. When the user closes the browser or the tab, the data is cleared.
        </div>

        <pre className="my-3">
          <code>
            {`// Storing data in Session Storage
    sessionStorage.setItem("theme", "dark");
    
    // Retrieving data from Session Storage
    const theme = sessionStorage.getItem("theme");
    console.log(theme); // Output: "dark"
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">3. Removing Data</h2>

        <div className="my-3">
          You can remove data from Local Storage and Session Storage using the <code>removeItem</code> method or clear all data using the <code>clear</code> method.
        </div>

        <pre className="my-3">
          <code>
            {`// Removing data from Local Storage
    localStorage.removeItem("username");
    
    // Clearing all data from Session Storage
    sessionStorage.clear();
    `}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">4. Limitations</h2>

        <div className="my-3">
          It's important to note that both Local Storage and Session Storage have limitations on the amount of data that can be stored and should not be used for sensitive information. They have a maximum storage capacity of around 5-10 MB, depending on the browser.
        </div>

        <div className="my-3">
          Local Storage and Session Storage are powerful tools for web developers to store and retrieve data on the client-side, enhancing the user experience and enabling the creation of web applications that remember user preferences and settings.
        </div>
      </div>
    ),
    "Inbuilt": (
      <div className="py-3">
        <h1 className="text-4xl font-bold">JavaScript Array Methods</h1>

        <div className="my-3">
          JavaScript provides a rich set of array methods to manipulate and work with arrays effectively. Let's explore some of the most commonly used array methods:
        </div>

        <h2 className="text-3xl font-bold my-3">1. `slice()` Method</h2>

        <div className="my-3">
          The `slice()` method returns a shallow copy of a portion of an array into a new array. It takes two parameters: the start index (inclusive) and the end index (exclusive).
        </div>

        <pre className="my-3">
          <code>
            {`const fruits = ["apple", "banana", "cherry", "date", "fig"];
    
    // Create a new array containing elements from index 1 to 3 (exclusive)
    const slicedFruits = fruits.slice(1, 4);
    
    console.log(slicedFruits); // Output: ["banana", "cherry", "date"]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">2. `push()` and `pop()` Methods</h2>

        <div className="my-3">
          The `push()` method adds one or more elements to the end of an array, while the `pop()` method removes the last element from an array and returns it.
        </div>

        <pre className="my-3">
          <code>
            {`const colors = ["red", "green", "blue"];
    
    // Add an element to the end
    colors.push("yellow");
    
    // Remove and return the last element
    const removedColor = colors.pop();
    
    console.log(colors); // Output: ["red", "green", "blue", "yellow"]
    console.log(removedColor); // Output: "yellow"`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">3. `forEach()` Method</h2>

        <div className="my-3">
          The `forEach()` method executes a provided function once for each array element.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];
    
    // Print each element
    numbers.forEach((number) => {
      console.log(number);
    });
    
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">4. `map()` Method</h2>

        <div className="my-3">
          The `map()` method creates a new array populated with the results of calling a provided function on every element in the array.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];
    
    // Create a new array with each number squared
    const squaredNumbers = numbers.map((number) => number ** 2);
    
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">5. `filter()` Method</h2>

        <div className="my-3">
          The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
        </div>

        <pre className="my-3">
          <code>
            {`const ages = [18, 25, 30, 16, 22];
    
    // Create a new array with ages greater than or equal to 18
    const adults = ages.filter((age) => age >= 18);
    
    console.log(adults); // Output: [18, 25, 30, 22]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">6. `reduce()` Method</h2>

        <div className="my-3">
          The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];
    
    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    
    console.log(sum); // Output: 15`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">7. `every()` and `some()` Methods</h2>

        <div className="my-3">
          The `every()` method tests whether all elements in the array pass a provided function's test, while the `some()` method tests whether at least one element passes the test.
        </div>

        <pre className="my-3">
          <code>
            {`const scores = [80, 85, 90, 88, 92];
    
    // Check if all scores are above 75
    const allPass = scores.every((score) => score > 75);
    
    // Check if at least one score is above 90
    const someHighScore = scores.some((score) => score > 90);
    
    console.log(allPass); // Output: true
    console.log(someHighScore); // Output: true`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">8. `find()` and `findIndex()` Methods</h2>

        <div className="my-3">
          The `find()` method returns the first element in the array that satisfies a provided testing function, and the `findIndex()` method returns the index of the first element that satisfies the test.
        </div>

        <pre className="my-3">
          <code>
            {`const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    
    // Find the user with name "Bob"
    const userBob = users.find((user) => user.name === "Bob");
    
    // Find the index of the user with name "Charlie"
    const charlieIndex = users.findIndex((user) => user.name === "Charlie");
    
    console.log(userBob); // Output: { id: 2, name: "Bob" }
    console.log(charlieIndex); // Output: 2`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">9. `sort()` Method</h2>

        <div className="my-3">
          The `sort()` method sorts the elements of an array in place and returns the sorted array.
        </div>

        <pre className="my-3">
          <code>
            {`const fruits = ["apple", "cherry", "banana", "date"];
               // Sort the array alphabetically
               fruits.sort();
               console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">10. `concat()` Method</h2>

        <div className="my-3">
          The `concat()` method is used to merge two or more arrays and returns a new array without modifying the existing ones.
        </div>

        <pre className="my-3">
          <code>
            {`const array1 = [1, 2, 3];
                const array2 = [4, 5, 6];
                // Concatenate two arrays
                const combinedArray = array1.concat(array2);
                console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">11. `splice()` Method</h2>

        <div className="my-3">
          The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        </div>

        <pre className="my-3">
          <code>
            {`const colors = ["red", "green", "blue"];
               // Remove "green" and insert "yellow" and "orange"
               const removedItems = colors.splice(1, 1, "yellow", "orange");
               console.log(colors); // Output: ["red", "yellow", "orange", "blue"]
               console.log(removedItems); // Output: ["green"]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">12. `reverse()` Method</h2>

        <div className="my-3">
          The `reverse()` method reverses the order of elements in an array in place.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];
                // Reverse the array
                numbers.reverse();
                console.log(numbers); // Output: [5, 4, 3, 2, 1]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">13. `join()` Method</h2>

        <div className="my-3">
          The `join()` method joins all elements of an array into a string, separated by the specified delimiter.
        </div>

        <pre className="my-3">
          <code>
            {`const fruits = ["apple", "banana", "cherry"];
                // Join the array elements with a comma
                const fruitString = fruits.join(", ");
                console.log(fruitString); // Output: "apple, banana, cherry"`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">14. `reduceRight()` Method</h2>

        <div className="my-3">
          The `reduceRight()` method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];
            // Calculate the sum of all numbers in the array (right to left)
            const sum = numbers.reduceRight((accumulator, current) => accumulator + current, 0);
            console.log(sum); // Output: 15`}
          </code>
        </pre>
        <h2 className="text-3xl font-bold my-3">15. `find()` Method</h2>

        <div className="my-3">
          The `find()` method returns the first element in an array that satisfies a provided testing function.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [10, 20, 30, 40, 50];
               // Find the first element greater than 25
               const result = numbers.find((number) => number > 25)
               console.log(result); // Output: 30`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">16. `filter()` Method</h2>

        <div className="my-3">
          The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [10, 20, 30, 40, 50];
             // Filter numbers greater than 25
             const filteredNumbers = numbers.filter((number) => number > 25);
             console.log(filteredNumbers); // Output: [30, 40, 50]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">17. `every()` Method</h2>

        <div className="my-3">
          The `every()` method tests whether all elements in an array pass the test implemented by the provided function.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [10, 20, 30, 40, 50];
                // Check if all numbers are greater than 5
                const allGreaterThan5 = numbers.every((number) => number > 5)
                console.log(allGreaterThan5); // Output: true`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">18. `some()` Method</h2>

        <div className="my-3">
          The `some()` method tests whether at least one element in an array passes the test implemented by the provided function.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [10, 20, 30, 40, 50];

               // Check if some numbers are greater than 25
               const someGreaterThan25 = numbers.some((number) => number > 25)
               console.log(someGreaterThan25); // Output: true`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">19. `map()` Method</h2>

        <div className="my-3">
          The `map()` method creates a new array with the results of calling a provided function on every element in the array.
        </div>

        <pre className="my-3">
          <code>
            {`const numbers = [1, 2, 3, 4, 5];

               // Square each number in the array
               const squaredNumbers = numbers.map((number) => number * number);
               console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]`}
          </code>
        </pre>

        <h2 className="text-3xl font-bold my-3">20. `forEach()` Method</h2>

        <div className="my-3">
          The `forEach()` method executes a provided function once for each array element.
        </div>

        <pre className="my-3">
          <code>
            {`const colors = ["red", "green", "blue"];

          // Print each color in the array
            colors.forEach((color) => console.log(color));

       // Output:
       // "red"
        // "green"
        // "blue"`}
          </code>
        </pre>

        <div className="py-4">For in-depth information on JavaScript's built-in array methods and more, visit the Mozilla Developer Network (MDN) documentation:</div>

        <div className='my-1'>MDN JavaScript Array Methods</div>

        <div className='my-3'> <a className='text-orange-400 hover:underline' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">MDN</a> is a valuable resource for JavaScript developers, providing detailed documentation and examples.</div>

      </div>
    ),
    "Web APIs": (
      <div className="py-3">
        <h1 className="text-4xl font-bold">Web APIs</h1>
        <div className="my-3">
          Web APIs, short for Web Application Programming Interfaces, are a crucial part of modern web development. They provide a means for different software applications to communicate and interact with each other over the internet. Web APIs enable developers to access and manipulate data and perform various operations on the web.
        </div>

        <h2 className="text-3xl font-bold my-3">1. What Are Web APIs?</h2>

        <div className="my-3">
          Web APIs are sets of rules and protocols that allow one piece of software to request and exchange data with another. They serve as intermediaries between different software systems, enabling them to work together seamlessly. Web APIs are commonly used to access data from remote servers, interact with third-party services, and perform actions like sending emails, processing payments, and more.
        </div>

        <h2 className="text-3xl font-bold my-3">2. Types of Web APIs</h2>

        <div className="my-3">
          There are various types of Web APIs, including:
        </div>

        <ul className="list-disc list-inside my-3">
          <li>
            <strong>RESTful APIs:</strong> Representational State Transfer (REST) APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources. They are widely used for web services due to their simplicity and scalability.
          </li>
          <li>
            <strong>GraphQL APIs:</strong> GraphQL is a query language for APIs that enables clients to request only the data they need. It provides more flexibility and efficiency in data fetching compared to REST.
          </li>
          <li>
            <strong>SOAP APIs:</strong> Simple Object Access Protocol (SOAP) is a protocol for exchanging structured information in the implementation of web services. It's known for its strict standards and reliability.
          </li>
          <li>
            <strong>WebSocket APIs:</strong> WebSocket is a communication protocol that enables bidirectional, real-time communication between clients and servers. It's commonly used for building chat applications and online gaming.
          </li>
        </ul>

        <h2 className="text-3xl font-bold my-3">3. How Web APIs Work</h2>

        <div className="my-3">
          Web APIs work by exposing a set of endpoints (URLs) that clients can send requests to. These requests are typically made using HTTP methods such as GET, POST, PUT, and DELETE. The API processes the request, performs the necessary actions, and sends a response back to the client, often in JSON or XML format. Clients can then parse the response data and use it as needed.
        </div>

        <h2 className="text-3xl font-bold my-3">4. Use Cases of Web APIs</h2>

        <div className="my-3">
          Web APIs have a wide range of use cases, including:
        </div>

        <ul className="list-disc list-inside my-3">
          <li>
            <strong>Fetching Data:</strong> Web applications can use APIs to retrieve data from external sources, such as weather information, stock prices, or social media posts.
          </li>
          <li>
            <strong>Payment Processing:</strong> E-commerce platforms utilize payment gateway APIs to securely handle online transactions.
          </li>
          <li>
            <strong>Authentication:</strong> APIs are often used for user authentication and authorization, allowing users to log in and access protected resources.
          </li>
          <li>
            <strong>Third-Party Integrations:</strong> Developers can integrate third-party services like social media logins, mapping, and email services into their applications using APIs.
          </li>
          <li>
            <strong>Real-Time Communication:</strong> WebSocket APIs enable real-time chat applications and notifications.
          </li>
        </ul>

        <div className="my-3">
          In summary, Web APIs play a crucial role in enabling communication and data exchange between software applications over the internet. They facilitate the creation of feature-rich, interconnected web applications that can access a wide range of resources and services.
        </div>
      </div>
    ),
    "More Info": (

      <div className="py-3">
        <h1 className="text-4xl font-bold">More Information on Web APIs</h1>
        <div className="my-3">
          Web APIs are a vast topic, and there's much more to explore. Here are some additional concepts and areas of interest that can help you dive deeper into the world of Web APIs:
        </div>

        <h2 className="text-3xl font-bold my-3">1. Authentication and Security</h2>

        <div className="my-3">
          Learn about authentication methods like OAuth 2.0 and API keys to secure your API endpoints. Understanding security best practices is crucial when developing and consuming APIs.
        </div>

        <h2 className="text-3xl font-bold my-3">2. Rate Limiting and Throttling</h2>

        <div className="my-3">
          Explore how rate limiting and throttling mechanisms work to control the number of API requests made by clients. This is essential to prevent abuse and ensure fair usage.
        </div>

        <h2 className="text-3xl font-bold my-3">3. API Documentation</h2>

        <div className="my-3">
          Good API documentation is key to a successful API. Learn how to create clear and comprehensive documentation that helps developers understand your API's endpoints, request/response formats, and usage examples.
        </div>

        <h2 className="text-3xl font-bold my-3">4. API Testing</h2>

        <div className="my-3">
          Discover tools and techniques for testing APIs. Automated testing, including unit tests and integration tests, can help ensure your API functions correctly.
        </div>

        <h2 className="text-3xl font-bold my-3">5. RESTful API Best Practices</h2>

        <div className="my-3">
          If you're working with RESTful APIs, delve into best practices for resource naming, status codes, versioning, and error handling.
        </div>

        <h2 className="text-3xl font-bold my-3">6. GraphQL</h2>

        <div className="my-3">
          If you're interested in GraphQL, explore its query language and how to design and implement GraphQL APIs. GraphQL offers flexibility and efficiency in data fetching.
        </div>

        <h2 className="text-3xl font-bold my-3">7. WebSocket Programming</h2>

        <div className="my-3">
          For real-time communication, learn more about WebSocket APIs and how to build applications that enable bidirectional, event-driven interactions.
        </div>

        <div className="my-3">
          To deepen your knowledge of Web APIs and access comprehensive documentation and tutorials, you can visit the Mozilla Developer Network (MDN) web docs. MDN provides a wealth of resources for web developers, including detailed information on APIs, programming languages, and web technologies.
        </div>

        <div className="my-3">
          Explore more about Web APIs on <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:no-underline">MDN Web Docs</a>.
        </div>
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

export default JavaScriptDocs;