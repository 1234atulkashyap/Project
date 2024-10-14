



import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '../ui/button';
 import { Input } from '../ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const Signup = () => {
  const navigate = useNavigate();

  const initialValues = { username: '', email: '', password: '', confirmPassword: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (values) => {
    // Perform your signup logic here (e.g., API call)
    console.log(values);
    toast.success('You have Signup sucessfully!'); 
    // Redirecting to the Login page upon successful signup
    navigate('/'); // Redirect to the Login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Field name="username">
                  {({ field }) => (
                    <Input {...field} type="text" placeholder="Username" className="w-full" />
                  )}
                </Field>
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <Field name="email">
                  {({ field }) => (
                    <Input {...field} type="email" placeholder="Email" className="w-full" />
                  )}
                </Field>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <Field name="password">
                  {({ field }) => (
                    <Input {...field} type="password" placeholder="Password" className="w-full" />
                  )}
                </Field>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <Field name="confirmPassword">
                  {({ field }) => (
                    <Input {...field} type="password" placeholder="Confirm Password" className="w-full" />
                  )}
                </Field>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex justify-between text-sm">
                <Link to="/" className="text-blue-500">
                  Already have an account? Login
                </Link>
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
