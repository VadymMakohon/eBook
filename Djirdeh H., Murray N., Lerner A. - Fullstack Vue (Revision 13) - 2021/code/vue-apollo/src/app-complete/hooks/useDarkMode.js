import { ref } from 'vue';
import useNotification from './useNotification';

const darkModeActive = ref(false);

const useDarkMode = () => {
  const { setNotification } = useNotification();

  const toggleDarkMode = () => {
    darkModeActive.value = !darkModeActive.value;

    const type = darkModeActive.value ? 'Dark Mode' : 'Light Mode';
    return setNotification(`${type} turned on!`);
  };

  return { 
    darkMode: darkModeActive,
    toggleDarkMode
  };
}

export default useDarkMode;
