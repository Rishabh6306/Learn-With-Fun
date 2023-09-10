import React from 'react';
import { BsCaretLeft } from 'react-icons/bs';
import { useDocsState, useHtmlDocsFunctions } from '../utilsForDocs/docsUtils';
import Header from '../Header';
import Content from '../Content';

function CssDocs() {
  const data = {
    "Getting Started": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS (Cascading Style Sheets)</h1>

        <p className='my-3'>
          CSS (Cascading Style Sheets) is a fundamental part of web development, serving as a powerful language used to define and control the visual presentation of documents authored in HTML and other markup languages. It plays a pivotal role in transforming plain, unstyled web content into visually appealing and engaging web pages.
        </p>

        <p className='my-3'>
          CSS empowers web developers to style web pages with precision, enabling control over various design elements such as fonts, colors, spacing, layout, and animations. The term "cascading" in CSS signifies that when multiple styles are applied to an element, they are prioritized and applied in a specific order. This prioritization is defined by a hierarchy that considers inline styles, internal styles, and external stylesheets, ensuring a structured approach to styling web content.
        </p>

        <p className='my-5'>
          Types of CSS:
        </p>

        <p className='my-3'>
          <strong>1. Inline CSS:</strong> Inline CSS involves applying styles directly to individual HTML elements using the `style` attribute. For example:
          <br />
          <code>
            {'<p style="color: blue; font-size: 16px;">This is a blue text with a font size of 16px.</p>'}
          </code>
        </p>

        <p className='my-3'>
          <strong>2. Internal CSS: </strong> lInternal CSS is placed within a {'<style>'} tag in the {'<head>'} section of an HTML document. It applies styles to the entire page or specific elements. Example:
          <br />
          <code>
            {`
              <!DOCTYPE html>
              <html>
              <head>
                  <style>
                      p {
                          color: blue;
                          font-size: 16px;
                      }
                  </style>
              </head>
              <body>
                  <p>This is a blue text with a font size of 16px.</p>
              </body>
              </html>
            `}
          </code>
        </p>

        <p className='my-3'>
          <strong>3. External CSS: `</strong>` External CSS involves creating a separate .css file and linking it to the HTML document using the {`<link>`} tag. This method is widely used for larger projects and promotes maintainability. Example:
          <br />
          <code>
            {`
              <!DOCTYPE html>
              <html>
              <head>
                  <link rel="stylesheet" type="text/css" href="styles.css"/>
              </head>
              <body>
                  <p>This is a blue text with a font size of 16px.</p>
              </body>
              </html>
            `}
          </code>
        </p>

        <p className='my-3'>
          <strong>4. Applying CSS to HTML:</strong> To apply CSS to HTML, you can use various methods, as shown above. Typically, you define your styles in a separate CSS file and link it to your HTML file using the {`<link>`} tag. You can also use inline styles by adding a `style` attribute to HTML elements or use internal styles within a {'<style>'} tag in the {'<head>'} section of your HTML document.
        </p>

        <p className='my-3'>
          <strong>5. CSS Selectors:</strong> CSS allows you to target HTML elements using selectors. For example, to style all paragraphs, you can use the selector `p`. To target elements with a specific class, you can use `.classname`, and to target elements with a specific ID, you can use `#elementID`.
        </p>

        <p className='my-3'>
          <strong>6. Cascading Order:</strong> The "cascading" aspect of CSS refers to the order in which styles are applied. Inline styles have the highest specificity, followed by internal styles and then external stylesheets. Specificity, importance, and source order also affect the cascading order.
        </p>

        <p className='my-5'>
          In summary, CSS is an indispensable tool in web development. It empowers developers to define and refine the visual aspects of web content, ultimately enhancing the user experience. By mastering CSS, web developers can create responsive, visually appealing, and accessible websites that cater to a diverse range of user preferences and devices.
        </p>

      </div>
    ),
    "History of CSS": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>The Comprehensive History of CSS (Cascading Style Sheets)</h1>

        <p className='my-3'>
          CSS (Cascading Style Sheets) is a fundamental technology in web development that plays a pivotal role in defining the visual presentation of web documents. Its rich history is marked by significant milestones, innovations, and continuous evolution.
        </p>

        <p className='my-3'>
          **Early Origins (1990s):** CSS had its beginnings in the early days of the World Wide Web. It was first proposed by Håkon Wium Lie in October 1994 and developed in collaboration with Bert Bos. The primary motivation behind CSS was to separate document structure (HTML) from presentation. This separation aimed to enhance the accessibility, maintainability, and flexibility of web content.
        </p>

        <h2 className='text-3xl font-bold my-3'>Key Milestones:</h2>

        <p className='my-3'>
          **CSS1 (December 1996):** The initial CSS specification, known as CSS1, was released in December 1996. It provided fundamental styling capabilities, allowing developers to set properties like font colors, sizes, and margins. This marked the first step in the journey of CSS.
        </p>

        <p className='my-3'>
          **CSS2 (May 1998):** CSS2, introduced in May 1998, expanded on the foundation laid by CSS1. It brought advanced features like positioning, floating elements, and complex layout options. This version empowered developers to create more sophisticated designs and layouts.
        </p>

        <p className='my-3'>
          **CSS3 (Early 2000s):** CSS3, introduced in the early 2000s, represented a significant leap in web design capabilities. It introduced a plethora of features, including rounded corners, gradients, box shadows, animations, and transitions. These features allowed developers to create visually stunning and interactive web experiences.
        </p>

        <h2 className='text-3xl font-bold my-3'>Notable Modules and Innovations:</h2>

        <p className='my-3'>
          **Flexbox and Grid:** CSS3 introduced modules like Flexbox and Grid, which revolutionized layout design. Flexbox simplified the creation of flexible and responsive layouts, while Grid provided precise control over complex grid-based designs.
        </p>

        <p className='my-3'>
          **Custom Properties (CSS Variables):** CSS custom properties, also known as CSS variables, were introduced. They allowed for dynamic styling with reusable values, making CSS more maintainable and adaptable to changing design requirements.
        </p>

        <h2 className='text-3xl font-bold my-3'>Current Status:</h2>

        <p className='my-3'>
          CSS continued to evolve. While the term "CSS3" is commonly used to describe the latest developments, it's important to understand that CSS is a modular specification. Different parts of CSS may progress independently, and various working groups within the World Wide Web Consortium (W3C) focus on specific modules and features.
        </p>

        <p className='my-3'>
          The current version of CSS depends on the specific module or feature you're using. To stay up-to-date with the latest CSS developments and versions, it's advisable to refer to the official W3C documentation and resources. CSS remains an indispensable tool in modern web development, empowering developers to create responsive, visually appealing, and accessible websites that cater to diverse user preferences and devices.
        </p>
      </div>
    ),
    "CSS Layout": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Layout: Crafting Structured Web Designs</h1>

        <p className='my-3'>
          The layout is a crucial aspect of web design that involves arranging and positioning elements on a web page. CSS (Cascading Style Sheets) plays a central role in defining the layout of web content. Understanding CSS layout principles is essential for creating visually appealing and user-friendly websites.
        </p>

        <h2 className='text-3xl font-bold my-3'>Key Concepts:</h2>

        <p className='my-3'>
          **1. Box Model:** The CSS box model is foundational to layout. It defines how elements are rendered, including their content, padding, border, and margin. Understanding the box model is essential for precise element positioning.
        </p>

        <p className='my-3'>
          **2. Display Property:** The `display` property determines how elements behave in the layout. Common values include `block`, `inline`, `inline-block`, and more. Block-level elements stack vertically, while inline elements flow horizontally within text.
        </p>

        <p className='my-3'>
          **3. Positioning:** CSS offers various positioning options, such as `static`, `relative`, `absolute`, and `fixed`. These options control how elements are placed within their containing elements or the viewport.
        </p>

        <p className='my-3'>
          **4. Floats:** The `float` property allows elements to float to the left or right within their container. Floating elements are often used for creating multi-column layouts.
        </p>

        <p className='my-3'>
          **5. Flexbox:** Flexbox, or the Flexible Box Layout, is a powerful layout model that simplifies the creation of flexible and responsive designs. It offers precise control over element alignment and distribution within a container.
        </p>

        <p className='my-3'>
          **6. Grid Layout:** CSS Grid Layout is another advanced layout system that allows designers to create grid-based designs with rows and columns. It is particularly useful for complex layouts.
        </p>

        <p className='my-3'>
          **7. Responsive Design:** Responsive web design is a fundamental concept in modern web development. It involves designing layouts that adapt to different screen sizes and devices. Media queries and flexible units (like percentages) are often used for responsiveness.
        </p>

        <h2 className='text-3xl font-bold my-3'>Current Practices:</h2>

        <p className='my-3'>
          CSS layout practices continued to evolve. The industry embraced Flexbox and Grid Layout as powerful tools for creating responsive and complex designs. Developers increasingly adopted responsive design principles to ensure websites look and function well on various devices, from desktops to smartphones.
        </p>

        <p className='my-3'>
          CSS frameworks like Bootstrap and Foundation provided pre-designed layout components and responsive grids, simplifying the development process. CSS-in-JS solutions emerged, allowing developers to write CSS in JavaScript, providing modularity and dynamic styling.
        </p>

        <p className='my-3'>
          To stay current with the latest CSS layout techniques and best practices, web designers and developers should regularly explore industry trends and updates, attend web development conferences, and reference up-to-date resources.
        </p>

        <p className='my-3'>
          CSS layout remains a dynamic and essential part of web development, enabling designers to create visually appealing, accessible, and user-friendly websites.
        </p>
      </div>
    ),
    "CSS Selectors ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Selectors: Precision in Styling Web Elements</h1>

        <p className='my-3'>
          CSS (Cascading Style Sheets) selectors are the building blocks of web styling. They allow you to precisely target and style individual or groups of HTML elements. Mastering CSS selectors is essential for creating well-structured and visually appealing web designs. Let's explore various types of selectors and their applications in detail.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Type Selectors:</h2>

        <p className='my-3'>
          Type selectors target HTML elements based on their tag names. For example, to style all {`<p>`} elements on a page, you would use:
        </p>

        <pre className='my-3'>
          <code>
            {'p {'}<br />
            {'  /* Your styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Class Selectors:</h2>

        <p className='my-3'>
          Class selectors are prefixed with a dot (`.`) and target elements with a specific class attribute. They allow you to style elements with a shared class name. For example:
        </p>

        <pre className='my-3'>
          <code>
            {'.btn {'}<br />
            {'  /* Your button styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          To apply the `.btn` styles to an HTML element, you would add the `class` attribute with the value `btn` to that element.
        </p>

        <h2 className='text-3xl font-bold my-3'>3. ID Selectors:</h2>

        <p className='my-3'>
          ID selectors are prefixed with a hash (`#`) and target a single HTML element with a specific `id` attribute. IDs must be unique on a page. For example:
        </p>

        <pre className='my-3'>
          <code>
            {'#header {'}<br />
            {'  /* Your header styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          While IDs provide a high level of specificity, they should be used sparingly to maintain clean and maintainable code.
        </p>

        <h2 className='text-3xl font-bold my-3'>4. Descendant Selectors:</h2>

        <p className='my-3'>
          Descendant selectors target elements that are descendants of a specific element. They use a space to separate the parent and descendant elements. For example, to style all {`<a>`} elements within a {`<nav>`} element:
        </p>

        <pre className='my-3'>
          <code>
            {'nav a {'}<br />
            {'  /* Your navigation link styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Child Selectors:</h2>

        <p className='my-3'>
          Child selectors, denoted by the {`>`} symbol, target elements that are direct children of a specific parent element. They provide a more specific way to select elements. For example, to style only the direct {`<li>`} children of a {`<ul>`}:
        </p>

        <pre className='my-3'>
          <code>
            {'ul > li {'}<br />
            {'  /* Your list item styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>6. Pseudo-Classes and Pseudo-Elements:</h2>

        <p className='my-3'>
          Pseudo-classes and pseudo-elements allow you to target elements based on their state or position within the document. Examples include `:hover`, `:active`, `:first-child`, `::before`, and `::after`. For instance, to style links when a user hovers over them:
        </p>

        <pre className='my-3'>
          <code>
            {'a:hover {'}<br />
            {'  /* Your hover styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>7. Attribute Selectors:</h2>

        <p className='my-3'>
          Attribute selectors target elements with specific attributes and attribute values. For example, to style all input elements with a `type` attribute of "text":
        </p>

        <pre className='my-3'>
          <code>
            {'input[type="text"] {'}<br />
            {'  /* Your input styles here */'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          Attribute selectors are versatile and useful for styling elements based on their characteristics.
        </p>

        <h2 className='text-3xl font-bold my-3'>8. Combinators:</h2>

        <p className='my-3'>
          Combinators are used to combine multiple selectors to create complex selection rules. Common combinators include the space (descendant selector), {`>`} (child selector), and `+` (adjacent sibling selector). They provide powerful ways to target specific elements in a document's structure.
        </p>

        <pre className='my-3'>
          <code>
            {'header + section {'}<br />
            {'  /* Styles for a section immediately following a header */'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          Understanding and using CSS selectors effectively empowers web designers and developers to create beautifully styled web pages with precision. Selectors play a crucial role in achieving the desired layout and visual presentation.
        </p>

        <h2 className='text-3xl font-bold my-3'>Current CSS Practices:</h2>

        <p className='my-3'>
          CSS selectors continued to evolve with new features and capabilities. Selectors like `:not()`, `:nth-child()`, and `:nth-of-type()` became more prevalent, providing even greater control over element targeting.
        </p>

        <p className='my-3'>
          Additionally, the adoption of CSS preprocessors like Sass and LESS allowed for the use of variables, mixins, and nested selectors, making CSS code more maintainable and reusable.
        </p>

        <p className='my-3'>
          It's essential for web developers to stay updated with the latest CSS selector techniques and best practices to enhance their ability to create modern and responsive web designs.
        </p>

        <p className='my-3'>
          CSS selectors remain a fundamental aspect of web development, enabling designers and developers to create visually stunning and user-friendly websites.
        </p>

      </div>
    ),
    "CSS Display Property ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Display Property: Controlling Element Rendering</h1>

        <p className='my-3'>
          The CSS `display` property is a fundamental and versatile tool for controlling how HTML elements are rendered on a web page. It influences the layout, visibility, and behavior of elements, allowing web developers to achieve specific design goals. Let's dive into the various values of the `display` property and their practical applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Block-level Elements:</h2>

        <p className='my-3'>
          Block-level elements, such as {`<div>`}, {`<p>`}, {`<h1>`}, and {`<ul>`}, have a default `display` value of `block`. This means they generate a block-level box, occupying the full width of their parent container and stacking vertically. Block-level elements are often used for structural elements and content separation.
        </p>

        <pre className='my-3'>
          <code>
            {'div {'}<br />
            {'  display: block;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>2. Inline Elements:</h2>

        <p className='my-3'>
          Inline elements, such as {`<span>`}, {`<a>`}, {`<strong>`}, and {`<em>`} , have a default `display` value of `inline`. They flow within the text content, taking up only as much width as necessary. Inline elements do not create line breaks and are often used for text-level elements and links.
        </p>

        <pre className='my-3'>
          <code>
            {'a {'}<br />
            {'  display: inline;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Inline-Block Elements:</h2>

        <p className='my-3'>
          The `display` value `inline-block` combines characteristics of both block-level and inline elements. Elements with this value create a box that flows inline but can have block-level properties like setting a width and height or margins. It's often used for creating horizontal lists or navigation menus.
        </p>

        <pre className='my-3'>
          <code>
            {'li {'}<br />
            {'  display: inline-block;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. None:</h2>

        <p className='my-3'>
          Setting the `display` value to `none` hides the element from the layout entirely. It's as if the element doesn't exist in the document flow. This property is commonly used for creating toggling effects or hiding elements conditionally with JavaScript.
        </p>

        <pre className='my-3'>
          <code>
            {'#hidden-element {'}<br />
            {'  display: none;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Flex and Grid:</h2>

        <p className='my-3'>
          The `display` property can also be set to `flex` or `grid`, enabling powerful layout options through CSS Flexbox and Grid Layout. These values allow for precise control over the arrangement and alignment of child elements within their parent containers.
        </p>

        <pre className='my-3'>
          <code>
            {'#flex-container {'}<br />
            {'  display: flex;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>6. Inline Elements as Block:</h2>

        <p className='my-3'>
          The `display` property can be used to change inline elements to block-level elements or vice versa. For example, you can change an inline element like {`<span>`} to display as a block-level element.
        </p>

        <pre className='my-3'>
          <code>
            {'span-as-block {'}<br />
            {'  display: block;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>7. Table Elements:</h2>

        <p className='my-3'>
          HTML table elements {`<table>`}, {`<tr>`}, {`<td>`} , etc have their own unique display values. Understanding these values is important for fine-tuning table layouts and responsive designs.
        </p>

        <pre className='my-3'>
          <code>
            {'table {'}<br />
            {'  display: table;'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          The CSS display property is a powerful tool for web developers to control elements rendering, layout, and visibility. It's essential for creating responsive and well-structured web designs. By choosing the appropriate display value, you can achieve precise control over how elements are presented on your web page.
        </p>

        <h2 className='text-3xl font-bold my-3'>Current Practices:</h2>

        <p className='my-3'>
          CSS layout techniques continued to evolve. CSS Grid and Flexbox were widely adopted for creating responsive and complex layouts. Web developers were encouraged to use these modern layout methods to streamline their design workflows and improve user experiences.
        </p>

        <p className='my-3'>
          Additionally, CSS frameworks like Bootstrap and Tailwind CSS provided pre-designed components and utility classes that leveraged the `display` property and other CSS features, making it easier to create consistent and responsive web designs.
        </p>

        <p className='my-3'>
          To stay current with CSS best practices and the latest layout techniques, web developers should regularly explore updated documentation and resources.
        </p>

        <p className='my-3'>
          Please note that CSS practices may have evolved further since my last update, so it's advisable to refer to the latest CSS specifications and community resources for the most up-to-date information.
        </p>
      </div>
    ),
    "CSS Positioning": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Positioning: Controlling Element Placement</h1>

        <p className='my-3'>
          The CSS `position` property is a powerful tool for controlling the placement and positioning of HTML elements within their containing elements. It allows web developers to precisely control the layout and positioning of elements on a web page. Let's explore the various values of the `position` property and their practical applications.
        </p>

        <h2 className='text-3xl font-bold my-3'>1. Static (Default):</h2>

        <p className='my-3'>
          Elements with the `position: static;` property have the default behavior. They are positioned in the normal document flow, and their position is determined by the page's layout algorithm. This is the default value and doesn't require specifying the `position` property.
        </p>

        <h2 className='text-3xl font-bold my-3'>2. Relative:</h2>

        <p className='my-3'>
          Elements with `position: relative;` are positioned relative to their normal position in the document flow. You can use the `top`, `right`, `bottom`, and `left` properties to offset the element from its original position.
        </p>

        <pre className='my-3'>
          <code>
            {'#relative-box {'}<br />
            {'  position: relative;'}<br />
            {'  top: 20px;'}<br />
            {'  left: 10px;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>3. Absolute:</h2>

        <p className='my-3'>
          Elements with `position: absolute;` are positioned relative to their nearest positioned ancestor, which means you need to have a parent element with `position` set to `relative`, `absolute`, `fixed`, or `sticky`. Absolute positioning removes the element from the normal document flow, so other elements will not be affected by it.
        </p>

        <pre className='my-3'>
          <code>
            {'#absolute-box {'}<br />
            {'  position: absolute;'}<br />
            {'  top: 0;'}<br />
            {'  right: 0;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>4. Fixed:</h2>

        <p className='my-3'>
          Elements with `position: fixed;` are positioned relative to the viewport, meaning they remain in the same position even when the page is scrolled. This is commonly used for elements like navigation bars that should stay at the top of the page.
        </p>

        <pre className='my-3'>
          <code>
            {'#fixed-navbar {'}<br />
            {'  position: fixed;'}<br />
            {'  top: 0;'}<br />
            {'  left: 0;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>5. Sticky:</h2>

        <p className='my-3'>
          Elements with `position: sticky;` are positioned based on the user's scroll position. They behave like `relative` positioning until they reach a specified offset from the top (or bottom) of their containing element or the viewport. Sticky positioning is commonly used for headers or sidebars that should stick to the top or side of the screen as the user scrolls.
        </p>

        <pre className='my-3'>
          <code>
            {'#sticky-sidebar {'}<br />
            {'  position: sticky;'}<br />
            {'  top: 20px;'}<br />
            {'}'}
          </code>
        </pre>

        <h2 className='text-3xl font-bold my-3'>6. Z-Index:</h2>

        <p className='my-3'>
          The `z-index` property is used in combination with `position: relative`, `absolute`, `fixed`, or `sticky` to control the stacking order of elements. Elements with higher `z-index` values appear on top of elements with lower values.
        </p>

        <pre className='my-3'>
          <code>
            {'#higher-z-index {'}<br />
            {'  position: relative;'}<br />
            {'  z-index: 2;'}<br />
            {'}'}
          </code>
        </pre>

        <p className='my-3'>
          Understanding the `position` property and its values allows web developers to create complex and responsive layouts, ensuring that elements are placed exactly where they are intended to be on the web page.
        </p>

        <h2 className='text-3xl font-bold my-3'>Current Practices:</h2>

        <p className='my-3'>
          CSS positioning continued to be a crucial part of web design. Web developers often used CSS Flexbox and Grid Layout in combination with positioning to create sophisticated and responsive layouts. It's important to stay updated with the latest CSS positioning techniques and best practices to ensure your web designs are both visually appealing and user-friendly.
        </p>

        <p className='my-3'>
          Please note that CSS practices may have evolved further since my last update, so it's advisable to refer to the latest CSS specifications and community resources for the most up-to-date information.
        </p>
      </div>
    ),
    "CSS Flexbox ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>Introduction to CSS Flexbox: Building Flexible Layouts</h1>
    
        <p className='my-3'>
          CSS Flexbox, or Flexible Box Layout, is a powerful layout model in CSS that makes it easier to design complex and responsive web layouts. It provides a more efficient way to distribute space and align content in a container, even when the container's size is unknown or dynamic. Let's explore the key concepts and features of Flexbox.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Flex Containers and Items:</h2>
    
        <p className='my-3'>
          In Flexbox, you work with two main components: the <strong>flex container</strong> and the <strong>flex items</strong>. The container is a parent element that contains one or more child items. By applying Flexbox properties to the container, you control how its child items are laid out.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>2. Main and Cross Axes:</h2>
    
        <p className='my-3'>
          Flexbox introduces two axes: the <strong>main axis</strong> and the <strong>cross axis</strong>. The main axis is determined by the <code>flex-direction</code> property (e.g., row or column), while the cross axis is perpendicular to the main axis. Understanding these axes is essential for controlling item alignment and distribution.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>3. Flex Container Properties:</h2>
    
        <p className='my-3'>
          Flex containers have several properties to customize their behavior. Some important ones include <code>display: flex</code> to create a flex container, <code>flex-direction</code> to set the main axis direction, and <code>justify-content</code> and <code>align-items</code> to control alignment along the main and cross axes, respectively.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.flex-container {'}<br />
            {'  display: flex;'}<br />
            {'  flex-direction: row;'}<br />
            {'  justify-content: center;'}<br />
            {'  align-items: center;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. Flex Item Properties:</h2>
    
        <p className='my-3'>
          Flex items can also have specific properties. The <code>flex</code> property determines how much space an item takes relative to other items. You can use <code>order</code> to control the visual order of items and <code>align-self</code> to override the container's alignment for a specific item.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.flex-item {'}<br />
            {'  flex: 1;'}<br />
            {'  order: 2;'}<br />
            {'  align-self: flex-start;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>5. Responsive Design:</h2>
    
        <p className='my-3'>
          Flexbox is particularly useful for creating responsive designs. It allows elements to adapt to different screen sizes and orientations without complex media queries. By changing container and item properties, you can achieve fluid layouts that work well on various devices.
        </p>
    
        <p className='my-3'>
          CSS Flexbox is a valuable tool for web developers seeking to create flexible and efficient layouts. By understanding its concepts and properties, you can build responsive web designs that adapt gracefully to different screens and user interactions.
        </p>
    
      </div>
    ),   
    "CSS Grid Layout ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Grid Layout: Mastering Grid-Based Web Layouts</h1>
    
        <p className='my-3'>
          CSS Grid Layout is a versatile and powerful layout model in CSS that empowers web developers to create complex and responsive grid-based layouts. It offers precise control over the placement and alignment of content in both rows and columns, making it an essential tool for modern web design. Let's explore CSS Grid in greater depth.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Grid Containers and Items:</h2>
    
        <p className='my-3'>
          CSS Grid introduces two primary components: the <strong>grid container</strong> and the <strong>grid items</strong>. The grid container is a parent element that establishes the grid context, while grid items are its immediate children that participate in the grid layout.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>2. Defining the Grid:</h2>
    
        <p className='my-3'>
          To create a grid layout, set the container's <code>display</code> property to <code>grid</code>. You can precisely define the grid structure using properties like <code>grid-template-columns</code> and <code>grid-template-rows</code>, allowing you to specify the size of columns and rows.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.grid-container {'}<br />
            {'  display: grid;'}<br />
            {'  grid-template-columns: 1fr 2fr 1fr;'}<br />
            {'  grid-template-rows: auto auto;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Placing Grid Items:</h2>
    
        <p className='my-3'>
          Grid items are positioned within the grid using properties like <code>grid-column</code> and <code>grid-row</code>. These properties enable you to precisely control the placement of items in terms of columns and rows, creating intricate layouts.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.grid-item {'}<br />
            {'  grid-column: 2 / 4;'}<br />
            {'  grid-row: 1 / 2;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. Grid Gaps:</h2>
    
        <p className='my-3'>
          CSS Grid provides options for defining gaps between grid rows and columns using properties like <code>grid-gap</code>. These gaps create space between grid items, improving the overall readability and visual appeal of the layout.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.grid-container {'}<br />
            {'  display: grid;'}<br />
            {'  grid-template-columns: 1fr 1fr;'}<br />
            {'  grid-gap: 20px;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>5. Responsive Grids:</h2>
    
        <p className='my-3'>
          CSS Grid excels at creating responsive layouts. You can leverage media queries to adapt the grid structure, adjust the number of columns and rows, or even change the placement of items based on the screen size. This responsiveness ensures a seamless user experience across various devices.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>6. Grid Features:</h2>
    
        <p className='my-3'>
          CSS Grid offers advanced features like grid templates, auto-placement, and named grid areas, enabling you to build intricate and custom layouts. These features allow for greater design flexibility and creativity.
        </p>
    
        <p className='my-3'>
          CSS Grid Layout is a fundamental skill for web developers, offering the ability to create grid-based web layouts that are both visually appealing and responsive. By mastering the concepts and features of CSS Grid, you can elevate your web design capabilities and create stunning web interfaces.
        </p>
      </div>
    ),
    "CSS Transformations ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Transformations: Transcending Static Elements</h1>
    
        <p className='my-3'>
          CSS Transformations are a set of powerful properties that allow web developers to manipulate and animate elements in ways that transcend their static nature. With CSS Transformations, you can achieve stunning visual effects, such as scaling, rotating, skewing, and translating elements on the web page. Let's explore the world of CSS Transformations and their creative possibilities.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Basic Transformations:</h2>
    
        <p className='my-3'>
          CSS offers several fundamental transformations, including <strong>scale</strong> for resizing elements, <strong>rotate</strong> for spinning them around, <strong>skew</strong> for slanting, and <strong>translate</strong> for moving elements. These transformations can be applied individually or combined to create more complex effects.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transform-element {'}<br />
            {'  transform: scale(1.5) rotate(45deg) skew(20deg) translate(50px, 20px);'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. Transform Origin:</h2>
    
        <p className='my-3'>
          The <strong>transform-origin</strong> property allows you to define the point around which transformations occur. You can specify the origin as a percentage or pixel value, enabling precise control over the transformation pivot.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transform-element {'}<br />
            {'  transform-origin: top left;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Transitioning Transformations:</h2>
    
        <p className='my-3'>
          CSS Transitions and Animations can be used in conjunction with transformations to create smooth and interactive effects. By defining transition properties, you can control the speed and timing of transformations.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transform-element {'}<br />
            {'  transition: transform 0.3s ease-in-out;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. 3D Transformations:</h2>
    
        <p className='my-3'>
          CSS supports 3D transformations, allowing you to manipulate elements in three-dimensional space. You can use properties like <strong>rotateX</strong> and <strong>rotateY</strong> to achieve 3D effects and create immersive user experiences.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transform-element {'}<br />
            {'  transform: rotateX(45deg) rotateY(45deg);'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>5. Practical Applications:</h2>
    
        <p className='my-3'>
          CSS Transformations find applications in various web design aspects, including image galleries, interactive menus, and dynamic user interfaces. They offer a way to breathe life into static web elements and create engaging user interactions.
        </p>
    
        <p className='my-3'>
          CSS Transformations open up a world of creative possibilities in web design. By understanding and harnessing their potential, you can elevate your web development projects with captivating visual effects and dynamic user experiences.
        </p>
      </div>
    ),
    "CSS Transparency ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Transparency: Adding Depth to Web Elements</h1>
    
        <p className='my-3'>
          CSS Transparency, also known as opacity, is a fundamental property that allows web developers to control the visibility and visual depth of HTML elements. By adjusting the transparency of elements, you can create stunning visual effects, highlight content, and enhance user interfaces. Let's explore the world of CSS Transparency and its creative applications.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Basic Opacity:</h2>
    
        <p className='my-3'>
          CSS offers the <strong>opacity</strong> property, which ranges from 0 (completely transparent) to 1 (fully opaque). Applying opacity to an element affects both the element itself and its children, allowing you to create various levels of transparency.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transparent-element {'}<br />
            {'  opacity: 0.5; /* 50% transparency */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. RGBA Colors:</h2>
    
        <p className='my-3'>
          Another way to control transparency is by using RGBA (Red, Green, Blue, Alpha) colors. The alpha channel, represented by the "A" in RGBA, specifies the level of transparency. Values range from 0 (fully transparent) to 1 (fully opaque).
        </p>
    
        <pre className='my-3'>
          <code>
            {'.transparent-element {'}<br />
            {'  background-color: rgba(255, 0, 0, 0.5); /* Semi-transparent red */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Hover Effects:</h2>
    
        <p className='my-3'>
          CSS Transparency is often used for hover effects. By applying opacity changes on hover, you can create smooth transitions and highlight interactive elements when users interact with them.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.interactive-element {'}<br />
            {'  opacity: 1; /* Fully opaque by default */'}<br />
            {'  transition: opacity 0.3s ease-in-out;'}<br />
            {'}'}<br />
            {'.interactive-element:hover {'}<br />
            {'  opacity: 0.7; /* Semi-transparent on hover */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. Text and Image Effects:</h2>
    
        <p className='my-3'>
          CSS Transparency can be applied to text and images, allowing for creative effects like faded backgrounds or ghost buttons. It's a valuable tool for enhancing the visual appeal of web content.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>5. Layering Elements:</h2>
    
        <p className='my-3'>
          When working with layered elements, opacity can be used to create overlays or see-through effects. This technique is commonly employed in modern web design to add depth and sophistication.
        </p>
    
        <p className='my-3'>
          CSS Transparency adds depth and creativity to web elements, enabling you to create visually appealing and interactive user interfaces. By mastering opacity, you can enhance the user experience and bring your web designs to life.
        </p>
      </div>
    ),
    "CSS Variables(Custom Properties) ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Variables (Custom Properties): Dynamic Styling Made Easy</h1>
    
        <p className='my-3'>
          CSS Variables, also known as Custom Properties, are a powerful feature in CSS that allows you to define reusable values for styling properties. They bring the concept of variables to CSS, enabling dynamic and consistent styling across your web applications. Let's delve into CSS Variables and explore how they simplify the management of styles.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Defining CSS Variables:</h2>
    
        <p className='my-3'>
          CSS Variables are declared using the <code>--</code> prefix followed by a name. For example, you can create a variable for the primary color like this:
        </p>
    
        <pre className='my-3'>
          <code>
            {':root {'}<br />
            {'  --primary-color: #007bff;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. Using CSS Variables:</h2>
    
        <p className='my-3'>
          To use a CSS Variable, you reference it with the <code>var()</code> function in your CSS declarations. This makes it easy to maintain consistent styles throughout your project.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.button {'}<br />
            {'  background-color: var(--primary-color);'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Dynamic Styling:</h2>
    
        <p className='my-3'>
          CSS Variables can be changed dynamically using JavaScript, making it possible to create themes, respond to user interactions, or adapt styles based on different conditions without modifying your CSS files.
        </p>
    
        <pre className='my-3'>
          <code>
            {`
              const root = document.documentElement;
              root.style.setProperty('--primary-color', 'red');
            `}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. Browser Support:</h2>
    
        <p className='my-3'>
          CSS Variables are supported in modern browsers, making them a reliable tool for modern web development. They enhance maintainability and allow for more dynamic and responsive designs.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>5. Use Cases:</h2>
    
        <p className='my-3'>
          CSS Variables find applications in theming, responsive design, and complex layouts. They are particularly useful for managing colors, typography, spacing, and other design-related properties.
        </p>
    
        <p className='my-3'>
          CSS Variables (Custom Properties) simplify styling and maintenance, offering a way to create dynamic and consistent styles in your web projects. By incorporating them into your CSS workflow, you can streamline styling and adapt to changing design requirements effortlessly.
        </p>
      </div>
    ),
    "CSS Pseudo-Elements ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Pseudo-Elements: Enhancing Selectors and Styles</h1>
    
        <p className='my-3'>
          CSS Pseudo-Elements are a powerful feature that extends the capabilities of selectors, allowing you to style specific parts of an HTML element. They enable the creation of dynamic and interactive user interfaces by targeting elements that don't exist in the HTML structure. Let's explore the world of CSS Pseudo-Elements and their creative applications.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. ::before and ::after</h2>
    
        <p className='my-3'>
          Two commonly used Pseudo-Elements are <code>::before</code> and <code>::after</code>. They create virtual elements before and after the content of an HTML element, making it possible to insert decorative elements or additional content dynamically.
        </p>
    
        <pre className='my-3'>
          <code>
            {'.quote::before {'}<br />
            {'  content: "\\201C"; /* Left double quotation mark */'}<br />
            {'}'}<br />
            {'.quote::after {'}<br />
            {'  content: "\\201D"; /* Right double quotation mark */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. Use Cases</h2>
    
        <p className='my-3'>
          CSS Pseudo-Elements are incredibly versatile. They find applications in creating custom bullets for lists, adding icons or decorative elements, generating tooltips, and styling form input placeholders, among many other uses.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>3. Dynamic Content</h2>
    
        <p className='my-3'>
          Pseudo-Elements can be used with CSS animations and transitions to create dynamic and interactive content. This allows you to add subtle animations, hover effects, or transitions to elements without adding extra HTML markup.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>4. Selective Styling</h2>
    
        <p className='my-3'>
          Pseudo-Elements enable selective styling of elements based on their state. For example, you can style links differently when they are visited or apply specific styles to the first letter or line of a paragraph.
        </p>
    
        <p className='my-3'>
          CSS Pseudo-Elements open up a world of possibilities for enhancing the appearance and interactivity of web elements. By mastering these tools, web developers can create visually appealing and engaging user interfaces that captivate users and improve the overall user experience.
        </p>
      </div>
    ),
    "CSS Pseudo-classes ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Pseudo-classes: Styling Interactive Web Elements</h1>
    
        <p className='my-3'>
          CSS Pseudo-classes are selectors that allow you to apply styles to specific states or interactions of HTML elements. They play a crucial role in enhancing user experience by providing visual feedback and interactivity. Let's explore the world of CSS Pseudo-classes and learn how to style interactive web elements effectively.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Hover Effect</h2>
    
        <p className='my-3'>
          One of the most common uses of Pseudo-classes is to apply styles when a user hovers over an element. This creates interactive and responsive designs, making your website more engaging.
        </p>
    
        <pre className='my-3'>
          <code>
            {'a:hover {'}<br />
            {'  /* Styles for when the mouse hovers over a link */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. Focus and Active States</h2>
    
        <p className='my-3'>
          Pseudo-classes like <code>:focus</code> and <code>:active</code> are used to style elements when they are clicked or in focus. This is crucial for styling form elements and interactive components.
        </p>
    
        <pre className='my-3'>
          <code>
            {'input:focus {'}<br />
            {'  /* Styles for focused input fields */'}<br />
            {'}'}<br />
            {'button:active {'}<br />
            {'  /* Styles for active (clicked) buttons */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. First and Last Child</h2>
    
        <p className='my-3'>
          Pseudo-classes like <code>:first-child</code> and <code>:last-child</code> allow you to target and style the first and last child elements within a parent container. This is useful for creating unique styles for list items and other structured content.
        </p>
    
        <pre className='my-3'>
          <code>
            {'ul li:first-child {'}<br />
            {'  /* Styles for the first list item */'}<br />
            {'}'}<br />
            {'ul li:last-child {'}<br />
            {'  /* Styles for the last list item */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. nth-child</h2>
    
        <p className='my-3'>
          The <code>:nth-child()</code> Pseudo-class allows you to select and style elements based on their position within a parent container. It provides fine-grained control over styling multiple elements.
        </p>
    
        <pre className='my-3'>
          <code>
            {'ul li:nth-child(odd) {'}<br />
            {'  /* Styles for odd-numbered list items */'}<br />
            {'}'}<br />
            {'ul li:nth-child(even) {'}<br />
            {'  /* Styles for even-numbered list items */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>5. Targeting Unvisited Links</h2>
    
        <p className='my-3'>
          The <code>:link</code> Pseudo-class allows you to style unvisited links differently from visited links, helping users navigate your website effectively.
        </p>
    
        <pre className='my-3'>
          <code>
            {':link {'}<br />
            {'  /* Styles for unvisited links */'}<br />
            {'}'}<br />
            {':visited {'}<br />
            {'  /* Styles for visited links */'}<br />
            {'}'}
          </code>
        </pre>
    
        <p className='my-3'>
          CSS Pseudo-classes are essential for creating dynamic and interactive web designs. By understanding and leveraging these selectors, web developers can enhance user experience and engagement by providing responsive and visually appealing interfaces.
        </p>
      </div>
    ),
    "CSS Media Queries: Responsive Web Design Made Easy": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Media Queries: Responsive Web Design Made Easy</h1>
    
        <p className='my-3'>
          CSS Media Queries are a fundamental tool in modern web development, empowering you to create responsive and adaptable web designs effortlessly. These queries allow you to tailor your website's layout and styling based on various conditions, such as screen size, orientation, or device type. The result is an optimal user experience across a wide range of devices, from desktop computers with large screens to mobile phones with smaller displays. Let's delve into the world of CSS Media Queries and explore how they simplify the creation of responsive and flexible web designs.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. Introduction to Media Queries</h2>
    
        <p className='my-3'>
          At its core, a Media Query is a CSS rule that selectively applies styles to HTML elements based on specific conditions. These conditions are primarily related to the characteristics of the device or screen where the web content is displayed. For instance, you can use a Media Query to define different styles for screens with a maximum width of 768 pixels. This means that when a user accesses your website on a device with a smaller screen, the layout and styling will adjust automatically to ensure readability and accessibility.
        </p>
    
        <pre className='my-3'>
          <code>
            {'@media screen and (max-width: 768px) {'}<br />
            {'  /* Styles for screens with a maximum width of 768px */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. Creating Responsive Layouts</h2>
    
        <p className='my-3'>
          Media Queries are frequently employed to craft responsive layouts. By utilizing Media Queries, you can define different layout structures, adjust font sizes, and fine-tune spacing for varying screen sizes. This ensures that your website's content remains easily readable and accessible, regardless of whether it's viewed on a large desktop monitor or a compact smartphone screen.
        </p>
    
        <pre className='my-3'>
          <code>
            {'/* Adjust layout for small screens */'}<br />
            {'@media screen and (max-width: 768px) {'}<br />
            {'  /* Modify layout styles here */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Device Orientation</h2>
    
        <p className='my-3'>
          Media Queries can also be tailored to target device orientation. This means that you can adapt your website's styles when a user switches their device between portrait and landscape modes. This is particularly valuable for optimizing how content is presented on mobile devices, ensuring that your website looks great in both orientations.
        </p>
    
        <pre className='my-3'>
          <code>
            {'/* Adjust styles for landscape orientation */'}<br />
            {'@media screen and (orientation: landscape) {'}<br />
            {'  /* Modify styles for landscape orientation here */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>4. High-Resolution Displays</h2>
    
        <p className='my-3'>
          Media Queries can even target high-resolution displays, such as Retina displays found in many modern devices. By doing so, you can deliver higher-quality images and graphics to users with such devices, enhancing the visual experience without compromising performance on standard displays.
        </p>
    
        <pre className='my-3'>
          <code>
            {'/* Deliver high-resolution images for Retina displays */'}<br />
            {'@media screen and (-webkit-min-device-pixel-ratio: 2) {'}<br />
            {'  /* Load high-resolution images here */'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>5. Testing and Debugging</h2>
    
        <p className='my-3'>
          To ensure that your Media Queries function as intended, thorough testing on various devices and screen sizes is essential. Modern web development tools and browser developer tools provide features for inspecting and debugging responsive designs, helping you fine-tune your styles to perfection.
        </p>
    
        <p className='my-3'>
          In summary, CSS Media Queries are a foundational component of responsive web design. They empower web developers to create user-friendly, adaptable websites that cater to the diverse array of devices and screen sizes used by today's audiences. With Media Queries, you can seamlessly optimize your web content for an exceptional user experience across the digital landscape.
        </p>
      </div>
    ),
    "CSS Keyframes and Transitions": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>CSS Keyframes and Transitions: Adding Motion to Web Design</h1>
    
        <p className='my-3'>
          CSS Keyframes and Transitions are powerful techniques that enable you to add dynamic motion and interactivity to your web designs. They allow you to create animations and smooth transitions, enhancing the user experience and making your website more engaging. Let's explore how CSS Keyframes and Transitions work and how you can use them to bring life to your web projects.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>1. CSS Keyframes Animations</h2>
    
        <p className='my-3'>
          CSS Keyframes provide a way to define complex animations by specifying a series of keyframes at various points in time. These keyframes define the animation's properties at different stages, and the browser interpolates the values in between to create a smooth animation effect. Keyframes animations are ideal for adding eye-catching effects to elements, such as fading, sliding, or scaling.
        </p>
    
        <pre className='my-3'>
          <code>
            {'@keyframes fadeIn {'}<br />
            {'  0% { opacity: 0; }'}<br />
            {'  100% { opacity: 1; }'}<br />
            {'}'}<br />
            {'/* Apply the animation to an element */'}<br />
            {'element {'}<br />
            {'  animation: fadeIn 2s ease-in-out;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>2. CSS Transitions</h2>
    
        <p className='my-3'>
          CSS Transitions provide a simpler way to add animation effects when an element changes from one state to another. You can specify which properties should transition and the duration of the transition. Transitions are perfect for creating smooth hover effects or gradual changes in element styles.
        </p>
    
        <pre className='my-3'>
          <code>
            {'/* Define the transition */'}<br />
            {'element {'}<br />
            {'  transition: background-color 0.3s ease-in-out;'}<br />
            {'}'}
            <br />
            {'/* Apply the change to trigger the transition */'}<br />
            {'element:hover {'}<br />
            {'  background-color: #ff0000;'}<br />
            {'}'}
          </code>
        </pre>
    
        <h2 className='text-3xl font-bold my-3'>3. Combining Keyframes and Transitions</h2>
    
        <p className='my-3'>
          You can combine CSS Keyframes and Transitions to create sophisticated animations with precise control. For example, you can use keyframes to define complex animations and transitions to trigger them when specific events occur, providing a seamless user experience.
        </p>
    
        <pre className='my-3'>
          <code>
            {'/* Define the animation */'}<br />
            {'@keyframes slideIn {'}<br />
            {'  0% { transform: translateX(-100%); }'}<br />
            {'  100% { transform: translateX(0); }'}<br />
            {'}'}<br />
            {'/* Apply the animation on click with a transition */'}<br />
            {'button {'}<br />
            {'  animation: slideIn 1s ease-in-out;'}<br />
            {'  transition: transform 0.3s ease-in-out;'}<br />
            {'}'}
            <br />
            {'/* Trigger the animation on button click */'}<br />
            {'button:hover {'}<br />
            {'  transform: translateX(20px);'}<br />
            {'}'}
          </code>
        </pre>
    
        <p className='my-3'>
          CSS Keyframes and Transitions are valuable tools for adding interactivity and animation to your web designs. With a combination of keyframes and transitions, you can create captivating and responsive user interfaces that leave a lasting impression.
        </p>
      </div>
    ),
    "More Info ": (
      <div className='py-3'>
        <h1 className='text-4xl font-bold'>More Info on CSS: Deepening Your Understanding</h1>
    
        <h2 className='text-3xl font-bold my-3'>1. CSS Preprocessors</h2>
    
        <p className='my-3'>
          CSS preprocessors, like Sass and Less, are extensions of CSS that introduce advanced features and make your stylesheets more maintainable. They offer variables, nesting, mixins, and functions, allowing for more efficient and organized CSS authoring. Learning and implementing a CSS preprocessor can significantly streamline your web development workflow.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>2. CSS Frameworks</h2>
    
        <p className='my-3'>
          CSS frameworks, such as Bootstrap and Foundation, provide pre-designed UI components and layout structures to expedite web development. These frameworks come with a set of predefined CSS styles and JavaScript components, making it easier to create responsive and visually appealing websites. Familiarizing yourself with popular CSS frameworks can save you time and effort on projects.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>3. CSS Methodologies</h2>
    
        <p className='my-3'>
          CSS methodologies, like BEM (Block Element Modifier) and SMACSS (Scalable and Modular Architecture for CSS), offer guidelines and best practices for writing clean, maintainable, and scalable CSS code. These methodologies advocate for a structured approach to CSS organization, making it easier to collaborate on projects and avoid style conflicts.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>4. CSS-in-JS</h2>
    
        <p className='my-3'>
          CSS-in-JS is a modern approach to styling in which CSS is written using JavaScript. Libraries like styled-components and Emotion enable you to define component-specific styles directly within your JavaScript code. CSS-in-JS enhances component encapsulation and allows for dynamic styles based on props and states.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>5. CSS Grid and Flexbox</h2>
    
        <p className='my-3'>
          CSS Grid and Flexbox are powerful layout tools that provide precise control over the positioning and alignment of elements in web layouts. Understanding the capabilities and differences between these layout systems is crucial for creating responsive and complex web designs efficiently.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>6. Browser Compatibility</h2>
    
        <p className='my-3'>
          Ensuring that your CSS works consistently across different web browsers is essential. Learn about browser-specific CSS hacks, vendor prefixes, and testing techniques to ensure your styles render correctly on various platforms.
        </p>
    
        <h2 className='text-3xl font-bold my-3'>7. Additional Resources</h2>
    
        <p className='my-3'>
          For more in-depth information on CSS and related topics, you can explore the <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noopener noreferrer' className='text-orange-400 hover:underline'>Mozilla Developer Network (MDN) CSS documentation</a>. It provides comprehensive and up-to-date resources for learning and mastering CSS.
        </p>
    
        <p className='my-3'>
          Additionally, it's worth noting that Tailwind CSS has gained significant popularity in recent years. Tailwind CSS is a utility-first CSS framework that streamlines the process of building modern web interfaces. You can learn more about Tailwind CSS on their official <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className='text-orange-400 hover:underline'>website</a>.
        </p>
    
        <p className='my-3'>
          Exploring these resources will help you deepen your understanding of CSS and become a more proficient web developer.
        </p>
      </div>
    ),
  };

  const { activeHeading, showHeader, setActiveHeading, setShowHeader } = useDocsState();
  const { handleHeadingClick, toggleHeader } = useHtmlDocsFunctions(data, showHeader, setShowHeader, activeHeading, setActiveHeading);

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

export default CssDocs;