var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
var productList = [
		{catalogNo:1,name:'brush',category:'hair',price:100},
        {catalogNo:2,name:'mouse',category:'electronics',price:50},
		{catalogNo:8,name:'mouse',category:'electronics',price:50},
        {catalogNo:3,name:'stove',category:'kitchen appliance',price:200},
        {catalogNo:4,name:'keyboard',category:'electronics',price:65},
		{catalogNo:4,name:'keyboard',category:'electronics',price:65},
        {catalogNo:5,name:'monitor',category:'electronics',price:300},
		{catalogNo:6,name:'headset',category:'electronics',price:50},
		{catalogNo:6,name:'headset',category:'electronics',price:50},
		{catalogNo:6,name:'headset',category:'electronics',price:50},
		{catalogNo:6,name:'headset',category:'electronics',price:50},
		{catalogNo:6,name:'headset',category:'electronics',price:50},
		{catalogNo:7,name:'monitor',category:'electronics',price:50},
		{catalogNo:7,name:'monitor',category:'electronics',price:50},
];
app.get("/products", (req, res, next) => {
 res.json(productList);
 res.end();
});