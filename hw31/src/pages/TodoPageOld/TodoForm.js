import { Formik, Form, Field, ErrorMessage } from "formik";
import {useDispatch} from "react-redux";
import { addTodoSync } from "../../store/slices/todoSlice";

export default function TodoForm()  {

    const dispatch = useDispatch();

    const initialValues = {
        task: ''
    };

    const handleSubmit = (values) => {
        dispatch(addTodoSync({id: Date.now(), task: values.task, completed: false}))
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
                {({values}) => (
                    <Form style={{margin: 'flex', gap: '10px'}}>
                        <div>
                            <label>New todo:</label>
                            <Field type='text' name='task'/>
                            <ErrorMessage name='task' className='error' component='span'/>
                        </div>
                        <button type='submit'>Add new task</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}