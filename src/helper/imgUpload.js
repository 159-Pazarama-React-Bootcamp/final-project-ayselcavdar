
// take 2 params; first one is event object, second one is setter of state func
const imgHandler = (e, setter) => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setter(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};

const removeImg = (setter) => setter(null);

export { imgHandler, removeImg };
