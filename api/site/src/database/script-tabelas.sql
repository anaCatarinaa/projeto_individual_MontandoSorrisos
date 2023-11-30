CREATE DATABASE montandoSorrisos;

USE montandoSorrisos;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    dt_nascimento date,
    genero varchar(15),
    data_cadastro datetime default current_timestamp
);

create table endereco(
idEndereco int primary key auto_increment,
estado char(2),
cidade varchar(45),
bairro varchar(255),
rua varchar(255),
numero varchar(15),
fkUsuarioEndereco int,
foreign key (fkUsuarioEndereco) references usuario(id)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;
select * from endereco;


