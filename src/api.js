import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD8sdZXYlPpijmSLnVVPpLVNR6yp9iVCSw",
  authDomain: "vanlife-gbackie.firebaseapp.com",
  projectId: "vanlife-gbackie",
  storageBucket: "vanlife-gbackie.firebasestorage.app",
  messagingSenderId: "697600720906",
  appId: "1:697600720906:web:dd8c60f68f14d197929ff3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function getVan(id) {
  const vanRef = doc(db, "vans", `${id}`);
  const vanSnap = await getDoc(vanRef);

  if (vanSnap.exists()) {
    return { ...vanSnap.data(), id: vanSnap.id };
  } else {
    throw {
      message: "Failed to fetch vans",
    };
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", 123));
  const hostVansSnap = await getDocs(q);

  const hostVansArray = hostVansSnap.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return hostVansArray;
}

// MIRAGE SERVER

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }

//   const data = await response.json();
//   return data.vans;
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   const data = await res.json();
//   return data.vans;
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
