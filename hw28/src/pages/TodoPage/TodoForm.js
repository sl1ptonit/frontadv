import { Formik, Form, Field, ErrorMessage } from "formik";

function TodoForm(props)  {

    const initialValues = {
        task: ''
    };

    const handleSubmit = (values) => {
        props.addTodo(values.task);
        values.task = '';
    }

    const validate = (values) => {
        const errors = {};

        if (!values.task) {
            errors.task = 'Task is requred';
        } else if (values.task.length < 5) {
            errors.task = 'Task should be more than 5 letters';
        }

        return errors;
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                { ({ values }) => (
                    <Form style={{ margin: 'flex', gap: '10px' }}>
                        <div >
                            <label>New todo:</label>
                            <Field type='text' name='task' />
                            <ErrorMessage name='task' className='error' component='span' />
                        </div>
                        <button type='submit'>Add new task</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default TodoForm;