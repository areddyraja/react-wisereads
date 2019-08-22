export const validateOnInputChange = async (event, schema, errorsData) => {
  const key = event.target.name;
  const errors = await onSubmitForm(schema, {
    [key]: event.target.value
  });
  delete errorsData[key];
  if (Object.keys(errors).includes(key)) {
    return { ...errorsData, [key]: errors[key] };
  }
  return { ...errorsData };
};

export const onSubmitForm = async (schema, values) => {
  //console.log("In submit form values are ", JSON.stringify(values));
  const { inner: errorsList } = await onChangeValue(schema, values);
  let errorsObj = {};
  if (errorsList && errorsList.length > 0) {
    errorsList.forEach(error => {
      if (error.errors.length > 0) {
        errorsObj = { ...errorsObj, [error["path"]]: error.errors[0] };
      }
    });
  }
  return errorsObj;
};

const onChangeValue = (schema, values) => {
  return new Promise(function(resolve) {
    schema
      .validate(values, { abortEarly: false })
      .then(response => {
        resolve(response);
      })
      .catch(errors => {
        resolve(errors);
      });
  });
};
