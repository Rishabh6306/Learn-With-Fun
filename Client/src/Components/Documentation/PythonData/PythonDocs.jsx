import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { useDocsState, useDocsFunctions } from '../utilsForDocs/docsUtils';
import Header from '../Header';
import Content from '../Content';

function PythonDocs() {
  const data = {
    "Getting Started": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Introduction to Python</h1>

        <p className='my-3'>
          Python is a versatile and widely-used programming language known for its simplicity and readability. It is favored by developers for its ease of use, making it an excellent choice for beginners and experienced programmers alike. Let's explore why Python is popular and how you can get started with it.
        </p>

        <h2 className='text-3xl font-bold my-3'>Why Python?</h2>

        <p className='my-3'>
          Python's popularity stems from several key factors:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>Readability:</strong> Python code is easy to read and understand, which reduces the chances of errors and speeds up development.
          </li>
          <li>
            <strong>Large Community:</strong> Python has a massive and active community of developers who contribute to its libraries and frameworks.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Python offers a wide range of libraries and frameworks for various purposes, including web development, data analysis, machine learning, and more.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Python is cross-platform, meaning you can write code on one operating system and run it on another without modification.
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>How Python Works</h2>

        <p className='my-3'>
          Python is an interpreted language, which means you don't need to compile your code before running it. Instead, you can write Python code and run it directly using the Python interpreter.
        </p>

        <h2 className='text-3xl font-bold my-3'>Setting Up Python</h2>

        <p className='my-3'>
          To start coding in Python, you'll need to set up your development environment. Here are the initial steps:
        </p>

        <ol className='list-decimal list-inside my-3'>
          <li>Download and install Python from the official Python website (https://www.python.org/downloads/).</li>
          <li>Choose a code editor or integrated development environment (IDE). Popular options include Visual Studio Code, PyCharm, and Jupyter Notebook.</li>
          <li>Write your Python code in the chosen editor and save it with a ".py" extension.</li>
          <li>Use the command line or terminal to navigate to the directory where your Python file is saved.</li>
          <li>Run your Python script by executing the command "python your_script.py" (replace "your_script.py" with your actual file name).</li>
        </ol>

        <p className='my-3'>
          These are the initial steps to get you started with Python. As you become more familiar with the language, you can explore its vast ecosystem and use it for various applications, from web development to data analysis and machine learning.
        </p>
      </div>
    ),
    "History of Python": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>History of Python</h1>

        <p className='my-3'>
          Python is a high-level, general-purpose programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Here's a detailed history of Python:
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Origin and Guido van Rossum (1989-1991)</h2>

        <p className='my-3'>
          Python's development began in the late 1980s when Guido van Rossum, a Dutch programmer, started working on the project. He aimed to create a language that would emphasize code readability and allow developers to express concepts in fewer lines of code than other languages.
        </p>

        <h2 className='text-3xl font-bold my-3'>2. Python 0.9.0 (February 1991)</h2>

        <p className='my-3'>
          The first official Python release was Python 0.9.0, which included many of the features that Python is known for today. It featured exception handling, functions, and modules.
        </p>

        <h2 className='text-3xl font-bold my-3'>3. Python 1.0 (January 26, 1994)</h2>

        <p className='my-3'>
          Python 1.0 marked a significant milestone in Python's history. It included features like lambda, map, filter, and reduce functions, making Python a more functional programming language.
        </p>

        <h2 className='text-3xl font-bold my-3'>4. Python 2.0 (October 16, 2000)</h2>

        <p className='my-3'>
          Python 2.0 introduced list comprehensions, garbage collection, and Unicode support, making it a more powerful and internationally accessible language.
        </p>

        <h2 className='text-3xl font-bold my-3'>5. Python 3.0 (December 3, 2008)</h2>

        <p className='my-3'>
          Python 3.0, also known as Python 3, was a major overhaul of the language. It aimed to fix inconsistencies and improve the language's design. However, it introduced backward-incompatible changes, leading to a gradual adoption process in the Python community.
        </p>

        <h2 className='text-3xl font-bold my-3'>6. Python in the 21st Century</h2>

        <p className='my-3'>
          Python continued to evolve and gain popularity in the 21st century. It became widely used for web development, data analysis, machine learning, and scientific computing. The Python Software Foundation (PSF) was established to oversee Python's development and promotion.
        </p>

        <h2 className='text-3xl font-bold my-3'>7. Python Today</h2>

        <p className='my-3'>
          Python is one of the most popular programming languages globally. It boasts a large and active community of developers who contribute to its growth and maintenance. Python is used in various domains, including web development, artificial intelligence, data science, and more.
        </p>

        <p className='my-3'>
          Python's simplicity and versatility continue to make it an excellent choice for both beginners and experienced developers.
        </p>
      </div>
    ),
    "Variables": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Variables in Python</h1>

        <p className='my-3'>
          In Python, a <strong>variable</strong> is a symbolic name that represents a value stored in memory. Variables are essential for storing and manipulating data in your programs.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Variable Assignment</h2>

        <p className='my-3'>
          To assign a value to a variable, you use the assignment operator (<code>=</code>). Python is dynamically typed, which means you don't need to declare the data type of a variable explicitly.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`# Variable assignment
    name = "Alice"
    age = 30
    pi_value = 3.14`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Variable Names</h2>

        <p className='my-3'>
          Variable names must follow these rules:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>Must begin with a letter (a-z, A-Z) or underscore (_).</li>
          <li>Can include letters, numbers (0-9), and underscores.</li>
          <li>Are case-sensitive (e.g., <code>name</code> and <code>Name</code> are different variables).</li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>3. Data Types</h2>

        <p className='my-3'>
          Python supports various data types, including integers, floats, strings, lists, dictionaries, and more. The data type of a variable is determined automatically based on the assigned value.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`# Variable data types
    integer_var = 42
    float_var = 3.14
    string_var = "Hello, Python"
    list_var = [1, 2, 3]
    dict_var = {"name": "Alice", "age": 30}`}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Variable Scope</h2>

        <p className='my-3'>
          The <strong>scope</strong> of a variable determines where it can be accessed or modified in your code. Python has two main variable scopes:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li><strong>Global Scope:</strong> Variables defined outside of functions are global and can be accessed from anywhere in the program.</li>
          <li><strong>Local Scope:</strong> Variables defined inside a function are local and can only be accessed within that function.</li>
        </ul>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`# Global variable
    global_var = 10
    
    def my_function():
        # Local variable
        local_var = 5
        print(global_var)  # Accessing global variable
        print(local_var)   # Accessing local variable
    
    my_function()
    print(global_var)  # Accessing global variable`}
          </code>
        </pre>

        <p className='my-3'>
          Understanding variables is fundamental in Python programming. They allow you to store, manipulate, and work with data efficiently.
        </p>
      </div>
    ),
    "Data Types": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Python Data Types</h1>

        <p className='my-3'>
          Python is a dynamically typed language, meaning you don't need to declare variable types explicitly. Python automatically determines the data type of a variable based on the value assigned to it. Here are some of the fundamental data types in Python:
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Numeric Types</h2>

        <p className='my-3'>
          Numeric data types represent numbers in Python. There are three main numeric types:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>int:</strong> Integer data type represents whole numbers. Example: <code>42</code>
          </li>
          <li>
            <strong>float:</strong> Float data type represents decimal numbers. Example: <code>3.14159265359</code>
          </li>
          <li>
            <strong>complex:</strong> Complex data type represents complex numbers. Example: <code>1 + 2j</code>
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>2. Text Type</h2>

        <p className='my-3'>
          The text type in Python is:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>str:</strong> String data type represents textual data. Example: <code>'Hello, World!'</code>
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>3. Sequence Types</h2>

        <p className='my-3'>
          Sequence types are used to store collections of items. There are several sequence data types in Python:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>list:</strong> List data type is an ordered collection of items. Example: <code>[1, 2, 3]</code>
          </li>
          <li>
            <strong>tuple:</strong> Tuple data type is an ordered, immutable collection of items. Example: <code>(1, 2, 3)</code>
          </li>
          <li>
            <strong>range:</strong> Range data type represents a sequence of numbers. Example: <code>range(5)</code> (produces 0, 1, 2, 3, 4)
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>4. Mapping Type</h2>

        <p className='my-3'>
          The mapping type in Python is:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>dict:</strong> Dictionary data type stores key-value pairs. Example: <code>{'{ "name": "Alice", "age": 30 }'}</code>
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>5. Set Types</h2>

        <p className='my-3'>
          Set types are used to store unordered collections of unique items. There are two main set data types:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>set:</strong> Set data type represents a mutable set of unique items. Example: <code>{'{1, 2, 3}'}</code>
          </li>
          <li>
            <strong>frozenset:</strong> Frozenset data type represents an immutable set of unique items. Example: <code>frozenset{'{1, 2, 3}'}</code>
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>6. Boolean Type</h2>

        <p className='my-3'>
          The boolean data type has two values:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>bool:</strong> Boolean data type represents <code>True</code> or <code>False</code> values. Example: <code>True</code>
          </li>
        </ul>

        <h2 className='text-3xl font-bold my-3'>7. Binary Types</h2>

        <p className='my-3'>
          Binary types are used to represent binary data. There are two main binary data types:
        </p>

        <ul className='list-disc list-inside my-3'>
          <li>
            <strong>bytes:</strong> Bytes data type represents immutable sequences of bytes. Example: <code>b'hello'</code>
          </li>
          <li>
            <strong>bytearray:</strong> Bytearray data type represents mutable sequences of bytes. Example: <code>bytearray([65, 66, 67])</code>
          </li>
        </ul>

        <p className='my-3'>
          These are the fundamental data types in Python. Understanding data types is crucial for working with Python effectively.
        </p>
      </div>
    ),
    "Arrays": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Arrays in Python</h1>

        <p className='my-3'>
          In Python, lists are commonly used to work with collections of data. While Python doesn't have a built-in array data structure like some other languages, lists serve the same purpose and are incredibly versatile.
        </p>

        <h2 className='text-3xl font-bold my-3'>Creating Lists</h2>

        <p className='my-3'>
          Lists are created by enclosing elements in square brackets <code>[]</code>, separated by commas.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    numbers = [1, 2, 3, 4, 5]
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Accessing Elements</h2>

        <p className='my-3'>
          You can access individual elements of a list by their index. Python uses zero-based indexing, meaning the first element is at index 0.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    first_fruit = fruits[0]  # Access the first element (apple)
    second_fruit = fruits[1]  # Access the second element (banana)
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Modifying Lists</h2>

        <p className='my-3'>
          Lists are mutable, which means you can change their contents after creation. You can add, remove, or modify elements.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    fruits[1] = "kiwi"  # Modify an element (banana -> kiwi)
    
    fruits.append("orange")  # Add an element to the end
    fruits.insert(2, "grape")  # Insert an element at a specific position
    
    fruits.remove("cherry")  # Remove an element by value
    popped_fruit = fruits.pop()  # Remove and return the last element
    
    del fruits[0]  # Remove an element by index
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>List Operations</h2>

        <p className='my-3'>
          Lists support various operations such as concatenation, repetition, and slicing.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits1 = ["apple", "banana"]
    fruits2 = ["cherry", "kiwi"]
    combined_fruits = fruits1 + fruits2  # Concatenate lists
    
    repeated_fruits = fruits1 * 3  # Repeat a list
    
    sliced_fruits = fruits[1:3]  # Slice a list (banana, cherry)
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>List Methods</h2>

        <p className='my-3'>
          Python provides several built-in methods to work with lists, such as <code>append()</code>, <code>extend()</code>, <code>count()</code>, <code>sort()</code>, <code>reverse()</code>, and more.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    fruits.append("orange")  # Add an element to the end
    fruits.extend(["grape", "kiwi"])  # Extend with another list
    banana_count = fruits.count("banana")  # Count occurrences
    fruits.sort()  # Sort in ascending order
    fruits.reverse()  # Reverse the list
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>List Comprehensions</h2>

        <p className='my-3'>
          List comprehensions provide a concise way to create lists based on existing lists. They allow you to apply an expression to each item in the original list.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`numbers = [1, 2, 3, 4, 5]
    squared_numbers = [x**2 for x in numbers]  # Create a new list with squared values
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>List vs. Array</h2>

        <p className='my-3'>
          While Python lists are similar to arrays in other languages, they are more flexible and can hold elements of different data types. Python also provides specialized array libraries like NumPy for handling numerical data.
        </p>

        <p className='my-3'>
          Lists are a fundamental data structure in Python, offering versatile ways to work with collections of data. Understanding how to create, modify, and utilize lists is essential for Python programming.
        </p>
      </div>
    ),
    "Loops": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Loops in Python</h1>

        <p className='my-3'>
          Loops are essential for repeating a specific block of code multiple times. Python provides two main types of loops: <strong>for</strong> loops and <strong>while</strong> loops.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. For Loops</h2>

        <p className='my-3'>
          A <strong>for</strong> loop is used to iterate over a sequence (such as a list, tuple, string, or range) and execute a block of code for each item in the sequence.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
        print(fruit)
    # Output:
    # apple
    # banana
    # cherry
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. While Loops</h2>

        <p className='my-3'>
          A <strong>while</strong> loop is used to repeatedly execute a block of code as long as a specified condition is true.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`i = 0
    while i < 5:
        print(i)
        i += 1
    # Output:
    # 0
    # 1
    # 2
    # 3
    # 4
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Loop Control Statements</h2>

        <p className='my-3'>
          Python provides control statements like <code>break</code> and <code>continue</code> to modify the flow of loops.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
        if fruit == "banana":
            break  # Exit the loop when 'banana' is encountered
        print(fruit)
    # Output:
    # apple
    
    for number in range(5):
        if number == 2:
            continue  # Skip the iteration when the number is 2
        print(number)
    # Output:
    # 0
    # 1
    # 3
    # 4
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Nested Loops</h2>

        <p className='my-3'>
          You can use loops inside other loops to create nested loops for more complex iterations.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`for i in range(3):
        for j in range(2):
            print(i, j)
    # Output:
    # 0 0
    # 0 1
    # 1 0
    # 1 1
    # 2 0
    # 2 1
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Loop Examples</h2>

        <p className='my-3'>
          Here are a few examples of loops in practical use cases:
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`# Calculating the sum of numbers from 1 to 10 using a for loop
    sum = 0
    for num in range(1, 11):
        sum += num
    print("Sum:", sum)
    
    # Printing all even numbers from 0 to 20 using a while loop
    num = 0
    while num <= 20:
        print(num)
        num += 2
    `}
          </code>
        </pre>

        <p className='my-3'>
          Loops are fundamental for iterating through data, making decisions, and performing repetitive tasks in Python programming.
        </p>
      </div>
    ),
    "Functions": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Functions in Python</h1>

        <p className='my-3'>
          Functions are a fundamental concept in Python and many other programming languages. They are blocks of organized, reusable code that perform a specific task. Functions allow you to break your code into smaller, manageable pieces, making it more readable and maintainable.
        </p>

        <h2 className='text-3xl font-bold my-3'>Defining a Function</h2>

        <p className='my-3'>
          In Python, you define a function using the <code>def</code> keyword, followed by the function name and a set of parentheses. Any parameters or arguments the function takes are placed within these parentheses. The function block is indented and starts with a colon.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def greet(name):
              print(f"Hello, {name}!")
          
          # Call the function
          greet("Alice")  # Output: Hello, Alice!
          greet("Bob")    # Output: Hello, Bob!
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Function Parameters</h2>

        <p className='my-3'>
          Functions can take parameters (inputs) that allow you to pass values into the function. Parameters are specified within the parentheses when defining the function.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def add(a, b):
              return a + b
          
          result = add(5, 3)
          print(result)  # Output: 8
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Return Statement</h2>

        <p className='my-3'>
          Functions can return values using the <code>return</code> statement. This statement specifies the value or expression to be returned to the caller.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def multiply(a, b):
              return a * b
          
          result = multiply(4, 6)
          print(result)  # Output: 24
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Default Parameters</h2>

        <p className='my-3'>
          You can assign default values to function parameters. If a parameter is not provided when calling the function, it will use the default value.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def greet(name, greeting="Hello"):
              print(f"{greeting}, {name}!")
          
          greet("Alice")         # Output: Hello, Alice!
          greet("Bob", "Hi")     # Output: Hi, Bob!
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Variable Scope</h2>

        <p className='my-3'>
          Variables defined inside a function have local scope, which means they are only accessible within that function. Variables defined outside of any function have global scope, making them accessible throughout the entire script.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`x = 10  # Global variable
          
          def foo():
              y = 5  # Local variable
              print(x + y)  # Access global variable x
          
          foo()  # Output: 15
          print(y)  # Error: y is not defined
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Lambda Functions</h2>

        <p className='my-3'>
          Lambda functions, also known as anonymous functions, are small, unnamed functions defined using the <code>lambda</code> keyword. They are often used for short, simple operations.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`add = lambda x, y: x + y
          result = add(2, 3)
          print(result)  # Output: 5
          `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>Function Recursion</h2>

        <p className='my-3'>
          Python supports recursive functions, which are functions that call themselves. Recursion is a powerful technique used for solving problems that can be broken down into smaller, similar subproblems.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def factorial(n):
              if n == 0:
                  return 1
              else:
                  return n * factorial(n - 1)
          
          result = factorial(5)
          print(result)  # Output: 120
          `}
          </code>
        </pre>

        <p className='my-3'>
          Functions are a cornerstone of Python programming and are essential for organizing and reusing code effectively. Understanding how to define, use, and manipulate functions is crucial for becoming proficient in Python.
        </p>
      </div>
    ),
    "Conditional Statements": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Conditional Statements in Python</h1>

        <p className='my-3'>
          Conditional statements are used to make decisions in your code based on specified conditions. Python supports various types of conditional statements, including <strong>if</strong>, <strong>elif</strong> (short for "else if"), and <strong>else</strong>.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. If Statement</h2>

        <p className='my-3'>
          The <strong>if</strong> statement is used to execute a block of code only if a specified condition is true.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`x = 10
    if x > 5:
        print("x is greater than 5")
    # Output: x is greater than 5
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. If-Else Statement</h2>

        <p className='my-3'>
          The <strong>if-else</strong> statement allows you to execute one block of code if a condition is true and another block if the condition is false.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`x = 3
    if x % 2 == 0:
        print("x is even")
    else:
        print("x is odd")
    # Output: x is odd
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Elif Statement</h2>

        <p className='my-3'>
          The <strong>elif</strong> statement is used when you have multiple conditions to check. It allows you to specify multiple conditions and execute different code blocks based on the first condition that is true.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`day = "Wednesday"
    if day == "Monday":
        print("It's the start of the week")
    elif day == "Wednesday":
        print("It's the middle of the week")
    else:
        print("It's another day")
    # Output: It's the middle of the week
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Nested Conditionals</h2>

        <p className='my-3'>
          You can nest conditional statements inside one another to create complex decision-making structures.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`x = 10
    if x > 5:
        if x < 15:
            print("x is between 5 and 15")
        else:
            print("x is greater than or equal to 15")
    else:
        print("x is less than or equal to 5")
    # Output: x is between 5 and 15
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Ternary Operator</h2>

        <p className='my-3'>
          Python also supports the <strong>ternary operator</strong>, which provides a concise way to write conditional expressions.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`x = 10
    message = "x is even" if x % 2 == 0 else "x is odd"
    print(message)
    # Output: x is even
    `}
          </code>
        </pre>

        <p className='my-3'>
          Conditional statements are crucial for controlling the flow of your Python programs and making decisions based on specific conditions.
        </p>
      </div>
    ),
    "Object-Oriented Programming (OOP)": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Object-Oriented Programming (OOP) in Python</h1>

        <p className='my-3'>
          Object-Oriented Programming (OOP) is a programming paradigm that uses objects to structure code. Python is an object-oriented language, and understanding OOP concepts is essential for effective Python programming.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Classes and Objects</h2>

        <p className='my-3'>
          In OOP, a <strong>class</strong> is a blueprint for creating objects. Objects are instances of classes and can have attributes (variables) and methods (functions). Classes define the structure and behavior of objects.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`class Dog:
        def __init__(self, name, breed):
            self.name = name
            self.breed = breed
    
        def bark(self):
            print(f"{self.name} is barking")
    
    # Creating objects
    dog1 = Dog("Buddy", "Golden Retriever")
    dog2 = Dog("Max", "Poodle")
    
    # Accessing object attributes and methods
    print(dog1.name)  # Output: Buddy
    dog2.bark()  # Output: Max is barking
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Encapsulation</h2>

        <p className='my-3'>
          Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on that data within a class. It restricts direct access to some of an object's components, providing data protection and preventing unintended interference.
        </p>

        <h2 className='text-3xl font-bold my-3'>3. Inheritance</h2>

        <p className='my-3'>
          Inheritance allows you to create a new class (subclass) that inherits properties and methods from an existing class (superclass). It promotes code reuse and hierarchy in class relationships.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`class Animal:
        def __init__(self, name):
            self.name = name
    
        def speak(self):
            pass
    
    class Dog(Animal):
        def speak(self):
            return f"{self.name} barks"
    
    class Cat(Animal):
        def speak(self):
            return f"{self.name} meows"
    
    dog = Dog("Buddy")
    cat = Cat("Whiskers")
    
    print(dog.speak())  # Output: Buddy barks
    print(cat.speak())  # Output: Whiskers meows
    `}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Polymorphism</h2>

        <p className='my-3'>
          Polymorphism is the ability of different objects to respond to the same method in their unique way. It allows you to work with objects of different classes through a common interface.
        </p>

        <pre className="bg-gray-100 p-1 rounded-lg overflow-auto max-h-[280px] text-[12px]">
          <code>
            {`def animal_sound(animal):
        return animal.speak()
    
    dog = Dog("Buddy")
    cat = Cat("Whiskers")
    
    print(animal_sound(dog))  # Output: Buddy barks
    print(animal_sound(cat))  # Output: Whiskers meows
    `}
          </code>
        </pre>

        <p className='my-3'>
          Object-Oriented Programming in Python provides a structured and organized approach to solving complex problems by modeling real-world entities as objects. It promotes code reusability and maintainability.
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

export default PythonDocs;