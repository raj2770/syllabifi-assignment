import React, { useState } from 'react';
import StepNameEmail from '../Steps/StepNameEmail/StepNameEmail';
import StepSubject from '../Steps/StepSubject/StepSubject';
import StepDetail from '../Steps/StepDetail/StepDetail';
const steps = {
    1: StepNameEmail,
    2: StepSubject,
    3: StepDetail,
};

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }
    function onPrevious() {
        setStep(step-1);
    }
    console.log(StepSubject);
    return (
        <div>
            <Step onNext={onNext} onPrevious={onPrevious} />
        </div>
    );
};

export default Register;
