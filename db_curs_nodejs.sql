-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-03-2024 a las 02:07:41
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
(2, NULL, 'TituloB', 1988, 1, '2024-03-03 12:30:00', '2024-03-03 12:30:00');

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
(8, 'Semana Santa', '2024-03-23 23:00:00', '2024-03-30 23:00:00'),
(9, 'Día Internacional para Concienciar sobre el Desarme y la No Proliferación', '2024-03-04 23:00:00', '2024-03-05 22:59:00'),
(10, 'Semana Мundial de la Armonía Interconfesional', '2024-01-31 23:00:00', '2024-02-07 22:59:00'),
(11, 'Día Internacional de la Tolerancia Cero con la Mutilación Genital Femenina', '2024-02-05 23:00:00', '2024-02-06 22:59:00'),
(12, 'Día Mundial de los Humedales', '2024-02-01 23:00:00', '2024-02-02 22:59:00'),
(13, 'Día Internacional de la Fraternidad Humana', '2024-02-03 23:00:00', '2024-02-04 22:59:00'),
(14, 'Día Internacional del Leopardo Árabe', '2024-02-09 23:00:00', '2024-02-10 22:59:00'),
(15, 'Día Mundial de las Legumbres', '2024-02-09 23:00:00', '2024-02-10 22:59:00'),
(16, 'Día Internacional de la Mujer y la Niña en la Ciencia', '2024-02-10 23:00:00', '2024-02-11 22:59:00'),
(17, 'Día Internacional para la Prevención del Extremismo Violento cuando Conduzca al Terrorismo', '2024-02-11 23:00:00', '2024-02-12 22:59:00'),
(18, 'Día Mundial de la Radio', '2024-02-12 23:00:00', '2024-02-13 22:59:00'),
(19, 'Día Mundial de la Resiliencia del Turismo', '2024-02-16 23:00:00', '2024-02-17 22:59:00'),
(20, 'Día Mundial de la Justicia Social', '2024-02-19 23:00:00', '2024-02-20 22:59:00'),
(21, 'Día Internacional de la Lengua Materna', '2024-02-20 23:00:00', '2024-02-21 22:59:00'),
(22, 'Día Mundial de los Pastos Marinos', '2024-02-29 23:00:00', '2024-03-01 22:59:00'),
(23, 'Día de la Cero Discriminación (ONUSIDA)', '2024-02-29 23:00:00', '2024-03-01 22:59:00'),
(24, 'Día Mundial de la Vida Silvestre', '2024-03-02 23:00:00', '2024-03-03 22:59:00'),
(25, 'Día Internacional de la Mujer', '2024-03-07 23:00:00', '2024-03-08 22:59:00'),
(26, 'Día Internacional de las Juezas', '2024-03-09 23:00:00', '2024-03-10 22:59:00'),
(27, 'Día Internacional para Combatir la Islamofobia', '2024-03-14 23:00:00', '2024-03-15 22:59:00'),
(29, 'Día Internacional de la Felicidad', '2024-03-19 23:00:00', '2024-03-20 22:59:00'),
(30, 'Día Mundial del Agua', '2024-03-21 23:00:00', '2024-03-22 22:59:00'),
(31, 'Día Meteorológico Mundial (OMM)', '2024-03-22 23:00:00', '2024-03-23 22:59:00'),
(32, 'Día Internacional del Derecho a la Verdad en relación con Violaciones Graves de los Derechos Humanos y de la Dignidad de las Víctimas', '2024-03-23 23:00:00', '2024-03-24 22:59:00'),
(33, 'Día Mundial de la Tuberculosis (OMS)', '2024-03-23 23:00:00', '2024-03-24 22:59:00'),
(34, 'Día Internacional de Cero Desechos', '2024-03-29 23:00:00', '2024-03-30 22:59:00'),
(35, 'Día internacional de Solidaridad con los miembros del personal detenidos o desaparecidos', '2024-03-24 23:00:00', '2024-03-25 22:59:00'),
(36, 'Día Internacional de Recuerdo de las Víctimas de la Esclavitud y la Trata Transatlántica de Esclavos', '2024-03-24 23:00:00', '2024-03-25 22:59:00'),
(37, 'Día Internacional de la Eliminación de la Discriminación Racial', '2024-03-20 23:00:00', '2024-03-21 22:59:00'),
(38, 'Día Mundial de la Poesía', '2024-03-20 23:00:00', '2024-03-21 22:59:00'),
(39, 'Día Internacional del Naw-Rúz', '2024-03-20 23:00:00', '2024-03-21 22:59:00'),
(40, 'Día Mundial del Síndrome de Down', '2024-03-20 23:00:00', '2024-03-21 22:59:00'),
(41, 'Día Internacional de los Bosques', '2024-03-20 23:00:00', '2024-03-21 22:59:00'),
(45, 'Día del padre', '2024-03-18 23:00:00', '2024-03-19 22:59:00'),
(46, 'Día de la lengua francesa', '2024-03-19 23:00:00', '2024-03-20 22:59:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graphics_barchart`
--

CREATE TABLE `graphics_barchart` (
  `id` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `technology` int(11) DEFAULT NULL,
  `clothing` int(11) DEFAULT NULL,
  `food` int(11) DEFAULT NULL,
  `home` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `graphics_barchart`
--

INSERT INTO `graphics_barchart` (`id`, `year`, `technology`, `clothing`, `food`, `home`) VALUES
(1, 2006, 120, 150, 300, 200),
(2, 2007, 200, 180, 290, 220),
(3, 2008, 250, 130, 320, 250),
(4, 2009, 220, 160, 310, 210),
(5, 2010, 180, 200, 330, 240),
(6, 2011, 230, 170, 300, 230),
(7, 2012, 210, 190, 320, 260);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graphics_piechart`
--

CREATE TABLE `graphics_piechart` (
  `id` int(11) NOT NULL,
  `month` varchar(255) NOT NULL,
  `tools` decimal(5,2) NOT NULL,
  `gardening` decimal(5,2) NOT NULL,
  `appliances` decimal(5,2) NOT NULL,
  `apparel` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `graphics_piechart`
--

INSERT INTO `graphics_piechart` (`id`, `month`, `tools`, `gardening`, `appliances`, `apparel`) VALUES
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
(25, 'Monumento al Doctor Robert', 41.39496839, 2.17557192),
(27, 'Plaza de Nuestra Señora del Pilar', 41.65639299, -0.87892771),
(29, 'Parc de la Ciutadella', 41.38851322, 2.18581796),
(30, 'Monument a Colom', 41.37580222, 2.17778206),
(31, 'El Pez Olímpico', 41.38617889, 2.19705105),
(32, 'Plaça de Catalunya', 41.38703214, 2.17001438),
(33, 'Plaça Espanya', 41.37505349, 2.14911461),
(34, 'Parlament de Catalunya', 41.38812685, 2.18894005),
(35, 'Estadi Olimpi Lluis Companys', 41.36515817, 2.15557337);

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
(3, 'maria@hotmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Maria', 'Kale', '2024-03-03 12:30:00', '2024-03-05 23:07:17'),
(17, 'anton@jotmeil.com', '$2b$10$vjy7XyyMiXl1oSeK0WyWiu6UNxrqYpyRqdUMaRTq1CJsGfPq4Ei/W', 'Antonio', 'Luces', '2024-03-03 18:47:22', '2024-03-05 23:27:20'),
(22, 'lop@jomeil.com', '$2b$10$.J0pwVppG.vCNWP/yDyMteCWXRFdHIuRQzC9LUR3g.ar1cmEzfsOe', 'César', 'Lop', '2024-03-03 19:28:10', '2024-03-03 19:28:10'),
(29, 'planeta.alderaan@gmail.com', '$2b$10$9Qu5Yx8qk5TFaV8rxFIXmOsU.OvXOlKYlbVCM8BuqcEqkeV958D1C', 'Guillermo', 'Esteban', '2024-03-03 20:57:09', '2024-03-03 20:57:09'),
(30, 'promesa@tve1.com', '$2b$10$2u0P1lFxKXTiQwOsDGvdKe8coBq8ZzVBb45WhC20MUNEOoJAmw2Iu', 'Catalina', 'Luján', '2024-03-03 21:00:46', '2024-03-03 21:00:46'),
(92, 'cifo@jate.com', '$2b$10$xiFDRMLjMSW2jCqbR6/u1ePXeESRfHn8QFeyOZO6M7znKpdBSc17y', 'Marianela', 'Cifuentes', '2024-03-04 05:26:49', '2024-03-04 05:26:49'),
(129, 'carol@santos.com', '$2b$10$.VRFoAyUxOaOzs0vCGY7fuNBkmvtxOXog8VHCvddaRSKH7L4xbSCm', 'Carolina', 'Santos', '2024-03-05 22:58:51', '2024-03-05 22:58:51'),
(131, 'cefe@yaju.com', '$2b$10$RBCo4PUIrhvsJ7EIohGi.uHIwAO3dhYpiDAbk0GXO.amIxkAx6qsa', 'Ceferino', 'Pérez', '2024-03-05 23:29:02', '2024-03-05 23:29:26'),
(135, 'ismael.academy@gmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Ismael', NULL, '2024-03-06 00:14:11', '2024-03-06 00:14:11'),
(136, 'laura@hotmail.com', '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', 'Laura', NULL, '2024-03-06 00:14:11', '2024-03-06 00:14:11'),
(148, 'josf@gar.com', '$2b$10$jK7fxHvnxFehOjIgodQFluR3WwD7yLbCamA5013sbPte1ZJL2mS9W', 'Josefa', 'García', '2024-03-06 04:51:24', '2024-03-06 04:51:24'),
(170, 'adf@fas.com', '$2b$10$SJDBuSKNY5EjvITj/GT4IeT5viiTdsJ08u/N3JuxT6b7FMEeWReIy', 'Perico', '', '2024-03-06 20:18:54', '2024-03-06 20:18:54');

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
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `graphics_barchart`
--
ALTER TABLE `graphics_barchart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `graphics_piechart`
--
ALTER TABLE `graphics_piechart`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id_book` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `graphics_barchart`
--
ALTER TABLE `graphics_barchart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `graphics_piechart`
--
ALTER TABLE `graphics_piechart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `RecoveryTokens`
--
ALTER TABLE `RecoveryTokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id_user` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

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
