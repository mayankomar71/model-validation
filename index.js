
const modelValidator =require('./modelvalidation');

function ValidateModel(model)
{
  let validation = modelValidator(model);
 
  if (validation &&(Object.keys(validation).length === 0|| validation.message.length === 0) && validation.constructor === Object) {
    const  data = {}

     model.map(element => {

      data[element['fieldname']] = {
        type:element['type'],
        required: element['required'],
        successMsg:`${element['fieldname']} is validated successfully`,
        successCode:200
      }
    })
  return data

  } else {
    validation.errCode=400
    return validation
  }
}
 module.exports=ValidateModel