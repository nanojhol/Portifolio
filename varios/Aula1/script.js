const tarefa = document.querySelector("#tarefa")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")

btn.addEventListener("click", function(){
    if (tarefa.value == "") {
        alert("Digite uma tarefa valida")
    } else {
        lista.innerHTML += `<li>
                                <i class="fas fa-plus-circle check"></i>
                                <span> ${ tarefa.value } </span>
                                <i class="fa-solid fa-trash-can close"></i>
                            </li>`
    }
    
    tarefa.value = "";

    const close = document.querySelectorAll(".close");
    for (let i = 0; i < close.length; i++){
        close[i].addEventListener("click", function () {
            close[i].parentElement.remove();
        });
    }
    
    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".check").style.color = "#349223"; 
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })
})  

function openTab(tabName) {
            var i, tabContent;
            tabContent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
        }