import React, { useState, createContext } from "react";

export const store = createContext();

const StoredData = (props) => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Avatara Purusha [Part-01]",
            image: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/14/w900X450/Avatara.jpg?w=400&dpr=2.6",
            category: "Sandelwood",
            Genres: "Drama",
            descriptionSmall: "Siri hires an unsuccessful actor to play her missing brother in front of her parents to bring the family back together. Black magic also plays a role. Siri hires an unsuccessful actor to play her missing brother in front of her parents to bring the family back together.",
            description: "The story is about Dharka and Brahma Jois fight over the Trishanku Mani.In this battle of Mantras and soon after Brahma Jois turns up dead, prior to his death in order to protect his family he developed the Ashta Digbandhana and hides the Trishanku Mani in his house.Will Dharka find it?"
        },
        {
            id: 2,
            title: "Yuvaratha",
            image: 'https://m.media-amazon.com/images/M/MV5BMDg4ZjVhZGUtNmFlNC00YWE0LWE1ZGEtYzU4Y2FmNDY1MTExXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg',
            category: "Sandelwood",
            descriptionSmall:"Yuvarathnaa, like Rajakumaara, is a tale about human values. This time, though, the backdrop is of a college campus. For those who like their masala entertainers, this one will not disappoint.",
            description: "Yuvarthna, revolves around RK University( Govt Aided College ) which is at the standard point of completing 50 glorious years.Gurudev, Principal at Rk University, whose life is dedicated for the welfare of the college and fights against the privatisation of educational system. The story entwines between the bond of a teacher and his students. "
        },
        {
            id: 3,
            title: "Roberrt",
            image: "https://pbs.twimg.com/media/ES9wpWQUwAEzfcK.jpg",
            category: "Sandelwood",
            descriptionSmall:"Roberrt is a 2021 Indian Kannada-language action thriller film written and directed by Tharun Sudhir and produced by Umapathy Srinivasa Gowda under the banner of Umapathy Films. The film stars Darshan, Vinod Prabhakar, Jagapathi Babu, Ravi Kishan, debutante Asha Bhat, Devaraj and P. Ravi Shankar.",
            description: `Raghava lives in Lucknow with his son Arjun and he is the head cook in Brahmin's Catering unit.He leads a peaceful existance, wanting the best for his son.All seems to go well, untill some skeletons cometumbling out of his closest and he is forced to take on his original avatar `
        },
        {
            id: 4,
            title: "Rathaavara",
            image: "https://www.filmibeat.com/ph-big/2015/09/rathaavara-poster_144257020630.jpg",
            category: "Sandelwood",
            descriptionSmall:"Rathaavara is a 2015 Indian Kannada-language action thriller film written and directed by Chandrashekar Bandiyappa and produced by Dharmashree Manjunath. It stars Sri Murali and Rachita Ram in the lead roles.Ratha, a local mob, works as a right hand to a gangster cum politician Manikanta. Things will be going on good with both of them until Manikanta assigns Ratha an easy yet hesitant task to do. Ratha gets trapped in a quest of unluck and curses when he fails at the work which he had been told. ",
            description: "Manikanta(Ravi Shakar) is an MLA and local gangstar that he has a dream to becoming a CM.Rathavara(Sri Murli) is his right hand man to him.A fortune tells Manikanta that if he wants to become the CM he has to see the dead face of a transgender.So, he insists that Rathavara give him a transgender's body.Watch the full movie to know whether Manikanta's desire is fullfilled or not?"
        },
        {
            id: 5,
            title: "99",
            image: "https://www.itl.cat/pngfile/big/305-3059130_99-kannada-movie-review.jpg",
            category: "Sandelwood",
            descriptionSmall:"The '99' movie revolves under an emotional story of a two old school sweethearts. Ram and Janu meets after 20 years of sharing their heartwarming unconditional hidden love.",
            description: "Ramachandra and Janaki meet up 20 years after graduating high school, class of 1999, at a reunion party. Ramachandra and Janaki meet up 20 years after graduating high school, class of 1999, at a reunion party. Ramachandra and Janaki meet up 20 years after graduating high school, class of 1999, at a reunion party."
        },
        {
            id: 6,
            title: "Love Mocktail",
            image: "https://m.media-amazon.com/images/M/MV5BNzNmYTllODgtZjUzYy00MTk2LTg5OGItYWQ5NjEzYWI1YTVmXkEyXkFqcGdeQXVyNjIwNzA2NzY@._V1_.jpg",
            category: "Sandelwood",
            descriptionSmall:"Love Mocktail is a 2020 Indian Kannada-language romantic drama film directed and written by Darling Krishna in his directorial debut. The film was released on 31 January 2020. The film was produced by Krishna and Milana Nagaraj, who also star in the film. The plot follows the story of Aadi on his quest to find true love.",
            description: "Love Mocktail is a romantic and fun film about the Protogonist Aadi's quest for love. Life takes him through a roller coaster ride and goes through varied experience at several stages throughout his search for true love.Watch the full movie to know does Aadi finally find his Soulmate?"
        },
        {
            id: 7,
            title: "Rathnan Prapancha",
            image: "https://pbs.twimg.com/media/EePPLX9UcAEAWJ2.jpg",
            category: "Sandelwood",
            descriptionSmall:"Rathnan Prapancha (Rathna's World) is a 2021 Indian Kannada-language comedy drama film written and directed by Rohit Padak and produced by Karthik and Yogi G Raj under the banner KRG Studios.The film stars Dhananjay,Malayalam actress-Reba Monica John in her Kannada debut.Rathnan Prapancha revolves around Rathnakara, an insurance agent in Bangalore, who is awaiting his transfer order to Mumbai who lives a dull life with his cunning mother Saroja, who is irritated by his mother's antics.",
            description: "Rathnan Prapancha is a travel dramedy that tells the role of Ratnaka, an average middle class guy in his late twenties.Rathnan Prapancha revolves around Rathnakara, an insurance agent in Bangalore, who is awaiting his transfer order to Mumbai who lives a dull life with his cunning mother Saroja, who is irritated by his mother's antics. He learns from a journalist Mayuri that he was adopted as an infant by Saroja and leaves his home to find his real world. During the Journey, Rathnakara realizes that blood relations are not important, but the one who took care of us lovingly are important in our life. He calls Saroja, only to find that Saroja has died from a Heart attack, leaving Rathnakara devastated. Rathnakara leaves for his home and cancels his transfer order to live with his family and in rememberence to Saroja."
        },
        {
            id: 8,
            title: "Bazaar",
            image: "https://media-images.mio.to/various_artists/B/Bazaar%20%282018%29/Art-350.jpg",
            category: "Sandelwood",
            descriptionSmall:"Bazaar (Market) is an Indian Kannada action crime film directed by Suni and produced by Thimmegowda under Bharathi Film Productions banner. The film stars Dhanveer Gowda,a debutant and Aditi Prabhudeva in the lead roles.The film's plot deals with the gambling process involved in the pigeon racing ",
            description: "Bazaar movie revolves under a Kalki who always dreams of being a pigeon racer. He falls in love with Pari. Pari works as a fashion designer hailing from a middle-class family. Kalki is from a gangster family. How does their life change when both fall head over heels with each other forms crux of the movie."
        },
        {
            id: 9,
            title: "Avane Srimannarayana",
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3cc3a183160477.5d341cfc05cc7.png",
            category: "Sandelwood",
            descriptionSmall:"Avane Srimannarayana (He is Srimannarayana) is a 2019 Indian Kannada-language fantasy adventure comedy film directed and edited by Sachin B. Ravi in his directorial debut. The film features Rakshit Shetty and Shanvi Srivastava in lead roles.The film follows a corrupt police officer who takes on a bandit chief in order to recover a missing treasure in the 1980s. ",
            description: "Avane Srimannarayana is the kind of film where Indiana Jones meets the Spaghetti Western to pave the way for a story with a punchy mythological twist. The story is set in a fantasy land called Amaravathi where, in pursuit of solving the disappearance of some ancient treasure, a quirky cop called Narayana (Rakshit Shetty) has to rub shoulders with and get past the head of a dacoit clan, Jayaram and a local, conniving politician Tukaram. The story follows Narayana’s efforts to find the missing treasure and save the locals from the tyranny of Jayaram."
        },
        {
            id: 10,
            title: "Pailwaan",
            image: "https://wallpapercave.com/wp/wp7502403.jpg",
            category: "Sandelwood",
            descriptionSmall:"Pailwaan (Wrestler) is a 2019 Indian Kannada-language sports-masala film[3] written and directed by S. Krishna. It stars Sudeepa, Sunil Shetty and Aakanksha Singh in the lead roles. The film follows the journey of an orphan who goes on to become a wrestler and a boxer while getting into brawls with those who disrupt his personal life.",
            description: " 'Pailwan' marks Sunil Shetty's debut in Kannada cinema. The score and soundtrack of the film was composed by Arjun Janya. The film follows the journey of an orphan who goes on to become a wrestler and a boxer while getting into brawls with those who disrupt his personal life.Sarkar (Suniel Shetty) is a wrestling coach, who wants his adapted son Krishna (Sudeep) to win national championship. He trains Krishna (Sudeep) to fulfil his dream, but the latter commits a mistake by falling in love with Rukmini (Aakanksha Singh). This leads to the breakup between father and son. How Krishna reunites with his father and fulfils his dream form the crux of the story."
        },
        {
            id: 11,
            title: "Machine Learning",
            image: "https://www.techfunnel.com/wp-content/uploads/2021/12/machine-learning-trends.png",
            category: "Technology",
            descriptionSmall:"Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.",
            description: "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.Machine learning is important because it gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products. Many of today's leading companies, such as Facebook, Google and Uber, make machine learning a central part of their operations. Machine learning has become a significant competitive differentiator for many companies."
        },
        {
            id: 12,
            title: "Artificial Intelligence",
            image: "https://miro.medium.com/max/939/1*4JASKqzRvkOLV1mb63RBIw.png",
            category: "Technology",
            descriptionSmall:"Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.",
            description: `Artificial intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment.The basic purpose of AI is to enable computers to execute such intellectual jobs as decision making, trouble resolving, understanding, understanding human interaction (in any kind of language, as well as convert amongst them), and so on.Prominent examples of AI software used in everyday life include voice assistants, image recognition for face unlock in mobile phones, and ML-based financial fraud detection. AI software usually involves just downloading software with AI capabilities from an online store and requires no peripheral devices.`
        },
        {
            id: 13,
            title: "Robotics",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
            category: "Technology",
            descriptionSmall:"Robotics is a branch of engineering that involves the conception, design, manufacture and operation of robots.",
            description: `Robotics is an interdisciplinary branch of computer science and engineering.[1] Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans. Robotics integrates fields of mechanical engineering, electrical engineering, information engineering, mechatronics, electronics, bioengineering, computer engineering, control engineering, software engineering, mathematics, etc.Robotics develops machines that can substitute for humans and replicate human actions. Robots can be used in many situations for many purposes, but today many are used in dangerous environments (including inspection of radioactive materials, bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g. in space, underwater, in high heat, and clean up and containment of hazardous materials and radiation).`
        },
        {
            id: 14,
            title: "Foldable Tech Devices",
            image: "https://i0.wp.com/thewincentral.com/wp-content/uploads/2017/10/Surface-Phone-concepts.jpg?fit=1227%2C621&ssl=1",
            category: "Technology",
            descriptionSmall:"Samsung entered this realm recently with their popular Galaxy smartphone line of folding new technology inventions.",
            description: `Samsung entered this realm recently with their popular Galaxy smartphone line of folding new technology inventions.

            At CES 2022, we witnessed ASUS enter the fray with the introduction of the Zenbook 17 Fold.
            
            Featuring a huge 17.3-inch screen, the versatile screen functions as a laptop, tablet, book or even a PC.
            
            Indeed, users may attach a Bluetooth keyboard and touchpad to the bottom half, and the Zenbook transforms into a fully functional laptop. Or simply fold it in half to use the virtual on-screen keyboard.
            
            Fold it in half, and the size shrinks down to just 12.5 inches. Compact enough to carry easily in your arms, backpack, or messenger bag.
            
            It also comes equipped with all the bells and whistles including an OLED screen, HDR, Dolby Atmos, and much more.`
        },
        {
            id: 15,
            title: "Block chain",
            image: "https://platoonline.com/wp-content/uploads/2021/04/mhlnews_10632_blockchain_2.png",
            category: "Technology",
            descriptionSmall:"Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.",
            description: `A blockchain is a type of Digital Ledger Technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leafs).Blockchains are typically managed by a peer-to-peer (P2P) computer network for use as a public distributed ledger, where nodes collectively adhere to a consensus algorithm protocol to add and validate new transaction blocks.A blockchain is a decentralized ledger of all transactions across a peer-to-peer network. Using this technology, participants can confirm transactions without a need for a central clearing authority. Potential applications can include fund transfers, settling trades, voting and many other issues. `
        },
        {
            id: 16,
            title: "Digital Medicine",
            image: "https://wallpaper.dog/large/20383216.jpg",
            category: "Technology",
            descriptionSmall:"Digital medicine won’t replace doctors any time soon, but apps that monitor conditions or administer therapies could enhance their care and support patients with limited access to health services.",
            description: `Digital medicine won’t replace doctors any time soon, but apps that monitor conditions or administer therapies could enhance their care and support patients with limited access to health services. Many smart watches can already detect if their wearer has an irregular heartbeat, and similar tools are being worked on that could help with breathing disorders, depression, Alzheimer’s and more. Pills containing sensors are even being developed – these send data to apps to help detect things like body temperature, stomach bleeds and cancerous DNA.`
        },
        {
            id: 17,
            title: "Quantum Sensing",
            image: "https://wallpaper.dog/large/10908250.jpg",
            category: "Technology",
            descriptionSmall:"Imagine self-driving cars that can “see” around corners, or portable scanners that can monitor a person’s brain activity. Quantum sensing could make these things and much more a reality.",
            description: `Imagine self-driving cars that can “see” around corners, or portable scanners that can monitor a person’s brain activity. Quantum sensing could make these things and much more a reality. Quantum sensors operate with extreme levels of precision by exploiting the quantum nature of matter – for example, using the difference between electrons in different energy states as a base unit. Most of these systems are complex and expensive, but smaller, more affordable examples are being developed that could open up new uses.`
        },
        {
            id: 18,
            title: "3D Printing",
            image: "https://fabbaloo.com/wp-content/uploads/2020/05/image-asset_img_5eb093302956c.jpg",
            category: "Technology",
            descriptionSmall:"A key trend in innovation and technology is 3D printing which is used to formulate prototypes. This technology has been impactful in the biomedical and industrial sectors. None of us thought of printing a real object from a printer, while right now, it’s a reality.",
            description: `A key trend in innovation and technology is 3D printing which is used to formulate prototypes. This technology has been impactful in the biomedical and industrial sectors. None of us thought of printing a real object from a printer, while right now, it’s a reality. So, 3D printing is another innovation that’s here to stay. For companies in the data and healthcare sector that require a lot of 3D printing for their products, various jobs pay well and are international. All you need is a sound knowledge of AI, Machine Learning, Modeling, and 3D printing. `
        },
        {
            id: 19,
            title: "Internet of Things (IoT)",
            image: "https://media.istockphoto.com/vectors/the-concept-of-iot-technology-on-a-blue-background-the-concept-of-vector-id1150351738?k=20&m=1150351738&s=170667a&w=0&h=uvWfXyF6pAv1W_kaPEGzakI1cOEGKwiyNq_vIKJUwkk=",
            category: "Technology",
            descriptionSmall:"Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT. The Internet of Things is the future, and has already enabled devices, home appliances, cars and much more to be connected to and exchange data over the Internet.",
            description: `Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT. The Internet of Things is the future, and has already enabled devices, home appliances, cars and much more to be connected to and exchange data over the Internet.As consumers, we’re already using and benefitting from IoT. We can lock our doors remotely if we forget to when we leave for work and preheat our ovens on our way home from work, all while tracking our fitness on our Fitbits. However, businesses also have much to gain now and in the near future. The IoT can enable better safety, efficiency and decision making for businesses as data is collected and analyzed. It can enable predictive maintenance, speed up medical care, improve customer service, and offer benefits we haven’t even imagined yet.`
        },
        {
            id: 20,
            title: "5G",
            image: "https://media.istockphoto.com/photos/waiter-hand-holding-an-empty-digital-tablet-with-smart-city-and-5g-picture-id889321368?k=20&m=889321368&s=612x612&w=0&h=Ou_RlmoVRLIRyFBslcPBc07CLEgz3dOBmXQc5yQ_fjM=",
            category: "Technology",
            descriptionSmall:"The next technology trend that follows the IoT is 5G. Where 3G and 4G technologies have enabled us to browse the internet, use data driven services, increased bandwidths for streaming on Spotify or YouTube and so much more, 5G services are expected to revolutionize our lives.",
            description: `The next technology trend that follows the IoT is 5G. Where 3G and 4G technologies have enabled us to browse the internet, use data driven services, increased bandwidths for streaming on Spotify or YouTube and so much more, 5G services are expected to revolutionize our lives. by enabling services that rely on advanced technologies like AR and VR, alongside cloud based gaming services like Google Stadia, NVidia GeForce Now and much more. It is expected to be used in factories, HD cameras that help improve safety and traffic management, smart grid control and smart retail too.Just about every telecom company like Verizon, Tmobile, Apple, Nokia Corp, QualComm, are now working on creating 5G applications. 5G Networks will cover 40% of the world by 2024, handling 25% of all mobile traffic data making it an emerging technology trend you must watch out for, and also save a spot in.`
        },
        {
            id: 21,
            title: `Swimming`,
            image: "https://c4.wallpaperflare.com/wallpaper/579/635/598/michael-phelps-swimmer-olympian-wallpaper-preview.jpg",
            category: "Fitness",
            descriptionSmall:"Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival.",
            description: `Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body to achieve hydrodynamic thrust which results in directional motion. Humans can hold their breath underwater and undertake rudimentary locomotive swimming within weeks of birth, as a survival response.Swimming involves repeated motions known as strokes in order to propel the body forward. While the front crawl, also known as freestyle, is widely regarded as the fastest out of four primary strokes, other strokes are practiced for special purposes, such as for training.`
        },
        {
            id: 22,
            title: "Cycling",
            image: "https://cutewallpaper.org/27/bicycle-in-vroatia-desktop-wallpaper/210294045.jpg",
            category: "Fitness",
            descriptionSmall:"Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport.",
            description: `Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bicyclists", or "bikers".Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).Bicycles were introduced in the 19th century and now number approximately one billion worldwide.[5] They are the principal means of transportation in many parts of the world, especially in densely populated European cities.Bicycles provide numerous possible benefits in comparison with motor vehicles, including the sustained physical exercise involved in cycling, easier parking, increased maneuverability, and access to roads, bike paths and rural trails.`
        },
        {
            id: 23,
            title: "Dance",
            image: "https://images4.alphacoders.com/772/thumb-1920-77238.jpg",
            category: "Fitness",
            descriptionSmall:"Dance is a performing art form consisting of sequences of movement, either improvised or purposefully selected. This movement has aesthetic and often symbolic value.",
            description: `Dance is a performing art form consisting of sequences of movement, either improvised or purposefully selected. This movement has aesthetic and often symbolic value. Dance can be categorized and described by its choreography, by its repertoire of movements, or by its historical period or place of origin.The main reason for dancing being on the list of the best exercises for increasing flexibility is that the movements involved lengthen your joints.`
        },
        {
            id: 24,
            title: "Running",
            image: "https://wallpapercave.com/wp/gb1vaFe.jpg",
            category: "Fitness",
            descriptionSmall:"Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).Running in humans is associated with improved health and life expectancy.",
            description: `Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity. The term running can refer to any of a variety of speeds ranging from jogging to sprinting.Running in humans is associated with improved health and life expectancy.`
        },
        {
            id: 25,
            title: `Yoga`,
            image: "https://cutewallpaper.org/21/yoga-backgrounds/Best-38-Yoga-Wallpaper-HD-on-HipWallpaper-HD-Wallpapers-.jpg",
            category: "Fitness",
            descriptionSmall:"Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering.",
            description: `Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering.These days yoga boasts as many styles of the practice as there are ranges of activewear brands.Two general theories exist on the origins of yoga. The linear model holds that yoga originated in the Vedic period, as reflected in the Vedic textual corpus, and influenced Buddhism; according to author Edward Fitzpatrick Crangle, this model is mainly supported by Hindu scholars. According to the synthesis model, yoga is a synthesis of non-Vedic and Vedic elements; this model is favoured in Western scholarship.`
        },
        {
            id: 26,
            title: "Body Building",
            image: "https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg",
            category: "Fitness",
            descriptionSmall:"Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.",
            description: `Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.Bodybuilding takes a great amount of effort and time to reach the desired results.Some bodybuilders use anabolic steroids and other performance-enhancing drugs to build muscles and recover from injuries more quickly, but competitions sometimes ban using them because of the health risks or considerations regarding fair competition.`
        },
        {
            id: 27,
            title: "Sports",
            image: "https://www.wallpaperuse.com/wallp/37-378581_m.jpg",
            category: "Fitness",
            descriptionSmall:"Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators. Sports can, through casual or organized participation, improve one's physical health.",
            description: `Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators. Sports can, through casual or organized participation, improve one's physical health.Sport is generally recognised as system of activities based in physical athleticism or physical dexterity, with major competitions such as the Olympic Games admitting only sports meeting this definition.Sport is usually governed by a set of rules or customs, which serve to ensure fair competition, and allow consistent adjudication of the winner. Winning can be determined by physical events such as scoring goals or crossing a line first. It can also be determined by judges who are scoring elements of the sporting performance, including objective or subjective measures such as technical performance or artistic impression.`
        },
        {
            id: 28,
            title: `Aerobics`,
            image: "https://www.dailyexcelsior.com/wp-content/uploads/2016/12/9.jpg",
            category: "Fitness",
            descriptionSmall:`Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness.`,
            description: `Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance-like exercises.Aerobics classes may allow participants to select their level of participation according to their fitness level. Many gyms offer different types of aerobic classes. Each class is designed for a certain level of experience and taught by a certified instructor with a specialty area related to their particular class.`
        },
        {
            id: 29,
            title: `Flexibility`,
            image: "https://thumbs.dreamstime.com/b/flexible-yoga-man-doung-wide-side-lunge-utthita-namaskarasana-flexible-yoga-man-doung-wide-side-lunge-utthita-namaskarasana-99071269.jpg",
            category: "Fitness",
            descriptionSmall:"Flexibility/limberness refers to the anatomical range of movement in a joint or series of joints, and length in muscles that cross the joints to induce a bending movement or motion. Flexibility varies between individuals, particularly in terms of differences in muscle length of multi-joint muscles.",
            description: `Flexibility/limberness refers to the anatomical range of movement in a joint or series of joints, and length in muscles that cross the joints to induce a bending movement or motion. Flexibility varies between individuals, particularly in terms of differences in muscle length of multi-joint muscles.The joints in a human body are surrounded by synovial membranes and articular cartilage which cover, cushion and nourish the joint and surfaces of each.[1] Increasing muscular elasticity of the joint's range of mobility increases flexibility.Flexibility is improved by stretching. Stretching should only be started when muscles are warm and the body temperature is raised. To be effective while stretching, force applied to the body must be held just beyond a feeling of pain and needs to be held for at least ten seconds. Increasing the range of motion creates good posture and develops proficient performance in everyday activities increasing the length of life and overall health of the individual.`
        },
        {
            id: 30,
            title: "Tai Chi",
            image: "https://c4.wallpaperflare.com/wallpaper/965/14/386/image-shadows-sport-tai-chi-wallpaper-preview.jpg",
            category: "Fitness",
            descriptionSmall:"Tai chi, short for T'ai chi ch'üan, sometimes called shadowboxing, is an internal Chinese martial art practiced for defense training, health benefits, and meditation. Tai chi has practitioners worldwide.",
            description: `Tai chi, short for T'ai chi ch'üan, sometimes called "shadowboxing", is an internal Chinese martial art practiced for defense training, health benefits, and meditation. Tai chi has practitioners worldwide.Many senior centers and gyms offer balance-focused exercise classes, such as tai chi or yoga.`
        },
        {
            id: 31,
            title: "Hyderabadi Dum Biryani",
            image: "https://wallpaperaccess.com/full/4622435.jpg",
            category: "Food",
            descriptionSmall:'The most famous biryani cuisine of India- the Hyderabadi dum Biryani is a dish made with aromatic basmati rice with dahi marinated chicken and a lot of masalas and spices.',
            description: `The most famous biryani cuisine of India- the Hyderabadi dum Biryani is a dish made with aromatic basmati rice with dahi marinated chicken and a lot of masalas and spices.All of this is mixed and put on a slow flame so as to allow the ‘dum’ process to bring the recipe’s flavour to its zenith. Tradition attributes the origin of Hyderabadi biryani to the first Nizam of Hyderabad- Nizam-ul-Mulk, Asaf Jah I.`
        },
        {
            id: 32,
            title: "Chicken 65",
            image: "https://wallpaperaccess.com/full/4138987.jpg",
            category: "Food",
            descriptionSmall:'This deep-fried chicken dish is attributed to be a brainchild of AM Buhari of Hotel Buhari in Chennai, where it is served as an entrée. ',
            description: `This deep-fried chicken dish is attributed to be a brainchild of AM Buhari of Hotel Buhari in Chennai, where it is served as an entrée. The dish derives its flavour from red chillies which also gives this food its colour. Since this dish is so lip-smacking, people have made vegetarian variants of the same such as Gobhi 65 or Paneer 65.`
        },
        {
            id: 33,
            title: "Idli and Vada",
            image: "https://t3.ftcdn.net/jpg/03/49/86/18/360_F_349861838_rN5NnHCmnKbaTRHLKVrr5DBd0q1slm3T.jpg",
            category: "Food",
            descriptionSmall:'Idlis are rice cakes made from steamed batter of fermented black lentils and rice. Sometimes instead of rice and lentils, semolina is used. India’s answer to savory donut. Many different varieties can be found, both savory and sweet. Vada is  made from grounded batter of legumes that have been soaked in water and seasoned with cumin, onion, curry leaves or chilies. both are usually served with sambar, coconut chutneys.',
            description: `Idlis are rice cakes made from steamed batter of fermented black lentils and rice. Sometimes instead of rice and lentils, semolina is used. India’s answer to savory donut. Many different varieties can be found, both savory and sweet. Vada is  made from grounded batter of legumes that have been soaked in water and seasoned with cumin, onion, curry leaves or chilies. both are usually served with sambar, coconut chutneys. `
        },
        {
            id: 34,
            title: "Carrot Halwa",
            image: "https://i.ytimg.com/vi/NSu_P4ep9H4/maxresdefault.jpg",
            category: "Food",
            descriptionSmall:'Carrot halwa or gajar halwa is a traditional dessert made by slow cooking carrots in milk. This recipe will give you the best north Indian',
            description: `Carrot halwa or gajar halwa is a traditional dessert made by slow cooking carrots in milk. This recipe will give you the best north Indian.The word halwa comes from the Arabic word for “sweet,” and refers to desserts that are cooked down with ghee and sugar. `
        },
        {
            id: 35,
            title: "Jeera Rice",
            image: "https://nishkitchen.com/wp-content/uploads/2019/03/Jeera-Rice-1B-480x360.jpg",
            category: "Food",
            descriptionSmall:'Jeera rice or Zeera rice is an Indian dish consisting of rice and cumin seeds.[1] It is a popular dish in North India and Pakistan as an everyday rice dish. It is easy to prepare. "Zeera" is the Indic word for cumin seeds, often pronounced Jeera. ',
            description: `Jeera rice or Zeera rice is an Indian dish consisting of rice and cumin seeds.[1] It is a popular dish in North India and Pakistan as an everyday rice dish. It is easy to prepare. "Zeera" is the Indic word for cumin seeds, often pronounced Jeera.  The ingredients used are rice, cumin seeds, vegetable oil, onions, and coriander leaves.Jeera rice is generally garnished with finely chopped fresh coriander leaves, but is also garnished with onion rings in some Indian hotels and restaurants.`
        },
        {
            id: 36,
            title: "Gulab Jamun",
            image: "https://wallpapercave.com/wp/wp2157160.jpg",
            category: "Food",
            descriptionSmall:'Gulab jamun is an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup. ',
            description: `Gulab jamun is an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup. As per tradition, the syrup has a delicate rose flavour: Gulab means 'rose water' and jamun refers to a berry of a similar size and colour.`
        },
        {
            id: 37,
            title: "Masala Dosa",
            image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5560763.jpg&fm=jpg",
            category: "Food",
            descriptionSmall:'Masala Dosa is a famous snack most popular in South India, these tasty stuffed crepes are enjoyed in North India as well and can be found on menus throughout the world.',
            description: `Masala Dosa is a famous snack most popular in South India, these tasty stuffed crepes are enjoyed in North India as well and can be found on menus throughout the world. Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter. The dosa are gluten-free and dairy-free, with a sturdy yet soft texture that’s great for holding a hearty homemade potato filling and served with Sambar and Coconut Chutney.`
        },
        {
            id: 38,
            title: "Pani puri",
            image: "https://media.istockphoto.com/photos/pani-puri-golgappe-chat-item-india-picture-id525416827?k=20&m=525416827&s=612x612&w=0&h=yZh2vZC1mrjD9_bhDPGeIPkzsjHt5rqzQVPM6fmxvjM=",
            category: "Food",
            descriptionSmall:'Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat.',
            description: `Pani puri, or gol guppa,  are thought to originate from the northern state of Bihar. A perfect streetside snack, pani puri are hollow deep fried balls made of semolina or wheat. They’re served alongside spicy potatoes, chickpeas and a spicy tamarind water. Eating pani puri is an experience in itself, as you traditionally crack open the top of the deep fried shell with a spoon before filling it with the delicious accompaniments. Most Indians eat each pani puri with one swift bite, to save any of the filling spilling out of the delicate case. This infamous street snack unites most of the country – everyone from local college students to city businessmen can be found devouring them. `
        },
        {
            id: 39,
            title: "Curd Rice",
            image: "https://myyummyrecipes1.files.wordpress.com/2020/02/501c4-shot.jpg",
            category: "Food",
            descriptionSmall:'Curd rice is a popular and tasty South Indian dish that is served with a South Indian thali or meal. Curd rice is nothing but curd (yogurt) mixed with cooked rice, herbs and then tempered with curry leaves and mustard seeds before being mixed with yogurt and salt.',
            description: `Curd rice is a popular and tasty South Indian dish that is served with a South Indian thali or meal. Curd rice is nothing but curd (yogurt) mixed with cooked rice, herbs and then tempered with curry leaves and mustard seeds before being mixed with yogurt and salt.Curd rice aids digestion and provides relief from stomach and digestive problems. Curd rice is a meal that can help you relax and unwind. It's high in probiotics, antioxidants, and healthy fats, all of which help to keep stress at bay. A bowl of curd rice might provide you with enough of energy to get through the day.`
        },
        {
            id: 40,
            title: "Payasum",
            image: "https://media.istockphoto.com/photos/closeup-of-creamy-sabudana-kheer-garnished-with-dry-fruits-indian-picture-id1317649946?k=20&m=1317649946&s=612x612&w=0&h=fU8CRF9ONvj5fnecoVkteJ8dY5a0aoO7Nc7tb8MIjTY=",
            category: "Food",
            descriptionSmall:'Payasam is a liquid sweet preparation that is a perennial favorite of the people of Kerala. It is so called because it is made of sugar and milk (payas).',
            description: `Payasam is a liquid sweet preparation that is a perennial favorite of the people of Kerala. It is so called because it is made of sugar and milk (payas).  However, it is also referred to as pradhaman, and anyway all payasams are not made of milk and sugar. Many are made of jaggery and coconut milk.`
        },
        {
            id: 41,
            title: "Mysore Palace, Karnataka",
            image: "https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg",
            category: "Tourism",
            descriptionSmall:"The palace is constructed using fine grey granite and features beautiful domes that are made of deep pink coloured marbles. The central arch of the seven broad arches in the façade features an impressive idol of Gajalakshmi (the Goddess of prosperity, wealth and luck with her elephants) on its top.",
            description: `The palace is constructed using fine grey granite and features beautiful domes that are made of deep pink coloured marbles. The central arch of the seven broad arches in the façade features an impressive idol of Gajalakshmi (the Goddess of prosperity, wealth and luck with her elephants) on its top.Mysore Palace was built in the year 1912 for the 24th Ruler of the Wodeyar Dynasty and is counted amongst one of the biggest palaces in the country.The palace is a three-storey structure with a 145-feet five-storey tower and marble domes and is surrounded by a sprawling garden. The three-storey building is built with fine granite and the domes are built with pink marbles.`
        },
        {
            id: 42,
            title: "Mecca Masjid, Hyderabad",
            image: "https://www.planetware.com/photos-large/IND/india-top-attractions-mecca-masjid.jpg",
            category: "Tourism",
            descriptionSmall:"Construction of Hyderabad's Mecca Masjid, one of the world's largest mosques – and one of the oldest in India – began in 1614 during Mohammed Quli Qutub Shah's reign and took almost 80 years to complete.",
            description: `Construction of Hyderabad's Mecca Masjid, one of the world's largest mosques – and one of the oldest in India – began in 1614 during Mohammed Quli Qutub Shah's reign and took almost 80 years to complete.

            Large enough to accommodate 10,000 worshipers, this beautiful mosque's 15 enormous arches and pillars were each wrought from single slabs of black granite dragged to the site by huge cattle trains reputedly consisting of up to 1,400 bulls.
            
            Taking its name from the bricks above the central gate that were brought here from Mecca, this impressive complex features highlights such as its main gateway, a huge plaza, and a large manmade pond. There's also a room that houses the hair of Prophet Mohammed.
            
            Other notable features include inscriptions from the Quran above many of the arches and doors, the exquisite roof of the main hall, and the cornices around the entire mosque structure. Look out for the exquisite floral motifs and friezes over the arches.`
        },
        {
            id: 43,
            title: "The Taj Mahal, Agra",
            image: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
            category: "Tourism",
            descriptionSmall:"The Taj Mahal is a perfect symmetrical planned building, with an emphasis of bilateral symmetry along a central axis on which the main features are placed. The building material used is brick-in-lime mortar veneered with red sandstone and marble and inlay work of precious/semi precious stones.",
            description: `The Taj Mahal is a perfect symmetrical planned building, with an emphasis of bilateral symmetry along a central axis on which the main features are placed. The building material used is brick-in-lime mortar veneered with red sandstone and marble and inlay work of precious/semi precious stones.“Taj Mahal” means “crown of palaces” in Urdu and Persian. In FY 2020, almost 1.26 million people visited the Taj Mahal, according to statistics from the Indian Ministry of Tourism.`
        },
        {
            id: 44,
            title: "The Holy City of Varanasi",
            image: "https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg",
            category: "Tourism",
            descriptionSmall:"One of the oldest continually inhabited cities in the world, Varanasi is arguably the holiest place in India. The spiritual activities take place along the sacred Ganges River, where pilgrims bathe and mourners cremate recently deceased relatives in plain view of passersby.",
            description: `One of the oldest continually inhabited cities in the world, Varanasi is arguably the holiest place in India. The spiritual activities take place along the sacred Ganges River, where pilgrims bathe and mourners cremate recently deceased relatives in plain view of passersby.Tourists, on the other hand, find their own flavor of spiritualism taking sunrise boat rides, releasing floral blessings that float on the river, and watching the fire-filled Hindu chanting ceremonies from the steep ghats.Away from the water, the streets of the old town twist and turn like an endless maze. Legend has it that there's still no accurate map of Varanasi, and once you experience the labyrinthine city for yourself, you'll be inclined to believe it.`
        },
        {
            id: 45,
            title: "Harmandir Sahib: The Golden Temple of Amritsar",
            image: "https://www.marshallsindia.com/ImageBuckets/ItemImages/ZA%20502.jpg?id=75",
            category: "Tourism",
            descriptionSmall:"Amritsar, the Jewel of Punjab, has made its claim to fame with its remarkable Golden Temple. One of the holiest places in the world for Sikhs, the gilded structure is a sight to behold, glistening in the sun and reflecting into the large pool that surrounds it.",
            description: `Amritsar, the "Jewel of Punjab," has made its claim to fame with its remarkable Golden Temple. One of the holiest places in the world for Sikhs, the gilded structure is a sight to behold, glistening in the sun and reflecting into the large pool that surrounds it.The attraction also boasts the world's largest community kitchen, which serves 100,000 diners (including curious tourists!) lentils and curries every day.While in Amritsar, plan to spend an afternoon at the border of Pakistan to see the Beating Retreat Ceremony. Goose-stepping guards from long-term rivals India and Pakistan open and close the border gates at dusk in an over-the-top ceremony you'll never forget. Get there early to dance to blaring Bollywood music with locals in the streets.`
        },
        {
            id: 46,
            title: "Goa",
            image: "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg",
            category: "Tourism",
            descriptionSmall:"Long known within India as the go-to destination for those seeking a great beach holiday, Goa's beautiful western coastline, overlooking the Arabian Sea, has only recently been discovered by tourists from overseas.",
            description: `Long known within India as the "go-to" destination for those seeking a great beach holiday, Goa's beautiful western coastline, overlooking the Arabian Sea, has only recently been discovered by tourists from overseas.India's not just full of big cities and holy sites–it also has incredible beaches down south in Goa. Its stretches of golden sand along the Arabian Sea offer something for every type of tourist, whether you're interested in hanging out with the backpacker crowd in laid-back beach huts or having a ritzy tropical getaway at a five-star resort.

            One unique part of Goa is its blend of Indian and Portuguese cultures. You'll experience the fusion throughout the destination, from its Baroque architecture and cathedrals to its spicy vindaloo curries and seafood dishes.`
        },
        {
            id: 47,
            title: "Kerala",
            image: "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kerala.jpg",
            category: "Tourism",
            descriptionSmall:"Kerala is a visual treat for the tourists, the sunny beaches, famed backwaters, serene hill stations, roaring waterfalls, great greenery, large tea & spice plantations and large coconut groves offer a wonderful experience for the visitors.",
            description: `Kerala is a visual treat for the tourists, the sunny beaches, famed backwaters, serene hill stations, roaring waterfalls, great greenery, large tea & spice plantations and large coconut groves offer a wonderful experience for the visitors.Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world.`
        },
        {
            id: 48,
            title: "Manali",
            image: "https://www.planetware.com/wpimages/2022/03/india-best-places-to-visit-manali.jpg",
            category: "Tourism",
            descriptionSmall:"A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains.",
            description: `A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley. It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains.Manali is known for its unlimited adventure opportunities, the famous Hadimba Temple, the scenic Rohtang Pass, the snow-laden Solang Valley and its delightful culinary scene.Over the years, it has emerged as a backpacking destination with a number of travelers form all across the globe spending months here. If you are looking for a budget summer trip, Manali remains one of your best bets`
        },
        {
            id: 49,
            title: "Ladakh",
            image: "https://www.planetware.com/wpimages/2022/03/india-best-places-to-visit-ladakh.jpg",
            category: "Tourism",
            descriptionSmall:"Tourism is one of an economic contributor to the union territory of Ladakh in Northern India. The union territory is sandwiched between the Karakoram mountain range to the north and the Himalayas to the south and is situated at the height of 11,400 ft. Ladakh is composed of the Leh and Kargil districts. The region contains prominent Buddhist sites and has an ecotourism industry.",
            description: `Tourism is one of an economic contributor to the union territory of Ladakh in Northern India. The union territory is sandwiched between the Karakoram mountain range to the north and the Himalayas to the south and is situated at the height of 11,400 ft. Ladakh is composed of the Leh and Kargil districts. The region contains prominent Buddhist sites and has an ecotourism industry.Ladakh, sometimes referred to as Little Tibet, is popular with tourists because it is home to one of the purest remaining examples of Tibetan Buddhist culture. Visitors come to see a preindustrial culture, tour the Buddhist monasteries, and take in the dramatic mountain vistas.Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.`
        },
        {
            id: 50,
            title: "Andaman Islands",
            image: "https://www.planetware.com/wpimages/2022/03/india-best-places-to-visit-andaman-islands-elephant-beach.jpg",
            category: "Tourism",
            descriptionSmall:"Andaman and Nicobar Islands are promoted as an eco tourism destination. The major activities currently present in the islands are Scuba Diving, Sea Walking, Parasailing, Kayaking, Game Fishing, Semi submarine, Glass bottom boat ride and Night cruising.",
            description: `Andaman and Nicobar Islands are promoted as an eco tourism destination. The major activities currently present in the islands are Scuba Diving, Sea Walking, Parasailing, Kayaking, Game Fishing, Semi submarine, Glass bottom boat ride and Night cruising.Andaman and Nicobar Islands are famous for their white-sand beaches and palm lined shorelines along with one of the greatest underwater biodiversity housing corals and sea dwellers. This makes it an all around tourist attraction.`
        },
    ]);
    return (
        <div>
            <store.Provider value={[data, setData]}>
                {props.children}
            </store.Provider>
        </div>
    )
}

export default StoredData;