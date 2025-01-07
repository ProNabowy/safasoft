import { Stack, TextField, Autocomplete as MuiAutocomplete } from '@mui/material'
import React from 'react'
import { Autocomplete, PrefixInput, InputNumberMask, } from '@/components';
import { StyledAutocompleteAdornment } from './styles';

const companies = [
    { name: "Safa", id: 1 },
    { name: "Safa Visa", id: 1 },
]

const countries = [
    { name: 'Egypt', code: '+20', id: 1 },
    { name: 'Saudi Arabia', code: '+966', id: 2 },
    { name: 'Kuwait', code: '+965', id: 3 },
];

const cities = [
    { name: 'Cairo', id: 1 },
    { name: 'Jeddah', id: 2 },
    { name: 'Riyadh', id: 3 },
]

export default function Verification({ formik }) {
    return (
        <Stack direction={'column'} gap={4}>

            <TextField
                placeholder={'Enter your company name'}
                name="address"
                label={'COMPANY NAME'}
                value={formik.values.address}
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.address &&
                    Boolean(formik.errors.address)
                }
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment: (
                        <StyledAutocompleteAdornment>
                            <MuiAutocomplete
                                popupIcon={<i className="fa-solid fa-angle-up" style={{ fontSize: '18px', transition: '1.3s all ease-in-out' }}></i>}
                                formik={formik}
                                renderInput={(params) => <TextField {...params} sx={{ height: '100%' }} placeholder='Select' />}
                                value={formik.values.company_name}
                                options={companies}
                                sx={{ minWidth: "120px" }}
                                getOptionLabel={(option) => option?.name}
                                onChange={(e, value) => {
                                    formik.setFieldValue("company_name", value);
                                }}
                            />
                        </StyledAutocompleteAdornment>
                    )
                }}
            />

            <TextField
                placeholder={'Enter your address'}
                name="address"
                label={'ADDRESS'}
                value={formik.values.address}
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.address &&
                    Boolean(formik.errors.address)
                }
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={
                    formik.touched.address && formik.errors.address
                }
            />

            <TextField
                placeholder={'Enter your Business email'}
                name="business_email"
                label={'BUSINESS EMAIL'}
                type='email'
                value={formik.values.business_email}
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.business_email &&
                    Boolean(formik.errors.business_email)
                }
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={
                    formik.touched.business_email && formik.errors.business_email
                }
            />

            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>

                <Autocomplete
                    formik={formik}
                    inputProps={
                        ({
                            placeholder: "Choose your country",
                            name: "country",
                            label: "COUNTRY",
                            value: formik.values.email,
                            variant: "filled",
                            error: formik.touched.email && Boolean(formik.errors.email),
                            helperText: formik.touched.email && formik.errors.email

                        })
                    }
                    value={formik.values.country}
                    variant="filled"
                    options={countries}
                    sx={{ flex: 1 }}
                    getOptionLabel={(option) => option?.name}
                    onChange={(e, value) => {
                        formik.setFieldValue("country", value);
                    }}
                />

                <Autocomplete
                    formik={formik}
                    inputProps={
                        ({
                            placeholder: "Choose your city",
                            name: "city",
                            label: "CITY",
                            value: formik.values.email,
                            variant: "filled",
                            error: formik.touched.email && Boolean(formik.errors.email),
                            helperText: formik.touched.email && formik.errors.email

                        })
                    }
                    value={formik.values.city}
                    variant="filled"
                    options={cities}
                    sx={{ flex: 1 }}
                    getOptionLabel={(option) => option?.name}
                    onChange={(e, value) => {
                        formik.setFieldValue("city", value);
                    }}
                />


            </Stack>

            <Stack direction={'row'} gap={3} justifyContent={'space-between'}>

                <PrefixInput
                    prefix="+20"
                    sx={{ flex: 1 }}
                    dir="ltr"
                    label={'COMPANY PHONE NUMBER'}
                    fullWidth
                    name="phone_number"
                    placeholder="Enter company phone number"
                    value={formik.values.mobile_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.mobile_number &&
                        Boolean(formik.errors.mobile_number)
                    }
                    helperText={
                        formik.touched.mobile_number &&
                        formik.errors.mobile_number
                    }
                    InputProps={{
                        inputComponent: InputNumberMask,
                    }}
                />

                <PrefixInput
                    prefix="+20"
                    sx={{ flex: 1 }}
                    dir="ltr"
                    label={'COMPANY ANOTHER PHONE NUMBER'}
                    fullWidth
                    name="phone_number"
                    placeholder="Enter another company phone number"
                    value={formik.values.mobile_number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.mobile_number &&
                        Boolean(formik.errors.mobile_number)
                    }
                    helperText={
                        formik.touched.mobile_number &&
                        formik.errors.mobile_number
                    }
                    InputProps={{
                        inputComponent: InputNumberMask,
                    }}
                />

            </Stack>

        </Stack>
    )
}
