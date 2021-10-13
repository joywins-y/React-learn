import React from "react";
import ThreeLayout from "./components/ThreeLayout";

export default function App() {
  return (
    <div>
      <ThreeLayout
        left={
          <div
            style={{
              border: "2px solid #f40",
            }}
          >
            <h1>left区域</h1>
            <p>大家刷卡机扩散开奶茶新技能南山牧场你吃什么菜jades开始</p>
          </div>
        }
        right={
          <div
            style={{
              border: "2px solid blue",
            }}
          >
            <h1>right区域</h1>
            <p>大家刷卡机扩散开奶茶新技能南山牧场你吃什么菜jades开始</p>
          </div>
        }
        gap={50}
      >
        <div
          style={{
            border: "2px solid #f40",
          }}
        >
          <h1>主区域</h1>
          <p>大家刷卡机扩散开奶茶新技能南山牧场你吃什么菜jades开始</p>
        </div>
      </ThreeLayout>
    </div>
  );
}
