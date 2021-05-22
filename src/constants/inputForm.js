export const getContactFormPageSection1InputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Full Name",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Full Name'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'getContactFormPageSection1InputFormFullName',
            controlName: "fullName"
        },
        {
            id: 2,
            inputFieldName: "Company",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Company'
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'getContactFormPageSection1InputFormCompany',
            controlName: "company"
        },
        { 
            id: 3,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Email'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'getContactFormPageSection1InputFormEmail',
            controlName: "email"
        },
        {
            id: 4,
            inputFieldName: "Telephone",
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: ' Telephone',
                // options: [...countriesArray]
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "number",
            inputID: 'getContactFormPageSection1InputFormPhone',
            controlName: "phone"
        }
    ]
}

export const getContactFormPageSection2InputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 5,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Email*'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'getContactFormPageSection2InputFormEmail',
            controlName: "email"
        }
    ]
}

export const getContactFormPageSection3InputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 5,
            inputFieldName: "Email",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Enter your email*'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'getContactFormPageSection3InputFormEmail',
            controlName: "email"
        }
    ]
}

export const blogListStandardSearchInputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 1,
            inputFieldName: "Search",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Search...'
            },
            value: '',
            validation: [],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "search",
            inputID: 'blogListStandardInputFormSearch',
            controlName: "search"
        }
    ]
}

export const searchThroughWebsiteSearchInputForm = {
    formIsValid: false,
    inputsArray: [
        { 
            id: 1,
            inputFieldName: "Search",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Type here'
            },
            value: '',
            validation: [],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "search",
            inputID: 'searchThroughWebsiteInputFormSearch',
            controlName: "search"
        }
    ]
}

export const blogListCommentReplyInputForm = {
    formIsValid: false,
    inputsArray: [
        {
            id: 1,
            inputFieldName: "Add comment*",
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Write comment...',
                rows: "10"
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'blogListCommentReplyInputFormComment',
            controlName: "comment"
        },
        {
            id: 2,
            inputFieldName: "Name*",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Your Full Name'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'blogListCommentReplyInputFormFullName',
            controlName: "fullName"
        },
        { 
            id: 3,
            inputFieldName: "Email*",
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Your email address'
            },
            value: '',
            validation: [
                {
                    required: true,
                    valid: false
                },
                {
                    isEmail: true,
                    valid: false
                }
            ],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'blogListCommentReplyInputFormEmail',
            controlName: "email"
        },
        {
            id: 4,
            inputFieldName: "Website",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Your Website',
            },
            value: '',
            validation: [
                // {
                //     required: true,
                //     valid: false
                // }
            ],
            validField: true,
            touched: false,
            errorMessage: [],
            type: "number",
            inputID: 'blogListCommentReplyInputFormWebsite',
            controlName: "website"
        }
    ]
}
