import { cube, foo, graph } from './module2.js';

graph.options = {
    color:'red',
    thickness:'3px'
};

graph.draw();   //
console.log(cube(3)); //27
console.log(foo);  // 3.14  