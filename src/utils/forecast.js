const request =require('request')
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?key=value&access_key=6bcbed6d12c2aa89ced647085624de30&query="+latitude+","+longitude+"&units=f"
    request({url,json:true},(error,{body})=>{
          if(error)
     {
          callback('unable to connect location service',undefined)
     }
     else if(body.error){
           callback('unable to find Location',undefined); 
     }

     else{
      callback(undefined,"current humidity"+body.current.humidity )

    }
    
    
})
}
module.exports=forecast