
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const handleSubmit = (values) => {
    // Perform your login logic here (e.g., API call)
    console.log(values);
    // Display toast on successful login
    toast.success('You have logged in successfully!'); 
    // Redirecting to the Dashboard upon successful login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
              <div className="flex justify-between text-sm">
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot Password?
                </Link>
                <Link to="/signup" className="text-blue-500">
                  Don't have an account? Sign Up
                </Link>
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
