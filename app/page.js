"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <div className="font-sans text-blue-900 bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Khairat Al-Jenan</h1>
        <ul className="flex space-x-4 rtl:space-x-reverse">
          <li><a href="#home" className="hover:text-blue-500">الرئيسي</a></li>
          <li><a href="#about" className="hover:text-blue-500">نبذة</a></li>
          <li><a href="#info" className="hover:text-blue-500">معلومات</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-end justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/main.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="bg-white/70 backdrop-blur-sm p-6 rounded-xl mb-12 max-w-md transition-all duration-700"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)"
          }}
        >
          <p className="text-lg font-bold mb-2">
            شركة التضامن لتجارة الحديد و المكائن
          </p>
          <p className="text-lg font-bold mb-2">
            Khairat Al-Jenan Company for Iron and Machinery Trading
          </p>
          <p className="text-md mb-4">
            واحدة من أكبر الشركات في العراق في مجال الحديد
          </p>
          {/* <a
            href="https://www.instagram.com/al_tadhamun_company/?igsh=dHVhZ2NjcWcwMjQ5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-pink-500 transition-colors"
          >
            Instagram
          </a> */}
        </div>
      </section>

      {/* Cards Section */}
      <section id="about" className="py-12 bg-blue-50 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/16.jpg", title: " Welding machines " ,gg:"مكائن لحام"},
            { src: "/15.jpg", title: "Dissection and cutting machines",gg:"مكائن تشريح وتقطيع" },
            { src: "/4.jpg", title: " BLAK STEEL PIPE",gg:"" },
            { src: "/5.jpg", title: " H BEAM",gg:"" },
            { src: "/6.jpg", title: " I BEAM",gg:"" },
            { src: "/7.jpg", title: "HOT ROLLED STEEL",gg:"" },
            { src: "/8.jpg", title: "DIPPED GALVANISED STEEL ",gg:"" },
            { src: "/9.jpg", title: "HOT ROLLED STEEL SHEETS plate",gg:"" },
            { src: "/10.jpg", title: "ANGLE STEEL",gg:"" },
            { src: "/11.jpg", title: "CHANNELS STEEL ",gg:"" },
            { src: "/12.jpg", title: "PPGI COIL",gg:"" },
            { src: "/13.jpg", title: "BLAK STEEL PIPE", gg:"" },
            { src: "/18.jpg", title: "SQUARE IRON", gg:"" },
            // { src: "/14.jpg", title: "PPGI COIL" },
          ].map(({ src, title,gg }, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="w-full h-64 overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-lg font-semibold mt-auto pt-4">{title}</h3>
              <h3 className="text-center text-lg font-semibold mt-auto pt-4">{gg}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="info"
        className="bg-blue-900 text-white py-8 text-center space-y-3 px-4"
      >
        <h3 className="text-xl font-semibold">Khairat Al-Jenan FOR IRON TRADE LTD</h3>
        {/* <p>altadhamincompany@gmail.com</p> */}
        <p>رقم الهاتف: 07801016433</p>
        <p>سنة التأسيس 2022</p>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse text-2xl">
          {/* <a
            href="https://www.instagram.com/al_tadhamun_company/?igsh=dHVhZ2NjcWcwMjQ5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors duration-300"
          >
            Instagram
          </a> */}
        </div>
      </footer>
    </div>
  );
}
