const Seller = require("../../Models/Seller");

const Sellername =  async (req, res)=>{
  try {
    const ID = req.body.sellerID;
    console.log("Seller Id for name", ID);
    const FullName = await Seller.findOne({ _id : ID });
    console.log("Seller Id for name", FullName);
    if(!FullName){
      return res.status(404).json({msg:"Course Not found"});
    }
    if(FullName){
      return res.status(200).json({SellerName : FullName.name });
    }
  } catch (error) {
    console.log("Seller name error",error);
  }
}
module.exports = Sellername;