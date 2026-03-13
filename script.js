import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase 콘솔에서 복사한 정확한 값 넣기
const firebaseConfig = {
  apiKey: "AIzaSyArbWtIOJWfS-sWlJ4DkeLnlafJhAy2zH0",
  authDomain: "forhyunzi.firebaseapp.com",
  projectId: "forhyunzi",
  storageBucket: "forhyunzi.firebasestorage.app",
  messagingSenderId: "638378869535",
  appId: "1:638378869535:web:b08fcd78e174061ba6662aG-GH8TN4V5SL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// 🔥 버튼 클릭 이벤트 연결
sendBtn.addEventListener("click", async () => {
  const text = messageInput.value.trim();
  if (!text) return;

  await addDoc(collection(db, "messages"), {
    text: text,
    createdAt: new Date()
  });

  messageInput.value = "";
});

// 🔥 실시간 채팅 불러오기
const q = query(collection(db, "messages"), orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";
  snapshot.forEach((doc) => {
    const div = document.createElement("div");
    div.textContent = doc.data().text;
    chatBox.appendChild(div);
  });
});