import React from "react";

export interface ButtonGroupButton {
  children: React.ReactText | React.ReactChild;
}

export interface ButtonGroupProps extends JasesCommon.BaseProps {
  buttons: ButtonGroupButton[];
  selected: number;
  onClick: (id: number) => void;
}

const ButtonGroup = React.forwardRef<HTMLButtonElement, ButtonGroupProps>(
  (props, ref) => {
    const { className = "", buttons = [], selected, onClick, children, ...rest } = props;

    return (
      <section className="w-min flex flex-row">
        {buttons.map((btn, index) => (
          <button key={index} className={`
            p-2 
            bg-app-background-plain
            text-primary-color-dark  
            ${index === 0 ? `rounded-l-md`: ``} 
            ${index === buttons.length -1 ? `rounded-r-md` : ``}
            ${selected === index ? `border border-plain-contrast-light` : ``} `}
            onClick={() => onClick(index)}
          >
            {btn.children}
          </button>
        ))}
      </section>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
