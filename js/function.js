var product = [
		{
			"type":"corei7",
			"producer":"Asus",
			"name":"Laptop Asus A556UF-XX063D Corei7-6500U",
			"price":13319000,
			"img":"Asus-A556UF-XX063D-Corei7-6500U.jpg",
			"info":["Chip: Intel Core i7-6500U (2.5GHz; 4MB Cache)","RAM: 4GB DDR3L","Ổ cứng: 1TB - 5400 RPM","Chipset đồ họa: 2GB DDR3L NVIDIA GeForce 930M","Màn hình: 15.6 inches","Hệ điều hành: Free DOS","Pin: 2 Cell"],
			"numSee":0,
			"numSale":0,
			"madeIn":"Đài Loan"
		}, //1
		{
			"type":"corei7",
			"producer":"Asus",
			"name":"Laptop Asus G752VS-GC175T Corei7-6820HK",
			"price":49990000,
			"img":"AsusG752VS-GC175TCorei7-6820HK.jpg",
			"info":["Chip: Intel Core i7-6820HK (2.7 up to 3.60 GHz)","RAM: DDR4 32GB","Ổ cứng: HDD 1TB + 512GB SSD","Chipset đồ họa: NVIDIA GeForce GTX 1070 with 8GB DDR5","Màn hình: 17.3 Inches","Hệ điều hành: Windows 10","Pin: 8 Cell"],
			"numSee":0,
			"numSale":0,
			"madeIn":"Đài Loan"
		}, //2
		{
			"type":"corei7",
			"producer":"Asus",
			"name":"Laptop Asus ROG-Strix-Hero GL503VD-GZ119T Core i7-7700HQ",
			"price":24209000,
			"img":"Asus-ROG-Strix-Hero-GL503VD-GZ119T-Corei7-7700HQ.jpg",
			"info":["CPU	Intel Core i7 7700HQ 2.8GHz up to 3.8GHz 6MB","RAM	8GB DDR4 2400MHz","Đĩa cứng	SSHD 1TB 5400rpm (8GB Cache)","Card đồ họa	NVIDIA GeForce GTX 1050 4GB GDDR5 + Intel Graphics 630","Màn hình 15.6 Inches FHD (1920 x 1080) IPS Non-Glare, 100% sRGB, 120Hz, 300nits"],
			"numSee":0,
			"numSale":0,
			"madeIn":"Đài Loan"
		}, //3
	]
$(document).ready(function(){
	$("button").click(function(){
		$("h1").append(product[0].info[1]);
	});	
});
