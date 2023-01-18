// to do -- write to unlock or lock code

var connection = require("../../config/db").connection;

exports.unlock = async function(req, res) {
  const { userId } = req.session;
  const cycleId = req.params.cycle_id;
  console.log("req params cycle_id : " + req.params.cycle_id);
  console.log("const { cycleId } : " + cycleId);

  await connection.query("SELECT * FROM users where id=?",[userId],
  function(
    error,
    results,
    fields
  ) {
    connection.query(
      "SELECT * FROM cycles WHERE cycle_id=?",
      [cycleId],function(
      error,
      results2,
      fields
    ) {
      if (error) throw error;
      console.log("results2 : " + results2);
      res.render("unlock.ejs", {
        user: results,
        cycle: results2
      });
    });
  });
};
