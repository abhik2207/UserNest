export const addNewUserFormControls = [
    { name: 'firstName', id: 'firstName', type: 'text', label: 'First name', placeholder: 'Enter first name here' },
    { name: 'lastName', id: 'lastName', type: 'text', label: 'Last name', placeholder: 'Enter last name here' },
    { name: 'age', id: 'age', type: 'number', label: 'Age', placeholder: 'Enter age here' },
    { name: 'gender', id: 'gender', type: 'text', label: 'Gender', placeholder: 'Enter gender here' },
    { name: 'email', id: 'email', type: 'email', label: 'Email address', placeholder: 'Enter email address here' },
    { name: 'phone', id: 'phone', type: 'text', label: 'Phone Number', placeholder: 'Enter phone number here' },
];

export const addNewUserFormInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    gender: '',
    age: 0
}