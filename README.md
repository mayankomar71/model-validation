# Node Model Validation - Simplified Model Validator

## Installation

 Install the module by running -

`$ npm install model-validation-node `

## Usage
Import the helper function -    

` import modelValidator from 'model-validation-node'; `

The function takes an array of objects as a parameter and validation field is optional -
Example -

```
modelValidator([
    {
      fieldname: 'username',
      type: 'string',
      required: true,
      validation: ['email'],
      value: 'xyz@gmail.com'
    },
    {
      fieldname: 'password',
      type: 'string',
      required: true,
      value: 'xyz123',
      validation: ['password']
    },
    {
      fieldname: 'aadharCard',
      type: 'string',
      required: true,
      value: '123456789212',
      validation: ['aadhar']
    }
  ])

```
The field validation is an array where you will pass the validations you need

Right now Validation it supports are:

1.password

2.email

3.aadhar

4.pincode

5.mobile

6.min-length

7.max-length

For min-length and max-length validation it accepts a integer and you need to pass extra field in object 

Example-
 {
      fieldname: 'yourFieldName',
      type: 'string',
      required: true,
      value: 'abcdef',
      min-length:7,
      validation: ['min-length']
}

#### In future versions  I will add more validations.

### Output if model is validated :

Example:

{ 

username: 
    { 
     type: 'string',
     required: true,
     successMsg: 'username is validated successfully',
     successCode: 200 },

password: 
   { type: 'string',
     required: true,
     successMsg: 'password is validated successfully',
     successCode: 200 } 
    }
 
 ### Output if errors -

 Example:
 
{ message: 'Please enter the correct email', errCode: 400 }
