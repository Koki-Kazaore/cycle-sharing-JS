var connection = require("../config/db").connection;

exports.book = async function(req, res) {
  var bookingData = req.body;
  console.log(bookingData);

  await connection.query(
    "UPDATE cycles set booking_status =?, booked_by = ?, booking_time = ?  WHERE cycle_id = ?",
    [1, bookingData.consumerId, new Date(), bookingData.IdOfOrder],
    function(err, result) {
      if(err) return res.send(err);
      console.log("Record Updated!!");
      console.log(result);
      // If a bike can be booked without error, transition to the homepage
      res.redirect("/");
      // res.send(result);
    }
  );
};
