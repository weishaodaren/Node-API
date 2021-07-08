// var obj = {},
//   value = null;
// Object.defineProperty(obj, 'num', {
//   get: () => {
//     console.log(`get fn`);
//     return value;
//   },
//   set: (newValue) => {
//     console.log(`set fn`);
//     value = newValue;
//   },
//   enumerable: true,
//   configurable: true,
// });

// obj.num = 1;
// console.log(obj.num);

// function Archiver() {
//   var value = null,
//     archive = [];

//   Object.defineProperty(this, 'num', {
//     get: () => value,
//     set: (value) => {
//       console.log(`set`);
//       value = value;
//       archive.push({ val: value });
//     },
//   });
//   this.getArchive = () => archive;
// }

// var arc = new Archiver();
// arc.num;
// arc.num = 11;
// arc.num = 12;
// console.log(arc.getArchive());

// var obj = { value: 1 },
//   value = 1;

// Object.defineProperty(obj, 'value', {
//   get: () => value,
//   set: (newVal) => {
//     value = newVal;
//     document.getElementById('container').innerHTML = newVal;
//   },
// });

// document.getElementById('button').addEventListener('click', () => {
//   obj.value += 1;
// });

// (() => {
//   var root = this;
//   const watch = (obj, name, func) => {
//     var value = obj[name];

//     Object.defineProperty(obj, name, {
//       get: () => value,
//       set: (newValue) => {
//         value = newValue;
//         func(value);
//       },
//     });

//     if (value) obj[name] = value;
//   };

//   this.watch = watch;
// })();

// var obj = { value: 1 };

// watch(obj, 'value', (newValue) => {
//   document.getElementById('container').innerHTML = newValue;
// });

// document
//   .getElementById('button')
//   .addEventListener('click', () => (obj.value += 1));

// var target = { _prop: 'foo', prop: 'foo' };

// var proxy = new Proxy(target, {
//   get: (obj, prop) => {
//     console.log(`thisis get`);
//     return obj[prop];
//   },
//   set: (obj, prop, value) => {
//     console.log(`this is set`);
//     obj[prop] = value;
//   },
//   has: (obj, prop) => {
//     if (prop[0] === '_') {
//       return false;
//     }
//     return prop in obj;
//   },
// });

// proxy.time = 35;
// console.log(proxy.time);
// console.log('_prop' in proxy);

// let target = {
//   _bar: 'foo',
//   _prop: 'bar',
//   prop: 'baz',
// };

// let handler = {
//   ownKeys: (target) => Reflect.ownKeys(target).filter((key) => key[0] !== '_'),
// };

// let proxy = new Proxy(target, handler);
// for (let key of Object.values(proxy)) {
//   console.log(key);
// }

(() => {
  var root = this;

  watch = (target, func) => {
    var proxy = new Proxy(target, {
      get: (target, prop) => target[prop],
      set: (target, prop, value) => {
        target[prop] = value;
        func(prop, value);
      },
    });

    return proxy;
  };

  this.watch = watch;
})();

var obj = {
  value: 1,
};

var newObj = watch(obj, function (key, newvalue) {
  if (key == 'value') document.getElementById('container').innerHTML = newvalue;
});

document.getElementById('button').addEventListener('click', function () {
  console.log(newObj);
  newObj.value += 1;
});
