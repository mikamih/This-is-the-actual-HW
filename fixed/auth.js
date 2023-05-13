
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQEasugFl1gCr51ZdFGGZsMf2hjHce9Ak",
    authDomain: "vshop-go-brrrr.firebaseapp.com",
    projectId: "vshop-go-brrrr",
    storageBucket: "vshop-go-brrrr.appspot.com",
    messagingSenderId: "87709099607",
    appId: "1:87709099607:web:dfdfa61a6aed729d65a512"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>