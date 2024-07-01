module.exports = (mongoose) => {
  var schema = mongoose.model(
    "user",
    mongoose.Schema({
      username: String,
      email: String,
      password: String,
    }),
    { timestamps: true },
  );

  schema.method("toJSON", function () {
    const { _v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("User", schema);
  return User;
};
