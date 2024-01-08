-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2024 at 03:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2210036_hafniesaufa_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_keuangan_hafniesaufa`
--

CREATE TABLE `transaksi_keuangan_hafniesaufa` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `amount` bigint(20) NOT NULL,
  `status` enum('debit','kredit') NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `jk` enum('L','P') NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi_keuangan_hafniesaufa`
--

INSERT INTO `transaksi_keuangan_hafniesaufa` (`id`, `date`, `description`, `amount`, `status`, `receiver`, `jk`, `no_telp`, `address`) VALUES
(1, '2023-11-22', 'Sewa GOR Cilimus', 1000000, 'kredit', 'Abdul', 'L', '085156337570', 'Jl.Cilimus Sukasari'),
(2, '2023-11-25', 'Sewa Auditorium', 2000000, 'kredit', 'Rafi', 'P', '087764924819', 'Geger Arum'),
(3, '2023-12-03', 'Sewa Amphiteater', 5000000, 'kredit', 'Ajeng', 'P', '081276231297', 'Isola UPI'),
(4, '2024-02-05', 'Sewa Lapangan Gedung FPMIPA C', 4000000, 'debit', 'Hanif', 'L', '085238473198', 'UPI'),
(5, '2024-01-10', 'Dana Prodi Pilkom', 30000000, 'kredit', 'Hendra', 'L', '089321768655', 'Setiabudhi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transaksi_keuangan_hafniesaufa`
--
ALTER TABLE `transaksi_keuangan_hafniesaufa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transaksi_keuangan_hafniesaufa`
--
ALTER TABLE `transaksi_keuangan_hafniesaufa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
