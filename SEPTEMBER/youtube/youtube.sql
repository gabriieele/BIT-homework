-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2023 at 05:52 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youtube`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL COMMENT 'Kategorijos id',
  `name` varchar(50) NOT NULL COMMENT 'Kategorijos pavadinimas'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Fashion'),
(2, 'Comedy'),
(3, 'Movie Trailers'),
(4, 'Music'),
(5, 'News');

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

CREATE TABLE `uploads` (
  `id` int(20) NOT NULL COMMENT 'Vaizdo klipo id',
  `link` varchar(100) NOT NULL COMMENT 'Vaizdo klipo adresas youtube platformoje',
  `thumbnail` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL DEFAULT 'Standartinis pavadinimas' COMMENT 'Vaizdo klipo pavadinimas',
  `description` text NOT NULL COMMENT 'Vaizdo klipo aprašymas',
  `category_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `views` int(100) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploads`
--

INSERT INTO `uploads` (`id`, `link`, `thumbnail`, `name`, `description`, `category_id`, `user_id`, `views`) VALUES
(1, 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=rQv8GSDbakGyQFqh', 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg', 'Rick Astley - Never Gonna Give You Up (Official Music Video)', '“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.', 4, 1, 45),
(2, 'https://www.youtube.com/embed/Xb6l38eP-4w?si=EnHLmCmat8sB3M7-', 'https://img.youtube.com/vi/Xb6l38eP-4w/maxresdefault.jpg', 'Escape (The Pina Colada Song)', 'Escape (The Pina Colada Song) · Rupert Holmes<br>\r\n<br>\r\nPartners In Crime<br>\r\n<br>\r\n℗ 1979 Geffen Records<br>\r\n<br>\r\nReleased on: 1979-01-01<br>\r\n<br>\r\nProducer, Unknown, Other: Rupert Holmes<br>\r\nProducer: Jim Boyer<br>\r\nComposer  Lyricist: Rupert Holmes<br>', 4, 2, 28),
(4, 'https://www.youtube.com/embed/d9MyW72ELq0?si=_kon4jxVZEeacMLo', 'https://img.youtube.com/vi/d9MyW72ELq0/maxresdefault.jpg', 'Avatar: The Way of Water | Official Trailer', 'Set more than a decade after the events of the first film, “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.', 3, 4, 2),
(5, 'https://www.youtube.com/embed/hxb0FPH0k-U?si=9p9weGGkbXbYtt5C', 'https://img.youtube.com/vi/hxb0FPH0k-U/maxresdefault.jpg', 'Dune: Part Two | Official Trailer', 'The saga continues as award-winning filmmaker Denis Villeneuve embarks on “Dune: Part Two,” the next chapter of Frank Herbert’s celebrated novel Dune, with an expanded all-star international ensemble cast.  The film, from Warner Bros. Pictures and Legendary Pictures, is the highly anticipated follow-up to 2021’s six-time Academy Award-winning “Dune.”', 3, 3, 13),
(6, 'https://www.youtube.com/embed/hPIzgZ16oac?si=fPXMp_yUWJwrP7wV', 'https://img.youtube.com/vi/hPIzgZ16oac/maxresdefault.jpg', 'Oppenheimer | New Trailer', 'Oppenheimer - In Theaters 7 21 23<br>\r\n<br>\r\nWritten and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it.<br>\r\n<br>\r\nThe film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission.<br>', 3, 1, 2),
(7, 'https://www.youtube.com/embed/f7ptW_eJ-ao?si=vV03UgO7B-W5Sj2w', 'https://img.youtube.com/vi/f7ptW_eJ-ao/maxresdefault.jpg', 'Melissa McCarthy - Bloopers', 'Melissa McCarthy - Bloopers and Funny moments <br>\r\n<br>\r\nThis is a collection of videos from films with the participation of Melissa McCarthy\r\nBloopers, Best Behind The Scenes Footage, Gag Reel & Outtakes', 2, 1, 6),
(8, 'https://www.youtube.com/embed/Vmb1tqYqyII?si=QUKlol0sWGYqN45N', 'https://img.youtube.com/vi/Vmb1tqYqyII/maxresdefault.jpg', 'First Aid Fail - The Office US', 'Michael Scott is performing first aid techniques when the office suddenly breaks in to \'Staying Alive\' by The Bee Gees.<br>\r\n<br>\r\nWelcome to the official YouTube channel for The Office US. Home to all of the official clips from the series, the funniest moments, pranks and fails. \r\nThink we should feature your favourite episode? Let us know in the comments! ', 2, 2, 26),
(9, 'https://www.youtube.com/embed/fjodt2JnWT8?si=RrTmFihne6K-qM4b', 'https://img.youtube.com/vi/fjodt2JnWT8/maxresdefault.jpg', 'Identity Thief (5/10) Movie CLIP - Singing to the Radio (2013) HD', 'Diana (Melissa McCarthy) annoys Sandy (Jason Bateman) by singing to every song on the radio.', 2, 3, 0),
(10, 'https://www.youtube.com/embed/rIUdA21wEPc?si=pgfCDC0oGWzLlc3-', 'https://img.youtube.com/vi/rIUdA21wEPc/maxresdefault.jpg', 'Gucci Cruise 2024 Fashion Show', 'The House\'s latest fashion show drew inspiration from the dialog between time and traditions often seen on the streets of Seoul, echoed through the setting of Gyeongbokgung Palace in the capital city. ', 1, 4, 0),
(11, 'https://www.youtube.com/embed/pwVJizpCuDQ?si=XyWOkd6bYoo2bNq6', 'https://img.youtube.com/vi/pwVJizpCuDQ/maxresdefault.jpg', 'Valentino Rendez-Vous | Starring Zendaya', 'The street as the stage, set by Zendaya.  ​\r\nFrom back of house to the sunny sidewalks, the joy, mystery and unexpected surprises of the everyday are revealed for Creative Director Pierpaolo Piccioli\'s #ValentinoRendezVous campaign. ​Discover the story, shot at Warner Bros. Studios in Los Angeles by Euphoria cinematographer Marcell Rev and featuring new-in accessories like the #ValentinoGaravani #OneStudBag ​', 1, 1, 0),
(12, 'https://www.youtube.com/embed/I10XB1-IIbA?si=vqdEV7kvR20dhiCN', 'https://img.youtube.com/vi/I10XB1-IIbA/maxresdefault.jpg', 'DIOR Fashion Film 2020 | Directed by VIVIENNE & TAMAS', 'New fashion film for @Dior featuring the brand\'s, Autumn-Winter 2020/21 Collection. \r\nShot in Budapest on @reddigitalcinema camera, edited in DaVinci Resolve.', 1, 3, 0),
(13, 'https://www.youtube.com/embed/ej9lpaE3LiI?si=k-zAXSfzpFT6qpB0', 'https://img.youtube.com/vi/ej9lpaE3LiI/maxresdefault.jpg', 'iOS 17: All NEW Features You Need to Know!', 'Apple today released iOS 17 and iPadOS 17, the latest operating system updates that are designed for the iPhone and iPad.<br> \r\n<br>\r\nApple\'s updated software can be downloaded on eligible iPhones and iPads over-the-air by going to Settings - General - Software Update. It can take a few minutes for the updates to propagate to all users due to high demand.', 5, 2, 0),
(14, 'https://www.youtube.com/embed/aih0Bnafoaw?si=ZGIYpEYdbgnJaey9', 'https://img.youtube.com/vi/aih0Bnafoaw/maxresdefault.jpg', 'How is Italy coping with the sudden influx of migrants on Lampedusa? | DW News', 'The Italian Red Cross says more than 120 migrants landed on the island of Lampedusa overnight. That\'s after the arrival of some 7,000 people in recent days. They came from North Africa, overwhelming the island\'s reception center and setting off a migration crisis for both Italy\'s far-right government and the European Union. DW\'s Christine Mhundwa is on Lampedusa, where she found out how some of the new arrivals are coping with the situation.', 5, 4, 0),
(15, 'https://www.youtube.com/embed/wGWVKkYEHBE?si=KpLQyxyrGHEx3oso', 'https://img.youtube.com/vi/wGWVKkYEHBE/maxresdefault.jpg', 'Meet the AI robot capable of human emotions | 60 Minutes Australia', '60 Minutes reporter Tom Steinfort interviews Ameca, an AI robot. It is a marvel of artificial intelligence; curious, chatty and sometimes even rather sarcastic.<br>\r\n<br>\r\nThis super machine really does have a mind of its own. While it\'s undoubtedly exciting, it\'s also just as frightening. And that\'s because creating technology that allows AI bots like Ameca to be smarter than us might just be the most stupid thing humans have ever done.', 5, 1, 0),
(16, 'https://www.youtube.com/embed/Q0oIoR9mLwc?si=Y5JM4eCSNgGSnIcK', 'https://img.youtube.com/vi/Q0oIoR9mLwc/maxresdefault.jpg', 'Red Hot Chili Peppers - Dark Necessities [Official Music Video]', ' Red Hot Chili Peppers is a rock band renowned for their hits “Californication,” “Otherside,” “Scar Tissue,” “Dani California,” “Can’t Stop,” “Snow (Hey Oh),” and “Dark Necessities.” They worked with artists like George Clinton, Eddie Vedder, and Elton John — amassing billions of global streams and inducted into the “Rock and Roll Hall of Fame.”', 4, NULL, 0),
(19, ' https://www.youtube.com/embed/ZEMBDKMtHqM?si=zRMPfrWNhDopSXj7', 'https://img.youtube.com/vi/ZEMBDKMtHqM/maxresdefault.jpg', 'Nirvana - Come As You Are', 'Come As You Are · Nirvana  Nevermind  ℗ A Geffen Records release; ℗ 1991 UMG Recordings, Inc.  Released on: 2011-01-01  Producer, Studio  Personnel, Recording  Engineer: Butch Vig Studio  Personnel, Mixer: Andy Wallace Studio  Personnel, Assistant  Mixer: Craig Doubet Associated  Performer, Vocals, Guitar: Kurt Cobain Associated  Performer, Bass  Guitar: Krist Novoselic Associated  Performer, Drums: Dave Grohl Composer  Lyricist: Kurt Cobain', 4, NULL, 0),
(31, 'https://www.youtube.com/embed/YlUKcNNmywk?si=B_EY7ar99i-4FwP9', 'https://img.youtube.com/vi/YlUKcNNmywk/maxresdefault.jpg', 'Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE]', '\"Californication\" is the Red Hot Chili Peppers\' fourth single and sixth track from their 1999 seventh studio album, Californication. Released as a single in 2000, the song reached #69 on the Billboard Hot 100 in the US, and #16 on the UK charts, and hit #1 on both US Mainstream Rock Tracks for 2 weeks and US Modern Rock Tracks for 1 week.', 4, NULL, 0),
(34, 'https://www.youtube.com/embed/L_jWHffIx5E?si=IHK3q0PxZ5VNYmFF', 'https://img.youtube.com/vi/L_jWHffIx5E/mqdefault.jpg', 'Smash Mouth - All Star (Official Music Video)', 'REMASTERED IN HD! Smash Mouth\'s official music video for \'All Star\'.', 4, 3, 0),
(35, 'https://www.youtube.com/embed/TSBGN9VaiMA', 'https://img.youtube.com/vi/TSBGN9VaiMA/maxresdefault.jpg', 'Gigi Hadid in “The Girl” by Tommy Hilfiger', 'Gigi Hadid protagonista della nuova fragranza The Girl by Tommy Hilfiger.  L’essenza, racchiusa in un pack d’ispirazione nautica, tema caro alla griffe, conquista con un bouquet fresco e vivace che debutta con guizzi di pera verde, foglie di violetta e foglie di fichi verdi per poi rivelare un cuore vibrante che intreccia petali di gelsomino e mughetto e un sillage avvolgente di legno di cedro e di cashmeran.', 1, 1, 33),
(36, 'https://www.youtube.com/embed/7cx9nCHsemc', 'https://img.youtube.com/vi/7cx9nCHsemc/maxresdefault.jpg', 'Killers of the Flower Moon | Official Trailer 2 (2023 Movie)', 'Killers Of The Flower Moon is “Scorsese’s most innovative and best movie in decades.\" Starring Leonardo DiCaprio, Robert De Niro, and Lily Gladstone. Exclusively in theatres October 20.<br>\r\n<br>\r\nAt the turn of the 20th century, oil brought a fortune to the Osage Nation, who became some of the richest people in the world overnight. The wealth of these Native Americans immediately attracted white interlopers, who manipulated, extorted, and stole as much Osage money as they could before resorting to murder. Based on a true story and told through the improbable romance of Ernest Burkhart (Leonardo DiCaprio) and Mollie Kyle (Lily Gladstone), “Killers of the Flower Moon” is an epic western crime saga, where real love crosses paths with unspeakable betrayal. Also starring Robert De Niro, Jesse Plemons, Tantoo Cardinal, Cara Jade Myers, JaNae Collins, and Jillian Dion, “Killers of the Flower Moon” is directed by Academy Award winner Martin Scorsese from a screenplay by Eric Roth and Martin Scorsese, based on David Grann’s best-selling book.', 3, 1, 3),
(37, 'https://www.youtube.com/embed/zl91NnFHTkQ', 'https://img.youtube.com/vi/zl91NnFHTkQ/maxresdefault.jpg', 'Golden Ticket Idea - The Office US', '\"May your day be full of whimsy!\" <br>\r\n<br>\r\nSeason 5, Episode 19 \"Golden Ticket\" - Michael\'s idea to use `Golden Tickets\' for prizes for clients causes a problem in the office. Meanwhile, Kevin seeks advice from Andy, Jim, and Pam about dating.', 2, 1, 0),
(38, 'https://www.youtube.com/embed/gfP-ozMFhR0', 'https://img.youtube.com/vi/gfP-ozMFhR0/maxresdefault.jpg', 'More than 100 killed in wedding fire in northern Iraq - BBC News', 'At least 100 people have died and 150 others injured after a fire broke out at a wedding in northern Iraq, state media has reported.<br>\r\n<br>\r\nIt is not yet clear what caused the blaze, but early reports say it broke out after fireworks were lit.<br>\r\n<br>\r\nPhotos on social media show charred-out remains of the event hall in Qaraqosh in Iraq\'s Nineveh province.<br>\r\n<br>\r\nThe newly married couple are among the victims, according to the deputy head of the Nineveh health directorate.<br>', 5, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT 'Vartotojo id',
  `username` varchar(50) DEFAULT NULL COMMENT 'Vartotojo vardas',
  `email` varchar(50) DEFAULT NULL COMMENT 'Vartotojo el. paštas',
  `password` varchar(50) DEFAULT NULL COMMENT 'Vartototojo slaptažodis'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'Gabriele123', 'gabriele@gmail.com', '123456'),
(2, 'user25', 'petras@gmail.com', '1234'),
(3, 'user123', 'jonas@gmail.com', '4321'),
(4, 'BITuser', 'jone@gmail.com', '5678'),
(5, 'gabriele', 'gabr@gmail.com', 'a914ecef9c12ffdb9bede64bb703d877'),
(11, 'grdalt', 'jonas@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(12, 'gggg', 'jonas@gmail.com', '743c41a921516b04afde48bb48e28ce6'),
(15, 'user25', 'user25@gmail.com', '8f60c8102d29fcd525162d02eed4566b'),
(16, 'gabriele', 'gabriele@gmail.com', '83cdcec08fbf90370fcf53bdd56604ff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uploads`
--
ALTER TABLE `uploads`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `video-url` (`link`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Kategorijos id', AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `uploads`
--
ALTER TABLE `uploads`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'Vaizdo klipo id', AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Vartotojo id', AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `uploads`
--
ALTER TABLE `uploads`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
