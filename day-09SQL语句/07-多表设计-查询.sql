# 1.多表查询
# 默认情况下查询出两张表的笛卡尔积
SELECT * FROM products, brand

# 对笛卡尔乘积后的结果进行筛选
SELECT * FROM products, brand WHERE products.brand_id = brand.id
 
 
 
 # 多表之间的连接（真实开发中使用的）
 # 2.左连接
 # 2.1 查询出所有手机，以及对应品牌信息
 SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id
 # 2.2 查询没有对应品牌信息的手机
 SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL
 
 
# 3.右连接
# 3.1 查询出所有品牌，以及对应手机信息
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id
# 3.2 查询没有对应手机信息的品牌
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE products.brand_id IS NULL


# 4.内连接
SELECT * FROM products INNER JOIN brand ON products.brand_id = brand.id


# 5.全连接
# MySQL不支持






