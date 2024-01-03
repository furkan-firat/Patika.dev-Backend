### Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

---
##### 1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

```
SELECT COUNT(*) FROM film
WHERE length > (SELECT AVG(length) FROM film);

```
---
##### 2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
```
SELECT COUNT(*) FROM film
WHERE rental_rate = (SELECT MAX(rental_rate) from film);
```
---

##### 3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
```

SELECT title FROM film
WHERE rental_rate = (SELECT MIN(rental_rate) FROM film) 
	AND 
	replacement_cost = (SELECT MIN(replacement_cost) FROM film);
```
---
##### 4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

```
SELECT
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    COUNT(payment.payment_id) AS total_purchases
FROM
    customer
INNER JOIN
    payment ON customer.customer_id = payment.customer_id
GROUP BY
    customer.customer_id, customer.first_name, customer.last_name
ORDER BY
    total_purchases DESC;

```
---
##### EKSTRA: payment tablosunda en çok para harcayan müşterileri(customer) sıralayınız. harcadıkları toplam para ve kaç adet sipariş verdiklerini de gösteriniz.
```
SELECT customer.customer_id, customer.first_name, SUM(amount), COUNT(payment.payment_id) AS total_purchases
FROM payment
INNER JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id
ORDER BY SUM(amount) DESC;

```
---