// function Cal (val){
//     document.getElementById('he').value += val
//     // return val
  
//      }
//     // let a= Cal()
//     // console.log(a)
//      function Clear (){
//         document.getElementById('he').value = ""
       
//        }
//      function Result () {
//         let x = document.getElementById('he').value
//         let y = eval(x)
//         document.getElementById('he').value = y
//         // console.log('hello')
//         // return y 
//        }
//        const Del=()=>{ 
//         let Del = document.getElementById('he').value
        
//         document.getElementById('he').value = Del.slice(0,-1)
//        }
    //  console.log('hi')
    // value add krny ka tarika
    const Cal =(valu)=>{
        let get_val = document.getElementById("he").value += valu
    }
    // end 
    // result 
    const Result =()=>{
      let x =  document.getElementById("he").value
      let b = eval(x)
      document.getElementById("he").value= b
    }
    // end 
    // clear 
    const Clear =()=>{
document.getElementById("he").value=''
    }
    const Del=()=>{
        let dlt = document.getElementById("he").value
        document.getElementById("he").value=dlt.slice(0,-1)
    }
    // end 
    let togle = document.querySelector("#togle")
    let body = document.querySelector("body")
    togle.addEventListener("click",()=>{
        // document.getElementById("change").innerHTML=`
        // <button id="togle"><i class="fa-solid fa-toggle-on"></i></button>
        // `
        body.classList.toggle("dark")
        
    })