const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (jawabanUser) => {
    return [
        "Hallo, saya GusbaBot, siapa nama kamu?",
        `Berapa usia ${jawabanUser?.nama}?`,
        `Oh ${jawabanUser?.usia}. Hobby kamu apa?`,
        `Sama dong, aku juga suka ${jawabanUser?.hobby}, punya pacar ga?`,
        `${jawabanUser?.pacar} yaa.. Kita udahan yaa`
]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("Tidak boleh kosong")
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value})
        document.body.style.backgroundColor = "lightgreen"
    } else if (init === 2) {
        botDelay({usia: jawaban.value})
        document.body.style.backgroundColor = "lightblue"
    } else if (init === 3) {
        botDelay({hobby: jawaban.value})
        document.body.style.backgroundColor = "lightskyblue"
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})
        document.body.style.backgroundColor = "lightseagreen"
    } else if (init === 5) {
        finishing()
    } else {
        alert("Bot akan segera berakhir. Reset bot...")
        botEnd()
    }
}

function botDelay(jawabanSementara) {
    loading.style.display = 'block'
    container[0].style.filter = "blur(8px)" 
    userData.push(jawaban.value)
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanSementara)[init]
        loading.style.display = "none"
        container[0].style.filter = "blur(0px)" 
    }, 1000)
    jawaban.value = ""
    console.log({userDataTersimpan: userData})
} 

function finishing() {
    document.body.style.backgroundColor = "lightsalmon"
    loading.style.display = 'block'
    container[0].style.filter = "blur(8px)" 
    setTimeout(() => {
        pertanyaan.innerHTML = `Terima kasih udah mampir ke GusbaBot kak ${userData[0]} yaa 😊. Lain kali bisa kali ya ikut bareng ${userData[2]}nya. Ajak ajak dong!`
        jawaban.value = "Siap, sampai jumpa yaaaa!"
        loading.style.display = "none"
        container[0].style.filter = "blur(0px)" 
    }, 1000)
}

function botEnd() {
    window.location.reload()
}