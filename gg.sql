/*Copy these lines and paste if you want to manually add to Databases */

CREATE TABLE users (
     id MEDIUMINT NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     user_email VARCHAR(320) NOT NULL,
     password VARCHAR(255) NOT NULL,
     address VARCHAR(255),
     contact_no VARCHAR(20),
     created DATE,
     PRIMARY KEY (id)
);

-- MySQLのDATETIME値は'1000-01-01 00:00:00'から'9999-12-31 23:59:59'の範囲でしかサポートされていない
-- MySQL DATETIME values are only supported in the range '1000-01-01 00:00:00' to '9999-12-31 23:59:59'
CREATE TABLE cycles (
     cycle_id MEDIUMINT NOT NULL AUTO_INCREMENT,
     cycle_name CHAR(30) NOT NULL,
     from_user VARCHAR(320) NOT NULL,
     pickup_address VARCHAR(255) NOT NULL,
     from_time datetime NOT NULL default '1000-01-01 00:00:00',
     to_time datetime NOT NULL default '1000-01-01 00:00:00',
     cycle_image_link TEXT NOT NULL,
     from_user_name CHAR(30) NOT NULL,
     booking_status TINYINT(1) default 0,
     booked_by MEDIUMINT,
     booking_time DATE,
     PRIMARY KEY (cycle_id)
);