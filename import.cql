

//Bangalore City

create (bangalore:City{city:"Bangalore"})

// Locations around city - Koramangala, IndiraNagar, Richmond Town, Jayanagar, Frazer Town

create (koramangala:Location{location:"Koramangala"}),
(koramangala)-[:in]->(bangalore),
(indiraNagar:Location{location:"IndiraNagar"}),
(indiraNagar)-[:in]->(bangalore),
(richmondTown:Location{location:"Richmond Town"}),
(richmondTown)-[:in]->(bangalore),
(jayanagar:Location{location:"Jayanagar"}),
(jayanagar)-[:in]->(bangalore),
(frazerTown:Location{location:"Frazer Town"}),
(frazerTown)-[:in]->(bangalore)


// Black Pearl, Koramangala

create (blackPearl:Restaurant{name:"The Black Pearl",lat:12.934465,lon:77.6138619,
                              address:"Koramangala 5th Block",contactNumber:"080-49652187"}),
(blackPearl)<-[:at]-(koramangala),
(blackPearlBuffet:Buffet{name:"Buffet",price:1000,rating:6,comments:["Buffet is ok","Not that good as heared"]}),
(blackPearl)-[:serves]->(blackPearlBuffet)


// Blu Petal, Koramangala

create (bluPetal:Restaurant{name:"Buff Buffet Buff - BluPetal Hotel",lat:12.933475,lon:77.6130063,
                            address:"Koramangala 5th Block",contactNumber:"080-49652556"}),
(bluPetal)<-[:at]-(koramangala),
(bluPetalBuffet:Buffet{name:"Buffet",price:800,rating:7.5,comments:["Buffet is good with some crispy starters","Ambience is not big but food is awesome"]}),
(bluPetal)-[:serves]->(bluPetalBuffet)

// Barleyz, Koramangala

create (barleyz:Restaurant{name:"Barleyz",lat:12.937622,lon:77.6247849,
                           address:"Koramangala 6th Block",contactNumber:"080-49653421"}),
(barleyz)<-[:at]-(koramangala),
(barleyzBuffet:Buffet{name:"Buffet",price:1000,rating:7,comments:["Buffet is good but service is very bad","Food is just OK","Good place for dinner"]}),
(barleyz)-[:serves]->(barleyzBuffet)

// Beanstalk, IndiraNagar

create (beansTalk:Restaurant{name:"Beanstalk",lat:12.9741115,lon:77.6440359,
                             address:"80 Feet Road, Indiranagar",contactNumber:"080-65358858"}),
(beansTalk)<-[:at]-(indiraNagar),
(beansTalkLatte:Latte{name:"Latte",price:70,rating:8,comments:["The perfect cup of Latte","I can be found here on Sunday"]}),
(beansTalk)-[:serves]->(beansTalkLatte)

// Cafe Coffee Day, IndiraNagar

create (ccd80Feet:Restaurant{name:"Cafe Coffee Day",lat:12.9705503,lon:77.6450284,
        address:"80 Feet Road, Indiranagar",contactNumber:"9243601943"}),
(ccd80Feet)<-[:at]-(indiraNagar),
(ccd80FeetLatte:Latte{name:"Latte",price:90,rating:7,comments:["Same as other CCDs","Ambience is good, good place to enjoy a cup of coffee"]}),
(ccd80Feet)-[:serves]->(ccd80FeetLatte)

// Starbucks Coffee, IndiraNagar

create (starBucks:Restaurant{name:"Starbucks Coffee",lat:12.9655455,lon:77.6395936,
                             address:"100 Feet Road, Indiranagar",contactNumber:"8884678529"}),
(starBucks)<-[:at]-(indiraNagar),
(starBucksBlueberryMuffin:Muffin{name:"Blueberry Muffin",price:140,rating:9,comments:["I love Starbucks Blueberry Muffin"]}),
(starBucks)-[:serves]->(starBucksBlueberryMuffin),
(starBucksChocolateMuffin:Muffin{name:"Java Chip Chocolate Muffin",price:145,rating:9,comments:["Perfect place for Muffin lovers"]}),
(starBucks)-[:serves]->(starBucksChocolateMuffin),
(starBucksWhiteChocolate:Chocolate{name:"White Hot Chocolate",price:130,rating:9,comments:["Great combination of white chocolate and steamed milk"]}),
(starBucks)-[:serves]->(starBucksWhiteChocolate),
(starBucksCappuccino:Cappuccino{name:"Cappuccino",price:155,rating:10,comments:["Probably the best place for Cappuccino lovers"]}),
(starBucks)-[:serves]->(starBucksCappuccino),
(starBucksEspresso:Espresso{name:"Espresso",price:110,rating:8,comments:["Similar to CCD"]}),
(starBucks)-[:serves]->(starBucksEspresso),
(starBucksLatte:Latte{name:"Latte",price:180,rating:10,comments:["Perfect cup of latte, may be a bit costly but worth every penny"]}),
(starBucks)-[:serves]->(starBucksLatte)

// Lazeez Restaurant, Koramangala

create (lazeez:Restaurant{name:"Lazeez",lat:12.9338058,lon:77.6170499,
                          address:"Koramangala 5th Block",contactNumber:"080-49653192"}),
