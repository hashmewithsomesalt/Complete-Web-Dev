function notifyUser(notificationFn) {
    notificationFn()
}

const emailNotification = () => console.log('Email Sent')
const smsNotification = () => console.log('SMS sent')

notifyUser(emailNotification)
notifyUser(smsNotification)