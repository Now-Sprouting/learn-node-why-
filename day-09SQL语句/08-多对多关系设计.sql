# 创建学生表
CREATE TABLE IF NOT EXISTS `students`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
age INT
);

# 创建课程表
CREATE TABLE IF NOT EXISTS `courses`(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
price DOUBLE NOT NULL
);

INSERT INTO `students` (name, age) VALUES('why', 18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);

INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 777);
INSERT INTO `courses` (name, price) VALUES ('地理', 222);

 
# 当两张表存在多对多关系时，应该再额外创建一张关系表
# 创建关系表
CREATE TABLE IF NOT EXISTS `students_select_courses`(
id INT PRIMARY KEY AUTO_INCREMENT,
student_id INT NOT NULL,
course_id INT NOT NULL,
FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
)


# 学生选课(关系表使用联合组件比较合适)
# why 选择了英语，数学，历史
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 1);
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 3);
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 4);

INSERT INTO students_select_courses (student_id, course_id) VALUES (3, 2);

INSERT INTO students_select_courses (student_id, course_id) VALUES (5, 2);
INSERT INTO students_select_courses (student_id, course_id) VALUES (5, 3);
INSERT INTO students_select_courses (student_id, course_id) VALUES (5, 4);




