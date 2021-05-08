# 1.创建 brand 表并插入数据
CREATE TABLE IF NOT EXISTS `brand`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
website VARCHAR(100),
worldRank INT
);

INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('华为', 'www.huawei.com', 1);
INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('小米', 'www.mi.com', 10);
INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('苹果', 'www.apple.com', 5);
INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('oppo', 'www.oppo.com', 15);
INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('京东', 'www.jd.com', 3);
INSERT INTO `brand` (name, website, worldRank) 
						VALUES ('Google', 'www.google.com', 8);
						
						
# 2.创建外键的两种方式# 2.1在创建表中设置外键
FOREIGN KEY (brand_id) REFERENCES brand(id)
# 2.1表创建好的情况下额外添加外键
ALTER TABLE products ADD brand_id INT
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES brand(id);


# 3.修改和删除外键引用的 id
# 3.1 默认情况下不能进行的操作
UPDATE brand SET id = 100 WHERE id = 1



# 4.修改 brand_id 关联外键时的 action















