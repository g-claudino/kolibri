exports.path ="/register/:name";

// The following is used when doing static builds
// to generate all pages for all enumerated params
exports.params = [{ name: "success" }];

// You can also export a custom handler
// that can do stuff before rendering the template
/*
const template = require('./index.marko');
exports.handler = (input, out) => {
  let name = input.params.name;

  // delegate rendering to the template
  template.render(input, out);

  // Or don't render the template and send other content:
  // out.end('<html>...</html>')
};
*/
