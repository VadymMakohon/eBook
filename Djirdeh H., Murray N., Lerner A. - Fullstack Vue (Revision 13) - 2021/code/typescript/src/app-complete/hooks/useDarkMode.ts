import { ref, Ref } from 'vue';
import useNotification from './useNotification';

const darkModeActive = ref(false);

export interface DarkModeInfo {
  darkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

const useDarkMode = () => {
  const { setNotification } = useNotification();

  const toggleDarkMode = () => {
    darkModeActive.value = !darkModeActive.value;

    const type = darkModeActive.value ? 'Dark Mode' : 'Light Mode';
    return setNotification(`${type} turned on!`);
  };

  const darkModeData: DarkModeInfo = {
    darkMode: darkModeActive,
    toggleDarkMode
  };

  return darkModeData;
};

export default useDarkMode;
