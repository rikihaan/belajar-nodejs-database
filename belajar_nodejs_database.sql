-- Active: 1704795898920@@localhost@33061@belajar_nodejs_database
SELECT * FROM sample;


CREATE TABLE custumers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT constrain_email_unique UNIQUE (email),
    CONSTRAINT constrain_phone_unique UNIQUE (phone)
)ENGINE InnoDB;

SELECT * FROM custumers;

CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
) ENGINE InnoDB;

INSERT into products (id,name,price,stock,category) VALUES
("P001","A",1000,100,"K1"),
("P002","B",2000,200,"K1"),
("P003","C",3000,300,"K1"),
("P004","D",4000,400,"K2"),
("P005","E",5000,500,"K2");

SELECT * FROM products;


create table wallet (
    id VARCHAR(100) not null,
    balance int not null,
    custumer_id VARCHAR(100) not null,
    primary key(id),
    constraint wallet_custumer_id_fk Foreign Key (custumer_id) REFERENCES custumers(id),
    constraint wallet_custumer_id_unique unique (custumer_id)
)engine innoDB;