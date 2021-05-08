# 1聚合函数的使用
# 1.1 求所有手机价格的总和
SELECT SUM(price) AS totalPrice FROM products

# 1.2 求华为手机的价格总和
SELECT SUM(price) FROM products WHERE brand = '华为'

# 1.3 求华为手机的平均价格
SELECT AVG(price) FROM products WHERE brand = '华为'

# 1.4求最高价格和最低价格
SELECT MAX(price) FROM products
SELECT MIN(price) FROM products

# 1.5求华为手机的个数
SELECT COUNT(*) FROM products WHERE brand = '华为'
SELECT COUNT(*) FROM products WHERE brand = '苹果'
SELECT COUNT(url) FROM products WHERE brand = '苹果'

# 1.6去除重复
SELECT COUNT(price) FROM products
SELECT COUNT(DISTINCT price) FROM products


# 2.GROUP BY 的使用
SELECT brand, AVG(price), COUNT(*), AVG(score) FROM products GROUP BY brand


# 3.HAVING 的使用
# HAVING 是对分组之后的内容进行筛选的（和 WHERE 的区别）
SELECT brand, AVG(price), COUNT(*), AVG(score) FROM products GROUP BY brand HAVING AVG(price) > 2000


# 4.需求： 求评分大于7.5分的手机的平均价格
SELECT AVG(price) FROM products WHERE score > 7.5
# 升级，评分大于7.5的手机，按照品牌分类并求出平均价格(注： WHERE 只能紧放在 FROM TABLE 后面)
SELECT brand, AVG(price) FROM products WHERE score > 7.5 GROUP BY brand
 


