# 查看所有表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS students(
	`name` VARCHAR(10) NOT NULL,
	`age` INT,
	`score` INT,
	`phoneNum` VARCHAR(20) UNIQUE,
);

#删除表
DROP TABLE IF EXISTS `students`

#完整创建表的过程
CREATE TABLE IF NOT EXISTS student(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`age` INT DEFAULT 0,
	`phoneNum` VARCHAR(20) UNIQUE DEFAULT '',
	`createTime` TIMESTAMP 
);

#修改表
# 1.修改表名字
ALTER TABLE `student` RENAME TO `students`;
# 2.添加一个新列
ALTER TABLE `students` ADD `updataTime` TIMESTAMP;
# 3.修改字段名称
ALTER TABLE `students` CHANGE `phoneNum` `telPhone` VARCHAR(20);
# 4.修改字段类型
ALTER TABLE `students` MODIFY `name` VARCHAR(30);
# 5.删除某一个字段
ALTER TABLE `students` DROP `age`;


#根据一张表 结构 创建另一张表
CREATE TABLE `students_copy` LIKE `students`;
#根据一张表 内容 创建另一张表（只复制内容加结构 主键等信息不复制）
CREATE TABLE `students1` (SELECT * FROM `students`);


#需求 ： createTime 和 updataTime可以自动设置值
ALTER TABLE `students` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `students` MODIFY `updataTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;













