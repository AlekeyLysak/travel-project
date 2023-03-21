type Card = {
   id: number
   title: string
   date: string
   description: string
   image:string
   category:string
}

const cardsArray:Card[] = [
   {
      id: 1,
      title: 'Moraine lake, Canada',
      date: '08.08.2021',
      description:'Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada.',
      image:'/images/moraine.jpg',
      category: "discovery",
   },
   {
      id: 2,
      title: 'Taj Mahal, India',
      date: '24.04.2019',
      description:'The Taj Mahal is a mausoleum located in Agra, India. It was commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. The construction of the Taj Mahal began in 1632 and was completed in 1653. It is widely considered to be one of the most beautiful buildings in the world and is recognized as a UNESCO World Heritage Site.',
      image:'/images/tajmahal.jpg',
      category: "adventure",
   },
   {
      id: 3,
      title: 'The Great Pyramid of Giza, Egypt',
      date: '08.08.2021',
      description:'The pyramids of Egypt are ancient structures located in Egypt, constructed thousands of years ago by the ancient Egyptians. They were built as tombs for pharaohs and their queens, and were meant to serve as a final resting place for their bodies after death.The most famous of the pyramids is the Great Pyramid of Giza, which was constructed during the reign of the pharaoh Khufu in the 26th century BC.',
      image:'/images/piramid.jpg',
      category: "travel",
   },
   {
      id: 4,
      title: 'Navagio Beach, Greece',
      date: '26.05.2024',
      description:'Navagio Beach is a beautiful beach located on the Greek island of Zakynthos. Also known as Shipwreck Beach, it is one of the most popular tourist destinations in Greece. Navagio Beach is famous for its crystal-clear turquoise waters and its unique location, nestled in a small cove surrounded by towering cliffs. The beach is only accessible by boat, which adds to its exclusive and secluded atmosphere.',
      image:'/images/navagio.jpg',
      category: "travel",
   },
   {
      id: 5,
      title: 'Great Wall of China',
      date: '08.08.2021',
      description:'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. The wall stretches over approximately 13,170 miles (21,196 kilometers) and is considered one of the Seven Wonders of the World.',
      image:'/images/wall.jpg',
      category: "history",
   },
   {
      id: 6,
      title: 'Grand Canyon, USA',
      date: '08.08.2021',
      description:'The Grand Canyon is a massive natural wonder located in the state of Arizona, USA. It is a steep-sided canyon carved by the Colorado River, and it is over 277 miles (446 km) long and up to 18 miles (29 km) wide. The Grand Canyon is considered one of the Seven Natural Wonders of the World and attracts millions of visitors every year from all over the world. It is known for its stunning geological features, including colorful rock formations, towering cliffs, and deep gorges.',
      image:'/images/grand-canyon.jpg',
      category: "adventure",
   },
   {
      id: 7,
      title: 'Angel Falls, Valenzuela',
      date: '08.08.2021',
      description:'Angel Falls is the highest uninterrupted waterfall in the world, located in Canaima National Park in Venezuela. It stands at a height of 979 meters (3,212 feet) and is considered one of the greatest natural wonders on the planet. The falls were named after American aviator Jimmy Angel, who was the first to fly over them in 1933. However, the indigenous Pemon people have known about the falls for centuries and called them "Kerepakupai-merú," which means "waterfall of the deepest place."',
      image:'/images/angel-falls.jpg',
      category: "discovery",
   },
   {
      id: 8,
      title: 'Neuschwanstein castle,Germany',
      date: '08.08.2021',
      description:'Neuschwanstein Castle is a famous 19th-century castle located in Bavaria, Germany. It was commissioned by King Ludwig II of Bavaria and was built as a romantic interpretation of a medieval castle. The castles design was heavily influenced by Wagnerian operas, which the king was a great admirer of. Construction on the castle began in 1869 and continued for over 20 years.',
      image:'/images/neuschwanstein.jpg',
      category: "history",
   },
   {
      id: 9,
      title: 'Masai Mara National Reserve, Kenia',
      date: '08.08.2021',
      description:'Masai Mara National Reserve is a wildlife reserve located in southwestern Kenya. It is named after the Masai people, who are the traditional inhabitants of the area, and the Mara River, which flows through the reserve. The reserve is famous for its diverse wildlife, including the "Big Five" game animals (lion, leopard, elephant, buffalo, and rhinoceros), as well as zebras, wildebeest, giraffes, and many species of birds. It is also home to the annual wildebeest migration, which is one of the largest and most spectacular animal migrations in the world.',
      image:'/images/animals-africa.jpg',
      category: "adventure",
   },
   {
      id: 10,
      title: 'Desert Namib, Namibia',
      date: '08.08.2021',
      description:'The Namib Desert is a coastal desert that stretches for more than 1,200 miles (1,900 kilometers) along the Atlantic coast of southern Africa. The Namib Desert is known for its unique and breathtaking landscapes, including towering red sand dunes, rocky outcrops, and rugged mountains. ',
      image:'/images/namibia.jpg',
      category: "travel",
   },
   {
      id: 11,
      title: 'Terra incognita',
      date: '08.08.2021',
      description:'. . .',
      image:'/images/compass-map.jpg',
      category: "discovery",
   },
   {
      id: 12,
      title: 'Golden Age of Piracy',
      date: '08.08.2021',
      description:'The Golden Age of Piracy is a period of history that occurred between the 1650s and the 1730s. During this time, piracy flourished in the Caribbean, Atlantic and Indian oceans, and many infamous pirate captains like Blackbeard, Calico Jack, Anne Bonny and Captain Kidd gained notoriety.',
      image:'/images/sea-ship.jpg',
      category: "history",
   },
]

export default cardsArray