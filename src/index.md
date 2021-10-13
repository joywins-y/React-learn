# 类组件的生命周期函数

**生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁**

## 旧版生命周期
React < 16.0.0

1. constructor（初始化阶段 初始化属性和状态）
    1. 同一个组件对象只会创建一次
    2. **不能**在第一次挂载到页面之前调用setState，为了避免出现问题，构造函数中严禁使用setState

2. 组件进入挂载阶段

3. componentWillMount（挂载阶段）
    1. 正常情况下，和构造函数一样，它只会运行一次
    2. 可以使用setState，但是为了避免bug，不允许使用。因为在某些特殊情况下，该函数可能被调用多次

4. **render**（挂载渲染阶段：组件渲染虚拟DOM）
    1. 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
    2. render可能不止运行一次，只要需要重新渲染，就会重新运行
    3. 严禁使用setState，因为可能会导致无限递归渲染

5. **componentDidMount**（挂载阶段：虚拟DOM已挂载到页面成为真实DOM）
    1. 只会执行一次
    2. 可以使用setState
    3. 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写在该函数中

6. 组件进入活跃状态：属性发生变化（props）、状态发生变化（setState）（更新阶段）

7. componentWillReceiveProps（接收到新的属性值）
    1. 即将接收新的属性值
    2. 参数为新的属性对象
    3. 该函数可能会导致一些bug，所以不推荐使用

8. **shouldComponentUpdate**（主要可以做性能优化）
    1. 指示React是否要重新渲染该组件，通过返回true和false来指定
    2. 默认情况下，会直接返回true

9. componentWillUpdate
    1. 组件即将被重新渲染

10. componentDidUpdate
    1. 往往在该函数中使用dom操作，改变元素

11. **componentWillUnmount**
    1. 通常在该函数中销毁一次组件依赖的资源，比如计时器

## 新版生命周期
React > 16.0.0

React官方认为，某个数据的来源必须是单一的

1. getDerivedStateFormProps
    1. 通过参数可以获取新的属性和状态
    2. 该函数是静态的
    3. 该函数的返回值会覆盖掉组件状态
    4. 该函数几乎是没有什么用的

2. getSnapshotBeforeUpdate
    1. 真实的DOM树构建完成，但还未实际渲染到页面中
    2. 在该函数中，通常用于实现一些附加的dom操作
    3. 该函数的返回值，会作为componentDidUpdate的第三个参数
