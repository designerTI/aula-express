var Model = require('./model');

var Controler = {
   create: function(req, res){
      var dados = req.body;

     var model = new Model(dados);

     model.save(function(err, data){
        if (err){
          console.log('Erro: ', err);
            msg = err;
        } else {
            console.log('gravou cerveja: ', data);
            msg = data;
       }
     
      res.json(msg);
     });
   },
   update: function(req, res){
     var query = {_id: req.params.id};
     var mod = req.body;

     Model.update(query, mod, function(err, data){
      if (err){
         console.log("erro", err);
         msg = err;
      } else {
         console.log("update", data);
         msg = data;
      }
  
      res.json(msg);
     });
   },
   retrieve: function(req, res){
      var query = {};

      Model.find(query, function(err, data){
         if (err){
         console.log("erro", err);
         msg = err;
         } else {
            console.log("Listagem: ", data);
            msg = data;
         }
         
         res.json(msg);
      });
   },

   get: function(req, res){
      var query = {_id: req.params.id};

      Model.findOne(query, function(err, data){
         if (err){
         console.log("erro", err);
         msg = err;
         } else {
            console.log("Listagem: ", data);
            msg = data;
         }
         
         res.json(msg);
      });
   },

   delete: function(req, res){
      var query = {name: /skol/i};

      Model.remove(query, function(err, data){
         if (err){
            console.log("erro", err);
            msg = err;
         } else {
            console.log("Deletado com sucesso.", data);
            msg = data;
         }
        
         res.json(msg);
       });
   }
};   

module.exports = Controler;