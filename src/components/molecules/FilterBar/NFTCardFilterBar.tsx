import React from "react";
import { ButtonGroup } from "src/components/atoms/Button";
import { ButtonGroupButton } from "src/components/atoms/Button/ButtonGroup";

export interface NFTCardFilterBarProps extends JasesCommon.BaseProps {
  gridSwithButtons: ButtonGroupButton[];
  onButtonChange: (index: number) => void;
  selectedButtonValue: number;
}

function NFTCardFilterBar({
  gridSwithButtons,
  selectedButtonValue,
  onButtonChange,
}: NFTCardFilterBarProps) {
  const [selectedButton, setSelectedButton] =
    React.useState<number>(selectedButtonValue);
  const handleButtonClick = (id: number) => {
    setSelectedButton(id);
  };
  React.useEffect(() => {
    onButtonChange(selectedButton);
  }, [selectedButton, onButtonChange]);
  return (
    <div className="flex justify-center pb-9">
      <ButtonGroup
        buttons={gridSwithButtons}
        selected={selectedButton}
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default NFTCardFilterBar;
