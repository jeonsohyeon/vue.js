// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';

//엑시오스 불러오기.
// axios.get('https://api.example.com/users/1/memos')
// .then(response => {
//   console.log('요청이 성공하였습니다', response);
// })
// .catch(error => {
//   console.log('요청이 실패하였습니다.')
// })
// .then(response => {
//   console.log('이 블록은 항상 실행됩니다.');
// })

async function getUserMemo () {
  try {
    const response = await axios.get('https://api.example.com/user/1/memos');
    console.log('요청이 성공하였습니다.', response);
  }
  catch (error){
    console.log('요청 실패.')
  }
  finally {
    console.log('이 블록은 항상 실행.')
  }
}

//데이터를 보내기.
const memo = {
  title : '1번 유저의 메모',
  content : '1번 유저의 메모 내용입니다.'
}

axios.post('https://api.example.com/user/1/memos', memo)
.then(response => {
  console.log('메모 생성에 성공하였습니다.')
})
.catch(response => {
  console.error('메모 생성에 실패하였습니다.')
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
