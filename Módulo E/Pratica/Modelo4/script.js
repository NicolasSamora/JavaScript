function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){ 
        window.alert('Digite algum numero!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {

            //Criando o elemento option
            let item = document.createElement('option')
            //Inserindo os elementos no option
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) 
        }
    }
}