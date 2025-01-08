import axios from "axios";
import { useFormik } from "formik"

const validate = values => {
    const errors = {};

    if (!values.user_email) errors.user_email = 'Please enter your email address';
    if (!values.user_password) errors.user_password = 'Please enter your password';
    if (!values.user_password_confirmation) errors.user_password_confirmation = 'Please confirm your password';
    if (values.user_password_confirmation !== values.user_password) errors.user_password_confirmation = 'Passwords do not match';
    if (!values.company_name) errors.company_name = 'Please enter your company name';
    if (!values.company_address) errors.company_address = 'Please enter your company address';
    if (!values.company_phone) errors.company_phone = 'Please enter your company phone number';
    if (!values.company_business_email) errors.company_business_email = 'Please enter your business email address';
    if (!values.company_avatar) errors.company_avatar = 'Please upload your company avatar/logo';
    if (!values.company_country_id) errors.company_country_id = 'Please select your company’s country';
    if (!values.company_city_id) errors.company_city_id = 'Please select your company’s city';
    if (!values.user_full_name) errors.user_full_name = 'Please enter your full name';
    if (!values.user_phone) errors.user_phone = 'Please enter your phone number';
    if (!values.user_position) errors.user_position = 'Please enter your position';


    return errors;
}

const useDataGetter = () => {

    const onSubmit = values => {

        axios.post('/register', { ...values, company_avatar: null }).then(res => {
            console.log(res, 'Here ');
        })

    }


    const formik = useFormik({
        initialValues: {
            user_email: '',
            user_password: '',
            user_password_confirmation: '',
            lang: 'English',
            company_name: null,
            company_address: '',
            company_phone: '',
            company_business_email: '',
            company_avatar: '',
            company_country_id: '',
            company_city_id: '',
            company_extra_data: {
                phone: "",
            },
            user_full_name: '',
            user_phone: "",
            user_position: null,
            user_nationality: "",
            user_extra_data: {
                phone: "",
            }
        },
        validateOnChange: true,
        validateOnMount: true,
        validateOnBlur: true,
        validate,
        onSubmit
    });

    return {
        formik,
    };
}

export {
    useDataGetter
}
