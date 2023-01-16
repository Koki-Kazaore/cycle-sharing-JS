var connection = require("../../config/db").connection;

exports.previous = async function(req, res) {
  const { userId } = req.session;

  await connection.query("SELECT * FROM users where id=?", [userId], function(
    error,
    results,
    fields
  ) {
    connection.query(
      "SELECT * FROM cycles where booked_by = ? AND to_time < NOW()",
      [userId],
      function(error, result2, fields) {
        if (error) throw error;
        res.render("previous.ejs", {
          user: results,
          data: result2
        });
      }
    );
  });
  // res.send("previous orders goes here");
};
