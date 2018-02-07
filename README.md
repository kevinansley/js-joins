# js-joins
Simple Map/Reduce implementation of joins

every join takes 4 parameters: 
1) a "left" data set (Object array)
2) a "right" data set (Object array), 
3) a join function, like: (left, right) => left.someKey === right.someKey
4) a yielding function, which returns an 

## Examples

```
let users = [
  {id:1, name: "Kevin", roleId: 1}, 
  {id:2, name: "John", roleId: 2},
  {id:3, name: "NewGuy", roleId: 3}
]
let roles = [
  {id:1, name: "Programmer"}, 
  {id:2, name: "Designer"},
  {id:5, name: "Coordinator"}
]
```
Using ES6 with spread...
```
import {innerJoin, leftJoin, rightJoin} from 'js-joins'

innerJoin(
  users, 
  roles,
  (u, r) => u.roleId === r.id,
  (u, r) => {...u, role: r.name)
)
/* 
  returns [ 
    { id: 1, name: 'Kevin', roleId: 1, role: 'Programmer' },
    { id: 2, name: 'John', roleId: 2, role: 'Designer' } 
  ]
*/

leftJoin(
  users, 
  roles,
  (u, r) => u.roleId === r.id,
  (u, r) => {...u, role: r.name)
)
/* 
  returns [ 
    { id: 1, name: 'Kevin', roleId: 1, role: 'Programmer' },
    { id: 2, name: 'John', roleId: 2, role: 'Designer' },
    { id: 3, name: 'NewGuy', roleId: 3, role: undefined }
  ]
*/

rightJoin(
  users, 
  roles,
  (u, r) => u.roleId === r.id,
  (u, r) => {...r, user: u.name)
)
/*
  returns [ 
    { id: 1, name: 'Programmer', user: 'Kevin' },
    { id: 2, name: 'Designer', user: 'John' },
    { id: 5, name: 'Coordinator', user: undefined } 
  ]
*/
```
With these examples, we are using the spread operator.
To work in your project doesn't support the spread operation, you can easily use ```(u,r) Object.assign({}, u, {role: r.name})```
