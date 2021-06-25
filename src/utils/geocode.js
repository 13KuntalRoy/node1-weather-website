const request =require('request')
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1Ijoia3VudGFscm95IiwiYSI6ImNrcHMxaWd0dTA1YmYycm81enZxcGM0MDAifQ.zfLY8xANloPLsHDkTdmDKA"
    request({url,json:true},(error,{body})=>{
          if(error)
     {
          callback('unable to connect location service',undefined)
     }
     else if(body.features.length===0){
           callback('unable to find Location',undefined); 
     }

     else{
      callback(undefined,{
          latitude: body.features[0].center[0],
          longitude:body.features[0].center[1],
          location:body.features[0].place_name
      }) 

    }
    
    
})
}
module.exports=geocode