function tabuada() {
    let n1 = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(n1.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        let n = Number(n1.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')

            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}