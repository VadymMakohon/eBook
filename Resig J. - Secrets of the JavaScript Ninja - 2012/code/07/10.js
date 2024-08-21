// An example of a test from the Scriptaculous test suite.

new Test.Unit.Runner({
  testSliderBasics: function(){with(this){
    var slider = new Control.Slider('handle1', 'track1');
    assertInstanceOf(Control.Slider, slider);
    assertEqual('horizontal', slider.axis);
    assertEqual(false, slider.disabled);
    assertEqual(0, slider.value);
    slider.dispose();
  }},
  // ...
});