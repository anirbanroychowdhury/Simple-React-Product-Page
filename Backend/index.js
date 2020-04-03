var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
var productList = [
		{catalogNo:1,name:'brush',category:'hair',price:100,img:''},
        {catalogNo:2,name:'mouse',category:'electronics',price:50,img:''},
		{catalogNo:8,name:'mouse',category:'electronics',price:50,img:''},
        {catalogNo:3,name:'stove',category:'kitchen appliance',price:200,img:''},
        {catalogNo:4,name:'keyboard',category:'electronics',price:65,img:''},
		{catalogNo:4,name:'keyboard',category:'electronics',price:65,img:''},
        {catalogNo:5,name:'monitor',category:'electronics',price:300,img:''},
		{catalogNo:6,name:'headset',category:'electronics',price:50,img:''},
		{catalogNo:6,name:'headset',category:'electronics',price:50,img:''},
		{catalogNo:6,name:'headset',category:'electronics',price:50,img:''},
		{catalogNo:6,name:'headset',category:'electronics',price:50,img:''},
		{catalogNo:6,name:'headset',category:'electronics',price:50,img:''},
		{catalogNo:7,name:'monitor',category:'electronics',price:50,img:''},
		{catalogNo:7,name:'monitor',category:'electronics',price:50,img:''},
];
app.get("/products", (req, res, next) => {
 res.json(productList);
 res.end();
});