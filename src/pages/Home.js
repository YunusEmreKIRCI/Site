import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Logo from '../components/navimg.png';
import Cs from '../images/komitelogo/Cs.jpg';
import Ea from '../images/komitelogo/Ea.jpg';
import Pes from '../images/komitelogo/Pes.jpg';
import Aess from '../images/komitelogo/Aess.jpg';
import Wie from '../images/komitelogo/wie.jpg';
import Kok from '../images/komitelogo/kök.jpg';
import Pitek from '../images/komitelogo/pitek.jpg';

const Home = () => {
 
  return (

    
    <div className="home">

    
    <Container style={{marginTop: 50}}>
      <Row className="justify-content-md-center">
        <Col xs lg="11"> 
          <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" width="900"/>
          </div>    
          <h1 style={{textAlign : "center", marginTop: 50}}>IEEE NEDİR?</h1>
              <br/>
              <br/>                   
              The Institute of Electrical and Electronics
              Engineers ya da kısaca IEEE (Türkçe:
              Elektrik ve Elektronik Mühendisleri
              Enstitüsü), elektrik, elektronik, bilgisayar,
              otomasyon, telekomünikasyon ve diğer
              birçok alanda, mühendislik teori ve
              uygulamalarının gelişimi için çalışan, kâr
              amacı olmayan, dünyanın önde gelen
              teknik organizasyonudur. 426.000'dan
              fazla üyesi -117.000 öğrenci- ile IEEE,
              dünyada “İnsanlık için daha iyi yarınlar”
              üretmek isteyen girişimci, öğrenci,
              profesyonel ve akademisyenleri destekler
              ve iş birliği yapabilecekleri bir ortam
              oluşturulmasını sağlar. Bilgisayar
              mühendisliği, biyomedikal, teknoloji,
              elektriksel güç, telekomünikasyon, uzay
              elektroniği, tüketici elektroniği gibi birçok
              teknik alanda otorite sayılan IEEE,
              belirtilmiş alanlarda dünyada çıkan tüm
              yayınların %40 gibi yüksek bir diliminin
              sahibidir.
              IEEE üyeleri 160 ülkede; 334
              yerel şube, 2.116 resmi alt
              birimi ve 440 teknik olmayan
              ilgi alanına yayılmış
              durumdadır. Bu birimler yılda
              10.000'den fazla aktivite
              düzenleyerek üyeler arası
              iletişimi sağlar ve yeni ufuklar
              keşfedilmesine yardımcı olur.
              <br/>
              <br/>
              <br/>
              <br/>
              <ul>
                <li>
                Yılda 1600’den fazla konferans
                </li>
                <br/>
                <br/>
                <li>
                3.900.000 teknik belge
                </li>
                <br/>
                <br/>
                <li>
                1.300’den fazla standart
                </li> 
                <br/>
                <br/>
                <li>
                1100’den fazla aktif standart,500’den fazla geliştirilen standart
                </li>
                <br/>
                <br/>
                <li>
                39 Teknik Kurum ve 1 Teknik
                Konsey, IEEE, üyelerinin hayat
                boyu süren öğrenim sürecinde
                onlara mesleki açıdan çok önemli
                yardımlarda bulunur; ulusal ve
                uluslararası konferanslar,
                seminerler, kariyer geliştirme ve
                network üzerine mesleki
                toplantılar
                </li>
                <br/>
                <br/>
                <li>
                Gönüllü aktiviteler ile liderlik ve
                diğer kişisel becerileri geliştirme
                fırsatı
                </li>
                <br/>
                <br/>
                <li>
                300’den fazla sürekli eğitim ve
                geliştirme programı
                </li>
                <br/>
                <br/>
                <li>
                Kariyer yönetimi ekipmanları ve
                kaynak materyaller
                </li>
                <br/>
                <br/>
                <li>
                Finansal servisler ve portatif yarar
                programları gibi imkanlar sağlar.
                </li>
              </ul>       

        </Col>
      </Row>
    </Container>
    <h1 style={{textAlign : "center", marginTop: 50}}>Komitelerimiz</h1>
    <Container style={{marginTop: 50}}>
      <Row className="justify-content-md-evenly">        
        <Col xs={6} md="auto">
          <Image src = {Cs} roundedCircle />
        </Col>
        <Col xs={6} md = "auto">
          <Image src = {Pes} roundedCircle />
        </Col>
        <Col xs={6} md = "auto">
          <Image src = {Aess} roundedCircle />
        </Col>
        <Col xs={6} md = "auto">
          <Image src = {Wie} roundedCircle />
        </Col>
      </Row>
      <Row className="justify-content-md-evenly">
      <Col xs={6} md = "auto">
          <Image src = {Ea} roundedCircle />
        </Col>
        <Col xs={6} md = "auto">
          <Image src = {Kok} roundedCircle />
        </Col>
        <Col xs={12} md = "auto">
          <Image src = {Pitek} roundedCircle />
        </Col>
      </Row>
    </Container>
  </div>
  );
};      
export default Home;