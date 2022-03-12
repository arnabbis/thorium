let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistricts  = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistrictsId  = async function (req, res) {
    try {
        let districtId = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${districtId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let weatherReport = async function (req, res) {
    try {
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
          let result1 = [];
          for (let i = 0; i < city.length; i++) {
            let apiid = req.query.apiid;
            let mk = { msg: city[i] };
            var options = {
              method: "get",
              url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${apiid}`,
            };
            let result = await axios(options);
            console.log(result.data);
            mk.temp = result.data.main.temp;
            result1.push(mk);
          }
          result1.sort(function(first,last){
              return first.temp - last.temp
          });
          res.status(200).send({ data: result1 });
        } catch (err) {
          console.log(err);
          res.status(500).send({ msg: err.message });
        }
      };


      let memeChat = async function (req, res) {
        try {
            let template_id = req.query.template_id 
            let text0 = req.query.text0
            let text1 = req.query.text1
            // let text2 = req.query.text2
            let username = req.query.username
            let password = req.query.password
            console.log(`query params are: ${text0} ${text1}  ${template_id} ${username} ${password}`)
            var options = {
                method: "post",
                url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
            }
            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    } 



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsId = getDistrictsId
module.exports.weatherReport = weatherReport
module.exports.memeChat = memeChat;