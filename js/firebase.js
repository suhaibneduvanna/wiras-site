

async function add() {


}

async function searchResult() {
    $("#btn1").prop("disabled", true);
      // add spinner to button
      $("#btn1").html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
      );
    var firebaseConfig = {
        apiKey: "AIzaSyC0ju9F55uAAEbI0onDXIR6z2Bn3rD5Nrs",
        authDomain: "wiras-acea8.firebaseapp.com",
        projectId: "wiras-acea8",
        storageBucket: "wiras-acea8.appspot.com",
        messagingSenderId: "626682904610",
        appId: "1:626682904610:web:cd86fb4499bfdcae6a4a7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let db = firebase.firestore();
    let regno = document.getElementById('regno').value
    let mob = document.getElementById('mob').value
    let snapshot = await db.collection('Students').where('Regno', '==', regno).where('Mob', '==', mob).get();

    if (snapshot.docs[0]) {
        let Regno = snapshot.docs[0].data().Regno
        let Name = snapshot.docs[0].data().Name
        let Mob = snapshot.docs[0].data().Mob
        let Status = snapshot.docs[0].data().Status
       
        $('#myModal').modal('hide');
        $('#add-student-form').each(function () {
            this.reset();
        });
        // document.getElementById('regnotd').innerHTML=Regno
        // document.getElementById('nametd').innerHTML=Name
        // document.getElementById('dobtd').innerHTML=Dob
        // document.getElementById('statustd').innerHTML=Status
        // $('#myDialog').modal('show');
        window.location.href = "result.html?regno="+Regno+"&name="+Name+"&mob="+Mob+"&status="+Status;
        

    } else {
        $('#add-student-form').each(function () {
            this.reset();
        });
        
        alert("Not selected or wrong details entered")
        location.reload();
        console.log("failed");
    }

    
}