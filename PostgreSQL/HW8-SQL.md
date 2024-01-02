### Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

---
##### 1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```
CREATE TABLE employee(
	id INTEGER,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```
---
##### 2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
```
insert into employee (id, name, birthday, email) values (1, 'Alexis', '1918-07-09', 'apriddis0@sohu.com');
insert into employee (id, name, birthday, email) values (2, 'Abramo', '1979-06-08', 'alabb1@tripod.com');
insert into employee (id, name, birthday, email) values (3, 'Renell', '1990-12-29', 'rdewinton2@google.es');
insert into employee (id, name, birthday, email) values (4, 'Ario', '2009-09-08', 'acloake3@discuz.net');
insert into employee (id, name, birthday, email) values (5, 'Dene', '1919-08-28', 'drichford4@bluehost.com');
insert into employee (id, name, birthday, email) values (6, 'Layney', '1972-07-20', 'lpercifer5@businesswire.com');
insert into employee (id, name, birthday, email) values (7, 'Ailbert', '1958-11-12', 'atitterington6@imdb.com');
insert into employee (id, name, birthday, email) values (8, 'Marquita', '1922-01-06', null);
insert into employee (id, name, birthday, email) values (9, 'Hall', '1979-04-03', 'hcarbry8@hexun.com');
insert into employee (id, name, birthday, email) values (10, 'Edouard', '1950-02-12', 'emacaindreis9@cloudflare.com');
insert into employee (id, name, birthday, email) values (11, 'Godfry', '1983-03-08', 'gblatchera@taobao.com');
insert into employee (id, name, birthday, email) values (12, 'Verene', '1902-07-15', null);
insert into employee (id, name, birthday, email) values (13, 'Deeanne', '2009-11-14', null);
insert into employee (id, name, birthday, email) values (14, 'Bryanty', '1993-02-19', null);
insert into employee (id, name, birthday, email) values (15, 'Levy', '1996-12-23', 'lbennise@com.com');
insert into employee (id, name, birthday, email) values (16, 'Gertie', '1938-07-13', 'gfraryf@mac.com');
insert into employee (id, name, birthday, email) values (17, 'Addy', '1938-03-25', 'abrockbankg@storify.com');
insert into employee (id, name, birthday, email) values (18, 'Edie', '1970-08-04', 'ehuberyh@constantcontact.com');
insert into employee (id, name, birthday, email) values (19, 'Abbey', '1929-10-11', 'aabdeei@hexun.com');
insert into employee (id, name, birthday, email) values (20, 'Lorita', '1944-09-01', null);
insert into employee (id, name, birthday, email) values (21, 'Silvana', '1970-09-17', 'smckernank@aol.com');
insert into employee (id, name, birthday, email) values (22, 'Fax', '2006-02-13', 'frenadl@acquirethisname.com');
insert into employee (id, name, birthday, email) values (23, 'Bartram', '1917-01-08', 'bdrainm@networksolutions.com');
insert into employee (id, name, birthday, email) values (24, 'Jilli', '1996-01-10', 'jcoltonn@quantcast.com');
insert into employee (id, name, birthday, email) values (25, 'Carole', '1906-04-27', 'ccullinano@google.com.hk');
insert into employee (id, name, birthday, email) values (26, 'Con', '1939-08-02', 'ctumasianp@feedburner.com');
insert into employee (id, name, birthday, email) values (27, 'Federico', '1994-03-02', 'fbaileq@scribd.com');
insert into employee (id, name, birthday, email) values (28, 'Yolanda', '1962-08-31', 'ywoodberryr@artisteer.com');
insert into employee (id, name, birthday, email) values (29, 'Daron', '1952-01-11', 'dcharnleys@google.ca');
insert into employee (id, name, birthday, email) values (30, 'Garfield', '1900-09-19', 'gkembleyt@desdev.cn');
insert into employee (id, name, birthday, email) values (31, 'Waylon', '2003-05-19', 'wbedellsu@msn.com');
insert into employee (id, name, birthday, email) values (32, 'Lisette', '1951-06-12', 'lgunbyv@ow.ly');
insert into employee (id, name, birthday, email) values (33, 'Marrilee', '1951-09-29', 'mverteyw@msu.edu');
insert into employee (id, name, birthday, email) values (34, 'Lucila', '1986-07-02', 'lromex@addtoany.com');
insert into employee (id, name, birthday, email) values (35, 'Sandro', '1976-07-02', 'soheyney@slate.com');
insert into employee (id, name, birthday, email) values (36, 'Kaitlyn', '1941-11-15', 'kfairbournz@jugem.jp');
insert into employee (id, name, birthday, email) values (37, 'Theobald', '2003-04-18', 'tbussell10@nps.gov');
insert into employee (id, name, birthday, email) values (38, 'Petra', '1903-10-17', 'pcayford11@bloomberg.com');
insert into employee (id, name, birthday, email) values (39, 'Gerhardt', '1982-02-23', 'gsommerland12@de.vu');
insert into employee (id, name, birthday, email) values (40, 'Cortie', '1982-02-23', 'chultberg13@123-reg.co.uk');
insert into employee (id, name, birthday, email) values (41, 'Vanna', '1972-01-24', 'vantill14@meetup.com');
insert into employee (id, name, birthday, email) values (42, 'Phillie', '1937-06-25', 'pswatradge15@digg.com');
insert into employee (id, name, birthday, email) values (43, 'Nertie', '1949-05-04', 'nheynen16@globo.com');
insert into employee (id, name, birthday, email) values (44, 'Lindsy', '1995-09-15', null);
insert into employee (id, name, birthday, email) values (45, 'Wolfy', '1900-10-11', 'wmccudden18@dedecms.com');
insert into employee (id, name, birthday, email) values (46, 'Roxie', '1977-04-25', 'rfrohock19@so-net.ne.jp');
insert into employee (id, name, birthday, email) values (47, 'Dukey', '1974-11-18', 'dinsall1a@icq.com');
insert into employee (id, name, birthday, email) values (48, 'Kermit', '2002-08-03', 'kbools1b@samsung.com');
insert into employee (id, name, birthday, email) values (49, 'Anderea', '1988-10-12', 'asteggals1c@ow.ly');
insert into employee (id, name, birthday, email) values (50, 'Tammy', '1902-03-31', 'tbuzza1d@amazon.com');
```
---

##### 3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
```
UPDATE employee
SET name = 'Albert'
WHERE id = 7

UPDATE employee
SET email = 'albert@imdb.com'
WHERE id = 7

UPDATE  employee  
SET birthday='1999-04-01' 
WHERE id=5 

UPDATE employee
SET name = 'Deanne'
WHERE id = 13

UPDATE employee
SET name = 'Marguita'
WHERE id = 8
```
---
##### 4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
```
DELETE FROM employee
Where id = 7;

DELETE FROM employee
Where name LIKE '%e';

DELETE FROM employee
Where name ILIKE 'a%a';

DELETE FROM employee
WHERE email IS NULL;

DELETE FROM employee
Where id = 47;

```
---