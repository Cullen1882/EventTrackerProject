-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dreamdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dreamdb` ;

-- -----------------------------------------------------
-- Schema dreamdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dreamdb` DEFAULT CHARACTER SET utf8 ;
USE `dreamdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `profile_pic` VARCHAR(150) NULL,
  `role` VARCHAR(45) NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dream`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dream` ;

CREATE TABLE IF NOT EXISTS `dream` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `date` DATE NULL,
  `description` VARCHAR(1000) NOT NULL,
  `lucid` TINYINT(1) NULL,
  `time_of` TIME NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dream_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_dream_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS dreamuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'dreamuser'@'localhost' IDENTIFIED BY 'dreamuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'dreamuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `dreamdb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `profile_pic`, `role`, `active`) VALUES (1, 'Cullen', 'Rafferty', 'Cullen1882', 'Pass!', 'cullen1882@gmail.com', NULL, 'admin', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `profile_pic`, `role`, `active`) VALUES (2, 'Ron', 'Burgundy', 'Anchor95', 'Baxter!', 'ronb@example.com', NULL, 'user', 1);
INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `password`, `email`, `profile_pic`, `role`, `active`) VALUES (3, 'Steely', 'Dan', 'SDan', 'Password!', 'steely@example.com', NULL, 'user', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `dream`
-- -----------------------------------------------------
START TRANSACTION;
USE `dreamdb`;
INSERT INTO `dream` (`id`, `name`, `date`, `description`, `lucid`, `time_of`, `user_id`) VALUES (1, 'School Without Pants', '2022-11-01', 'Classroom full I have a presentation and I realize I forgot my clothes', 0, '05:45:00', 1);
INSERT INTO `dream` (`id`, `name`, `date`, `description`, `lucid`, `time_of`, `user_id`) VALUES (2, 'Getting Chased by Dog', '2022-11-01', 'A big dog is chasing me through the neighborhood', 0, '05:30:00', 2);
INSERT INTO `dream` (`id`, `name`, `date`, `description`, `lucid`, `time_of`, `user_id`) VALUES (3, 'Falling and Falling', '2022-11-02', 'I keep falling', 0, '06:00:00', 3);

COMMIT;

