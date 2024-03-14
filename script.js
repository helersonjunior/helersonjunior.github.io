const firebaseConfig = {
    apiKey: "AIzaSyB22HTT47-nr0zq-oSAdvzpoEklHHiyfSI",
    authDomain: "base-d60db.firebaseapp.com",
    projectId: "base-d60db",
    storageBucket: "base-d60db.appspot.com",
    messagingSenderId: "669011923416",
    appId: "1:669011923416:web:f3a5981a354d99e80a62ad",
    measurementId: "G-T5XYFJTTF3"
}

//----- Initialize Firebase
firebase.initializeApp(firebaseConfig)
let db = firebase.firestore()

//----------------------------------------
let info = document.querySelector('.info')
let btn = document.querySelector('.btn')
let eft = document.querySelector('.eft')
let inputName = document.querySelector('.inputName')
let inputMsg = document.querySelector('.inputMsg')


btn.onclick = () => {

    if (inputName.value == 0 || inputMsg.value == 0) {
        eft.classList.add('vazio')
        return
    }

    //---- efeito de enviando
    btn.setAttribute('disabled', 1)
    eft.classList.add('enviando')
    btn.innerText = 'Enviando'

    let horaData = hora()

    //------  Adcionar documento no Firebase Firestore  
    db.collection('turmaA').add({ nome: inputName.value, msg: inputMsg.value, tempo: horaData, data: new Date() })
        .then(doc => {
            console.log("Documento inserido", doc)

            resete()
            
            //---- informação 
            info.style.display = 'flex'
            ocultarInfo()

        }).catch(error => {
            alert('Erro ao enviar mensagem, tente novamente!')
            console.log("Erro ao inserir o documento", error)

            resete()
        })

}

//---- rezetar 
function resete(){
     //---- limpar imputs
     inputName.value = ''
     inputMsg.value = ''

     //---- remover efeito de enviando
     eft.classList.remove('enviando')
     btn.innerText = 'Enviar'
     
     //---- habilitar btn
     btn.removeAttribute('disabled')
}

//------ ocultar info
function ocultarInfo() {
    setTimeout(() => {
        info.style.display = "none"
    }, 2000)
}


//-------- Remove borda vermelho
document.querySelectorAll('.input').forEach((inputs) => {
    inputs.addEventListener('input', (e) => {
        if (eft.classList.contains('vazio')) {
            eft.classList.remove('vazio')
        }
    })
})

//------- numero de clicks
async function click() {

    let click = await JSON.parse(localStorage.getItem('click'))

    let res = click + 1
    console.log('click', res)
    localStorage.setItem('click', res)

}

click()

// Referência ao documento de contagem de refreshes
const contadorRef = db.collection('turmaA').doc('contador');

// Incrementar contador de refreshes
window.onload = function() {
  contadorRef.get().then(doc => {
    if (doc.exists) {
      const contadorAtual = doc.data().contador || 0;
      contadorRef.update({ contador: contadorAtual + 1 });
    } else {
      contadorRef.set({ contador: 1 });
    }
  }).catch(error => {
    console.log("Erro ao acessar o Firestore:", error);
  });
};

