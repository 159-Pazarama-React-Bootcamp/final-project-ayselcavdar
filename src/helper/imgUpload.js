/**
 * 
 * @param {Object} event object 
 * @param {String} field input name attribute's value
 * @param {Function} setter make change of given field
 * @description convert img File object into base64 string
 * and set converted value on related field
 */

const imgHandler = (e, field, setter) => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setter(field, reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};

export { imgHandler };
