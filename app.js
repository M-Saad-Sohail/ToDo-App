// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { 
    getDatabase,
    ref,
    set,
    get,
    child,
    remove
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZE3Z7T5uPSrb_6IlJGfrDrMu-YPKT1o8",
    authDomain: "todo-app-2197d.firebaseapp.com",
    projectId: "todo-app-2197d",
    storageBucket: "todo-app-2197d.appspot.com",
    messagingSenderId: "45814831637",
    appId: "1:45814831637:web:2354a709cb199d90ec0c1c",
    measurementId: "G-824JJ5S7FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
// var currentUser = "";
// console.log(firebaseConfig);
let count = 0;

var input = document.getElementById("inp");
var list = document.getElementById("list");
var li = document.getElementById("li")
var save = document.getElementById("save")
var showTasks = document.getElementById("showTasks")
var show = document.getElementById("show")
var toDo =  document.getElementById("app")
var arr = [];
// console.log(inp.value);


// var b = document.createTextNode(inp.value);

window.reload = function(){
    list.innerHTML = "";
    const dbRef = ref(db);
    get(child(dbRef, `todos`)).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            count = data.length;
            console.log(data, count);
            data.forEach(element => {
                console.log(element);                
                list.innerHTML += `<li id=${element.id}><span id="li">${element.todo}</span>  
                <button onclick="del(this)" class="text-secondary py-1 px-3 m-1 rounded shadow">Delete</button>
                <button onclick="edit(this)" class="text-secondary py-1 px-3 m-1 rounded shadow">Edit</button>  </li>`; 
                
                save.innerHTML = `<button class="text-secondary py-1 px-3 m-1 rounded shadow" onclick="saveTasks()">Save Tasks</button>`
                // showTasks.innerHTML = `<button class="text-secondary py-1 px-3 m-1 rounded shadow" onclick="showTasks()">Show Tasks</button>`
                // arr.push(inp.value)
                
            });
        }
            //         if (data.email == email && data.password == password){
                //             console.log("Logged In")
                //             currentUser = email.split("@")[0]
                //             document.getElementById("login").classList.add('none');
                //             document.getElementById("app").classList.remove('none');
                
        })
}

reload();

// window.signIn = function () {
    //     var email = document.getElementById("email").value;
    //     var password = document.getElementById("password").value;
    //     var userId = Math.random().toString().slice(2)
    //     console.log(email,password, userId);
    
    //     set(ref(db, 'users/' + email.split("@")[0]), {
        //         email: email,
        //          password: password,
        //     });   
        //     location.assign("index.html") 
        // }
        
        
        
        // window.logIn = function () {
            // var email = document.getElementById("email").value;
            //     var password = document.getElementById("password").value;
            //     console.log(email,password);
            
            //     const dbRef = ref(db);
            //     get(child(dbRef, `users/${email.split("@")[0]}`)).then((snapshot) => {
                //       if (snapshot.exists()) {
                    //           let data = snapshot.val();
                    //         console.log(data);
                    //         if (data.email == email && data.password == password){
                        //             console.log("Logged In")
                        //             currentUser = email.split("@")[0]
                        //             document.getElementById("login").classList.add('none');
                        //             document.getElementById("app").classList.remove('none');
                        
//         }
//         else{
    //             alert("Incorrect Credentials!");
    //         }
    //       } else {
        //         console.log("No data available");
        //       }
        //     }).catch((error) => {
            //       console.error(error);
            //     });
            //    }

// console.log(inp.value); 

window.addBtn = function () {
    // console.log(li);
    // var li = document.createElement("LI");
    // var b = document.createTextNode(inp.value);
    // li.appendChild(b)
    // var deleteButton = document.createElement("BUTTON")
    // var deleteText = document.createTextNode("Delete")
    // deleteButton.appendChild(deleteText)
    // deleteButton.setAttribute("class", "butn m-2 rounded shadow")
    // deleteButton.setAttribute("onclick", "del(this)")
    // li.appendChild(deleteButton)
    
    // var editButton = document.createElement("BUTTON")
    // var editText = document.createTextNode("Edit")
    // editButton.appendChild(editText)
    // editButton.setAttribute("class", "butn m-2 rounded shadow")
    // editButton.setAttribute("onclick", "edit(this)")
    // li.appendChild(editButton)
    // list.setAttribute("class", "text-dark fs-5")
    // list.appendChild(li)
    
    
    
    // list.innerHTML += `<li><span id="li">${inp.value}</span>  
    // <button onclick="del(this)" class="text-secondary py-1 px-3 m-1 rounded shadow">Delete</button>
    // <button onclick="edit(this)" class="text-secondary py-1 px-3 m-1 rounded shadow">Edit</button>  </li>`; 
    
    // save.innerHTML = `<button class="text-secondary py-1 px-3 m-1 rounded shadow" onclick="saveTasks()">Save Tasks</button>`
    // showTasks.innerHTML = `<button class="text-secondary py-1 px-3 m-1 rounded shadow" onclick="showTasks()">Show Tasks</button>`
    // arr.push(inp.value)
    
    // arr = [];
    // console.log(arr);
    // console.log(inp.value);
    // console.log(li.parentNode);
    // console.log(inp.value);
    // var a = input.parentNode.firstChild.nodeValue
    // console.log(a);
    // console.log(li);
    set(ref(db, 'todos/' + count ), {
        id: count,        
        todo: inp.value
    });   
    // location.assign("index.html") 
    inp.value = ""
    reload();
}

// var a = list.innerHTML.value


window.del = function (element) {
    var id = parseInt( element.parentNode.id);
    console.log(id);
    const refrence = ref(db,  `todos/${id}/`);
    
    remove(refrence).then(() => {
      console.log("Data removed Successfully");
    });
    reload();
}

window.edit = function (element) {
    var id = parseInt(element.parentNode.id);
    console.log(id);
    
    var newTodo = prompt("Edit Your Task To Update!");
    arr = {
        id: id,
        todo: newTodo
    }
    const refrence = ref(db, `todos/${id}/`)
    set(refrence, arr)
        .then(function () {
            console.log("Data Edited Succesfully");
        })
        .catch(function (err) {
            console.log(err);
        })
    reload();
}
window.saveTasks = function () {
    list.innerHTML = "";
    // console.log(arr);
    // arr.id = Math.random().toString().slice(2)

    // const refrence = ref(db, `students/${arr.id}/`)
    // set(refrence, arr)
    //     .then(function () {
    //         console.log("Data Succesfull");
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })
    // console.log(element.parentNode.firstChild.nodeValue);
    // var a = parentNode.firstChild.nodeValue
    // console.log(list.innerHTML);
    // console.log(currentUser);
    // var id = Math.random().toString().slice(2)
    // set(ref(db, `users/todos/` + id), {
    //         arr
    //     });   
    // console.log(inp.value);
}
// saveTasks()
// window.showTasks = function () {
//     const refrence = ref(db, "students/")
//     let arr1 = [];
//     get(refrence, function (x) {
//         arr1.push(x.val());
//     toDo.style.display = "none"
//     for (let i = 0; i < arr.length; i++) {
//         show.innerHTML = `<li>${arr[i]}</li>`        
//     }
    
//     })
// }
window.deleteAll = function () {
    list.innerHTML = "";
}
