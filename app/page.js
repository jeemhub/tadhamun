"use client";
import Image from "next/image";
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
        <h1 className="text-2xl font-bold">شركة التضامن</h1>
        <ul className="flex space-x-4 rtl:space-x-reverse">
          <li>
            <a href="#home" className="hover:text-blue-500 transition-colors duration-300">
              الرئيسي
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300">
              نبذة
            </a>
          </li>
          <li>
            <a href="#info" className="hover:text-blue-500 transition-colors duration-300">
              معلومات
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center flex-grow h-screen text-center px-4"
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={350}
          height={350}
          className={`transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}
        />
        <p
          className={`mt-4 text-lg max-w-md font-bold ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-all duration-700`}
        >
          شركة التضامن لتجارة الحديد و المكائن
        </p>
        <p
          className={`mt-2 text-lg max-w-md ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-all duration-700`}
        >
          واحدة من أكبر الشركات في العراق في مجال الحديد
        </p>
        <div className="flex space-x-6 rtl:space-x-reverse mt-6 text-xl">
          <a
            href="https://www.instagram.com/al_tadhamun_company/?igsh=dHVhZ2NjcWcwMjQ5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            Instagram
          </a>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            📘
          </a> */}
          {/* <a
            href="https://wa.me/07801016433"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            💬
          </a> */}
        </div>
      </section>

      {/* Cards Section */}
      <section id="about" className="py-12 bg-blue-50 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/1.jpg", title: "مكائن لحام" },
            { src: "/2.jpg", title: "مكائن تشريح وتقطيع" },
            { src: "/3.jpg", title: "شاحنات" },
            { src: "/4.jpg", title: " BLAK STEEL PIPE" },
            { src: "/5.jpg", title: " H BEAM" },
            { src: "/6.jpg", title: " I BEAM" },
            { src: "/7.jpg", title: "HOT ROLLED STEEL" },
            { src: "/8.jpg", title: "DIPPED GALVANISED STEEL " },
            { src: "/9.jpg", title: "HOT ROLLED STEEL SHEETS plate" },
            { src: "/10.jpg", title: "ANGLE STEEL" },
            { src: "/11.jpg", title: "CHANNELS STEEL " },
          ].map(({ src, title }, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden rounded-md">
                <Image
                  src={src}
                  alt={title}
                  width={280}
                  height={192} // تقريبا نسبة 16:11
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-lg font-semibold mt-auto pt-4">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="info"
        className="bg-blue-900 text-white py-8 text-center space-y-3 px-4"
      >
        <h3 className="text-xl font-semibold">AL-TADHAMUN FOR IRON TRADE LTD</h3>
        <p>المدير المفوض : حسن فالح حسين</p>
        <p>رقم الهاتف: 07801016433</p>
        <p>سنة التأسيس 2022</p>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse text-2xl">
          <a
            href="https://www.instagram.com/al_tadhamun_company/?igsh=dHVhZ2NjcWcwMjQ5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            Instagram
          </a>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
            aria-label="Facebook"
          >
            📘
          </a>
          <a
            href="https://wa.me/07801016433"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            💬
          </a> */}
        </div>
      </footer>
    </div>
  );
}
