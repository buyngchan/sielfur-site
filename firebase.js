// /js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// 🔥 여기 firebaseConfig 안 내용을 "네 Firebase 콘솔"에서 복사해서 넣어줘야 함
// Firebase 콘솔 → 프로젝트 설정 → 내 앱 → SDK 설정에 이런 형식으로 있음:
const firebaseConfig = {
  apiKey: "여기에_네_apiKey",
  authDomain: "여기에_네_authDomain",
  projectId: "여기에_네_projectId",
  storageBucket: "여기에_네_storageBucket",
  messagingSenderId: "여기에_네_messagingSenderId",
  appId: "여기에_네_appId"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 다른 파일에서 쓸 수 있도록 export
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
