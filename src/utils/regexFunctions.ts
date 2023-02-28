export function preventExtraSpaces(name: string){
    return name.replace(/\s+/g, ' ').trim();
}

export function validateEmail(email: string) {
    const re = /^(?!.*\.{2})\S+@\S+\.\S+/;
    return re.test(email);
}

export function validateName (name: string) {
    const words = name.split(' ').filter(function (v) {return v!==''});
    if (words.length > 1) {
      //duas ou mais palavras
      return true;
    } else {
      //não há palavras suficientes
      return false;
    }
  }