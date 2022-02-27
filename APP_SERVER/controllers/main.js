const index=function(req,res){
    res.render('index',{title:'MovieStore'});
};

module.exports={
    index
};