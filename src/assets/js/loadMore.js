export default function loadMore( mes ) {
    const messages = [];

    if (mes.length > 3) {
        for (let i = 0; i < 3; i++) {
            mes[i].main = true;
            messages.push(mes[i])
        }
        return messages;
    } else {
        for (let i = 0; i < mes.length; i++) {
            mes[i].main = true;
            messages.push(mes[i])
        }
        return messages;
    }
}