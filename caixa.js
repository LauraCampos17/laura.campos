const frm = document.querySelector("form")
const resp1 = document.querySelector ("#outResp1")
const resp2 =document.querySelector ("#outResp2")
const resp3 = document.querySelector ("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {                  // se o resultado da divisão for diferentede zero
    alert("valor inválido para notas diponíveis (R$10, 50, 100)")
    frm.inSaque.focus()
    return
    }

    const notasCem = Math.floor(saque/100)    //calcula quantas notas de 100
    let resto = saque % 100  //quanto sobra para pagar 
    const notasCinquenta = Math.floor(resto/50)  //calcula quantas notas de 50
    resto = resto % 50  //quanto ainda sobra
    const notaDez = Math.floor(resto/10)   //calcula quantas notas de 10

    if (notasCem > 0) {
               resp1.innerText = `Notas de R$ 100: ${notaCem}`
    }
       if (notasCinquenta > 0) {
               resp2.innerText = `Nota de R$ 50: ${notasCinquenta}`
       }
       tg     if (notaDez > 0) {
                 resp3.innerText = `Notas de R$ 10: ${notaDez}`
       }
})