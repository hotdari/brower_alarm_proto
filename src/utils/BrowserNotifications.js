class BrowserNotifications {
    constructor(options) {
        this._options = options
        this.notification = null
        setTimeout(() => {
            console.log("닫기")
            this.notification.close()
        }, 4000)
    }

    askNotificationPermission() {
        // 브라우저가 알림을 지원하는지 확인
        if (!('Notification' in window)) {
            console.log("이 브라우저는 알림을 지원하지 않습니다.");
        }
        console.log(this.notification)
        Notification.requestPermission(function(permission) {
            if(permission == 'denied'){
                alert("알림을 차단하셨습니다. 브라우저의 사이트 설정에서 별경하실 수 있습니다.")
                return false;
            }
        });
    }

    initNotification(){
        this.notification = new Notification("IMQA Performance Alarm", this._options)
    }

    click(url = 'https://demo.imqa.io/'){
        this.notification.onclick = function() {
            window.open(url, "_blank")
        }
    }
}

export default BrowserNotifications;