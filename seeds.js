var mongoose    = require("mongoose"),
    Comment     = require("./models/comment"),
    Campground  = require("./models/campground");
    


const data = [
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "It is awesome campground. You must vist here once..."
    },{
        name: "Himalyas",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "Best campground in india..."
    },{
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "It is awesome campground. You must vist here once..."
    },{
        name: "Himalyas",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: "Best campground in india..."
    }
]


const seedDb = ()=>{

    // Remove all data from campground
    Campground.remove({},(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("All campground removed...");

            data.forEach((camp)=>{
                Campground.create(camp,(err,Camp)=>{
                    if(err)
                        console.log(err);
                    else {
                        console.log("A new campground added...");

                        Comment.create({
                            text: "I m really in love with this campground. You must visit it...",
                            author: "Sinchow"
                        },(err,comment)=>{
                            if(err)
                                console.log(err);
                            else{
                                Camp.comments.push(comment);
                                Camp.save((err,C)=>{
                                    if(err)
                                    console.log(err);
                                    else 
                                    console.log("Comment added");
                                })
                            }
                        })

                    }
                });
            });


        }
    });

    // Add new campgrounds...


}

module.exports = seedDb;