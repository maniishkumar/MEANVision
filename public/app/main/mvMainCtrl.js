app.controller('mvMainCtrl', function($scope) {
    $scope.myVar = "Hello Angular, Lets explore the world";
    $scope.courses = [
    	{name:"C# 3.0 version", featured:true, published:new Date('12/12/2014')},
    	{name:"Handbook on node js", featured:true, published:new Date('1/1/2010')},
    	{name:"Angular js in 21 days", featured:true, published:new Date('1/1/2010')},
    	{name:"JQuery in Action", featured:false, published:new Date('1/1/2010')},
    	{name:"Meluha", featured:true, published:new Date('1/1/2010')},
    	{name:"Social Justice", featured:false, published:new Date('1/1/2010')},
    	{name:"Premchand a social hero", featured:true, published:new Date('1/1/2010')},
    	{name:"Indian Consitituation", featured:true, published:new Date('1/1/2010')},
    	{name:"ASP.NET complete", featured:true, published:new Date('1/1/2010')},
    	{name:"Node js in action", featured:true, published:new Date('1/1/2010')},
    	{name:"Backbone js", featured:true, published:new Date('1/1/2010')},
    	{name:"Require js", featured:false, published:new Date('1/1/2010')},
    	{name:"Thunderworld", featured:true, published:new Date('1/1/2010')},
    	{name:"World in 20 days", featured:true, published:new Date('1/1/2010')},
    	{name:"ITIL Foundation", featured:false, published:new Date('1/1/2010')},
    	{name:"Cobit Foundation", featured:true, published:new Date('10/10/2011')},
    	{name:"XBRL", featured:false, published:new Date('11/11/2014')},
    	{name:"Cloud credentials", featured:true, published:new Date('1/1/2010')},
    	{name:"Metricus", featured:false, published:new Date('1/1/2010')}
    ]
});