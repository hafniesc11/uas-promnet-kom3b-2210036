# go-lang-mysql-react-crud

## Backend local setup

**Create database 'db_2210036_hafniesaufa_uas_pilkomb':**
```
CREATE DATABASE db_2210036_hafniesaufa_uas_pilkomb;
```


**Create table 'transaksi_keuangan_hafniesaufa':**
```
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

ALTER TABLE `transaksi_keuangan_hafniesaufa`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `transaksi_keuangan_hafniesaufa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;
```
**Initialize the Go project:**
Initialize the Go project using the following command
```
go mod init backend
```

**Adding the modules required for the project:**
```
go get github.com/gorilla/mux
go get github.com/go-sql-driver/mysql
```
**Run the backend app**
```
go run main.go
```

## Frontend local setup

**Step 1: The npm install installs all modules that are listed on package.json file and their 
            dependencies**
```
npm install
```

**Step 2: Run the Frontend application**
```
npm start
```
Access the URL via browser - http://localhost:3000
