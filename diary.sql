CREATE TABLE `diary` (
	`diary_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) UNSIGNED NOT NULL DEFAULT '1',
	`diary_title` VARCHAR(128) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`diary_content` VARCHAR(512) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	`diary_month` VARCHAR(50) NULL DEFAULT '1월' COLLATE 'utf8mb4_general_ci',
	`diary_day` VARCHAR(50) NULL DEFAULT '1일' COLLATE 'utf8mb4_general_ci',
	`diary_today` VARCHAR(50) NULL DEFAULT '월요일' COLLATE 'utf8mb4_general_ci',
	`diary_weather` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	`diary_theme` TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
	`diary_img` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`diary_time` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`diary_id`) USING BTREE,
	INDEX `fk_user_id` (`user_id`) USING BTREE,
	CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;