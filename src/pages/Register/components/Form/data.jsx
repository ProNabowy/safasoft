import { useFormik } from "formik"

const useDataGetter = () => {

    const formik = useFormik({
        initialValues: {
            building_number: '',
        },
    });

    return {
        formik,
    };
}

export {
    useDataGetter
}