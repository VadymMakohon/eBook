import { reactive } from 'vue';

const data = reactive({
  message: '',
  active: false
});

const useNotification = () => {
  const setNotification = (newMessage) => {
    data.message = newMessage;
    return data.active = true;
  };

  const toggleNotification = () => {
    data.active = !data.active;
  };

  return {
    notification: data,
    setNotification,
    toggleNotification
  };
}

export default useNotification;
