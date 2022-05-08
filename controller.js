const get = (req, res) => {
    console.log("REq Params:", req.parms);
    const category = [
        {
            id:"1",
            image:"https://www.traveldailymedia.com/assets/2019/10/shutterstock_670261042.jpg",
            name:"Air transport",
            info:"Air transport is the most recent mode of transport. It is the gift of the 20th century to the world.",
            description:"Air transport is an aircraft design for transporting passengers and freight from one location to another in the air using airplanes, jets, rockets helicopters, and drones. Each of these type of air transport has a unique way of achieving speed and the sustainability of it voyage",
            date:"Transport/22/12/2022"
  
           },
           {
            id:"2",
               image:"https://tse3.mm.bing.net/th?id=OIP.pufdY0L2V9FN8UiVj_ecpgHaEK&pid=Api&P=0&w=309&h=173",
               name:"Rail transport",
               info:"Rail transport is a means of transferring passengers and goods on wheeled vehicles running on rails, which are located on tracks.",
               description:" In contrast to road transport, where the vehicles run on a prepared flat surface, rail vehicles (rolling stock) are directionally guided by the tracks on which they run. Tracks usually consist of steel rails, installed on sleepers (ties) set in ballast, on which the rolling stock, usually fitted with metal wheels, moves.",
               date:"Transport/22/12/2022"
           },
          {
            id:"3",
              image:"https://tse3.mm.bing.net/th?id=OIP.qpSkB7IF08vafyuw8h1QtwHaE8&pid=Api&P=0&w=256&h=170",
              name:"Road transport",
              info:"Road Transport is considered to be one of the most cost effective and preferred mode of transport",
              description:"Road transport can be classified as transporting either goods and materials or transporting people. The major advantage of road transport is that it can enable door-to-door delivery of goods and materials and can provide a very cost-effective means of cartage, loading and unloading",
              date:"Transport/22/12/2022"
          },
          {
            id:"4",
              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tasmanian-Achiever-Burnie-20170322-001.jpg/440px-Tasmanian-Achiever-Burnie-20170322-001.jpg",
              name:"Sea transport",
              info:" waterborne transport, is the transport of people (passengers) or goods (cargo) via waterways.",
              description:"Transport by water is cheaper than transport by air,[1] despite fluctuating exchange rates and a fee placed on top of freighting charges for carrier companies known as the currency adjustment factor Maritime transport can be realized over any distance by boat, ship, sailboat or barge, over oceans and lakes, through canals or along rivers. ",
              date:"Transport/22/12/2022"
          },
          {
            id:"5",
              image:"https://tse4.mm.bing.net/th?id=OIP.88su_kcDqVu-OzuAX5a-wAHaEK&pid=Api&P=0&w=308&h=172",
              name:"Pipeline transport",
              info:"Pipeline transport is the long-distance transportation of a liquid or gas through a system of pipes to a market area for consumption",
              description:"Liquids and gases are transported in pipelines, and any chemically stable substance can be sent through a pipeline.[2] Pipelines exist for the transport of crude and refined petroleum, fuels – such as oil, natural gas and biofuels ",
              date:"Transport/22/10/2021"
          },
          {
            id:"6",
              image:"https://siliguriobserver.com/wp-content/uploads/2022/04/kgf-chapter-2-to-get-postponed-001-1068x561.jpg",
              name:"KGF 2",
              info:"Rocky kills heir apparent Virat and takes charge as the kingpin of Kolar Gold Fields (K.G.F)",
              description:"He issues orders to start work in eight hidden mines. Meanwhile, Adheera resurfaces and kills all guards at an outpost. In a ruse to bring Rocky to Adheera, Andrews kills Desai to lure Reena outside K.G.F, and John captures Reena. Adheera shoots Rocky but spares his life, while his men roadblock all gold exports from K.G.F.",
              date:"Tollywood/14/04/2022"
          },
          {
            id:"7",
             image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/13253227685123.56369171c6fb4.jpg",
             name:"Bahubali 2",
             info:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy. ",
             description:"She kills two soldiers pursuing and attempts to cross a raging river, but slips and is washed away in the current. Before drowning, she holds the baby aloft with her hand and prays to Lord Siva, demanding that the baby who is Mahendra Baahubali, must live.",
             date:"Tollywood/10/07/2015"
  
          },
         {
            id:"8",
             image:"https://i.ytimg.com/vi/ZcbsSX6x0LY/maxresdefault.jpg",
             name:"Jersey",
             info:"Jersey is about a cricketer who quits cricket decides to revive his career at the age of 36 for his sons dream and prove his ability. Arjun who is aiming to play for the Indian national team to fulfill his son's desire for a jersey.",
             description:"Jersey is about a cricketer who quits cricket decides to revive his career at the age of 36 for his sons dream and prove his ability. Arjun who is aiming to play for the Indian national team to fulfill his son's desire for a jersey.",
             date:"Tollywood/22/04/2022"
         },
         {
            id:"9",
             image:"https://tse1.mm.bing.net/th?id=OIP.VkSEiLU0SJes7QL_TtpsaQHaF3&pid=Api&P=0&w=220&h=174",
             name:"Pushpa",
             info:"Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization",
             description:"Pushpa Raj is a coolie who works to smuggle red sandalwood, a rare wood that only grows in the Seshachalam Hills of the Chittoor district in Andhra Pradesh. When DSP Govindappa raids them in the forest, Pushpa hides and recovers the stock, thereby gaining the trust of his employer Konda Reddy.",
             date:"Tollywood/17/12/2021"
         },
         {
            id:"10",
             image:"https://tse3.mm.bing.net/th?id=OIP.FZegfGwJwrjjw8OOWNg1mwHaDb&pid=Api&P=0&w=334&h=154",
             name:"RRR",
             info:"In 1920, British governor Scott and his wife Catherine visit Adilabad forest, and forcefully take away Malli, a talented girl from the Gond tribe to Delhi.",
             description:"To res protector Komaram Bheem arrives in Delhi. The Nizamate of Hycue the girl, the tribe'sderabad warns Scott's office about Bheem's mission. Police officer A. Rama Raju volunteers to catch Bheem in order to get a promotion",
             date:"Tollywood/24/03/2022"
         },
         {
            id:"11",
          image:"https://tse2.mm.bing.net/th?id=OIP.FiqbMTlxAQYypvwXzIAPqgHaDv&pid=Api&P=0&w=350&h=176" ,
           name:"Swimming" ,
           info:"Swimming is a great aerobic workout for people with most types of arthritis. It can take the load off your joints and help prevent injuries.",
           date:"Fitness/ 22 jan 2022",
         description:"Swimming has many more benefits that those obvious advantages seen on the surface; its improvements to overall health go much deeper.Swimming improves muscle definition and strength. Swimmers gain muscle strength throughout the entire body.",
         },
         {
            id:"12",
           image:"https://i.pinimg.com/736x/3a/a5/5c/3aa55c890be15c659e9defc2c213bffb.jpg",
           name:"Running",
           info:"While there exists the potential for injury while running (just as there is in any sport), there are many benefits. Some of these benefits include potential weight loss, improved cardiovascular",
           date:"Fitness/22 jan 2022",
         description:"Running is one of the best ways to boost your overall health. According to medical research, you can increase on your good cholesterol levels by running every day. It is also a great way to improve on lung function. ",
         },
         {
            id:"13",
             image:"https://tse2.mm.bing.net/th?id=OIP.sTv0Jzu_Q-KSV4463nvdoAHaFj&pid=Api&P=0&w=226&h=170",
             name:"Proper-Diet",
             info:"A good diet can have many profound benefits on physical appearance  Having a healthy protein and unsaturated fat intake is good for the inside as well as the outside of your body,",
             date:"Fitness/22 jan 2022",
          description:"Diet (nutrition) A proper nutrition requires a proper ingestion and, also important, the absorption of vitamins, minerals, and food energy in the form of carbohydrates, proteins, and fats. Dietary habits and choices play a significant role in health and mortality.",
         },
         {
            id:"14",
             image:"https://tse3.mm.bing.net/th?id=OIP.bAZ8krlnRv66SGkTerZfWgHaE8&pid=Api&P=0&w=266&h=177",
             name:"Gym..",
             info:"Most people go to the gym to achieve physical fitness goals such as weight loss, muscle tone or increased endurance.But regularly working out at the gym can provide excellent emotional benefits, too.",
             date:"Fitness/ 22 jan 2022",
         description:"A gym is a place with a number of equipments and machines used by the people to do exercises. Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises",
         },
         {
            id:"15",
         image:'https://www.hfe.co.uk/wp-content/uploads/2016/10/Favourite-271-1024x683.jpg',
         name:'Yoga',
         info:"Yoga turns stress into sweat by channeling strength, flexibility, and balance into one well-rounded workout.",
         description:"It's a total mind-body workout that combines strengthening and stretching poses with deep breathing and meditation or relaxation. There are more than 100 different forms of yoga. Some are fast-paced and intense. Others are gentle and relaxing. ",
         date:"Fitness/ 22 jan 2022"
         },

         {id:"16",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1280px-Hyderabadi_Chicken_Biryani.jpg" ,
          name:"Hyderabadi-biriyani",
          info:"Hyderabadi biryani, also known as Hyderabadi dum biryani, is a style of biryani from Hyderabad, India made with basmati rice and meat (mostly chicken, Lamb Meat).",
          date:"Food/22 jan 2022",
          description:"Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines. Hyderabad biryani is a key dish in Hyderabadi cuisine.Taste is fantastic when compared to other states biriyani",
       },
       {
           id:"17",
           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sapaketti_phat_khi_mao.jpg/408px-Sapaketti_phat_khi_mao.jpg" ,
           name:"Noodles",
           info:"Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
           date:"Food/22 jan 2022",
           description:"Noodles can be refrigerated for short-term storage or dried and stored for future use. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
        },
        {
            id:"18",
           image:"http://3.bp.blogspot.com/-GQTDywNt4Ks/U0dX3UPasgI/AAAAAAAAhy0/V5xXKzGXx2Q/s1600/Idli.jpg" ,
           name:"Idly",
           info:"Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. ",
           date:"Food/22 jan 2022",
           description:"Since plain idlis are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries",
        },
        {
            id:"19",
           image:"https://diff.wiki/images/5/58/Roti.jpg" ,
           name:"Chapathi(Roti)",
           info:"Chapathi also known as roti, rotli, safati, shabaati, phulka, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal.",
           date:"Food/22 jan 2022",
           description:"Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. The carbonized wheat grains discovered at the excavations at Mohenjo-daro are of a similar variety to an endemic species of wheat still to be found in India today. ",
        },
        {
            id:"20",
          image:'https://tse2.mm.bing.net/th?id=OIP.TxQdXkKqTz_A9BtutwqfMgHaEK&pid=Api&P=0&w=329&h=185',
          name:'Manchuria',
          info:'Manchurian is a class of Indian Chinese dishes made by roughly chopping and deep-frying ingredients such as chicken, cauliflower (gobi), prawns, fish, mutton, and paneer,',
          description:'There are two different variants of Manchurian, dry and with gravy. Both variants are prepared by using common ingredients like corn flour, maida flour, spring onion, bell peppers, soy sauce, chili sauce, minced garlic, ground pepper, etc. and has typical garnish of spring onion. Some recipes call for use of monosodium glutamate (MSG) to increase the taste profile, though there are those who avoid it due to health concerns.',
          date:"Food/20/04/2022"
        },
        {
          id:"21",
          image:"https://1.bp.blogspot.com/-2G41xqhVg80/XaXvkx2z0-I/AAAAAAAAAFY/oyQM0YvdilEGm0PzKUcj6FEpkwa2GlhnQCLcBGAsYHQ/w1200-h630-p-k-no-nu/communication-digitale.gif",
          name:"Communication-Technology",
          info:"Communication is indeed rather essential in all aspects of our personal and professional life to express emotions, share information, exchange ideas and what not",
          date:"Technology/22 jan 2022",
          description:"Communication technology definition Communication technology refers to all the tools used to send, receive, and process information. In today’s fast climate, efficiency and convenience are the keys to successful communication technology.",
        },
        {
        id:"22",
          image:"https://www.trade.gov/sites/default/files/2020-09/Health%2025%20-%20MedTech.jpeg",
          name:"Medical-Technology",
          info:"Medical Technology can be defined as the technologies that diagnose, treat and/or improve a person’s health and wellbeing.",
          date:"Technology/22 jan 2022",
          description:"Medical technology includes medical and surgical procedures, drugs, equipment and facilities, and the organizational and supportive systems within which care is provided. ",
        },
        {
        id:"23",
          image:"https://tse1.mm.bing.net/th?id=OIP.4hFnQfuAVvzo4bheVeii-AHaE8&pid=Api&P=0&w=253&h=168",
          name:"Robot-Technology",
          info:"Robotics technology is a field which is related to artificial intelligence. It is the utilization of machines, operation, and designing robots for performing tasks that were done by humans",
          date:"Technology/22 jan 2022",
          description:"Robots are machines that can carry out complex actions automatically. They generally need three elements: sensors such as cameras, lidar, or microphones; actuators such as motors, pistons or artificial muscles, and controllers.",
        },
  
       {
        id:"24",
          image:"https://tse4.mm.bing.net/th?id=OIP.9OknM8aS9y2KKawnSHDCfgAAAA&pid=Api&P=0&w=231&h=171",
          name:"Agricultural-Technology",
          info:"This technology refers to the technologies for machine production that are utilized on a farm.",
          date:"Technology/22 jan 2022",
       description:" Mechanical processing of soil so that it is in the proper physical condition for planting is usually referred to as tilling; adding nutrients and trace elements is called fertilizing.application of techniques to control the growth and harvesting of animal and vegetable products",
       },
       {
        id: "25",
        name: "Technology",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOybziCsqqTFsvZ7hEh4GzpBYQiVnz_nI29A&usqp=CAU",
        info: "OnePlus 10 Pro Front Design Teased Ahead of January 11 Launch, China Model Confirmed to Have ColorOS 12.1",
        date: "Technology/10 March 2022",
        description:
          "OnePlus 10 Pro front design has been revealed in a new teaser ahead of its official launch. The smartphone appears to have a curved-edge display, which looks similar to the OnePlus 9 Pro. The OnePlus 10 Pro is also teased to debut as the first phone to run on ColorOS 12.1.",
       },
       {
        id:"26",
        name:"kashmir",
        image:"https://tse1.mm.bing.net/th?id=OIP.iW-fa75MkWoCdmPwyJcnSwHaE7&pid=Api&P=0&w=260&h=173",
        info:"Jammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. ",
        date:"Tourism /22 jan 2022" ,
        description:"Some major tourist attractions in Jammu and Kashmir are Srinagar, the Mughal Gardens, Gulmarg, Pahalgam, Patnitop and Jammu. Every year, thousands of Hindu pilgrims visit holy shrines of Vaishno Devi and Amarnath which has had significant impact on the state's economy.",
       },
       {
        id:"27",
        image:"https://moviekoop.com/Images/Cover_Photos/r-rajkumar-Poster.jpg",
        name:"R-Rajkumar",
        info:"Rajkumar, an aimless youth, works for a drug baron and is sent to kill a rival dealer. His life is changed forever when he meets Chanda.",
        date:'Bollywood /22 jan 2022',
        description:"Romeo Rajkumar is an aimless youth who arrives in Dhartipur, a small town ruled by two drug barons named Shivraj Gurjar and his arch-enemy Manik Parmar, controlled by a Mafia don named Ajit Taaka, who operates in Hong Kong."
       },
       {
        id:"28",
        name:"Radhe Shyam",
        image:"https://tse1.mm.bing.net/th?id=OIP.Ma1SI1kLBucnmPmgxGKOlAHaEH&pid=Api&P=0&w=284&h=158",
        info:"A renowned palmist falls in love with a doctor who does not believe in superstitious beliefs.",
        description:". Vikramaditya, who does not believe in relationships, instantly falls for doctor Prerana. They meet on a train but separate thereafter. One day, Vikramaditya reads the palm of businessman Anand Rajput. As Vikramaditya does not predict the future in his favour, Rajput's men chase him which results in his accident.",
        date:"Tollywood/11/03/2022"
       },
      {
        id:"29",
        image:"https://tse1.mm.bing.net/th?id=OIP.VswQRXV_co-QYXJDpUhDLgHaEo&pid=Api&P=0&w=261&h=163",
        name:"Goa",
        info:"The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.",
        date:"Tourism/15/12/2021",
        description:"This relatively small state is situated on the west coast of India, between the borders of Maharashtra and Karnataka, and is better known to the world as a former Portuguese enclave on Indian soil. Thus, Tourism forms the backbone of Goa's economy.",

     },
     {
        id:"30",
        image:"https://www.thoughtco.com/thmb/hqNbf8KtYeQx0FqnHsvLaR8iupo=/5486x3110/filters:fill(auto,1)/cricket-bat--ball-and-wickets-in-cricket-ground--636479872-5b20323aeb97de0036a0bae2.jpg",
        name:"Sports",
        date:"Sports/15/12/2021",
        info:'Cricket is the most popular sport in India by far, and is played almost everywhere in the country.',
        description:"The Board of Control for Cricket in India (BCCI) is the governing body of Indian cricket and conduct all domestic tournaments and select the members Indian national cricket team. Domestic competitions in India include the Ranji Trophy, the Duleep Trophy, the Vijay Hazare Trophy",
     },
     {
        id:"31",
        image:"https://tse4.mm.bing.net/th?id=OIP.hPjY4R-61B8WKKUp87fSFwHaEQ&pid=Api&P=0&w=284&h=1639",
        name:"Fashion",
        info:"Fashion design is the art of applying design, aesthetics, clothing construction and natural beauty to clothing and its accessories. ",
        description:"It is influenced by culture and different trends, and has varied over time and place. A fashion designer creates clothing, including dresses, suits, pants, and skirts, and accessories like shoes and handbags, for consumers.",
        date:"Fashion/12/06/2021"
     },
    {
        id:"32",
        image:"https://images.businessoffashion.com/uploads/media/slider_image/0001/42/cb78815d0dad4729269a9c10608e44461d8b3aa6.jpeg?auto=format%2Ccompress&crop=faces&fit=crop&w=1200",
        name:"Clothing technology",
        date:"Technology/12/05/2021",
        info:"Clothing technology involves the manufacturing, materials, and design innovations that have been developed and used.",
        description:"The timeline of clothing and textiles technology includes major changes in the manufacture and distribution of clothing.From clothing in the ancient world into modernity,the use of technology has dramatically influenced clothingthe use of technology has dramatically influenced clothing and fashion in the modern age.", 
    },
    {
      id:"33",   
      image:"https://4.bp.blogspot.com/-j1rGJ7HQn1M/UtfKuF3yPRI/AAAAAAAAEVU/N2lUwaTodtw/s1600/alappuzha-in-kerala.jpg",
      name:"Kerala-Gods own Country",
      info:"Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia.",
      date:"Tourism / 22 jan 2022",
     description:"Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries. Other popular attractions in the state include the beaches at Kovalam, Muzhappilangad",
     } ,
     {
       id:"34",
       image:"https://foodiewish.com/wp-content/uploads/2020/05/Masala-Dosa-Recipe.jpg",
       name:"Dosa",
       date:"Food / 13/11/2021",
       description:"Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented. Dosas are a common dish in South Indian cuisine, but now have become popular all over the Indian subcontinent.",
       info:"A dosa is a thin (usually crispy) crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",

     },
     {
      id:"35",
      name: "Technology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSlHnVMFxxqyb86wqUMagl0IsrhZKecENxA&usqp=CAU",
      info: "iPhone 14 Pro models may feature dual punch-hole display design",
      date: "Technology/12/03/2022",
      description:
        "According to reports, Apple may abandon the notched display design in favour of a punch-hole display. The normal iPhone 14 model, on the other hand, may not receive the design improvement. According to popular display analyst Ross Young, the pill-shaped notch will be available on the iPhone 14 and iPhone 14 Pro Max.",
    },
    {
      id:"36",
      image:"https://tse2.mm.bing.net/th?id=OIP.pBnGBATpCvDbeidpbGN2EQHaEK&pid=Api&P=0&w=302&h=170",
      name:"Dangal",
      info:"The film stars Khan as Mahavir Singh Phogat, a pehlwani amateur wrestler who trains his daughters Geeta Phogat and Babita Kumari to become India's first world-class female wrestlers.",
      date:"Tollywod/ 23/12/2016",
      description:"Dejected that he could not win a medal for his country, he vows that his unborn son will. Disappointed upon having four daughters, he gives up hope. But when his older daughters Geeta and Babita come home after beating up two boys in response to derogatory comments, he realizes their potential to become wrestlers and begins coaching them."
    },
    {
      id:"37",
      name:"Weightlifting",
      image:'https://tse1.mm.bing.net/th?id=OIP.xzFPzJYLPVcT4gXrjpgtdAHaEM&pid=Api&P=0&w=271&h=153',
      info:"Olympic weightlifting, or Olympic-style weightlifting (officially named Weightlifting), is a sport in which athletes compete in lifting a barbell loaded with weight plates from the ground to overhead,",
      description:" Athletes compete in two specific ways of lifting the barbell overhead: these are the snatch and the clean and jerk. The snatch is a wide-grip lift, in which the weighted barbell is lifted overhead in one motion. The clean and jerk is a combination lift, in which the weight is first taken from the ground to the front of the shoulders (the clean), and then from the shoulders to overhead",
      date:"Sports/24/9/2020"
    },
    {
      id:"38",
      image:"http://wirally.com/wp-content/uploads/2018/11/6-Reasons-To-Visit-Lambasingi-Kashmir-of-Andhra-Pradesh-This-Winter-Web.jpg",
      name:"Lammasingii",
      info:"Lambasingi is famous for its tea and coffee plantations along with little apple and strawberry farms. Moreover, the place is abounding with a variety of wildlife, flora, and fauna. ",
      date:"Tourism / 22 jan 2022 ",
      description:"The region was formerly densely covered in forests and known in the past to have supported tigers. The region is known for its diversity of birdlife. Apart, this little hamlet of Lambasingi is home to an isolated tribal community. ",
     },
     {
      id: "39",
      name: "Nature",
      image: "https://static.toiimg.com/thumb/msid-88218300,imgsize-165476,width-400,resizemode-4/88218300.jpg",
      info: "Natural, eco-friendly fibre weaves its way into Surats poly ..",
      date: "Nature/15/06/2020",
      description:
        "SURAT: With the world consciously trying to leave at least one carbon footprint less in the sands of time, Suras textile hub, known for its polyester products, too is making efforts into weaving a greener thinking by adopting After introducing plant-based cupro fibre and viscose rayon, the city is now experimenting with fibre and yarn sourced from pineapple, birch wood, banana and bamboo.",
    },
    {
      id:"40",
      name:"Amazon",
      image:'https://in.images.search.yahoo.com/images/view;_ylt=Awr1QWS9aXZirNMM5su9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ExMGRiNGI4NjhmZjEzNGRiNjgxZjMzOWY2YTAxMDA2BGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Damazon%2Bwikipedia%26type%3DE211IN826G91649%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D9&w=980&h=525&imgurl=d500.epimg.net%2Fcincodias%2Fimagenes%2F2018%2F09%2F26%2Fcompanias%2F1537965408_089219_1537965500_noticia_normal.jpg&rurl=https%3A%2F%2Fcincodias.elpais.com%2Fcincodias%2F2018%2F09%2F26%2Fcompanias%2F1537965408_089219.html&size=66.3KB&p=amazon+wikipedia&oid=a10db4b868ff134db681f339f6a01006&fr2=piv-web&fr=mcafee&tt=Amazon+dona+un+mill%C3%B3n+de+euros+a+Wikipedia+%7C+Compa%C3%B1%C3%ADas+%7C+Cinco+D%C3%ADas&b=0&ni=21&no=9&ts=&tab=organic&sigr=O58mzQLSM7Cn&sigb=Qu6Fe2CxYL5y&sigi=NOZBgdox49dl&sigt=xtFo.YwvdF8i&.crumb=BaF4ER/SMya&fr=mcafee&fr2=piv-web&type=E211IN826G91649',
      info:"Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence",
      description:"It has been referred to as one of the most influential economic and cultural forces in the world, and is one of the world's most valuable brands.[9] It is one of the Big Five American information technology companies, alongside Alphabet, Apple, Meta, and Microsoft.",
      date:"Technology/05/07/1994",
    },
          
    ];
    if (req.params.category) {
      const newCategory = category.filter(
        (val) => val.category.toLowerCase() == req.params.category.toLowerCase()
      );
      res.send(newCategory);
    } else if (req.query.id) {
      const newCategory = category.filter((val) => val.id == req.query.id);
      res.send(newCategory);
    } else {
      res.send(category);
    }
  };
  
  module.exports.categoryGet = get;