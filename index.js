let save=document.getElementById("input-btn")
let myleads=[]
let inputel=document.getElementById("input-el")
let ul=document.getElementById("ul")
let clear_btn=document.getElementById("clear-btn")
let tab_btn=document.getElementById("tab-btn")

render()
tab_btn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("data",JSON.stringify(myleads))

    reset()
    render()  
    })
})
//localStorage.clear()
save.addEventListener("click",add,false)

clear_btn.addEventListener("dblclick",function(){
    localStorage.clear()
    reset()
    render()
    ul.textContent=""
})

function render(){
    let text=""  
    myleads=JSON.parse(localStorage.getItem("data"))
    if (myleads===null){
        myleads=[""]
    }
    else{
    for(let i=0;i <myleads.length; i++){

  
        text += `<a><li>
        <a  target='_blank' href="${myleads[i]}">
        ${myleads[i]}
        </a></ul></a><br>`
    
    //console.log(myleads[i])
        }
    ul.innerHTML=text
    
}}
function reset(){
    inputel.value=""
}
function add(){
    
    
        myleads.push(inputel.value)
        localStorage.setItem("data",JSON.stringify(myleads))
    
        reset()
        render()  
    
    
}