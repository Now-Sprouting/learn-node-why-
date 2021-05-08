# 新建表
CREATE TABLE IF NOT EXISTS `products` (
id INT PRIMARY KEY AUTO_INCREMENT,
brand VARCHAR(20),
title VARCHAR(100) NOT NULL,
price DOUBLE NOT NULL,
score DECIMAL(2,1),
voteCnt INT,
url VARCHAR(100),
pid INT
)


# 1.基本查询
# 查询表中所有字段以及所有的数据
SELECT * FROM products;
# 查询指定字段
SELECT title, price FROM products;
# 对字段结果起一个别名
SELECT title as newTitle, price FROM products;



# 2.where 条件
# 2.1条件判断语句
# 案例： 查询价格小于1000的手机
SELECT title, price FROM products WHERE price < 1000;
# 案例： 查询价格等于 999 的手机
SELECT title, price FROM products WHERE price = 999;
# 案例： 查询价格不等于 999 的手机
SELECT title, price FROM products WHERE price != 999
# 案例： 查询品牌是华为的手机
SELECT * FROM products WHERE brand = '华为'



# 2.2逻辑运算语句
# 案例： 查询价格大于 999 小于 1999 的手机
SELECT * FROM products WHERE price > 999 AND price < 1999;
# BETWEEN AND包含等于
SELECT * FROM products WHERE price BETWEEN 999 AND 1999;
# 案例： 价格在5000以上或者品牌是华为的手机
SELECT * FROM products WHERE price > 5000 OR brand = '华为'

-- UPDATE products SET url = NULL WHERE id >= 85 AND id <= 88;
#案例查询 url 为(不为) NULL 的数据
SELECT * FROM products WHERE url IS NULL;
SELECT * FROM products WHERE url IS NOT NULL;




# 2.3模糊查询
SELECT * FROM products WHERE title LIKE '%O%'
SELECT * FROM products WHERE title LIKE '_P%'


# 2.4表示取多个值中的一个即可
SELECT * FROM products WHERE brand = '华为' OR brand = '苹果' OR brand = '小米'
-- 等价于
SELECT * FROM products WHERE brand IN ('华为', '苹果', '小米')





# 3.结果排序
SELECT * FROM products WHERE brand IN ('华为', '苹果', '小米') ORDER BY price ASC, score DESC


# 4.分页查询
# LIMIT limit OFFSET offect
SELECT * FROM products LIMIT 20 OFFSET 0
SELECT * FROM products LIMIT 20 OFFSET 20
# LIMIT offect, limit
SELECT * FROM products LIMIT 0, 40