(lazeez)<-[:at]-(koramangala),
(lazeezMuttonBiryani:MuttonBiryani{name:"Mutton Biryani",price:175,rating:9,comments:["How non vegeterian live, awesome mutton Biryani"]}),
(lazeez)-[:serves]->(lazeezMuttonBiryani),
(lazeezChickenBiryani:ChickenBiryani{name:"Chicken Biryani",price:165,rating:7,comments:["Their Chicken Biryani is not as good as Mutton Biryani"]}),
(lazeez)-[:serves]->(lazeezChickenBiryani),
(lazeezChickenIrani:ChickenIrani{name:"Chicken Irani",price:155,rating:8,comments:["I liked it"]}),
(lazeez)-[:serves]->(lazeezChickenIrani),
(lazeezMuttonStew:MuttonStew{name:"Mutton Stew",price:165,rating:8,comments:["A perfect mutton stew"]}),
(lazeez)-[:serves]->(lazeezMuttonStew)

// Hyderabad Biryani House, Richmond Town

create (hyderabadBiryaniHouse:Restaurant{name:"Hyderabad Biryani House",lat:12.9665495,lon:77.6119724,
               address:"Richmond Town",contactNumber:"080-65979401,080-65979203"}),
(hyderabadBiryaniHouse)<-[:at]-(richmondTown),
(hBHMuttonBiryani:MuttonBiryani{name:"Mutton Biryani",price:190,rating:8,comments:["Good place to have mutton biryani","Their Victoria Road shop is much better than their other outlets"]}),
(hyderabadBiryaniHouse)-[:serves]->(hBHMuttonBiryani),
(hBHChickenBiryani:ChickenBiryani{name:"Chicken Biryani",price:180,rating:7,comments:["Their Chicken Birynai is not as good as their Mutton Biryani"]}),
(hyderabadBiryaniHouse)-[:serves]->(hBHChickenBiryani),
(hBHMuttonMughlai:MuttonMughlai{name:"Mutton Mughlai",price:220,rating:8,comments:["I love their mutton biryani and mughlai mutton","Only problem is ambience"]}),
(hyderabadBiryaniHouse)-[:serves]->(hBHMuttonMughlai)

// Savoury Restaurant, Frazer Town

create (savoury:Restaurant{name:"Savoury Restaurant",lat:12.999495,lon:77.6136399,
       address:"Mosque Road, Frazer Town",contactNumber:"080-49336333"}),
(savoury)<-[:at]-(frazerTown),
(savouryMuttonBiryani:MuttonBiryani{name:"Mutton Biryani",price:170,rating:10,comments:["Their Mutton Biryani taste is bit different than others, very good place to overeat, good ambience and parking facility"]}),
(savoury)-[:serves]->(savouryMuttonBiryani),
(savouryMuttonChops:MuttonChops{name:"Mutton Chops",price:240,rating:9,comments:["Perfect place for non vegeterians, wide variety of dishes including arabian, thai, indian and chinese"]}),
(savoury)-[:serves]->(savouryMuttonChops)

// Shivaji Military Hotel, Jayanagar

create (sjMilitaryHotel:Restaurant{name:"Shivaji Military Hotel",lat:12.923791,lon:77.5695039,
        address:"8th Block, Jayanagar",contactNumber:"9845149217,9980739217"}),
(sjMilitaryHotel)<-[:at]-(jayanagar),
(militaryHotelMuttonBiryani:MuttonBiryani{name:"Mutton Biryani",price:175,rating:10,comments:["Awesomest place to have mutton biryani in Bangalore","They beat everyone, best place for biryani"]}),
(sjMilitaryHotel)-[:serves]->(militaryHotelMuttonBiryani),
(militaryHotelChickenBiryani:ChickenBiryani{name:"Chicken Biryani",price:150,rating:9,comments:["I love their chicken biryani, very old hotel. At lunch time, its hard to find place to sit"]}),
(sjMilitaryHotel)-[:serves]->(militaryHotelChickenBiryani),
(militaryHotelNattyChickenBiryani:NattyChickenBiryani{name:"Natty Chicken Biryani",price:175,rating:9,comments:["Superb Natty Chicken Biryani, they have maintaned their taste"]}),
(sjMilitaryHotel)-[:serves]->(militaryHotelNattyChickenBiryani)

// Meghana Foods, Koramangala

create (meghana:Restaurant{name:"Meghana Foods",lat:12.9346267,lon:77.6140836,
        address:"Koramangala 5th Block",contactNumber:"080-49653429"}),
(meghana)<-[:at]-(koramangala),
(meghanaMuttonBiryani:MuttonBiryani{name:"Mutton Biryani",price:265,rating:9,comments:["Heared a lot of this place, very good Biryani"]}),
(meghana)-[:serves]->(meghanaMuttonBiryani),
(meghanaChickenBiryani:ChickenBiryani{name:"Chicken Biryani",price:215,rating:8,comments:["As good as their Mutton Biryani"]}),
(meghana)-[:serves]->(meghanaChickenBiryani),
(meghanaPrawnsBiryani:PrawnsBiryani{name:"Prawns Biryani",price:275,rating:8,comments:["Among very few places where you can get prawns Biryani"]}),
(meghana)-[:serves]->(meghanaPrawnsBiryani),
(meghanaChillyPaneer:ChillyPaneer{name:"Chilly Paneer",price:195,rating:7,comments:["It was good"]}),
(meghana)-[:serves]->(meghanaChillyPaneer)