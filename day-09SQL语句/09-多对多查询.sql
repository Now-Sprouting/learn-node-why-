# 查询所有的选课学生选择的所有课程（三张表进行内连接）
SELECT  students.id AS StuID, students.`name` AS StuName, students.`age` AS StuAge, courses.`name` AS CsName, courses.price AS CsPrice
FROM students 
JOIN students_select_courses ON students.id = students_select_courses.student_id
JOIN courses ON students_select_courses.course_id = courses.id


# 查询所有学生的选课情况
SELECT students.id AS StuID, students.`name` AS StuName, students.`age` AS StuAge, courses.`name` AS CsName, courses.price AS CsPrice
FROM students 
LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
LEFT JOIN courses ON students_select_courses.course_id = courses.id


# 查询哪些学生没有选课
SELECT students.id AS StuID, students.`name` AS StuName, students.`age` AS StuAge, courses.`name` AS CsName, courses.price AS CsPrice
FROM students 
LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
LEFT JOIN courses ON students_select_courses.course_id = courses.id
WHERE courses.`name` IS NULL


# 查询哪些课程没有被选择的(以课程表为主即可)
SELECT *
FROM students 
RIGHT JOIN students_select_courses ON students.id = students_select_courses.student_id
RIGHT JOIN courses ON students_select_courses.course_id = courses.id
WHERE students.`id` IS NULL



# 某一个学生选择了哪些课程
SELECT *
FROM students 
LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
LEFT JOIN courses ON students_select_courses.course_id = courses.id
WHERE students.`name` = 'why'









