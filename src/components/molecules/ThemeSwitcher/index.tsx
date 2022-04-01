import React from "react";
import { useTheme } from "next-themes";
import Switch from "src/components/atoms/Switch";
import { useCookies } from "react-cookie";
import BASE_CONFIG from "src/config/base.config";
import THEMES from "src/config/themes.config";
import { MoonIcon, SunIcon } from "src/components/atoms/Icons";

const THEME_SWITCH = {
  [THEMES.LIGHT]: {
    value: false,
    icon: <SunIcon />,
  },
  [THEMES.DARK]: {
    value: true,
    icon: <MoonIcon />,
  },
};

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const [cookie, setCookie] = useCookies([BASE_CONFIG.THEME_KEY]);

  React.useEffect(() => {
    if(!cookie[BASE_CONFIG.THEME_KEY]) {
      setCookie(BASE_CONFIG.THEME_KEY, BASE_CONFIG.DEFAULT_THEME);
    }
  }, [cookie, setCookie]);

  const handleSwitchChange = (value: boolean) => {
    if (cookie[BASE_CONFIG.THEME_KEY] === THEMES.LIGHT) {
      setCookie(BASE_CONFIG.THEME_KEY, THEMES.DARK);
      setTheme(THEMES.DARK);
    } else {
      setCookie(BASE_CONFIG.THEME_KEY, THEMES.LIGHT);
      setTheme(THEMES.LIGHT);
    }
  };
  return (
    <Switch
      defaultValue={THEME_SWITCH[cookie[BASE_CONFIG.THEME_KEY]]?.value}
      onChange={handleSwitchChange}
      switchIcon={THEME_SWITCH[cookie[BASE_CONFIG.THEME_KEY]]?.icon}
    />
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
