module.exports = function () {
  return {
    name: "snowpack-graphql-ppx",
    async transform({ contents, fileExt }) {
      if (
        fileExt === ".js" &&
        contents.indexOf('require("@apollo/client").gql') > -1
      ) {
        return `/*GraphQL PPX fix*/import * as apolloclient from "/_snowpack/pkg/@apollo/client.js";var require = (_) => apolloclient;
${contents}`;
      }
    },
  };
};

