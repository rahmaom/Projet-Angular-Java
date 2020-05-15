-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 14, 2020 at 03:53 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_gfn44sntic2k93auag97juyij` (`username`),
  KEY `FK_7umlrlm5h3qupdivkhe5gj707` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `created_at`, `password`, `updated_at`, `username`, `role_id`) VALUES
(1, '2020-02-04 00:00:00', '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', '2020-03-19 00:00:00', 'hamza', 2),
(2, '2020-03-25 00:00:00', '$2a$10$BW5GuNJfetN6kQxsChHrseLQUvKHH6LW3nd69V0HaFBbCOQk3yuUC', '2020-03-19 00:00:00', 'tadamon', 1);

-- --------------------------------------------------------

--
-- Table structure for table `athletes`
--

DROP TABLE IF EXISTS `athletes`;
CREATE TABLE IF NOT EXISTS `athletes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` int(11) NOT NULL,
  `date_de_naissance` date DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prenom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_sport` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKk9gsdi0u9wxeqhm53eeyc4l9o` (`id_sport`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `athletes`
--

INSERT INTO `athletes` (`id`, `age`, `date_de_naissance`, `image`, `nom`, `prenom`, `id_sport`) VALUES
(1, 23, '2020-05-05', 'czx', 'hamza', 'hamza', 1),
(2, 23, '2020-05-05', 'czx', 'hermach', 'hamza', 1),
(3, 23, '1996-05-05', 'czx', 'hamza', 'hamza', 1),
(4, 23, '1996-05-05', 'czx', 'hermach', 'hamza', 1),
(5, 22, '2020-05-30', 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg', 'zaka', 'gggg', 1),
(6, 23, '2020-05-23', 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.42.jpeg', 'rahma', 'aze', 1),
(7, 23, '2020-05-28', 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg', 'alae', 'loutfy', 1),
(8, 23, '2020-05-28', 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg', 'alae', 'loutfy', 1);

-- --------------------------------------------------------

--
-- Table structure for table `competitions`
--

DROP TABLE IF EXISTS `competitions`;
CREATE TABLE IF NOT EXISTS `competitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lieu_de_competition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `competition_de_federation`
--

