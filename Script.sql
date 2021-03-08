--E.B.1 Deletar tabelas
drop table naver.navers;
drop table naver.projects;
drop table naver.projects_navers;

--E.B.1 Criar tabelas
create table naver.navers(
	id uuid,
	name varchar(255),
	job_role varchar(255),
	birthdate date,
	admission_date date,
	created_at timestamp null default now(),
	updated_at timestamp null default now()
)

create table naver.projects(
	id uuid,
	name varchar(255),
	created_at timestamp null default now(),
	updated_at timestamp null default now()
)

create table naver.projects_navers(
	id  SERIAL PRIMARY KEY,
	project_id uuid,
	naver_id uuid
)

--Criar extensão pra utilizar uuid
create extension "uuid-ossp";

--E.B.2 Deletrar dados das tabelas
delete from naver.navers;
delete from naver.projects;
delete from naver.projects_navers ;

--E.B.2 Criar dados das tabelas
insert into naver.navers (
	id,
	name,
	job_role,
	birthdate,
	admission_date
)
values(
	uuid_generate_v4(),
	'Hugo Gomes',
	'Desenvolvedor',
	'1993-08-15',
	'2021-02-12'
)
returning *

insert into naver.projects (
	id,
	name
)
values(
	uuid_generate_v4(),
	'Project 01'
)
returning *;

insert into naver.projects_navers (
	project_id,
	naver_id
)
values(
	'c1f50381-ffa0-4672-acb8-a16c2144be1a',
	'3ee652ca-78bc-4f4a-997d-1da70632d9a5'
)
returning *;

--E.B.3 Querie para ordenar navers por tempo de empresa
select * from naver.navers
order by admission_date;

--E.B.4 Querie para trazer todos os projetos com seus respectivos navers
select 
	p.name, n.name
from naver.projects p
left join naver.projects_navers pn on p.id = pn.project_id 
left join naver.navers n on pn.naver_id = n.id;

--E.B.5 Querie para trazer todos os projetos com sua quantidade de navers
select 
	p.name,
	count(pn.project_id)
from naver.projects p
left join naver.projects_navers pn on p.id = pn.project_id 
group by p.name;
