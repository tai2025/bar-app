const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const stripe = require("stripe")("sk_test_51PFo8xRxJ7bA9hpq3iYezgi65KXwMPxrSoNIgn2o9zDhwGu1MOb0Eg3dbIahgDKWm7DH18epFUSNTkU6Ups9C2IW00BVmsV4fa")

let connectingClient;

const connectClient = async () => {
    if (connectingClient) {
        return connectingClient.db("local");
    }
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    await client.db("local").command({ ping: 1 });
    console.info("Connected to MongoDB");
    connectingClient = client;

    return connectingClient.db("local");
};

const stopClient = async () => {
    await connectingClient?.close();
};

const router = express.Router();

// Use cors as middleware
router.use(cors());  // Make sure to invoke cors here

router.get("/drinks", async (req, res) => {
    const db = await connectClient();
    const drinks = await db.collection("drinks").find().toArray();  // Removed the empty project() call
    res.json(drinks);  // Simplified response, directly sending JSON array
});

router.post("/create-checkout-session", async (req, res)=> {
    // console.log("in POST")
    // const {products} = req.body
    // const lineItems = products.map((product) => ({
    //     price_data:{
    //         currency:"usd",
    //         product_data:{
    //             name:product.drink.name
    //         },
    //         unit_amount:Math.round(product.drink.price*100)
    //     },
    //     quantity:product.quantity
    // }))
    
    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types:["card"],
    //     line_items:lineItems,
    //     mode:"payment",
    //     success_url:"http://localhost:3000/",
    //     cancel_url:"http://localhost:3000/"
    // })

    // console.log(session)
    
    // res.json({id:session.id})
    try {
        const { products } = req.body;
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.drink.name
                },
                unit_amount: Math.round(product.drink.price * 100)
            },
            quantity: product.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/thanks",
            cancel_url: "http://localhost:3000/"
        });

        res.json({ sessionId: session.id }); // Ensure session ID is returned
    } catch (error) {
        console.log("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
})

const server = express();

// Use the router on the /api path
server.use(express.json())
server.use("/api", router);

server.listen(4000, () => console.log("Server listening on port 4000"));
