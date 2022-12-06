import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { useRouter } from "next/router";

const steps = ["Context", "Technology", "Modality", "Core", "Dynamics", "Personalization", "Aestethics"];

export default function Sidebar() {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState();
  const handleStep = (step) => () => {
    setActiveStep(step);
    switch (step) {
      case 0:
        router.push("#context");
        break;
      case 1:
        router.push("#technology");
        break;
      case 2:
        router.push("#modality");
        break;
      case 3:
        router.push("#core");
        break;
      case 4:
        router.push("#dynamics");
        break;
      case 5:
        router.push("#personalization");
        break;
      case 6:
        router.push("#aesthetics");
        break;        
      default:
    }
  };

  return (
    <Box sx={{ width: "100%" }} className="sticky top-10 w-full flex ">
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
