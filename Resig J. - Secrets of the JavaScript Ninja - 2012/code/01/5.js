// An example of some tests written to work in YUITest.

Y.example.test.DataTestCase = new Y.Test.Case({ 
    name : "Data Tests", 
    
    setUp : function () { 
        this.data = { 
            name: "test", 
            year: 2007, 
            beta: true 
        }; 
    }, 
    
    tearDown : function () { 
        delete this.data; 
    }, 
    
    testName : function () { 
        var Assert = Y.Assert; 
        
        Assert.isObject(this.data); 
        Assert.isString(this.data.name); 
        Assert.areEqual("test", this.data.name);             
    }, 
    
    testYear : function () { 
        var Assert = Y.Assert; 
        
        Assert.isObject(this.data); 
        Assert.isNumber(this.data.year); 
        Assert.areEqual(2007, this.data.year);             
    }
}); 