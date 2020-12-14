

CREATE TABLE Cliente
(
	Id int not null identity,
	Nome varchar(200) not null,
	Bairro varchar(200) not null,
	Cidade varchar(200) not null,
	Estado varchar(2) not null
)
GO
create Table Fornecedor
(
	Id int identity,
	Nome varchar(200),
	Usuario varchar(20)
)
GO
create table Ordens
(
	Id int not null identity,
	Fk_Cliente int not null,
	Bairro varchar(200),
	Cidade varchar(200),
	Estado varchar(2),
	TipoServico varchar(50),
	Valor decimal(18,2) not null,
	DataAtendimento datetime not null,
	Descricao varchar(max)
)

insert into Cliente(Nome,Bairro,Cidade,Estado)
values('Juliano Miquelleto','Novo mundo','Curitiba','PR'),
('Suelyn Lopes','Areias','Camboriu','SC'),
('Maria Medeiros','Bigorrilho','Curitiba','PR'),
('José padilha','Portão','Curitiba','PR'),
('Victor Almeida','Santa Regina','Camboriu','SC'),
('Ricardo Alvarez','Agua Verde','Curitiba','PR')
GO
insert into Fornecedor
values ('Aguas de março encanamento'),('Miquelleto Terraplanagem'),
('Valdir eletricista'),('Rei do ar - Ar condicionado')


