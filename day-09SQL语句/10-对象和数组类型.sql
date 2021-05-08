# 将联合查询到的数据转化成对象（一对多）
SELECT 
	products.id AS id, products.title AS title, products.price AS price,
	JSON_OBJECT('id', brand.id, 'name', brand.`name`, 'website', brand.website) AS brand
FROM products 
LEFT JOIN brand ON products.brand_id = brand.id 



# 将联合查询到的多条数据组织成对象放到数组中
# 原始查询
SELECT  students.id AS StuID, students.`name` AS StuName, students.`age` AS StuAge, courses.`name` AS CsName, courses.price AS CsPrice
FROM students 
JOIN students_select_courses ON students.id = students_select_courses.student_id
JOIN courses ON students_select_courses.course_id = courses.id



# GROUP BY 之后
SELECT  
	students.id AS StuID, students.`name` AS StuName, students.`age` AS StuAge,
	JSON_ARRAYAGG(JSON_OBJECT('name',courses.`name`, 'price', courses.price)) AS select_course
FROM students 
JOIN students_select_courses ON students.id = students_select_courses.student_id
JOIN courses ON students_select_courses.course_id = courses.id
GROUP BY students.id
