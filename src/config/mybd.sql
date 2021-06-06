create database tickets_node;
use tickets_node;

create table categoria (
id INT NOT NULL auto_increment,
nombre varchar(50) NOT NULL,
primary key(id)
);

create table personal (
id INT NOT NULL auto_increment,
nombre varchar(50) NOT NULL,
apellidos varchar(80) NOT NULL,
telefono varchar(10) NULL,
direccion varchar(150) NULL,
primary key(id)
);

create table tickets (
id INT NOT NULL auto_increment,
nombre varchar(50) NOT NULL,
descripcion varchar(80) NOT NULL,
prioridad varchar(10) NOT NULL,
personal INT NOT NULL,
categoria INT NOT NULL,
estatus varchar (3) NOT NULL,
FOREIGN KEY (personal) REFERENCES personal(id),
FOREIGN KEY (categoria) REFERENCES categoria(id),
primary key(id)
);