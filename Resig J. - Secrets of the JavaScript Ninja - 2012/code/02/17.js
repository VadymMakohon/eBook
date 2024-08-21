// Examining context within a function.

var katana = {
  isSharp: true,
  use: function(){
    this.isSharp = !this.isSharp;
  }
};
katana.use()
assert( !katana.isSharp, "Verify the value of isSharp has been changed." );