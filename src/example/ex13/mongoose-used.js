const mongoose  = require("mongoose");
//const { Schema , model } = mongoose; 

mongoose
    .connect('mongodb://localhost:27017/test')
    .then(_=>{
        console.log("DATABAEYE UQURLU BAQLANDIQ");
    })
    .catch(error=> { console.log("DATABASEYE BAQLANMADA XETA VAR !!!", error);});

const userSch = new mongoose.Schema({},{collection: 'user'});
const userModel = mongoose.model('user',userSch);
//userModel.find().then(res=> console.log(res)).catch(err=> console.log(err));
//userModel.findById("628754baa0ed22ba69afff72").then(user=> console.log(user))
//{name: 1, age: 1 ....} => bu alanlari getir find({},{name: 1,age:1})
//qarsilasdirma operatorlar (beraber , beraberolmuyan,boyuk , kichik, kichikberaber, boyukberaber, bunlar, araliq)
//qarsisina dollar qoyaraq yazilir alan: $(eq,ne, gt,gte,lt,lte,in ,nin)

userModel.findOne({age: {$lte: 30}}).then(user=> console.log(user))
//userModel.find({age: {$gte: 29 , $lte: 30}}, {age:1}).then(user=> console.log(user))
//userModel.find({age: {$in:[29,30]}}, {age:1}).then(user=> console.log(user))

//mantiksal and or xor
//userModel.find({},{age:1}).and([{age: 29}]).then(user=> console.log(user))


/* const userSchema = new mongoose.Schema({
    name: String
});

const UserModel = mongoose.model('users', userSchema);

const userOne = new UserModel({ name: 'Elmar' });

userOne
    .save()
    .then(result=> console.log(result))
    .catch(error => console.log(error) );

//blogSchema

const BlogSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
}, {collation: 'myTitle', minimize: false , bufferCommands: true});
//metodlar yaratmaq BlogModel den once yaradilir
BlogSchema.methods.getTitle = function(){
  return this.title;   
}

BlogSchema.statics.getDataFromTitle = function(basliq){
    return this.find({title: basliq});
}
const BlogModel = model('blogModel' , BlogSchema);

const blogObj = new BlogModel({
    title: "Title  1"
});


console.log(blogObj.getTitle());


BlogModel.create({title: 'Title 2'});


blogObj
    .save()
    .then(result=> console.log(result))
    .catch(error => console.log(error) );

BlogModel.getDataFromTitle('Title 2').then(res=> console.log(res)).catch(err=> console.log(err)); */