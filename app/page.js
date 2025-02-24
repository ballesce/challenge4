"use client";

import Navbar from "./Navbar";


// Data Kelas dan Kawan Terbaik
const classes = 
    [
      {
        "name": "Kelas S1-SI-R-SM4-2025",
        "friends": [
          { "name": "Reval", "img": "/profile.jpg" },
          { "name": "Aldo", "img": "/profile.png" },
          { "name": "Budi", "img": "/profile.png" },
          { "name": "Citra", "img": "/profile.png" },
          { "name": "Dina", "img": "/profile.png" },
          { "name": "Eko", "img": "/profile.png" }
        ]
      },
      {
        "name": "Kelas D3-KA-NR-SM4-2025",
        "friends": [
          { "name": "Fajar", "img": "/profile.png" },
          { "name": "Gita", "img": "/profile.png" },
          { "name": "Hadi", "img": "/profile.png" },
          { "name": "Indra", "img": "/profile.png" },
          { "name": "Joko", "img": "/profile.png" },
          { "name": "Kevin", "img": "/profile.png" },
          { "name": "Laras", "img": "/profile.png" },
          { "name": "Mario", "img": "/profile.png" }
        ]
      },
      {
        "name": "Kelas S1-BD-R-SM4-2025",
        "friends": [
          { "name": "Kiki", "img": "/profile.png" },
          { "name": "Lina", "img": "/profile.png" },
          { "name": "Mira", "img": "/profile.png" },
          { "name": "Nando", "img": "/profile.png" },
          { "name": "Omar", "img": "/profile.png" },
          { "name": "Prita", "img": "/profile.png" },
          { "name": "Qori", "img": "/profile.png" },
          { "name": "Rizky", "img": "/profile.png" },
          { "name": "Sinta", "img": "/profile.png" }
        ]
      }
    
    
  
];

// Komponen untuk menampilkan gambar profil
const ProfileImage = ({ img, name }) => (
  <div className="flex flex-col items-center">
    <img
      src={img}
      alt={name}
      className="w-20 h-20 rounded-full border-2 border-gray-700 shadow-md"
    />
    <span className="text-sm mt-2 text-black">{name}</span>
  </div>
);

// Komponen untuk card kelas
const ClassCard = ({ classData }) => (
  <div className="bg-blue-900 text-white shadow-lg rounded-2xl p-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mb-6 border border-gray-300">
    <h2 className="text-xl font-semibold text-center mb-4">{classData.name}</h2>
    <div className="flex justify-center gap-6 flex-wrap">
      {classData.friends.map((friend, index) => (
        <ProfileImage key={index} img={friend.img} name={friend.name} />
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition">Assign Peserta Kelas</button>
    </div>
  </div>
);

// Halaman utama
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <Navbar />
      <h1 className="text-2xl font-bold text-center mb-6 text-black">Daftar Kawan Terbaik</h1>
      <div className="flex flex-col items-center w-full gap-6">
        {classes.map((classData, index) => (
          <ClassCard key={index} classData={classData} />
        ))}
      </div>
    </div>
  );
}
