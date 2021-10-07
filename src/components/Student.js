import React from 'react'

export default function Student(props) {
    // 分开传递学生数据
    return (
        <li>
            {/* 显示一个学生到所有数据 */}
            【姓名】 {props.name}
            【性别】 {props.sex === 1 ? '男' : '女'}
            【email】 {props.email}
            【出生年份】 {props.birth}
        </li>
    )
}
