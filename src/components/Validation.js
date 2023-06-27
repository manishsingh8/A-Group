

const Validation = (values) => {
  
       let errors ={};
       if(!values.name){
            errors.name="Name is Required"
       }
       else if(values.name.length < 4){
          errors.name = "Name Must be more than 4 char";
       }
       if(!values.email){
        errors.email="Email is Required"
   }
       if(!values.password){
        errors.password="Password is Required"
   }
   else if(values.password.length < 6){
      errors.password = "Password Must be more than 6 letter";
   }
   
    return errors;
}

export default Validation;
