//view users
exports.view = (req, res) => {
  const data = { pageTitle: "User Management App", heading: "Welcome!" };
  res.render("home", data);
};
