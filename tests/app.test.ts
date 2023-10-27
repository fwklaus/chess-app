const { failure } = require('../dist/app.js');

test("first test", () => {
  expect(failure).toBe(undefined);
});
