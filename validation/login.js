import Validator from 'validator';
import isEmpty from './is-empty';

export function validateLoginInput(data) {
  let errors = {};

   data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}