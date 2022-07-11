import React from 'react';
import { FormikConsumer, useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.prenom) {
    errors.prenom = 'Merci de remplir le champ !';
  } else if (values.prenom.length > 15) {
    errors.prenom = 'Ce champs doit contenir moins de 15 caractères';
  }

  if (!values.nom) {
    errors.nom = 'Merci de remplir le champ !';
  } else if (values.nom.length > 20) {
    errors.nom = 'Ce champs doit contenir moins de 20 caractères';
  }

  if (!values.email) {
    errors.email = 'Merci de remplir le champ !';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse mail invalide';
  }

  return errors;
};

const Forms = () => {

  const formik = useFormik({
    initialValues: {
      prenom: '',
      nom: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="prenom">Prénom</label>
      <input
        id="prenom"
        name="prenom"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.prenom}
      />
      {formik.errors.prenom ? <div className='alert_1'>{formik.errors.prenom}</div> : null}

      <label htmlFor="nom">Nom</label>
      <input
        id="nom"
        name="nom"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nom}
      />
      {formik.errors.nom ? <div className='alert_1'>{formik.errors.nom}</div> : null}

      <label htmlFor="email">Adresse Email </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className='alert_1'>{formik.errors.email}</div> : null}

      <button type="submit" className='button_submit'>Envoyer</button>
    </form>
  );
};

export default Forms;