const User = {
  findOne: jest.fn((query, callback) => {
    if (query.username === "takenUsername") {
      callback(null, { username: "takenUsername" });
    } else if (query.email === "takenEmail@example.com") {
      callback(null, { email: "takenEmail@example.com" });
    } else if (
      query.username === "validUsername" &&
      query.email === "validEmail@example.com"
    ) {
      callback(null, null); // No duplicate username or email
    } else {
      callback(new Error("Unexpected query")); // Simulate error
    }
  }),
};

module.exports = { User, ROLES: [] };
