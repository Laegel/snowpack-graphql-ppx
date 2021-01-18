# snowpack-graphql-ppx
A tiny Snowpack plugin to support ReScript/ReasonML GraphQL PPX

As you can see in https://github.com/reasonml-community/graphql-ppx/issues/199, the PPX outputs CommonJS (`require`) instead of ES6 (`import`).
This little Snowpack plugin solves this issue by simply providing a helper `require` function and importing the appropriate module in each module using the PPX.