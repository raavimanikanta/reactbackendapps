const get = (req, res) => {
    console.log("REq Params:", req.parms);
    const category = [
        {
            id:"1",
            image:"https://www.traveldailymedia.com/assets/2019/10/shutterstock_670261042.jpg",
            name:"Air transport",
            info:"Air transport is the most recent mode of transport. It is the gift of the 20th century to the world.",
            description:"Air transport is an aircraft design for transporting passengers and freight from one location to another in the air using airplanes, jets, rockets helicopters, and drones. Each of these type of air transport has a unique way of achieving speed and the sustainability of it voyage",
            date:"22/12/2022"
  
           },
           {
            id:"2",
               image:"https://tse3.mm.bing.net/th?id=OIP.pufdY0L2V9FN8UiVj_ecpgHaEK&pid=Api&P=0&w=309&h=173",
               name:"Rail transport",
               info:"Rail transport is a means of transferring passengers and goods on wheeled vehicles running on rails, which are located on tracks.",
               description:" In contrast to road transport, where the vehicles run on a prepared flat surface, rail vehicles (rolling stock) are directionally guided by the tracks on which they run. Tracks usually consist of steel rails, installed on sleepers (ties) set in ballast, on which the rolling stock, usually fitted with metal wheels, moves.",
               date:"22/12/2022"
           },
          {
            id:"3",
              image:"https://tse3.mm.bing.net/th?id=OIP.qpSkB7IF08vafyuw8h1QtwHaE8&pid=Api&P=0&w=256&h=170",
              name:"Road transport",
              info:"Road Transport is considered to be one of the most cost effective and preferred mode of transport",
              description:"Road transport can be classified as transporting either goods and materials or transporting people. The major advantage of road transport is that it can enable door-to-door delivery of goods and materials and can provide a very cost-effective means of cartage, loading and unloading",
              date:"22/12/2022"
          },
          {
            id:"4",
              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tasmanian-Achiever-Burnie-20170322-001.jpg/440px-Tasmanian-Achiever-Burnie-20170322-001.jpg",
              name:"Sea transport",
              info:" waterborne transport, is the transport of people (passengers) or goods (cargo) via waterways.",
              description:"Transport by water is cheaper than transport by air,[1] despite fluctuating exchange rates and a fee placed on top of freighting charges for carrier companies known as the currency adjustment factor Maritime transport can be realized over any distance by boat, ship, sailboat or barge, over oceans and lakes, through canals or along rivers. ",
              date:"22/12/2022"
          },
          {
            id:"5",
              image:"https://tse4.mm.bing.net/th?id=OIP.88su_kcDqVu-OzuAX5a-wAHaEK&pid=Api&P=0&w=308&h=172",
              name:"Pipeline transport",
              info:"Pipeline transport is the long-distance transportation of a liquid or gas through a system of pipes to a market area for consumption",
              description:"Liquids and gases are transported in pipelines, and any chemically stable substance can be sent through a pipeline.[2] Pipelines exist for the transport of crude and refined petroleum, fuels – such as oil, natural gas and biofuels ",
              date:"22/12/2022"
          },
          {
            id:"6",
              image:"https://siliguriobserver.com/wp-content/uploads/2022/04/kgf-chapter-2-to-get-postponed-001-1068x561.jpg",
              name:"KGF 2",
              info:"Rocky kills heir apparent Virat and takes charge as the kingpin of Kolar Gold Fields (K.G.F)",
              description:"He issues orders to start work in eight hidden mines. Meanwhile, Adheera resurfaces and kills all guards at an outpost. In a ruse to bring Rocky to Adheera, Andrews kills Desai to lure Reena outside K.G.F, and John captures Reena. Adheera shoots Rocky but spares his life, while his men roadblock all gold exports from K.G.F.",
              date:"14/04/2022"
          },
          {
            id:"7",
             image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/13253227685123.56369171c6fb4.jpg",
             name:"Bahubali 2",
             info:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy. ",
             description:"She kills two soldiers pursuing and attempts to cross a raging river, but slips and is washed away in the current. Before drowning, she holds the baby aloft with her hand and prays to Lord Siva, demanding that the baby who is Mahendra Baahubali, must live.",
             date:"10/07/2015"
  
          },
         {
            id:"8",
             image:"https://i.ytimg.com/vi/ZcbsSX6x0LY/maxresdefault.jpg",
             name:"Jersey",
             info:"Jersey is about a cricketer who quits cricket decides to revive his career at the age of 36 for his sons dream and prove his ability. Arjun who is aiming to play for the Indian national team to fulfill his son's desire for a jersey.",
             description:"Jersey is about a cricketer who quits cricket decides to revive his career at the age of 36 for his sons dream and prove his ability. Arjun who is aiming to play for the Indian national team to fulfill his son's desire for a jersey.",
             date:"22/04/2022"
         },
         {
            id:"9",
             image:"https://tse1.mm.bing.net/th?id=OIP.VkSEiLU0SJes7QL_TtpsaQHaF3&pid=Api&P=0&w=220&h=174",
             name:"Pushpa",
             info:"Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization",
             description:"Pushpa Raj is a coolie who works to smuggle red sandalwood, a rare wood that only grows in the Seshachalam Hills of the Chittoor district in Andhra Pradesh. When DSP Govindappa raids them in the forest, Pushpa hides and recovers the stock, thereby gaining the trust of his employer Konda Reddy.",
             date:"17/12/2021"
         },
         {
            id:"10",
             image:"https://tse3.mm.bing.net/th?id=OIP.FZegfGwJwrjjw8OOWNg1mwHaDb&pid=Api&P=0&w=334&h=154",
             name:"RRR",
             info:"In 1920, British governor Scott and his wife Catherine visit Adilabad forest, and forcefully take away Malli, a talented girl from the Gond tribe to Delhi.",
             description:"To res protector Komaram Bheem arrives in Delhi. The Nizamate of Hycue the girl, the tribe'sderabad warns Scott's office about Bheem's mission. Police officer A. Rama Raju volunteers to catch Bheem in order to get a promotion",
             date:"24/03/2022"
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