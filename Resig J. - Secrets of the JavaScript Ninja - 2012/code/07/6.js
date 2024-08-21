// A case of using <code>with(){}</code> in the base2 JavaScript library.

var Rect = Base.extend({
  constructor: function(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.right = left + width;
    this.bottom = top + height;
  },

  contains: function(x, y) {
    with (this)
      return x >= left && x <= right && y >= top && y <= bottom;
  },

  toString: function() {
    with (this) return [left, top, width, height].join(",");
  }
});