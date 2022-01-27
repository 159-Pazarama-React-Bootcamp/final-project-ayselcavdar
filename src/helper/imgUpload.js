// take 2 params; first one is event object, second one is setter of state func
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
