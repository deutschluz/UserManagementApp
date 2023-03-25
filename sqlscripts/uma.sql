create table employee(
	id serial primary key,
	first_name varchar(30),
	last_name varchar(30),
	email_id varchar(30)
);

drop table employee;

create table user_(
	id serial primary key,
	first_name varchar(30),
	last_name varchar(30),
	email varchar(30),
	phone varchar(20),
	comments_ text,
	status varchar(20)
);

drop table user_;


--SHOW Dummy Data
select * from persons;
select * from employee;
select * from user_;
--ADD dummy data



insert into user_ (id, first_name, last_name,email,phone,comments_,status)
values(default,'l','o','l@gmail.com',9876543211,'excellent','active');

insert into user_ (id, first_name, last_name,email,phone,comments_,status)
values(default,'hot raddy','rodd','raddy@gmail.com',9876543211,'mediocre','inactive');

insert into employee (id, first_name, last_name,email_id)
values(default,'admin','admin','admin@gmail.com');