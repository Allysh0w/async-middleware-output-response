var Wait = require('../services/wait.service')

waitResponse = new Wait();
// use this handler or your application will crash if something wrong 
const asyncHandler = fn => (req, res, next) =>
Promise
  .resolve(fn(req, res, next))
  .catch(next)


var finishResponse = asyncHandler( async (req, res, next) => {
		
        
        console.log('Before');
        console.log("First responseCode: ", res.statusCode); // default 200 code from nodejs
        //waiting 10 seconds
        await waitResponse.waitTime(req, res);
        
        // The 'finish' event will emit once the response is done sending
		res.once('finish', () => {

            //start event after finish request 
            console.log("After waitTime execute")
            console.log("Second responseCode: ", res.statusCode);
            

		});
		next();
	  });

var closeConection = asyncHandler ( async (req, res, next) =>{
    
    res.once('close', () => {
         //start event after close request 
        console.log("conection closed");
      });
    
    next();
})



module.exports = {
    finishResponse: finishResponse,
    closeConection: closeConection
}