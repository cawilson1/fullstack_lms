import React from "react";

// ----TO DO----
// Skeleton:
// [ ] List of resource links
// [ ] List of code (<pre>....<code>)
// [ ] List of images / PDF (?) --> syllabus
//
// Comm w server:
// [ ] GET Resource/Links from Dynamo
// [ ] GET images/docs from S3

// API - call API, return [] to map thru, each call checks Dynamo (req field uuid?) and S3 for corresponding record (key by how we store),

const ResourceList = () => {
  return (
    <>
      <h2>List of ResourceList:</h2>
      <h3> Resource Links </h3>
      <ul>
        <li></li>
      </ul>
      <h3> Code Snippets </h3>
      <ul>
        <li></li>
      </ul>
      <h3> Documents/Images</h3>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default ResourceList;

// chk into: https://websitebeaver.com/escape-html-inside-code-or-pre-tag-to-entities-to-display-raw-code-with-prismjs

// {
//   /* <h3> Code Snippets </h3>
// <ul>
//   <li>
//     <figure>
//       <figcaption>Code Caption</figcaption>
//       <pre>
//         <code class="prettyprint lang-js">
//           function blitz()
//           const me = 1 return me + "hello"
//         </code>
//       </pre>
//     </figure>
//   </li>
// </ul> */
// }

{
  /* <figure>
<figcaption>Code Caption</figcaption>
<pre>
  <code>
    <p>{"function blitz(){return “fn body is visible”}"}</p>
  </code>
</pre>
</figure> */
}
