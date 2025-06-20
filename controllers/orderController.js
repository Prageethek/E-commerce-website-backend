import orderModel from "../models/orderModel.js"
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
    
}

// User order data for frontend for a particular user 
const userOrders = async (req,res) => {
    
}

// update order status from Admin panel only admins can update
const updateStatus = async (req,res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}