function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 13){
        //Bom dia!
       img.src = 'fotomanha.png'
       document.body.style.background = '#efc37a'
    }else if (hora >= 13 && hora < 18){
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#cb5a20'
    }else{ 
        //Boa noite!
        img.src = 'fotonoite.png'  
        document.body.style.background = '#48555d'
        
}
}