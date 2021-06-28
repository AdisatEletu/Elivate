const Onchange =(e, values, setValues)=>{
  console.log({e})
  if (e.target.name === "phone_number" ) {
    if (e.target.value.length <= 11) {
      values[e.target.name] = e.target.value;
      setValues({ ...values});
    }
  } else {
    values[e.target.name] = e.target.value;
    setValues({ ...values });
  }
  return(values)
};

export default Onchange;