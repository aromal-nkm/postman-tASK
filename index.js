const express=require('express');
const fileUpload=require('express-fileupload');
const fs=require('fs');
const path=require('path')
const app=express();
app.use(fileUpload());
app.post('/upload',(req,res)=>{
    const image=req.files?.image

    if(!image){
        return res.status(400).send('no file uploaded');

    }
    const uploadPath=path.join(__dirname,'public',image.name);
    image.mv(uploadPath,(err)=>{
        if(err){
            return res.status(500).send('Fileupload failed.');
        }
        res.send('file uploaded succusfully');
    });

});
app.listen(3000,()=>{
    console.log('server started an port 3000')
});