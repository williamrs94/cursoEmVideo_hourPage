function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        /* bom dia */
        img.src = 'manha.png'
        document.body.style.background = '#fde1af'
    } else if (hora >= 12 && hora <= 18) {
        /* boa tarde */
        img.src = 'tarde.png'
        document.body.style.background = '#53453c'
    } else {
        /* boa noite */
        img.src = 'noite.png'
        document.body.style.background = '#14293c'
    }
}