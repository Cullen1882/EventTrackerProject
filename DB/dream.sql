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
-- Table `dream`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dream` ;

CREATE TABLE IF NOT EXISTS `dream` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
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
-- Data for table `dream`
-- -----------------------------------------------------
START TRANSACTION;
USE `dreamdb`;
INSERT INTO `dream` (`id`, `name`) VALUES (1, 'School Without Pants');
INSERT INTO `dream` (`id`, `name`) VALUES (2, 'Getting Chased by Dog');

COMMIT;

