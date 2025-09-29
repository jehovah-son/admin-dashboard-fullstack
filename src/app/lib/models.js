import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required : true,
        unique:true,
        min:3,
        max:20,
    },
       email: {
        type: String,
        required : true,
        unique:true,
    },
    password: {
        type: String,
        required : true,
    },
    img: {
        type: String,
    },
    // wen we create a new user by default it will be false
    isAdmin: {
        type: Boolean,
        default:false
    },
     // wen we create a new user by default it will be true
     isActive: {
        type: Boolean,
        default:true
    },
    phone: {
        type: String,
    },
       address: {
        type: String,
    }
},
{timestamps: true}
);



const ProductSchema = new mongoose.Schema ({
    title: {
        type: String,
        required : true,
        unique:true,
    },
       desc: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
        min: 0,
    },
      stock: {
        type: Number,
        required : true,
        min: 0,
    },
    img: {
        type: String,
    },
  
    color: {
        type: String,
    },
       size: {
        type: String,
    }
},
{timestamps: true}
)