DROP TABLE IF EXISTS `competition_de_federation`;
CREATE TABLE IF NOT EXISTS `competition_de_federation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_competition` int(11) DEFAULT NULL,
  `id_federation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlf4ilhkm7i1gewf8s0u3h6f8q` (`id_competition`),
  KEY `FK2if5qpc9l9h5ls3jq45saqr4w` (`id_federation`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `criteres`
--

DROP TABLE IF EXISTS `criteres`;
CREATE TABLE IF NOT EXISTS `criteres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_de_mesure` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_sport` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf09icxfmb6yrd5gmyqs0u6meu` (`id_sport`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `criterr_valeurs`
--

DROP TABLE IF EXISTS `criterr_valeurs`;
CREATE TABLE IF NOT EXISTS `criterr_valeurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valeur` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_critere` int(11) DEFAULT NULL,
  `id_journal_perform` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2pj0xde3dav2ymge22fl5x4e6` (`id_critere`),
  KEY `FKpivf7skesg4ygt93egs14raht` (`id_journal_perform`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `entities_sportifs`
--

DROP TABLE IF EXISTS `entities_sportifs`;
CREATE TABLE IF NOT EXISTS `entities_sportifs` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role_id` bigint(20) NOT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_federation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_biro5m2nicb4l2of7i9vxok0i` (`username`),
  KEY `FKrpoo5094d7jdfrv9qc2in1hgj` (`id_federation`),
  KEY `FK_lp9tjmns8dabms47kl23lpvfq` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entities_sportifs`
--

INSERT INTO `entities_sportifs` (`id`, `created_at`, `password`, `updated_at`, `username`, `role_id`, `nom`, `type`, `id_federation`) VALUES
(3, '2020-03-25 00:00:00', '$2a$10$BW5GuNJfetN6kQxsChHrseLQUvKHH6LW3nd69V0HaFBbCOQk3yuUC', '2020-05-15 00:00:00', 'ocy', 1, 'ocy', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `epreuve`
--

DROP TABLE IF EXISTS `epreuve`;
CREATE TABLE IF NOT EXISTS `epreuve` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `epreuve_competition`
--

DROP TABLE IF EXISTS `epreuve_competition`;
CREATE TABLE IF NOT EXISTS `epreuve_competition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_competition` int(11) DEFAULT NULL,
  `id_epreuve` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt01xuo8bevsvo7w1hoel4l9jo` (`id_competition`),
  KEY `FKijjyi7gvh3bhgn6736dedlu69` (`id_epreuve`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `federations`
--

DROP TABLE IF EXISTS `federations`;
CREATE TABLE IF NOT EXISTS `federations` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role_id` bigint(20) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `president` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_8ooacuyx1mfsms08b7g27738i` (`username`),
  KEY `FK_6vuhgh16vdsukjxnakral3quu` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `historique_entite`
--

DROP TABLE IF EXISTS `historique_entite`;
CREATE TABLE IF NOT EXISTS `historique_entite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_de_debut` date DEFAULT NULL,
  `date_de_fin` date DEFAULT NULL,
  `id_athlete` int(11) DEFAULT NULL,
  `id_entite_sportif` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdp5o16fxfc0k2glj7axd1ki8i` (`id_athlete`),
  KEY `FK83deevaurii9k2y7ox69rrymq` (`id_entite_sportif`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `journal_performs`
--

DROP TABLE IF EXISTS `journal_performs`;
CREATE TABLE IF NOT EXISTS `journal_performs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_competition` date DEFAULT NULL,
  `id_athlete` int(11) DEFAULT NULL,
  `id_coompetition` int(11) DEFAULT NULL,
  `id_epreuv` int(11) DEFAULT NULL,
  `id_tranch_age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5bpdu6j90xn01p78ooreu3e55` (`id_athlete`),
  KEY `FK2fs60ii9q2jvjxhdnt7t4xpjb` (`id_coompetition`),
  KEY `FK91o12uexe8x7b4yenr41nuk0f` (`id_epreuv`),
  KEY `FK4vtu6xjkr8psd3i0t46hcw586` (`id_tranch_age`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `journal_sante`
--

DROP TABLE IF EXISTS `journal_sante`;
CREATE TABLE IF NOT EXISTS `journal_sante` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_de_mesure` date DEFAULT NULL,
  `poid` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `taille` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_athlete` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtlj1isvpbie8t1glu2kyhg7ju` (`id_athlete`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `label`) VALUES
(1, 'Admin\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
CREATE TABLE IF NOT EXISTS `sports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `id_federation` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKie27j5x51uvt4vt00aq57r1du` (`id_entity`),
  KEY `FKqa0dy8dsdbl91djluacawto2t` (`id_federation`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `nom`, `id_entity`, `id_federation`, `image`) VALUES
(1, 'footBall', 3, NULL, NULL),
(2, 'BasketBall', 2, NULL, NULL),
(3, 'VolyBall', 2, NULL, NULL),
(4, 'VolyBall', 1, NULL, NULL),
(5, 'HondBall', 3, NULL, NULL),
(6, 'siba7aInat', 3, NULL, NULL),
(10, 'volyBall', 3, NULL, 'czx'),
(11, 'volyBall', 3, NULL, 'czx'),
(12, 'kakaka', 3, NULL, 'czx'),
(13, 'zerty', 3, NULL, 'C:\\fakepath\\10321202_700184440043591_4822034416933248331_o.jpg'),
(14, 'kora', 3, NULL, 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg'),
(15, 'hania hania', 3, NULL, 'C:\\fakepath\\uml_ecole.jpg'),
(16, 'hania hania', 3, NULL, 'C:\\fakepath\\uml_ecole.jpg'),
(17, 'hania hania', 3, NULL, 'C:\\fakepath\\uml_ecole.jpg'),
(18, 'hania hania', 3, NULL, 'C:\\fakepath\\uml_ecole.jpg'),
(19, 'kora', 3, NULL, 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg'),
(20, 'kora', 3, NULL, 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg'),
(21, 'kora', 3, NULL, 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg'),
(22, 'kora', 3, NULL, 'C:\\fakepath\\WhatsApp Image 2019-11-22 at 15.45.43.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `tranch_age`
--

DROP TABLE IF EXISTS `tranch_age`;
CREATE TABLE IF NOT EXISTS `tranch_age` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age_max` int(11) NOT NULL,
  `age_min` int(11) NOT NULL,
  `label` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
