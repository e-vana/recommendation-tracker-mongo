export function checkPassword(password){
  try {
    const specialCharArr = ['!', '@', '#', '$', '%', '&', '*'];

    let specialCharCount = 0;
    specialCharArr.forEach(character => {
      if(password.includes(character)){
        specialCharCount++
      }
    });
    if(specialCharCount == 0){
      throw {success: false, message: 'Password does not contain a special character.'}
    }

    if(password.length < 8){
      throw {success: false, message: 'Password does not meet the length requirement (8 characters).'}
    }
    return {success: true}
  } catch (error) {
    return error
  }
}