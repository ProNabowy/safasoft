import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import { ProgressBarConnector, StepCircleIconContainer, StyledIconContainer, } from './style';
import { Step } from '@mui/material';

function MultiStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <StyledIconContainer className="fa-regular fa-user" isActive={active} isCompleted={completed}></StyledIconContainer>,
        2: <StyledIconContainer className="fa-regular fa-building" isActive={active} isCompleted={completed}></StyledIconContainer>,
        3: <StyledIconContainer className="fa-regular fa-images" isActive={active} isCompleted={completed}></StyledIconContainer>,
        4: <StyledIconContainer className="fa-regular fa-shield-check" isActive={active} isCompleted={completed}></StyledIconContainer>,
    };

    return (
        <StepCircleIconContainer ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </StepCircleIconContainer>
    );
}

export default function RegisterStepper({ activeStep }) {
    return (
        <Stack sx={{ width: '90%' }} spacing={4}>
            <Stepper alternativeLabel sx={{ position: 'relative' }} activeStep={activeStep} connector={<ProgressBarConnector />}>
                {new Array(4).fill(true).map((_, index) => (
                    <Step key={index}>
                        <StepLabel StepIconComponent={MultiStepIcon}></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    )
}
