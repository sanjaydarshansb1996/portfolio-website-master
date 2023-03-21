import { message } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { HeroIllustration } from "../../assets";
import { Button } from "../../components";
import ContactsModal from "./ContactsModal";

function HeroSection() {
  const [visible, setVisible] = useState(false);

  function handleDownloadPDF() {
    message.success("Your cv is downloading");

    const url = "/sanjaydarshansb_cv_React_Dev.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "sanjaydarshansb_cv_React_Dev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const showModal = () => {
    setVisible(true);
  };
  return (
    <StyledHeroSection>
      <div className="content-block">
        <span className="user-select-none">
          Helping people make the world a better place through quality software.
        </span>
        <div className="btn-group">
          <Button variant="primary" onClick={handleDownloadPDF}>
            Download Resume
          </Button>
          <Button onClick={showModal} variant="secondary">
            Contact Me
          </Button>
          {visible ? (
            <ContactsModal
              visible={visible}
              setVisible={setVisible}
            ></ContactsModal>
          ) : (
            <></>
          )}
        </div>
      </div>
      <HeroIllustration className="hero-illustration" />
    </StyledHeroSection>
  );
}

export default HeroSection;

const StyledHeroSection = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 2000px;

  .content-block {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    /* min-width: 470px; */
    max-width: 600px;
    gap: 2rem;

    .btn-group {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
    }

    span {
      word-wrap: break-word;
      font-size: 44px;
      color: ${(props) => props.theme.text};
    }
  }
  .hero-illustration {
    width: 100%;
    max-width: fit-content;
  }
  @media screen and (max-width: 1200px) {
    flex-flow: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    .content-block {
      width: 475px;
      .btn-group {
        justify-content: center;
      }
      span {
        font-size: 32px;
      }
    }
    .hero-illustration {
      height: 380px;
    }
  }
  @media screen and (max-width: 576px) {
    height: 30rem;
    justify-content: flex-start;
    .content-block {
      width: 90%;
      max-width: 400px;
      .btn-group {
        flex-flow: column;
      }
      span {
        font-size: 24px;
      }
    }
    .hero-illustration {
      height: 200px;
    }
  }
`;
