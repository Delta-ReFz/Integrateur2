import { ref } from 'vue';

const loginStatus = ref(false);

let loginToken = ref(null);

const getLoginStatus = () => {
    if (loginStatus.value) {
        return 'Logged In';
    } else {
        return 'Logged Out';
    }
}
const toggleLoginStatus = () => {
  loginStatus.value = !loginStatus.value;
  console.log('loginStatus:', loginStatus.value);
};

const setLoginToken = (token) => {
  loginToken.value = token;
  console.log('loginToken is set:', loginToken.value);
}

const getLoginToken = () => {
  return loginToken.value;
}

export default {
  loginStatus,
  toggleLoginStatus,
  getLoginStatus,
  setLoginToken,
  getLoginToken
};
