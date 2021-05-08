# 插入数据
INSERT INTO `students` VALUES (110, 'ding', '1554245', '2020-10-20', '2020-10-20');

INSERT INTO `students` (name, telPhone, createTime, updataTime)
								VALUES ('kobe', '000-111', '2020-10-10', '2020-10-20')
							


# 删除数据
# 1.删除所有数据
DELETE FROM `students`;
# 2.删除符合条件的数据
DELETE FROM `students` WHERE id = 110;




# 更新数据
# 1.更新所有数据
UPDATE `students` SET `name` = 'lili', telPhone = '010-10101';
# 2.更新符合条件的数据
UPDATE `students` SET `name` = 'lili', telPhone = '010-10101' WHERE id = 114;







								
		