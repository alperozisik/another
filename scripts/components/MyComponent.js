/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const MyComponentDesign = require('library/MyComponent');

const MyComponent = extend(MyComponentDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || MyComponentDesign.defaults);
    this.pageName = pageName;
  }

);

module && (module.exports = MyComponent);