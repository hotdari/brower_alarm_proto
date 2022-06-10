<template>
  <div class="hello">
    <button @click="test">알림 허용</button>
    <button @click="test2">알림 허용</button>
  </div>
</template>

<script>
import BrowserNotifications from "@/utils/BrowserNotifications";

export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    test () {
      const noti = new BrowserNotifications({body:"안녕하세요.", icon:`/public/imqa-logo.jpg`,  image:`/public/sns_logo.png`, data:"what??"})
      noti.initNotification();
      noti.askNotificationPermission();
      noti.click()
    },
    test2 () {
      const noti1 = new BrowserNotifications({body:"기준치가 넘었습니다."})
      noti1.initNotification();
      noti1.askNotificationPermission();
      noti1.click()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
