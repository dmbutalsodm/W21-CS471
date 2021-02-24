# W21-CS471

Database tables:

CREATE TABLE "employees" (
	"employeeid"	INTEGER,
	"employeefirstname"	TEXT,
	"employeelastname"	TEXT,
	"username"	TEXT UNIQUE,
	"password"	TEXT,
	PRIMARY KEY("employeeid")
);