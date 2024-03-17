const users=require('../Modals/userShema')

exports.newUser=async(req,res)=>{

   const {name,email,password}=req.body

   try{

    const preuser=await users.findOne({email})

    if(preuser){
        res.status(406).json("user already exist")
    }
    else{
        const newRegister=new users({
            name,email,password
        })
        await newRegister.save()
        res.status(200).json(newRegister)
    }

   }catch(err){
    res.status(401).json("Error"+err)
   }

    console.log("inside add user");
}


exports.loginUser=async(req,res)=>{

    const {email,password}=req.body

    try{
        const preuser=await users.findOne({email})
        if(preuser){

            if(preuser.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("no record exist")
        }



    }catch(err){
        res.status(401).json("Error"+err)
    }
    

    console.log("inside login user");

}