let key = "zyl6w7CaoyhVfnyhcgDA2ZknnuORVjyV"
let Api = "http://api.giphy.com/v1/gifs/search?q="

let seconStr = '&api_key=' + key

search = async() => {
    let search = document.getElementById('text')
    let url = Api + search.value + seconStr + '&limit=15'
    let answer = await fetch(url)
    search.value = ''
    let data = await answer.json()
    let arr = data.data
    let dota = document.getElementById('dota')
    console.log(arr)
    dota.innerHTML = ''
    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src = el.embed_url
            // ifrm.style.cssText = 'width:200px;height:150px;border:none;'
        dota.appendChild(ifrm)

    });
}