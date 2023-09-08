import React, { useState } from 'react';
import Header from '../Header';
import Content from '../Content';

function HtmlDocs() {
  const data = {
    'Getting Started': (
      <>
        <p className='my-3'>
          <h1 className='text-5xl my-3 mb-5'>HTML</h1>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It defines the structure of a web page by using a variety of elements and tags.
          These elements are used to enclose, or wrap, different parts of the content to make it
          appear or behave in a certain way.
        </p>
        <p>
          To create an HTML document, you start with the <span className='text-orange-600'>&lt;!DOCTYPE html&gt;</span> declaration,
          which tells the web browser that the document is written in HTML5.
        </p>
        <p>
          <h1 className='text-4xl my-3 mb-5'>Basic Structure</h1>
          The basic structure of an HTML document includes the <span className='text-orange-600'>&lt;html&gt;</span> element,
          which contains the <span className='text-orange-600'>&lt;head&gt;</span> and <span className='text-orange-600'>&lt;body&gt;</span> sections.
          The <span className='text-orange-600'>&lt;head&gt;</span> section typically contains metadata about the document,
          such as the title and character encoding, while the <span className='text-orange-600'>&lt;body&gt;</span> section
          contains the visible content of the page.
        </p>
        <p className='my-3'>
          Within the <span className='text-orange-600'>&lt;body&gt;</span> section, you can use various HTML elements to create
          headings, paragraphs, lists, links, images, and more. These elements are defined by
          tags like <span className='text-orange-600'>&lt;h1&gt;</span>, <span className='text-orange-600'>&lt;p&gt;</span>, <span className='text-orange-600'>&lt;ul&gt;</span>,
          <span className='text-orange-600'>&lt;a&gt;</span>, and <span className='text-orange-600'>&lt;img&gt;</span>.
        </p>
        <p className='my-3'>
          HTML is a versatile language that allows you to structure and format content for the web.
          As you learn HTML, you'll discover how to create web pages with text, images, links,
          and interactive elements to engage your audience.
          interactive elements to engage your audience.
        </p>

        <p className='my-3'>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It defines the structure of a web page by using a variety of elements and tags.
          These elements are used to enclose, or wrap, different parts of the content to make it
          appear or behave in a certain way.
        </p>
        <p className='my-3'>
          To create an HTML document, you start with the <span className='text-orange-600'>&lt;!DOCTYPE html&gt;</span> declaration,
          which tells the web browser that the document is written in HTML5.
        </p>
        <p className='my-3'>
          The basic structure of an HTML document includes the <span className='text-orange-600'>&lt;html&gt;</span> element,
          which contains the <span className='text-orange-600'>&lt;head&gt;</span> and <span className='text-orange-600'>&lt;body&gt;</span> sections.
          The <span className='text-orange-600'>&lt;head&gt;</span> section typically contains metadata about the document,
          such as the title and character encoding, while the <span className='text-orange-600'>&lt;body&gt;</span> section
          contains the visible content of the page.
        </p>
        <p className='my-3'>
          Within the <span className='text-orange-600'>&lt;body&gt;</span> section, you can use various HTML elements to create
          headings, paragraphs, lists, links, images, and more. These elements are defined by
          tags like <span className='text-orange-600'>&lt;h1&gt;</span>, <span className='text-orange-600'>&lt;p&gt;</span>, <span className='text-orange-600'>&lt;ul&gt;</span>,
          <span className='text-orange-600'>&lt;a&gt;</span>, and <span className='text-orange-600'>&lt;img&gt;</span>.
        </p>
        <p className='my-3'>
          HTML is a versatile language that allows you to structure and format content for the web.
          As you learn HTML, you'll discover how to create web pages with text, images, links,
          and interactive elements to engage your audience.
          interactive elements to engage your audience.
        </p>

      </>
    ),

    'History of HTML': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-bold">The Evolution of HTML</h1>
        <p className="mb-4 break-words">
          HTML, or HyperText Markup Language, has a rich and influential history that has played a pivotal role in shaping the World Wide Web as we know it today.
        </p>
        <p className="mb-4 break-words">
          - <strong>Birth of the Web (1989):</strong> The story begins with Tim Berners-Lee's visionary concept of the World Wide Web while working at CERN, laying the foundation for HTML.
        </p>
        <p className="mb-4 break-words">
          - <strong>HTML 1.0 (1993):</strong> In 1993, HTML 1.0 emerged as the first version, providing a simple markup language for basic document sharing. It introduced fundamental elements like headings and links.
        </p>
        <p className="mb-4 break-words">
          - <strong>HTML 2.0 (1995):</strong> HTML 2.0 expanded HTML's capabilities with the introduction of forms, tables, and support for inline images, making it more versatile for content presentation.
        </p>
        <p className="mb-4 break-words">
          - <strong>HTML 4.0 (1997):</strong> HTML 4.0 marked a significant milestone, bringing support for JavaScript, Cascading Style Sheets (CSS), and advanced styling options. This separation of content and presentation enhanced the web's visual appeal.
        </p>
        <p className="mb-4 break-words">
          - <strong>XHTML (Early 2000s):</strong> The early 2000s saw the emergence of XHTML (eXtensible HyperText Markup Language), which aimed to enforce cleaner code and compatibility with XML standards.
        </p>
        <p className="mb-4 break-words">
          - <strong>HTML5 (2014):</strong> HTML5 was a game-changer, introducing multimedia support, the canvas element for graphics, and advanced APIs. It enhanced web application development and interactivity.
        </p>
        <p className="mb-4 break-words">
          - <strong>HTML as a Living Standard:</strong> HTML has evolved into a living standard, continuously adapting to the ever-changing demands of the web. It is maintained by organizations like the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG).
        </p>
        <p>
          HTML's remarkable journey has transformed the web into a versatile platform for content delivery, interactive applications, and a vital part of our digital world.
        </p>
      </>
    ),
    'HTML5': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-bold">HTML5: The Future of Web Development</h1>
        <p className="mb-4 break-words">
          HTML5 is a major milestone in web development, offering a wide range of features and capabilities that have transformed the way we build and interact with web applications. Let's explore these features in detail.
        </p>

        <h2 className="text-3xl my-3 mb-5 font-semibold">Key Features of HTML5</h2>

        <h3 className="text-2xl my-3 font-semibold">1. Semantic Elements</h3>
        <p className="mb-4 break-words">
          HTML5 introduces a set of semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, and &lt;footer&gt; that provide clear structure and meaning to web content. These elements enhance accessibility and search engine optimization (SEO) by making it easier to understand the document's structure.
        </p>

        <h3 className="text-2xl my-3 font-semibold">2. Audio and Video Support</h3>
        <p className="mb-4 break-words">
          HTML5 allows seamless integration of audio and video content with the &lt;audio&gt; and &lt;video&gt; elements. This eliminates the need for third-party plugins like Flash, making multimedia content more accessible and reducing compatibility issues.
        </p>

        <h3 className="text-2xl my-3 font-semibold">3. Canvas for Graphics</h3>
        <p className="mb-4 break-words">
          The &lt;canvas&gt; element in HTML5 provides a powerful and flexible way to draw graphics, create animations, and develop interactive content directly within the browser. This makes HTML5 suitable for game development, data visualization, and interactive infographics.
        </p>

        <h3 className="text-2xl my-3 font-semibold">4. Offline Web Applications</h3>
        <p className="mb-4 break-words">
          HTML5 introduces technologies like the Application Cache and Service Workers, enabling web applications to work offline or with a limited internet connection. This improves user experience and allows web apps to remain functional in challenging network conditions.
        </p>

        <h3 className="text-2xl my-3 font-semibold">5. Improved Forms</h3>
        <p className="mb-4 break-words">
          HTML5 enhances web forms with new input types (e.g., email, date, and range), native form validation, and the &lt;datalist&gt; element for providing auto-suggestions. These features simplify form development, enhance user experience, and reduce the need for JavaScript-based validation.
        </p>

        <h3 className="text-2xl my-3 font-semibold">6. Geolocation</h3>
        <p className="mb-4 break-words">
          HTML5's Geolocation API allows web applications to access a user's location through their device, providing opportunities for location-based services, mapping applications, and personalized content delivery.
        </p>

        <h3 className="text-2xl my-3 font-semibold">7. Web Storage</h3>
        <p className="mb-4 break-words">
          HTML5 offers client-side storage options like localStorage and sessionStorage, reducing reliance on cookies for data storage. This improves security and allows web apps to store larger amounts of data on the client's device.
        </p>

        <h3 className="text-2xl my-3 font-semibold">8. Scalable Vector Graphics (SVG)</h3>
        <p className="mb-4 break-words">
          HTML5 includes support for Scalable Vector Graphics (SVG), which allows the creation of resolution-independent, high-quality vector graphics directly within web documents. SVG is ideal for creating icons, charts, and illustrations.
        </p>

        <h3 className="text-2xl my-3 font-semibold">9. Web Workers</h3>
        <p className="mb-4 break-words">
          Web Workers enable parallel execution of JavaScript code in the background, improving the responsiveness and performance of web applications. They are particularly valuable for computationally intensive tasks and long-running processes.
        </p>

        <h3 className="text-2xl my-3 font-semibold">10. Drag and Drop</h3>
        <p className="mb-4 break-words">
          HTML5's Drag and Drop API simplifies the implementation of drag-and-drop functionality within web applications. It allows users to interact with content more intuitively and is often used for file uploads and arranging elements on a web page.
        </p>

        <p>
          These are just some of the key features that HTML5 brings to the world of web development. Its adoption has revolutionized web applications, making them more interactive, efficient, and user-friendly.
        </p>
      </>
    ),
    'HTML Tags & Elemants': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-semibold">HTML Tags and Elements Documentation</h1>

        <p>
          HTML (Hypertext Markup Language) is the standard markup language used for creating web pages. It provides a structured way to define and organize the content and elements on a webpage. This documentation covers the most commonly used HTML tags and elements.
        </p>

        <h2 className="text-4xl my-3 font-semibold">1. Headings (&lt;h1&gt; to &lt;h6&gt;)</h2>

        <p>
          Headings are used to define the structure and hierarchy of a webpage's content. There are six levels of headings, from &lt;h1&gt; (the highest) to &lt;h6&gt; (the lowest).
        </p>

        <div className="my-3">
          <h1 className="text-5xl my-3 mb-5">Heading 1</h1>
          <h2 className="text-4xl my-3 mb-5">Heading 2</h2>
          <h3 className="text-3xl my-3 mb-5">Heading 3</h3>
          <h4 className="text-2xl my-3 mb-5">Heading 4</h4>
          <h5 className="text-xl my-3 mb-5">Heading 5</h5>
          <h6 className="text-lg my-3 mb-5">Heading 6</h6>
        </div>

        <h2 className="text-4xl my-3 font-semibold">2. Paragraphs (&lt;p&gt;)</h2>

        <p>
          Paragraphs are used to structure and format text content. They create visual separation between blocks of text.
        </p>

        <div className="my-3">
          <p>
            This is a sample paragraph. It contains text that can be used to convey information or messages on a webpage.
          </p>
        </div>

        <h2 className="text-4xl my-3 font-semibold">3. Links (&lt;a&gt;)</h2>

        <p>
          Links, or anchor elements, are used to create hyperlinks to other web pages or resources. They can also be used for in-page navigation.
        </p>

        <div className="my-3">
          <a href="https://www.example.com" className="text-blue-500 hover:underline">Visit Example.com</a>
        </div>

        <h2 className="text-4xl my-3 font-semibold">4. Images (&lt;img&gt;)</h2>

        <p>
          Images are used to display visual content on a webpage. The &lt;img&gt; element requires a source (src) attribute specifying the image file's URL.
        </p>

        <div className="my-3">
          <img src="https://via.placeholder.com/200" alt="Placeholder Image" className="border" />
        </div>

        <h2 className="text-4xl my-3 font-semibold">5. Lists (Ordered & Unordered)</h2>

        <p>
          Lists are used to group and display related items. There are two types of lists: ordered (numbered) and unordered (bulleted).
        </p>

        <div className="my-3">
          <h3 className="text-2xl my-3">Ordered List</h3>
          <ol className="list-decimal pl-5">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>

          <h3 className="text-2xl my-3">Unordered List</h3>
          <ul className="list-disc pl-5">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>

        <h2 className="text-4xl my-3 font-semibold">6. Forms (&lt;form&gt;, &lt;input&gt;, &lt;button&gt;)</h2>

        <p>
          Forms are used to collect user input. They can contain various form elements like text inputs, radio buttons, checkboxes, and buttons for submission.
        </p>

        <div className="my-3">
          <form className="border p-4">
            {/* Form controls will go here */}
          </form>
        </div>

        <h2 className="text-4xl my-3 font-semibold">7. Divisions (&lt;div&gt;)</h2>

        <p>
          Divisions are generic containers used for grouping and styling elements. They have no specific semantic meaning.
        </p>

        <div className="my-3">
          <div className="bg-gray-200 p-4">
            This is a &lt;div&gt; element used for grouping content.
          </div>
        </div>

        <h2 className="text-4xl my-3 font-semibold">8. Tables (&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;)</h2>

        <p>
          Tables are used for displaying tabular data. They consist of rows and columns, with &lt;table&gt; representing the entire table, &lt;tr&gt; for rows, and &lt;td&gt; for data cells.
        </p>

        <div className="my-3">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Header 1</th>
                <th className="px-4 py-2">Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>


        <h2 className="text-4xl my-3 font-semibold">9. Forms Elements (Inputs, Buttons)</h2>

        <p>
          Form elements are used within forms to collect user input. Common form elements include text inputs, radio buttons, checkboxes, and buttons.
        </p>

        <div className="my-3">
          <form className="border p-4">
            <label htmlFor="text-input" className="block mb-2">Text Input:</label>
            <input type="text" id="text-input" name="text-input" className="border rounded p-2 w-full mb-3" placeholder="Enter text" />

            <label htmlFor="radio-input" className="block mb-2">Radio Buttons:</label>
            <div className="mb-3">
              <input type="radio" id="radio-option1" name="radio-options" className="mr-2" />
              <label htmlFor="radio-option1" className="mr-4">Option 1</label>

              <input type="radio" id="radio-option2" name="radio-options" className="mr-2" />
              <label htmlFor="radio-option2" className="mr-4">Option 2</label>

              <input type="radio" id="radio-option3" name="radio-options" className="mr-2" />
              <label htmlFor="radio-option3">Option 3</label>
            </div>

            <label htmlFor="checkbox-input" className="block mb-2">Checkboxes:</label>
            <div className="mb-3">
              <input type="checkbox" id="checkbox-option1" className="mr-2" />
              <label htmlFor="checkbox-option1" className="mr-4">Option 1</label>

              <input type="checkbox" id="checkbox-option2" className="mr-2" />
              <label htmlFor="checkbox-option2" className="mr-4">Option 2</label>

              <input type="checkbox" id="checkbox-option3" className="mr-2" />
              <label htmlFor="checkbox-option3">Option 3</label>
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          </form>
        </div>

        <h2 className="text-4xl my-3 font-semibold">10. Divisions (&lt;div&gt;)</h2>

        <p>
          Divisions are generic containers used for grouping and styling elements. They have no specific semantic meaning.
        </p>

        <div className="my-3">
          <div className="bg-gray-200 p-4">
            This is a &lt;div&gt; element used for grouping content.
          </div>
        </div>

        {/* Add more HTML tags and elements here with examples... */}

        <h2 className="text-4xl my-3 font-semibold">Conclusion</h2>

        <p>
          HTML tags and elements provide the foundation for structuring and presenting content on the web. By using these tags along with CSS for styling and JavaScript for interactivity, you can create dynamic and engaging web pages.
        </p>
      </>

    ),
    'Semantic Elements': (
      <div className='break-words'>
        <h1 className="text-5xl my-3 mb-5 font-bold">HTML5 Semantic Elements: Enhancing Structure and Accessibility</h1>
        <p className="mb-4 break-words">
          HTML5 introduces a set of semantic elements that provide clear structure and meaning to web content. These elements enhance both the organization of web documents and accessibility for users. Let's explore each of these elements in detail.
        </p>

        <h2 className="text-3xl my-3 mb-5 font-semibold">Semantic Elements in HTML5</h2>

        <h3 className="text-2xl my-3 font-semibold">1. &lt;header&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;header&gt; element represents the introductory content or a set of navigational links at the beginning of a section or webpage. It typically includes elements like headings, logos, and navigation menus.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <header>
            <h1>Website Logo</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </header>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">2. &lt;nav&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;nav&gt; element represents a section of a page that contains navigation links, making it easier for users to move around the website. It should include primary navigation menus or sets of related links.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">3. &lt;main&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;main&gt; element represents the main content of the document. It should be unique to each page and not used for repeated content such as site navigation or headers. Using &lt;main&gt; improves accessibility as screen readers can easily identify the main content.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <main>
            <h1>Welcome to Our Website!</h1>
            <p>Explore our products and services.</p>
          </main>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">4. &lt;article&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;article&gt; element represents a self-contained composition that can be independently distributed or syndicated. It's commonly used for blog posts, news articles, and forum posts.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <article>
            <h2>How to Bake Delicious Cookies</h2>
            <p>Here's a recipe for mouthwatering cookies...</p>
          </article>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">5. &lt;section&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;section&gt; element represents a thematic grouping of content within a document. It helps in structuring the content and is often used for chapters, subsections, or any logically related content.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <section>
            <h2>Chapter 1: Introduction</h2>
            <p>Welcome to the world of HTML5...</p>
          </section>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">6. &lt;aside&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;aside&gt; element represents content that is tangentially related to the content around it, such as sidebars, pull quotes, or advertisements. It should not be considered essential to understanding the main content.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <aside>
            <h3>Related Articles</h3>
            <ul>
              <li><a href="/article1">Article 1</a></li>
              <li><a href="/article2">Article 2</a></li>
            </ul>
          </aside>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">7. &lt;footer&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;footer&gt; element represents the footer of a section or a webpage. It typically contains copyright information, author details, and links to related documents.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <footer>
            <p>&copy; 2023 WebDev Inc. All rights reserved.</p>
          </footer>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">8. &lt;figure&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;figure&gt; element is used to encapsulate content that is referenced from the main content but can stand alone if needed. It's often used for images, illustrations, videos, or other media.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <figure>
            <img src="image.jpg" alt="A beautiful landscape" />
            <figcaption>A scenic view of nature</figcaption>
          </figure>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">9. &lt;figcaption&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;figcaption&gt; element is used to provide a caption or description for the content within a &lt;figure&gt; element. It helps to associate a caption with an image or media element.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <figure>
            <img src="image.jpg" alt="A beautiful landscape" />
            <figcaption>A scenic view of nature</figcaption>
          </figure>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">10. &lt;details&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;details&gt; element represents a disclosure widget from which the user can obtain additional information or controls. It's often used to create collapsible sections on a webpage.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <details>
            <summary>Click to reveal more information</summary>
            <p>Here's some additional content that can be shown or hidden.</p>
          </details>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">11. &lt;summary&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;summary&gt; element is used within a &lt;details&gt; element to provide a visible heading or label for the disclosure widget. It represents the clickable part that reveals or hides content.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <details>
            <summary>Click to reveal more information</summary>
            <p>Here's some additional content that can be shown or hidden.</p>
          </details>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">12. &lt;mark&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;mark&gt; element is used to highlight or mark a specific portion <br /> of text within a document. It's often used to indicate search results or significant phrases.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <p>
            The <mark>HTML5</mark> specification introduces many new features and elements.
          </p>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">13. &lt;time&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;time&gt; element represents a specific period in time or a range of time. <br /> It can be used to mark up dates, times, or durations, making it useful for events, schedules, and more.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <p>
            The event starts at <time datetime="2023-09-15">September 15, 2023</time>.
          </p>
        `}
        </pre>


        <h3 className="text-2xl my-3 font-semibold">14. &lt;abbr&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;abbr&gt; element is used to mark up an abbreviation or acronym.
        </p>
        <pre className="bg-gray-100 break-words p-2 rounded-lg">
          {`
          <p>
            <abbr title="World Wide Web">WWW</abbr> is an essential part of the internet.
          </p>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">15. &lt;address&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;address&gt; element represents contact information for its nearest &lt;article&gt; or &lt;body&gt; ancestor. It's typically used for author or article contact details.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <article>
            <h2>Author Info</h2>
            <address>
              John Doe<br />
              Email: <a href="mailto:johndoe@example.com">johndoe@example.com</a><br />
              Phone: 123-456-7890
            </address>
          </article>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">16. &lt;bdi&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;bdi&gt; (Bidirectional Isolate) element is used to isolate a part of text that might be formatted in a different direction from the surrounding text, such as in right-to-left languages.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <p>
            This text contains both English and <bdi dir="rtl">عربي</bdi> text.
          </p>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">17. &lt;bdo&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;bdo&gt; (Bidirectional Override) element is used to explicitly specify the text direction (left-to-right or right-to-left) for its content, overriding the document's default direction.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <p>
            This text contains both English and <bdo dir="rtl">عربي</bdo> text.
          </p>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">18. &lt;code&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;code&gt; element is used to represent a fragment of computer code. It is typically displayed in a monospaced font and can be used to highlight code snippets.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <p>
            To print "Hello, World!" in Python, use <code>print("Hello, World!")</code>.
          </p>
        `}
        </pre>

        <h3 className="text-2xl my-3 font-semibold">19. &lt;datalist&gt;</h3>
        <p className="mb-4 break-words">
          The &lt;datalist&gt; element provides a list of predefined options for &lt;input&gt; elements with a &lt;list&gt; attribute. Users can select options from a dropdown list.
        </p>
        <pre className="bg-gray-100 break-words p-4 rounded-lg">
          {`
          <label for="fruits">Choose a fruit:</label>
          <input list="fruits" id="fruit" name="fruit" />
          <datalist id="fruits">
            <option value="Apple" />
            <option value="Banana" />
            <option value="Cherry" />
            <option value="Grape" />
          </datalist>
        `}
        </pre>

        <p className='my-3'>
          Utilizing these semantic elements not only improves the structure and readability of your web documents but also enhances accessibility and search engine optimization. Make sure to use them appropriately to create more meaningful and well-structured web content.
        </p>
      </div>
    ),
    'HTML Tables': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-semibold">HTML Tables</h1>

        <p>
          HTML tables are a way to display data in a structured format with rows and columns. They are commonly used for organizing and presenting tabular data on web pages. HTML tables consist of the following key elements:
        </p>

        <h2 className="text-4xl my-3 mb-5 font-semibold">Table Elements</h2>

        <h3 className="text-2xl my-3 font-semibold">&lt;table&gt;</h3>
        <p>
          The &lt;table&gt; element is used to define a table. It acts as a container for all other table elements.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;tr&gt;</h3>
        <p>
          The &lt;tr&gt; (table row) element defines a row within a table. It contains one or more &lt;td&gt; or &lt;th&gt; elements to represent cells in the row.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;td&gt;</h3>
        <p>
          The &lt;td&gt; (table data) element represents a data cell in a table row. It contains the actual content or data to be displayed.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;th&gt;</h3>
        <p>
          The &lt;th&gt; (table header) element represents a header cell in a table row. It is used to label or describe the content of the columns or rows.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;thead&gt;</h3>
        <p>
          The &lt;thead&gt; (table head) element groups the header content in a table. It's typically placed at the beginning of the table and contains &lt;th&gt; elements.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;tbody&gt;</h3>
        <p>
          The &lt;tbody&gt; (table body) element groups the main content of the table. It's used to separate the table's header and footer from the data rows.
        </p>

        <h3 className="text-2xl my-3 font-semibold">&lt;tfoot&gt;</h3>
        <p>
          The &lt;tfoot&gt; (table footer) element groups the footer content in a table. It's typically placed at the end of the table and contains &lt;th&gt; elements.
        </p>

        <h2 className="text-4xl my-3 mb-5 font-semibold">Basic Table Example</h2>

        <div className="w-full overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="border border-gray-800 p-2">Name</th>
                <th className="border border-gray-800 p-2">Age</th>
                <th className="border border-gray-800 p-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-800 p-2">John Doe</td>
                <td className="border border-gray-800 p-2">30</td>
                <td className="border border-gray-800 p-2">New York</td>
              </tr>
              <tr>
                <td className="border border-gray-800 p-2">Jane Smith</td>
                <td className="border border-gray-800 p-2">28</td>
                <td className="border border-gray-800 p-2">Los Angeles</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          In the example above, we've created a basic HTML table to display information about individuals. We used the &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements to structure and populate the table. Tailwind CSS classes are applied for styling.
        </p>

        <h2 className="text-4xl my-3 mb-5 font-semibold">Types of Tables</h2>

        <p>
          There are various types of tables you can create, including data tables, pricing tables, and comparison tables. Each type serves a specific purpose and may have different structures and styles.
        </p>
      </>
    ),
    'HTML List': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-semibold">HTML Lists Documentation</h1>

        <p>
          HTML lists are essential for structuring and organizing content on web pages. They allow you to present information in a structured and readable format. In HTML, there are three main types of lists: ordered lists, unordered lists, and description lists. Each of these list types can have sub-types and customization options.
        </p>

        <h2 className="text-4xl my-3 font-semibold">1. Ordered Lists (&lt;ol&gt;)</h2>

        <p>
          Ordered lists are used to display a list of items in a specific sequence or order. Each list item is typically numbered. Here are some common sub-types of ordered lists:
        </p>

        <h3 className="text-3xl my-3 font-semibold">a. Decimal Ordered List</h3>

        <div className="w-full max-w-md">
          <ol className="list-decimal pl-6">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
        </div>

        <h3 className="text-3xl my-3 font-semibold">b. Lower Alpha Ordered List</h3>

        <div className="w-full max-w-md">
          <ol className="list-lower-alpha pl-6">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ol>
        </div>

        <h2 className="text-4xl my-3 font-semibold">2. Unordered Lists (&lt;ul&gt;)</h2>

        <p>
          Unordered lists are used to display a list of items without a specific sequence. Each list item is typically marked with a bullet point. Here are some common sub-types of unordered lists:
        </p>

        <h3 className="text-3xl my-3 font-semibold">a. Disc Unordered List</h3>

        <div className="w-full max-w-md">
          <ul className="list-disc pl-6">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>

        <h3 className="text-3xl my-3 font-semibold">b. Square Unordered List</h3>

        <div className="w-full max-w-md">
          <ul className="list-square pl-6">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>

        <h2 className="text-4xl my-3 font-semibold">3. Description Lists (&lt;dl&gt;)</h2>

        <p>
          Description lists are used to display a list of terms and their corresponding descriptions. Each term is typically bold, and its description follows. Here's an example:
        </p>

        <div className="w-full max-w-md">
          <dl className="list-none">
            <dt>Term 1</dt>
            <dd>Description 1</dd>
            <dt>Term 2</dt>
            <dd>Description 2</dd>
            <dt>Term 3</dt>
            <dd>Description 3</dd>
          </dl>
        </div>

        <h2 className="text-4xl my-3 font-semibold">4. Customization and Styling</h2>

        <p>
          You can customize the appearance of lists using CSS or frameworks like Tailwind CSS. You can change list markers, spacing, and other styles to match your website's design.
        </p>

        <h2 className="text-4xl my-3 font-semibold">5. Nesting Lists</h2>

        <p>
          HTML allows you to nest lists within other lists, creating hierarchical structures. For example, you can nest an unordered list within an ordered list or vice versa.
        </p>

        <h2 className="text-4xl my-3 font-semibold">6. Accessibility Considerations</h2>

        <p>
          When using lists, it's essential to consider accessibility. Ensure that your lists are properly structured with appropriate HTML tags and provide meaningful labels or alt text for list items if they contain images or links.
        </p>

        <h2 className="text-4xl my-3 font-semibold">7. Best Practices</h2>

        <p>
          Follow best practices for creating lists, such as using semantic HTML elements, avoiding excessive nesting, and maintaining consistency in list formatting across your website.
        </p>

        <h2 className="text-4xl my-3 font-semibold">8. Conclusion</h2>

        <p>
          In summary, HTML lists are versatile and crucial for structuring content on the web. Understanding the different types, customization options, accessibility considerations, and best practices will help you present your information effectively.
        </p>
      </>

    ),
    'HTMl Forms': (
      <>
        <h1 className="text-5xl my-3 mb-5 font-semibold">HTML Forms Documentation</h1>

        <p>
          HTML forms are essential for collecting user input on a webpage. They allow users to submit data, such as text, selections, and files, which can be processed on the server or used for client-side interactions. In this documentation, we'll explore HTML form elements and related components, along with examples and styling using React.js and Tailwind CSS.
        </p>

        <h2 className="text-4xl my-3 font-semibold">1. Form Element (&lt;form&gt;)</h2>

        <p>
          The &lt;form&gt; element is used to create a container for form controls. It defines where user input should be entered and specifies how the data should be sent.
        </p>

        <div className="my-3">
          <form className="border p-4">
            {/* Form controls will go here */}
          </form>
        </div>

        <h2 className="text-4xl my-3 font-semibold">2. Text Input (&lt;input type="text"&gt;)</h2>

        <p>
          Text input fields are used to collect single-line text input from users, such as names, email addresses, or search queries.
        </p>

        <div className="my-3">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="border p-2" />
        </div>

        <h2 className="text-4xl my-3 font-semibold">3. Email Input (&lt;input type="email"&gt;)</h2>

        <p>
          Email input fields are specifically designed for collecting email addresses. They include built-in validation to ensure a valid email format.
        </p>

        <div className="my-3">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="border p-2" />
        </div>

        <h2 className="text-4xl my-3 font-semibold">4. Password Input (&lt;input type="password"&gt;)</h2>

        <p>
          Password input fields are used for entering sensitive information, such as passwords. The entered text is usually masked for security.
        </p>

        <div className="my-3">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="border p-2" />
        </div>

        <h2 className="text-4xl my-3 font-semibold">5. Radio Buttons (&lt;input type="radio"&gt;)</h2>

        <p>
          Radio buttons allow users to select a single option from a list of choices. They are often used in multiple-choice questions or when only one option should be selected.
        </p>

        <div className="my-3">
          <label>Gender:</label>
          <div className="flex items-center">
            <input type="radio" id="male" name="gender" value="male" className="mr-2" />
            <label htmlFor="male" className="mr-4">Male</label>

            <input type="radio" id="female" name="gender" value="female" className="mr-2" />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <h2 className="text-4xl my-3 font-semibold">6. Checkbox (&lt;input type="checkbox"&gt;)</h2>

        <p>
          Checkboxes allow users to select one or more options from a list. They are suitable for scenarios where multiple selections are allowed.
        </p>

        <div className="my-3">
          <label>Interests:</label>
          <div className="flex items-center">
            <input type="checkbox" id="coding" name="interests" value="coding" className="mr-2" />
            <label htmlFor="coding" className="mr-4">Coding</label>

            <input type="checkbox" id="reading" name="interests" value="reading" className="mr-2" />
            <label htmlFor="reading">Reading</label>
          </div>
        </div>

        <h2 className="text-4xl my-3 font-semibold">7. Textarea (&lt;textarea&gt;)</h2>

        <p>
          Textareas are used for collecting multi-line text input. They are suitable for comments, messages, or longer pieces of text.
        </p>

        <div className="my-3">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" className="border p-2"></textarea>
        </div>

        <h2 className="text-4xl my-3 font-semibold">8. Select Dropdown (&lt;select&gt;)</h2>

        <p>
          Select dropdowns allow users to choose an option from a list. They are useful when there are several choices, and the user can select only one.
        </p>

        <div className="my-3">
          <label htmlFor="country">Country:</label>
          <select id="country" name="country" className="border p-2">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
          </select>
        </div>

        <h2 className="text-4xl my-3 font-semibold">9. Submit Button (&lt;button type="submit"&gt;)</h2>

        <p>
          Submit buttons trigger the submission of form data to the server. They are often used to finalize the form input.
        </p>

        <div className="my-3">
          <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
        </div>

        {/* Add more form elements here... */}

        <h2 className="text-4xl my-3 font-semibold">Conclusion</h2>

        <p>
          HTML form elements are crucial for collecting user input on the web. By using the appropriate form controls and attributes, you can create interactive and user-friendly web forms. When combined with React.js and styled with Tailwind CSS, you can build seamless user interfaces for various applications.
        </p>
      </>
    ),
    'More Info': (
      <>
        <h2 className="text-4xl my-3 font-semibold">Horizontal Rule (&lt;hr&gt;)</h2>
        <p>
          The &lt;hr&gt; element is used to create a thematic break or horizontal rule, often used to separate content within a page.
        </p>

        <div className="my-3">
          <p>This is some content above the horizontal rule.</p>
          <hr className="my-4" />
          <p>This is some content below the horizontal rule.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold">Line Break (&lt;br&gt;)</h2>

        <p>
          The &lt;br&gt; element is used to insert a line break within text or content.
        </p>

        <div className="my-3">
          <p>This is some text, and here is a line break:<br />Now, this text is on a new line.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold"> Abbreviation (&lt;abbr&gt;)</h2>

        <p>
          The &lt;abbr&gt; element is used to define an abbreviation or acronym, providing a title or full explanation.
        </p>

        <div className="my-3">
          <p>The <abbr title="World Wide Web Consortium">W3C</abbr> sets web standards.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold">Subscript and Superscript (&lt;sub&gt; and &lt;sup&gt;)</h2>

        <p>
          The &lt;sub&gt; element defines subscript text, while &lt;sup&gt; defines superscript text.
        </p>

        <div className="my-3">
          <p>This is H<sub>2</sub>O (water).</p>
          <p>2<sup>3</sup> is equal to 8.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold"> Marked Text (&lt;mark&gt;)</h2>

        <p>
          The &lt;mark&gt; element is used to highlight or mark text within the content.
        </p>

        <div className="my-3">
          <p>This is <mark>important</mark> information.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold">Time (&lt;time&gt;)</h2>

        <p>
          The &lt;time&gt; element represents a specific time or a range of time.
        </p>

        <div className="my-3">
          <p>The meeting is scheduled for <time datetime="2023-09-15T15:00">3:00 PM on September 15, 2023</time>.</p>
        </div>

        <h2 className="text-4xl my-3 font-semibold"> Preformatted Text (&lt;pre&gt;)</h2>

        <p>
          The &lt;pre&gt; element defines preformatted text where whitespace and line breaks are preserved.
        </p>

        <div className="my-3">
          <pre>
            function greet() {
              console.log("Hello, world!")
            }
          </pre>
        </div>

        <h2 className="text-4xl my-3 font-semibold">MDN Docs for More Information</h2>

        <p>
          For more in-depth information on HTML elements and their usage, please visit the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MDN Web Docs</a>.
        </p>
      </>
    ),
  };

  const [activeHeading, setActiveHeading] = useState('Getting Started');

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <div className='flex pt-12'>
      <Header headings={Object.keys(data)} activeHeading={activeHeading} handleHeadingClick={handleHeadingClick} />
      <Content content={data} activeHeading={activeHeading} />
    </div>
  );
}

export default HtmlDocs;