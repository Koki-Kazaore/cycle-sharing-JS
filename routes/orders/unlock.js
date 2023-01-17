// to do -- write to unlock or lock code

var connection = require("../../config/db").connection;

exports.unlock = function(req, res) {
  const { cycleId } = req.params.cycle_id;
  console.log("req params cycle_id : " + req.params.cycle_id);

  connection.query("SELECT * FROM cycles where cycle_id=?", [cycleId], function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("results : " + results);
    res.render("unlock.ejs");
  });
};
