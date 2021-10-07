/**
 * 获取随机数
 * @export
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @return {*} 返回一个min～max之间的随机数
 */
export function getRandom(min, max) {
  const random = Math.random() * (max - min) + min;
  return random;
}
