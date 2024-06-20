CREATE DATABASE DiamondValuationSystem
use DiamondValuationSystem

CREATE TABLE Roles(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(255) NOT NULL
);
CREATE TABLE Users(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Role_id BIGINT NOT NULL,
    Username NVARCHAR(255) NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    Fullname NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) NULL,
    Phone_number NVARCHAR(255) NULL,
    Address NVARCHAR(255) NULL,
	FOREIGN KEY (Role_id) REFERENCES Roles(Id)
);

CREATE TABLE Wallets(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Customer_id BIGINT NOT NULL,
    Balance NVARCHAR(255) NOT NULL,
    Update_time NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Customer_id) REFERENCES Users(Id)
);
CREATE TABLE Service_statistics(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(255) NOT NULL
);
CREATE TABLE Services(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(255) NOT NULL,
    Price NVARCHAR(255) NOT NULL,
    Time NVARCHAR(255) NOT NULL,
    Statistic_id BIGINT NOT NULL,
	FOREIGN KEY (Statistic_id) REFERENCES Service_statistics(Id)
);
CREATE TABLE Valuation_requests(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Customer_id BIGINT NOT NULL,
    Service_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
    Finish_date DATETIME,
    Sealing_date DATETIME NOT NULL,
    Description NVARCHAR(255) NULL,
	FOREIGN KEY (Customer_id) REFERENCES Users(Id),
	FOREIGN KEY (Service_id) REFERENCES Services(Id)
);
CREATE TABLE Request_images(
    Id NVARCHAR(255) PRIMARY KEY,
    Valuation_request_id BIGINT NOT NULL,
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);
CREATE TABLE Process_requests(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Consulting_staff_id BIGINT NOT NULL,
    Valuation_request_id BIGINT NOT NULL,
    Name NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Consulting_staff_id) REFERENCES Users(Id),
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);
CREATE TABLE Valuation_results(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Valuation_request_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
    Origin NVARCHAR(255) NULL,
    Shape NVARCHAR(255) NULL,
    Carat_weight DECIMAL(3,1) NULL,
    Color NVARCHAR(255) NULL,
    Cut NVARCHAR(255) NULL,
    Clarity NVARCHAR(255) NULL,
    Measurements NVARCHAR(255) NULL,
    Polish NVARCHAR(255) NULL,
    Symmetry NVARCHAR(255) NULL,
    Fluorescence NVARCHAR(255) NULL,
    Proportions NVARCHAR(255) NULL,
    Price DECIMAL(5,2) NULL,
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);
CREATE TABLE Sealing_letters(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Valuation_request_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
    Content NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);
CREATE TABLE Process_sealing_letters(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Sealing_letter_id BIGINT NOT NULL,
    Manager_id BIGINT NOT NULL,
    Status NVARCHAR(255) NOT NULL,
    FOREIGN KEY (Sealing_letter_id) REFERENCES Sealing_letters(Id),
    FOREIGN KEY (Manager_id) REFERENCES Users(Id)
);
CREATE TABLE Valuated_diamonds(
    Id NVARCHAR(25) PRIMARY KEY,
    Valuation_result_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
	FOREIGN KEY (Valuation_result_id) REFERENCES Valuation_results(Id)
);

CREATE TABLE Commitments(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Valuation_request_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
    Content NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);

CREATE TABLE Process_commitments(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Commitment_id BIGINT NOT NULL,
    Manager_id BIGINT NOT NULL,
    Status NVARCHAR(255) NOT NULL,
    FOREIGN KEY (Commitment_id) REFERENCES Commitments(Id),
    FOREIGN KEY (Manager_id) REFERENCES Users(Id)
);

CREATE TABLE Payments(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Customer_id BIGINT NOT NULL,
    Valuation_request_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
    Type NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Customer_id) REFERENCES Users(Id),
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);
CREATE TABLE Valuation_receipts(
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Valuation_request_id BIGINT NOT NULL,
    Created_date DATETIME NOT NULL,
	FOREIGN KEY (Valuation_request_id) REFERENCES Valuation_requests(Id)
);

CREATE TABLE Process_results(
	Id BIGINT PRIMARY KEY IDENTITY(1,1),
	Valuation_staff_id BIGINT NOT NULL,
	Valuation_result_id BIGINT NOT NULL,
	Process_request_id BIGINT NOT NULL,
	Name NVARCHAR(255) NOT NULL,
	FOREIGN KEY (Valuation_staff_id) REFERENCES Users(Id),
	FOREIGN KEY (Valuation_result_id) REFERENCES Valuation_results(Id),
	FOREIGN KEY (Process_request_id) REFERENCES Process_requests(Id),
)

CREATE TABLE Valuated_diamond_images(
	Id NVARCHAR(50) PRIMARY KEY,
	Valuated_diamond_id NVARCHAR(25) NOT NULL
	FOREIGN KEY (Valuated_diamond_id) REFERENCES Valuated_diamonds(Id),
)