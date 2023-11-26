CREATE TABLE `user` (
	`user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_webid` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`user_webpw` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`user_nickname` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`user_email` VARCHAR(128) NOT NULL COLLATE 'utf8mb4_general_ci',
	`user_birthday` DATE NOT NULL,
	PRIMARY KEY (`user_id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;