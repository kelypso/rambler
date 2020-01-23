# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)

roamer = User.create(name: "Conrad", email: "roamer@email.com", username: "roamer", password: "roamer")
scout = User.create(name: "Lacey", email: "scout@email.com", username: "scout", password: "scout")

trip_a = Trip.create(name: "Spain", category: "International", duration: "4/12/2018 - 4/24/2018", user_id: "1")
trip_b = Trip.create(name: "Bishop", category: "Camping", duration: "11/10/2018 - 11/14/2018", user_id: "2")
trip_c = Trip.create(name: "Thailand", category: "International", duration: "10/27/2019 - 11/4/2019", user_id: "2")

entry_a = Entry.create(date: "4/13/2018", location: "Barcelona, Spain", 
                        meals: "croissant with cafe au lait, veggie sandwich, patatas bravas", activities: "toured La Sagrada Familia, climbed at Sharma BCN", encounters: "", 
                        lowlight: "Getting separated at La Sagrada Familia.", delight: "Having the climbing gym nearly to myself.", highlight: "The feeling upon entering La Sagrada Familia is almost etheral. It was a truly other-wordly experience. The colors of the glass are breathtaking, I could have spent hours simply enjoying the light as it danced and glowed.",
                        objectives: "see more of Gaudi's work", photo: "", 
                        user_id: "1", trip_id: "1")
entry_b = Entry.create(date: "4/22/2018", location: "Cadiz, Spain", 
                        meals: "croissant with cafe au lait, aubergine (La Tabernita)", activities: "shopped at Mercado Central, explored the beach at sunset", encounters: "talented accordion man played the National Anthem for us", 
                        lowlight: "Missing the train to Cadiz.", delight: "Chance encounter with the accordion player turned into a very nice encounter.", highlight: "The incredible food at La Tabernita. Learning what an aubergine is and enjoying traditional, amazing tapas for the first time.",
                        objectives: "be on time for the bus to Tarifa", photo: "", 
                        user_id: "1", trip_id: "1")
entry_c = Entry.create(date: "11/11/2018", location: "Bishop, CA", 
                        meals: "blueberry muffin, Burger Barn, campfire pizza", activities: "bouldering", encounters: "", 
                        lowlight: "Separating my shoulder on The Fang.", delight: "Making progress on The Fang!", highlight: "Perfect weather and a great day out with friends!",
                        objectives: "continue progress on The Fang", photo: "", 
                        user_id: "2", trip_id: "2")
entry_d = Entry.create(date: "11/12/2018", location: "Bishop, CA", 
                        meals: "avocado, pb&j, sweet potato pita pockets", activities: "bouldering", encounters: "beta-sharing with random climbers and their dogs on Toothless", 
                        lowlight: "Shoulder was too painful to work on The Fang.", delight: "Great, fun connection with random climbers while working on Toothless. Cute dogs and a relaxing, but rewarding climbing day.", highlight: "An astounding sunset during dinner! The sky was on fire, vibrant oranges and pinks contrasting with stellar blues over the ominous mountainscape.",
                        objectives: "rest and have fun", photo: "", 
                        user_id: "2", trip_id: "2")
entry_e = Entry.create(date: "10/28/2019", location: "Ao Nang, Krabi, Thailand", 
                        meals: "coffee, cooking class dishes, avocado ice cream, pad thai", activities: "cooking class, explored Ao Nang, relaxed on the beach", encounters: "Tony the cooking teacher", 
                        lowlight: "A little bit of conflict with my travelmate during the cooking class. Some passive aggressive energy that resolved over delicious food!", delight: "Exploring the sunset market across from the beach. A lot of veggie-friendly treats; Mini pineapple is amazing!", highlight: "A gorgeous sunset while walking along the beach back to our hotel. The sky was fiery orange with the outlines of the islands in the foreground.",
                        objectives: "enjoy the Phi Phi Islands, get some good photos", photo: "", 
                        user_id: "2", trip_id: "3")
entry_f = Entry.create(date: "10/29/2019", location: "Phi Phi Islands, Krabi, Thailand", 
                        meals: "roti, buffet lunch", activities: "toured the Phi Phi Islands by boat", encounters: "", 
                        lowlight: "Thunderstorm on the way back from the island tour was partially a lowlight and partially a once in a lifetime experience!", delight: "Everything about the island tour! Pileh Lagoon, Maya Beach, monkeys, stunning weather, great guides.", highlight: "Pileh Lagoon was the quintessential Thailand island experience. Pristine waters, longboats everywhere, beautiful landscape, great snorkeling. I don't care how touristy it is, I'll recommend this tour to everyone and do it everytime I visit Krabi!",
                        objectives: "visit Railay, save money on food", photo: "", 
                        user_id: "2", trip_id: "3")