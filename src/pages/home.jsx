import "../styles/home.css";
import "../styles/about.css";
import "../styles/services.css";
import "../styles/contact.css";

import Navbar from "../components/navbar.jsx";
import Section from "../components/section.jsx";

import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function useIsMobile(maxWidth = 450) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    checkScreen(); // Executa ao montar
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [maxWidth]);

  return isMobile;
}

function Home() {
  const isMobile = useIsMobile();

  useEffect(() => {
    AOS.init({ duration: 800, once: false});
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />

      <Section id="home">
        <h2 className="home_title">
          Onde criatividade encontra{" "}
          <span className="home_text_color">
            {isMobile ? (
              "tecnologia"
            ) : (
              <Typewriter
                words={["tecnologia"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1500}
              />
            )}
          </span>{" "}
        </h2>

        <p className="home_paragraph">
          Na PixelForge, desenvolvemos projetos digitais sob medida que
          transformam desafios em oportunidades. Pronto para dar o próximo
          passo?
        </p>

        <img
          src="/ilustration_home.svg"
          className="home_img"
          alt="Ilustração"
        />

        <div className="home_link_container">
          <a href="#services" className="home_link_explore">
            Conheça nossos serviços
          </a>
          <a href="#contact" className="home_link_contact">
            Fale conosco
          </a>
        </div>
      </Section>

      <Section id="about">
        <h2 className="about_title" data-aos="fade-left">
          Quem<span className="about_text_color">somos</span>
        </h2>
        <p className="about_paragraph" data-aos="fade-left">
          A PixelForge é uma agência digital que une criatividade e tecnologia
          para transformar ideias em experiências visuais envolventes. Desde
          2020, ajudamos empresas a se destacarem no mundo digital com design
          estratégico, interfaces inteligentes e soluções sob medida.
        </p>

        <div className="about_cards_container">
          <div data-aos="fade-right" className="about_card">
            <h3 className="about_card_title">Inovação</h3>
            <p className="about_card_text">
              Buscamos soluções criativas e tecnológicas para cada desafio.
            </p>
          </div>
          <div data-aos="fade-right" className="about_card">
            <h3 className="about_card_title">Colaboração</h3>
            <p className="about_card_text">
              Trabalhamos juntos para alcançar resultados extraordinários.
            </p>
          </div>
          <div data-aos="fade-right" className="about_card">
            <h3 className="about_card_title">Excelência</h3>
            <p className="about_card_text">
              Entregamos qualidade em cada detalhe dos nossos projetos.
            </p>
          </div>
        </div>

        <a href="#services" className="about_link_projects">
          Ver serviços
        </a>
      </Section>

      <Section id="services">
        <h2 className="services_title" data-aos="zoom-in-right">
          Nossos Serviços
        </h2>

        <div className="cards_and_img_wrapper">
          <img
            src="/coding_ilustration.svg"
            className="services_img"
            data-aos="zoom-in-left"
          />

          <div className="cards_container">
            <div className="card" data-aos="zoom-in-right">
              <div className="card_title">
                <h3>Desenvolvimento Front-end</h3>
              </div>
              <p className="card_desc">
                Transformamos layouts em aplicações rápidas e interativas usando
                tecnologias modernas como React e Vue.
              </p>
            </div>
            <div className="card" data-aos="zoom-in-right">
              <div className="card_title">
                <h3>UX/UI Design</h3>
              </div>
              <p className="card_desc">
                Projetamos interfaces intuitivas e experiências digitais que
                aumentam a satisfação do usuário.
              </p>
            </div>
            <div className="card" data-aos="zoom-in-right">
              <div className="card_title">
                <h3>Identidade Visual & Branding</h3>
              </div>
              <p className="card_desc">
                Criamos marcas fortes com logotipos e elementos que transmitem
                os valores da sua empresa.
              </p>
            </div>
            <div className="card" data-aos="zoom-in-right">
              <div className="card_title">
                <h3>Animações e Microinterações</h3>
              </div>
              <p className="card_desc">
                Adicionamos animações sutis que tornam sua aplicação mais
                dinâmica e agradável.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <h2 className="contact_title" data-aos="zoom-in-up">
          Fale conosco
        </h2>
        <p className="contact_description" data-aos="zoom-in-up">
          Entre em contato pelo formuláro abaixo!
        </p>

        <div className="contact_container" data-aos="zoom-in">
          <form className="contact_form" onSubmit={(e) => e.preventDefault()}>
            <div className="form_group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Digite sua mensagem..."
                required
              />
            </div>

            <button type="submit" className="contact_button">
              Enviar
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

export default Home;
