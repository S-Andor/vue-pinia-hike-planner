const verifySignUp = require("../../middlewares/verifySignUp");
const { User } = require("../mocks/models/user.mock");

describe("verifySignUp middleware", () => {
  beforeEach(() => {
    User.findOne.mockClear();
  });
});
