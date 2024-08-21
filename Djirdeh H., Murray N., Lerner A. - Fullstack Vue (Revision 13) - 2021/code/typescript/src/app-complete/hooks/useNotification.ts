import { reactive } from 'vue';

interface Notification {
  message: string;
  active: boolean;
}

export interface NotificationInfo {
  notification: Notification;
  setNotification: (newMessage: string) => boolean;
  toggleNotification: () => void;
}

const data = reactive<Notification>({
  message: '',
  active: false,
});

const useNotification = () => {
  const setNotification = (newMessage: string) => {
    data.message = newMessage;
    return data.active = true;
  };

  const toggleNotification = () => {
    data.active = !data.active;
  };

  const notificationData: NotificationInfo = {
    notification: data,
    setNotification,
    toggleNotification
  };

  return notificationData;
};

export default useNotification;
