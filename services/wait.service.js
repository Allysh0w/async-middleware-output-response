
class Wait {
    constructor () {}
    //just to test async middleware
     async waitTime(req, res){
       
          try{
                setTimeout(function() {
                    //api response
                let response = {
                        status: 201,
                        data: "request success after 10 seconds"
                    };
                  return  res.status(201).send(response);
                 
                }, 10000);  //wait 10 seconds to send response
                
            }catch(error){
                console.log("error caused by: ", error)
            }

    }
}

module.exports = Wait;
