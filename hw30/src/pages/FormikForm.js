import {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function FormikForm() {

    const initialValues = {
        firstname: '',
        phone: '',
        age: '',
        category: '',
        preferences: {
            sports: false,
            music: false,
            reading: false
        },
        gender: '',
    };

    const handleSubmit = (values) => {
        console.log('form submited', values);
    }

    const validate = (values) => {
        const errors = {};

        if (!values.firstname) {
            errors.firstname = 'Name is requred';
        } else if (values.firstname.length < 5) {
            errors.firstname = 'Name should be more than 5 letters';
        }

        return errors;
    }

    return (
        <>
            <h1>Formik form</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
                >
                { ({ values }) => (
                    <Form>
                        <div>
                            <label>Name:</label>
                            <Field type='text' name='firstname' />
                            <ErrorMessage name='firstname' className='error' component='span' />
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    );
}