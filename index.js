/**
 * Performs an inner join between data sets
 * @param {Object[]} left 
 * @param {Object[]} right 
 * @param {function} on joining function for (left, right)
 * @param {function} yeilding function that defines how you want to represent the join of (left, right)
 */
export function innerJoin(left, right, on, yeilding) {
  return left.map(x => (
    right.filter(y => on(x, y))
      .map(y => yeilding(x, y))
  )).reduce((a, b) => a.concat(b), [])
}

/**
 * Performs a left join between data sets
 * @param {Object[]} left 
 * @param {Object[]} right 
 * @param {function} on joining function for (left, right)
 * @param {function} yeilding function that defines how you want to represent the join of (left, right)
 */
export function leftJoin(left, right, on, yielding) {
  return left.map(x => {
    let val = right.filter(y => on(x, y))
      .map(y => yielding(x, y))
    if (val.length === 0)
      return [yielding(x, {})]
    return val
  }).reduce((a, b) => a.concat(b), [])
}

/**
 * Performs a right join between data sets
 * @param {Object[]} left 
 * @param {Object[]} right 
 * @param {function} on joining function for (left, right)
 * @param {function} yeilding function that defines how you want to represent the join of (left, right)
 */
export function rightJoin(left, right, on, yielding) {
  return right.map(x => {
    let val = left.filter(y => on(x, y))
      .map(y => yielding(x, y))
    if (val.length === 0)
      return [yielding(x, {})]
    return val
  }).reduce((a, b) => a.concat(b), [])
}
