export default function (app) {
  let items = [
    {
      id: "1",
      name: "Ice Cream"
    },
    {
      id: "2",
      name: "Waffles"
    },
    {
      id: "3",
      name: "Candy",
      purchased: true
    },
    {
      id: "4",
      name: "Tacos"
    },
    {
      id: "5",
      name: "Pizza"
    },
    {
      id: "6",
      name: "Pollo"
    }
  ];

  app.route('/api/items')
    .get(function(req, res){
      res.json(items);
    })
    .post(function(req, res){
      let item = req.body;
      console.log(req.body);
      items.push({id:"blissi",name:"blisS"});

    });

}
