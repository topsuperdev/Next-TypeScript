import React from 'react';
import { SunIcon } from '../Icons';


export interface SwitchProps extends JasesCommon.BaseProps {
  /**
   * Value of Switch 
   * If not then
   * Default value is
   * @switch false
   */
  defaultValue?: boolean;

  /**
   * Icon to be render inside switch
   */
  switchIcon?: React.ReactElement;

  /**
   * When switch changed - Event trigger
   */
  onChange?: (value: boolean) => void;
}

function Switch({defaultValue = false, onChange, switchIcon=undefined}: SwitchProps) {
  
  const [value, setValue] = React.useState(defaultValue);

  const handleChangeValue =() => {
    setValue(!value);
    if(onChange) {
      onChange(!value);
    }
  };

  return (
      <label className="cursor-pointer flex flex-row">
        <div className="relative">
          <input type="checkbox" checked={value} onChange={handleChangeValue} id="toggleB" className="sr-only" />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition justify-center items-center flex">
            {switchIcon}
          </div>
        </div>
      </label>
  );
}

Switch.displayName = 'Switch';

export default Switch;
