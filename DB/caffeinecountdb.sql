-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema caffeinecountdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `caffeinecountdb` ;

-- -----------------------------------------------------
-- Schema caffeinecountdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `caffeinecountdb` DEFAULT CHARACTER SET utf8 ;
USE `caffeinecountdb` ;

-- -----------------------------------------------------
-- Table `drink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `drink` ;

CREATE TABLE IF NOT EXISTS `drink` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `caffeine` DOUBLE NULL,
  `size` DOUBLE NULL,
  `image_url` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `drink`
-- -----------------------------------------------------
START TRANSACTION;
USE `caffeinecountdb`;
INSERT INTO `drink` (`id`, `name`, `caffeine`, `size`, `image_url`) VALUES (1, 'Cold Brew', 360, 30, 'https://www.groundstobrew.com/wp-content/uploads/2022/10/strongest-starbucks-iced-coffee-1.png');
INSERT INTO `drink` (`id`, `name`, `caffeine`, `size`, `image_url`) VALUES (2, 'Black Coffee', 330, 16, 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_540,w_960/f_webp');
INSERT INTO `drink` (`id`, `name`, `caffeine`, `size`, `image_url`) VALUES (3, 'Espresso', 64, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/220px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg');
INSERT INTO `drink` (`id`, `name`, `caffeine`, `size`, `image_url`) VALUES (4, 'Celsius', 200, 12, 'https://i.webareacontrol.com/jpeg/fullimage/470-X-470/c/3/celsius-sparkling-arctic-vibe-1653727990033-P.webp');
INSERT INTO `drink` (`id`, `name`, `caffeine`, `size`, `image_url`) VALUES (5, 'Green Tea', 25, 8, 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/green-tea_400-237a32b.jpg?quality=90&webp=true&resize=300,272');

COMMIT;

