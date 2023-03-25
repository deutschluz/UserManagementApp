// Define a middleware function that handles 404 errors
function handle404Error(req, res, next) {
  res.status(404).render("404", {
    heading: "404 - Parewge Not Found",
  });
}

module.exports = handle404Error;
