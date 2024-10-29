// components/Footer.js
import React from 'react';
import '../Footer/Footer.css'

function Footer() {
  return (
    <footer 
      id="Contact" 
      className="bg-[#202735] text-white py-20 shadow-2xl shadow-gray-700"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 grider">
        {/* Section logo et description */}
        <div className="text-center md:text-left items-center max-w-80">
          <div className="flex justify-center">
          <img 
            src="/Image/Taylor Tailor.png" 
            alt="Votre Logo" 
            className="w-24 h-24 mx-auto md:mx-0 hover:scale-110 transition-transform duration-300 rounded-full"/>
            </div>
          <p className="mt-4 text-[#e1c340] text-center ms-3">
             la mode de couture traditionnelle et moderne de la région d'Agadez et du monde kel Timahight
          </p>
        </div>

        {/* Section liens importants */}
        <div className="text-center md:text-left text-[#e1c340] font-bold texteCenter">
          <h3 className="text-xl font-bold mb-4">Important</h3>
          <ul className="space-y-2">
            <li><a href="#Accueil" className="hover:underline transition-colors">Accueil</a></li>
            <li><a href="#Apropos" className="hover:underline transition-colors">À propos</a></li>
            <li><a href="#NosService" className="hover:underline transition-colors">Services</a></li>
            <li><a href="#Contact" className="hover:underline transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Section contact */}
        <div className="text-center md:text-left text-[#e1c340]">
          <h3 className="text-xl font-bold mb-4 texteCenter">Contactez-nous</h3>
          <ul className="space-y-4">
            <li>
              <a href="mailto:votre@email.com" className="flex items-center justify-center md:justify-start hover:text-gray-400 transition-colors">
              <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" stroke="black" d="m.5 6.5l11.375 7h.25l11.375-7m0-2.5v16.5H23c-3-.5-8-.75-11-.75S4 20 1 20.5H.5V4c3-.5 8.5-.75 11.5-.75s8.5.25 11.5.75Z"></path></svg>
                <span>votre@email.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+227 90 09 65 30" className="flex items-center justify-center md:justify-start hover:text-gray-400 transition-colors">
                <svg className="w-8 h-8 mr-2"  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path  fill="currentColor" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608a17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42a18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path></svg>
                <span>+227 90 09 65 30</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center md:justify-start hover:text-gray-400 transition-colors">
              <svg className="w-8 h-8 mr-2"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span>Agadez,</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left text-[#e1c340] mr-5">
          <h3 className="text-center text-lg font-bold mb-4">Suivez-nous</h3>
          <ul className="flex justify-center space-x-4">
            <li>
                <a 
                href="https://www.facebook.com/ghaichatoutibba" 
                target="_blank" 
                className="flex items-center hover:text-gray-400 transition-colors"
                >
                <span className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"></path>
                    </svg>
                </span>
                </a>
            </li>
            <li>
                <a 
                href="https://www.instagram.com/agadez_sokni__style?igsh=YzljYTk1ODg3Zg%3D%3D" 
                target="_blank" 
                className="flex items-center hover:text-gray-400 transition-colors"
                >
                <span className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </span>
                </a>
            </li>
            </ul>

        </div>


      </div>
    </footer>
  );
}

export default Footer;
