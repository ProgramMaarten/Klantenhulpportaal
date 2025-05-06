CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `phone_number` varchar(255),
  `role` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `is_admin` boolean,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `tickets` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `admin_id` integer,
  `category_id` integer,
  `title` varchar(255),
  `content` text,
  `status` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `categories` (
  `id` integer,
  `name` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `responses` (
  `id` integer,
  `user_id` integer,
  `ticket_id` integer,
  `title` varchar(255),
  `content` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `notes` (
  `id` integer,
  `user_id` integer,
  `ticket_id` integer,
  `title` varchar(255),
  `content` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `tickets` ADD FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`);

ALTER TABLE `tickets` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `tickets` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `responses` ADD FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`id`);

ALTER TABLE `notes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `notes` ADD FOREIGN KEY (`ticket_id`) REFERENCES `tickets` (`id`);

ALTER TABLE `responses` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
