import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
// placing orders using COD method
const placeOrder = async (req,res) => {
try {
    
const { userId, items, amount, address} = req.body

const orderData = {
    userId,
    items,
    address,
    amount,
    paymentMethod:"COD",
    payment:false,
    date:Date.now()
}

const newOrder = new orderModel(orderData)
await newOrder.save()

await userModel.findByIdAndUpdate(userId,{cartData:{}})

res.json({success:true,message:"Order placed"})

} catch (error) {
  console.log(error);
  res.json({success:false,message:error.message})  
}
}

// placing orders using Stripe method
const placeOrderStripe = async (req,res) => {

}

// placing orders using Razorpay method
const placeOrderRazorpay = async (req,res) => {

}

// All orders data for admin panel
const allOrders = async (req,res) => {
  try {
    
const orders = await orderModel.find({})
res.json({success:true,orders})

  } catch (error) {
     console.log(error);
  res.json({success:false,message:error.message})  
  }
    
}

// User order data for frontend for a particular user 
const userOrders = async (req,res) => {
    try {
      
const {userId} = req.body

const orders = await  orderModel.find({ userId })
res.json({success:true,orders})
    
} catch (error) {
       console.log(error);
  res.json({success:false,message:error.message})  
    }
}

// update order status from Admin panel only admins can update
const updateStatus = async (req,res) => {
    try {
      
const { orderId, status } = req.body

await orderModel.findByIdAndUpdate(orderId, { status })
res.json({success:true, message:'Status updated'})

    } catch (error) {
      
       console.log(error);
  res.json({success:false,message:error.message})  
    }

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}