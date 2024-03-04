-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-03-2024 a las 06:27:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_curs_nodejs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Books`
--

CREATE TABLE `Books` (
  `id_book` int(8) UNSIGNED NOT NULL,
  `user_id` int(8) UNSIGNED DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `year` int(4) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Books`
--

INSERT INTO `Books` (`id_book`, `user_id`, `title`, `year`, `status`, `created_at`, `updated_at`) VALUES
(1, NULL, 'TituloA', 1955, 1, '2024-03-03 12:30:00', '2024-03-03 12:30:00'),
(2, NULL, 'TituloB', 1988, 1, '2024-03-03 12:30:00', '2024-03-03 12:30:00'),
(3, 2, 'TituloC', 1475, 1, '2024-03-03 12:30:00', '2024-03-03 12:30:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `start`, `end`) VALUES
(1, 'aniversario', '2024-01-30 11:00:00', '2024-01-30 20:00:00'),
(3, 'rebajas', '2024-01-20 11:13:36', '2024-01-20 22:13:36'),
(4, 'Hola Isma!', '2024-02-15 11:00:00', '2024-02-29 12:00:00'),
(5, 'Reunión', '2024-02-05 12:00:00', '2024-02-05 17:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graphics_barchart`
--

CREATE TABLE `graphics_barchart` (
  `id` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `series_a` int(11) DEFAULT NULL,
  `series_b` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `graphics_barchart`
--

INSERT INTO `graphics_barchart` (`id`, `year`, `series_a`, `series_b`) VALUES
(1, 2006, 65, 28),
(2, 2007, 59, 48),
(3, 2008, 80, 40),
(4, 2009, 81, 19),
(5, 2010, 56, 86),
(6, 2011, 55, 27),
(7, 2012, 40, 90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graphics_piechart`
--

CREATE TABLE `graphics_piechart` (
  `id` int(11) NOT NULL,
  `month` varchar(255) NOT NULL,
  `toys` decimal(5,2) NOT NULL,
  `electronics` decimal(5,2) NOT NULL,
  `groceries` decimal(5,2) NOT NULL,
  `furniture` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `graphics_piechart`
--

INSERT INTO `graphics_piechart` (`id`, `month`, `toys`, `electronics`, `groceries`, `furniture`) VALUES
(1, 'January', 20.50, 10.30, 30.80, 38.40),
(2, 'February', 15.20, 25.00, 20.70, 39.10),
(3, 'March', 12.80, 32.00, 18.50, 36.70),
(4, 'April', 22.30, 18.60, 27.10, 31.90),
(5, 'May', 17.60, 24.30, 14.90, 43.20),
(6, 'June', 19.00, 15.80, 33.20, 31.90),
(7, 'July', 16.40, 21.70, 25.10, 36.80),
(8, 'August', 24.10, 12.60, 28.30, 34.90),
(9, 'September', 14.90, 28.50, 19.70, 36.90),
(10, 'October', 18.30, 20.20, 22.40, 39.10),
(11, 'November', 23.20, 14.80, 30.00, 31.90),
(12, 'December', 21.50, 17.10, 25.90, 35.50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `locations`
--

INSERT INTO `locations` (`id`, `name`, `latitude`, `longitude`) VALUES
(2, 'Madrid', 40.41650000, -3.70256000),
(4, 'Carrer Aragó', 41.40566422, 2.18275522),
(5, 'Bau', 41.39755850, 2.19603527),
(6, 'Casa Paca', 41.39964218, 2.16042977),
(7, 'Sants-Montjuïc', 41.36484325, 2.14957073),
(22, 'Plaza de Toros', 41.40008699, 2.18125820),
(25, 'Plaza Tetuán', 41.39496839, 2.17557192),
(27, 'Plaza de Nuestra Señora del Pilar', 41.65639299, -0.87892771);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RecoveryTokens`
--

CREATE TABLE `RecoveryTokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int(8) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id_user` int(8) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id_user`, `email`, `password`, `name`, `surname`, `created_at`, `updated_at`) VALUES
(1, 'ismael.academy@gmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Ismael', NULL, '2024-03-03 12:30:00', '2024-03-03 12:30:00'),
(2, 'laura@hotmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Laura', NULL, '2024-03-03 12:30:00', '2024-03-03 12:30:00'),
(3, 'maria@hotmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Maria', 'kale', '2024-03-03 12:30:00', '2024-03-03 12:30:00'),
(17, 'asf@no.com', '$2b$10$vjy7XyyMiXl1oSeK0WyWiu6UNxrqYpyRqdUMaRTq1CJsGfPq4Ei/W', 'Antonio', 'Luces', '2024-03-03 18:47:22', '2024-03-03 20:54:38'),
(22, 'lop@jomeil.com', '$2b$10$.J0pwVppG.vCNWP/yDyMteCWXRFdHIuRQzC9LUR3g.ar1cmEzfsOe', 'César', 'Lop', '2024-03-03 19:28:10', '2024-03-03 19:28:10'),
(29, 'planeta.alderaan@gmail.com', '$2b$10$9Qu5Yx8qk5TFaV8rxFIXmOsU.OvXOlKYlbVCM8BuqcEqkeV958D1C', 'Guillermo', 'Esteban', '2024-03-03 20:57:09', '2024-03-03 20:57:09'),
(30, 'promesa@tve1.com', '$2b$10$2u0P1lFxKXTiQwOsDGvdKe8coBq8ZzVBb45WhC20MUNEOoJAmw2Iu', 'Catalina', 'Luján', '2024-03-03 21:00:46', '2024-03-03 21:00:46'),
(92, 'cifo@jate.com', '$2b$10$xiFDRMLjMSW2jCqbR6/u1ePXeESRfHn8QFeyOZO6M7znKpdBSc17y', 'Marianela', 'Cifuentes', '2024-03-04 05:26:49', '2024-03-04 05:26:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`id_book`),
  ADD UNIQUE KEY `books_title` (`title`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `RecoveryTokens`
--
ALTER TABLE `RecoveryTokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `users_email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Books`
--
ALTER TABLE `Books`
  MODIFY `id_book` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `RecoveryTokens`
--
ALTER TABLE `RecoveryTokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Books`
--
ALTER TABLE `Books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `RecoveryTokens`
--
ALTER TABLE `RecoveryTokens`
  ADD CONSTRAINT `recoverytokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
