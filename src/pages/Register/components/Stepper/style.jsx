import { styled } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

export const StepCircleIconContainer = styled('div')(({ theme }) => ({
    backgroundColor: '#ccc',
    zIndex: 20,
    width: 50,
    height: 50,
    color: theme.palette.primary.main,
    display: 'flex',
    background: 'white',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                background: 'white',
                border: `2px solid ${theme.palette.danger.main}`,
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                background: 'white',
                border: `2px solid ${theme.palette.primary.main}`,
            },
        },
    ],
}));

export const StyledIconContainer = styled('i')(({ theme, isActive, isCompleted }) => ({
    fontSize: 24,
    color: isCompleted ? theme.palette.primary.main : isActive ? theme.palette.danger.main : theme.palette.gray.main,
}));

export const ProgressBarConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 8,
        border: 0,
        position: 'relative',
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },

    '&::before': {
        content: '""', // Required to render the pseudo-element
        position: 'absolute',
        top: '-7px',
        left: '-15px',
        width: `110%`,
        height: 7,
        backgroundColor: 'white',
        zIndex: 10
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-7px',
        left: '-15px',
        width: `110%`,
        height: 7,
        backgroundColor: 'white',
        zIndex: 10
    },

}));
