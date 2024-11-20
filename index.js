console.log("Page is loaded");
window.onload=()=>{
    const addbtn=document.querySelector(".addbtn");
    const mofifybtn=document.querySelector(".modifybtn");
    const tbody=document.querySelector("tbody");
   const table=document.querySelector("table");
    const stdid =document.getElementById("stdid1");
    const name =document.getElementById("name1");
    const contact =document.getElementById("contact1");
    const email =document.getElementById("email1");
    let tdid;
    const formfields=[stdid,name,contact,email];
    function adddata()
    {   
        let  tr=document.createElement("tr");
        let td=document.createElement("td");
        let editbtn=document.createElement("button");
        let delbtn=document.createElement("button");
        delbtn.classList.add("tbledelbtn");
        delbtn.style.color='white';
        editbtn.classList.add("editbtn");
        editbtn.style.color='white';
        editbtn.textContent="Edit";
        delbtn.textContent="delete";
        document.getElementById("formdata").onsubmit = function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way 
            // Create a FormData object from the form element
            let formData = new FormData(event.target);
            const studentobj={
                name:"",
                stdid:"",
                email:"",
                contact:"",
            }
            let stdarray=[];
            let i=0;
            for (let [name, value] of formData) {
                studentobj[`${name}`]=`${value}`;
                stdarray[i]=`${name}`;
                i++;
            }
             let objkey;
            for(let j=0;j<4;j++)
                {
                    td=document.createElement("td");
                    objkey=stdarray[j];
                    td.textContent=studentobj[objkey];
                    tr.appendChild(td);
                }
                td=document.createElement("td");
                td.appendChild(editbtn);
                td.appendChild(delbtn);
                tr.appendChild(td);
                tbody.appendChild(tr);
            alert("Records added succesfully!");
            document.getElementById('formdata').reset();
        }
    }
    const dbt=document.querySelector(".delbtn");
    addbtn.addEventListener("click",adddata);
    tbody.addEventListener("click",removediv);
    function removediv(e)
        {
            const item =e.target;
            if(item.classList[0]==='tbledelbtn')
                {
                const grandparent =item.parentElement.parentElement;
                 grandparent.remove();
                }
        }
        const editbtn=document.querySelector(".editbtn");
        tbody.addEventListener("click",editdata);
    function editdata(e)
        {
            const item =e.target;
            if(item.classList[0]==='editbtn')
                {
                const grandparent =item.parentElement.parentElement;
                let children = grandparent.children; // Returns all child elements
                let child;
                tdid=children[0].innerHTML;
                for(let i=0;i<formfields.length;i++)
                {
                child = children[i]; // Access the first child
                child.innerHTML
                formfields[i].value=child.innerHTML;
                }
             }

        }

        
function addmodifydata(){
        let  tr=document.createElement("tr");
        let td=document.createElement("td");
        let editbtn=document.createElement("button");
        let delbtn=document.createElement("button");
        delbtn.classList.add("tbledelbtn");
        delbtn.style.color='white';
        editbtn.classList.add("editbtn");
        editbtn.style.color='white';
        editbtn.textContent="Edit";
        delbtn.textContent="delete";
        document.getElementById("formdata1").onsubmit = function(event) 
        {
            event.preventDefault(); // Prevent the form from submitting the traditional way 
            // Create a FormData object from the form element
            let formData = new FormData(event.target);
            let smid=document.getElementById("stdid1").value;
            const studentobj={
                name:"",
                stdid:"",
                email:"",
                contact:"",
            }
            let stdarray=[];
            let i=0;
            for (let [name, value] of formData) {
                studentobj[`${name}`]=`${value}`;
                stdarray[i]=`${name}`;
                i++;
            }
        if(studentobj.stdid!=="")
        { 
             let objkey;
            for(let j=0;j<4;j++)
                {
                    td=document.createElement("td");
                    objkey=stdarray[j];
                    td.textContent=studentobj[objkey];
                    tr.appendChild(td);
                }
                td=document.createElement("td");
                td.appendChild(editbtn);
                td.appendChild(delbtn);
                tr.appendChild(td);
                tbody.appendChild(tr);
                alert("Records Updated Successfully!");
               document.getElementById('formdata1').reset();            
            // console.log("here...........",iddata);
        
            const gp =document.querySelector("tbody");
            let newtr;
            newtr = document.querySelectorAll("tr");
            let iddata;
             let trindex=0;
             let delstrip;
            for (i = 1; i < newtr.length; i++) {
             delstrip=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[trindex].textContent;
             if(tdid==delstrip)
                {
                    let child=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[trindex];
                    let parent =child.parentElement;
                    parent.remove();
                }
            } 
           
          
        }    
            else{
                alert("Please Select records From table to edit");
                document.getElementById('formdata1').reset();
                return;
                
                }
         }   
    }
     
        
        mofifybtn.addEventListener("click",addmodifydata);

};