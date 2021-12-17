// module "module2.js"
function cube(x) {
    return x * x * x;
  }
  
  const foo = Math.PI ;  // 3.14
  
  var graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('From graph draw function');
    }
  }
  
  export { cube, foo, graph };