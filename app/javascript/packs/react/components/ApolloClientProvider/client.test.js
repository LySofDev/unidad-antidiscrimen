import client from './client'

test("It loads the client client", () => {
  expect(typeof client).toBe("object")
})

test("It provides the query method", () => {
  expect(typeof client.query).toBe("function")
})
