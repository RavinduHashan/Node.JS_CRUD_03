const Item = require('../model/item')

exports.getMenu = async (req,res)=>{
    const items = await Item.find()
    res.send(items)
}

exports.creatMenu = async(req,res,next)=>{

    const itemData = await new Item({
        itemName: req.body.itemName,
        itemId: req.body.itemId,
        price: req.body.price,
        ingredients: req.body.ingredients,
        description: req.body.description,
        image_url: req.body.image_url,
    })
    itemData.save().then(createItem => {
        res.status(201).json({
        message: "Item was created..!",
        item: createItem  
        })
    }).catch(next)
}

exports.updateMenu = async(req,res)=>{
    const upItem = req.body
    const id = req.params.id
    const items = await Item.findByIdAndUpdate(id,
         {...upItem}, {new:true})
    res.send(items)
}


exports.deleteMenu = async(req,res)=>{
    const id = req.params.id
    const items = await Item.findByIdAndDelete(id)
    res.send(items)
}












