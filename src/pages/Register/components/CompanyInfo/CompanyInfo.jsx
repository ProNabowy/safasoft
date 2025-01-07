import { Stack, TextField } from '@mui/material'
import React from 'react'
import { Autocomplete, InputNumberMask, PrefixInput, PasswordInput } from '@/components';

const countries = [
    { name: 'Egypt', code: '+20', id: 1 },
    { name: 'Saudi Arabia', code: '+966', id: 2 },
    { name: 'Kuwait', code: '+965', id: 3 },
]

export default function CompanyInfo({ formik }) {

    return (
        <Stack direction={'column'} gap={4}>

            <TextField
                placeholder={'Enter full name'}
                name="full_name"
                label={'FULL NAME'}
                value={formik.values.full_name}
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.full_name &&
                    Boolean(formik.errors.full_name)
                }
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={
                    formik.touched.full_name && formik.errors.full_name
                }
            />

            <TextField
                placeholder={'Enter your business email'}
                name="email"
                label={'BUSINESS EMAIL'}
                value={formik.values.email}
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    formik.touched.email &&
                    Boolean(formik.errors.email)
                }
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={
                    formik.touched.email && formik.errors.email
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
                    value={formik.values.city}
                    variant="filled"
                    options={countries}
                    sx={{ flex: 1 }}
                    getOptionLabel={(option) => option?.name}
                    onChange={(e, value) => {
                        formik.setFieldValue("city", value);
                    }}
                />

                <PrefixInput
                    prefix="+20"
                    sx={{ flex: 1 }}
                    dir="ltr"
                    label={'PHONE NUMBER'}
                    fullWidth
                    name="phone_number"
                    placeholder="Enter your phone number"
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

            <PasswordInput
                sx={{ flex: 1 }}
                dir="ltr"
                label={'PASSWORD'}
                fullWidth
                name="password"
                placeholder="choose a password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                    formik.touched.password &&
                    Boolean(formik.errors.password)
                }
                helperText={
                    formik.touched.password &&
                    formik.errors.password
                }
            />

            <PasswordInput
                sx={{ flex: 1 }}
                dir="ltr"
                label={'REPEAT PASSWORD'}
                fullWidth
                name="repeat_password"
                placeholder="Repeat your password"
                value={formik.values.repeat_password}
                onChange={formik.handleChange}
                error={
                    formik.touched.repeat_password &&
                    Boolean(formik.errors.repeat_password)
                }
                helperText={
                    formik.touched.repeat_password &&
                    formik.errors.repeat_password
                }
            />

        </Stack>
    )
}
