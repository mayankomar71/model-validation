const validate = element => {
  var err = {}

  if (element.length < 1) {

    err.message = 'Please provide Model'
    return err
  }

  for (let i = 0; i < element.length; i++) {

    if (Object.keys(element[i]).length === 0 && element[i].constructor === Object) {
      err.message = 'Object can not be empty'
      return err
    } 

    else if (!('fieldname' in element[i]) || (!element[i].fieldname )) {

      err.message = 'fieldname is required or it can not be empty'
      return err
    }
    else if(element[i].fieldname && !(/^[a-zA-Z]+$/.test(element[i].fieldname)) )
    {
     err.message='Only characters are required  in fieldname '
     return err
    } 
    
    else if (element[i]['required'] && !element[i].value) {

      err.message = `${element[i]['fieldname']} can not be empty`
      return err
    }


    else {

      if("value" in element[i] && element[i].value && element[i]['validation'].length>0)
      {

        for (let j = 0; j < element[i]['validation'].length; j++) {

          switch (element[i].validation[j]) {
  
            case 'password':
  
              let passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
              err.message = passwordRegex.test(element[i].value)? '' : 'The string must contain at least 1 lowercase alphabetical character,The string must contain at least 1 uppercase alphabetical character,The string must contain at least 1 numeric character,The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict,	The string must be eight characters or longer'
              break;
  
            case 'email':
  
              let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              err.message = emailRegex.test(String(element[i].value).toLowerCase())? '': 'Please enter the correct email'
              break;
  
            case 'aadhar':
  
              let aadharRegex = /^\d{4}\s\d{4}\s\d{4}$/
              err.message = aadharRegex.test(element[i].value) ? '': 'Aadhar card number is not valid'
              break;
  
            case 'pincode':
  
              let pincodeRegex = /^[1-9][0-9]{5}$/
              err.message = pincodeRegex.test(element[i].value)? '': 'Pincode number is not valid'
              break;
  
            case 'mobile':
  
              let mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
              err.message = mobileRegex.test(element[i].value)? '':'Mobile number is invalid'
              break;
  
            case 'min-length':
  
              err.message = element[i].value.length >= element[i]['min-length']? '': `${element[i]['fieldname']} should be minimum of ${element[i]['min-length']} `
              break;
  
            case 'max-length':
  
              err.message = element[i].value.length <= element[i]['max-length']? '': `${element[i]['fieldname']} should be maximum of ${element[i]['max-length']} `
              break;
  
          }
          if(err.message.length>0)
          {
            return err;
          }
        }                   
      }  
    }
  
  }
  return  err;
 
}
module.exports =validate