import PerCard from "../components/PerCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ceyda from '../images/Ceyda.jpg';
import Kubra from '../images/Kubra.jpg';
import Eda from '../images/Eda.jpg';
import Mami from '../images/Mami.jpg';
import Merve from '../images/Merve.jpg';
import Beril from '../images/Beril.jpg';
import Beyza from '../images/Beyza.jpg';
import Hasan from '../images/Hasan.jpg';
import Sabahattin from '../images/Selo.jpg';
import Sude from '../images/Sude.jpg';
import Uygar from '../images/Uygar.jpg';
import Veli from '../images/Veli.jpg';
import Utkan from '../images/Utkan.jpg';
import Zeynep from '../images/Zeynep.jpg';

const WhoWeAre = () => {

  return (
    <div>
   
       
     
        <div style={{ textAlign : "center", marginTop : 40, marginLeft: 150, marginRight: 150}}>
            <h1 style={{textAlign: "center", marginTop: 50}}>Who We Are?</h1>
            <hr/>
        </div>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
            <h2 style={{textAlign: "center", marginTop: 50}}>Kocaeli'de IEEE</h2>
            <hr/>
            Kocaeli Üniversitesi IEEE Kulübü , 2010 yılında
            Kocaeli Üniversitesi öğrencileri tarafından
            kurulmuş ve başta mühendislik öğrencileri
            olmak üzere, tüm sosyal branşlardaki
            öğrencilere kapılarını açan, gerek ülke çapında
            gerekse uluslararası düzeyde projelere katılma
            şansı tanıyan, bünyesinde barındırdığı
            milyonlarca e - dergi ve teknik magazinlerden
            faydalanma imkânı tanıyan, staj ve iş bulmada
            kolaylık sağlayan ve kaliteli şirketler tarafından
            aranan bir CV veri tabanına sahip olan IEEE
            markasının bünyesinde yapılanan IEEE öğrenci
            kollarından birisidir.
            <br/>
            <h2 style={{textAlign: "center", marginTop: 50}}>Misyonumuz</h2>
            <hr/>
            IEEE KOU üyelerinin sektörü tanıyan
            ve takip eden mühendisler olmaları
            için çalışmak, hayallerindeki iş ve
            kariyer fırsatlarını yakalamaları için
            sürekli destek sağlamak,
            kariyerlerinde zirveye oynayan
            üyelerimize hayatları boyunca
            kopamayacakları arkadaşlıklardan
            oluşan bir ağ oluşturarak takım
            çalışmasının öğrenilmesi ve
            geliştirilmesi konusunda yardımcı
            olmaktır.

            </Col>
          </Row>
        </Container>

        <h2 style={{textAlign: "center", marginTop: 50}}>Yönetim Kurulu ve İdari Kurul</h2>
            <hr/>

        <Container>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 100}}>
                <Col xs ={7}  md="auto">
                    <PerCard name="Ceyda Arda" title = "Başkan" src = {Ceyda} major = "Kimya Mühendisliği" 
                    linked = "https://www.linkedin.com/in/ceydarda/" mail = "c.arda1302@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 50}}>
                <Col xs ={7} md="auto">
                    <PerCard name="Kübra Serdar" title = "Başkan Yardımcısı" src = {Kubra} major = "Elektronik Haberleşme Mühendisliği"
                    linked = "https://www.linkedin.com/in/k%C3%BCbra-serdar-b2653920a/" mail = "kubraserdarrrr@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Edanur Çiftçi" title = "Finansal Koordinatör" src = {Eda} major = "Metalurji Malzeme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/edanur-ciftci" mail = "edanuurc@gmail.com" insta = "https://instagram.com/edanurrc?igshid=NzZlODBkYWE4Ng=="/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Muhammet Mustafa Şirin" title = "Genel Sekreter" src = {Mami} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/muhammet-mustafa-sirin/" mail = "muhammetmsirin@gmail.com" insta = "https://instagram.com/mhammetsrn?igshid=MzRlODBiNWFlZA=="/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 50}}>
                <Col xs ={7} md="auto">
                    <PerCard name="Merve Çağrı " title = "Kurul Üyesi" src = {Merve} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/mervecagri" mail = "mervecagri14@gmail.com"/>
                </Col> 
                <Col xs ={7} md="auto">
                    <PerCard name="Uygar Mehmet Öztürk" title = "Teknik Projeler Direktörü" src = {Uygar} major = "Elektrik Mühendisliği" 
                    linked = "https://www.linkedin.com/in/uygarozturk/" mail = "m.uygarozturk@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 50}}>
                <Col xs ={7}  md="auto">
                    <PerCard name="Beril İsarlar" title = "CS Komite Başkanı" src = {Beril} major = "Bilgisayar Mühendisliği"
                    linked = "https://www.linkedin.com/in/beril-isalar-40a1ba256/" mail = "isalarberil@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Sude Mumcuoğlu" title = "AESS Komite Başkanı" src = {Sude} major = "Metalurji Malzeme Mühendisliği"
                    linked = "https://www.linkedin.com/in/sude-mumcuo%C4%9Flu-804369252/" mail = "sudemumcuoglu@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Zeynep Erdoğan" title = "EA Komite Başkanı" src = {Zeynep} major = "Biyomedikal Mühendisliği"
                    linked = "https://www.linkedin.com/in/zeynep-erdo%C4%9Fan-a50283228" mail = "zeynep.erdogann219@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 50}}>
                <Col xs ={7} md="auto">
                    <PerCard name="Sabahaddin Aksakal" title = "PES Komite Başkanı" src = {Sabahattin} major = "Elektrik Mühendisliği"
                    linked = "https://www.linkedin.com/in/sabahaddin-aksakal" mail = "sabahaddinaksakal217@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Beyza Ayaz" title = "WIE Komite Başkanı" src = {Beyza} major = "Endüstri Mühendisliği"
                    linked = "https://www.linkedin.com/in/beyza-ayaz-90511b23a" mail = "ayazbeyza212@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Veli Ersöz" title = "KÖK Temsilcisi" src = {Veli} major = "Biyomedikal Mühendisliği"
                    linked = "https://www.linkedin.com/in/veli-ers%C3%B6z-24990622b" mail = "veliersozkou@gmail.com" insta = "https://instagram.com/vel.dora.e?igshid=OGQ5ZDc2ODk2ZA=="/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly justify-content-sm-center" style={{marginTop: 50}}>
                <Col xs ={7} md="auto">
                    <PerCard name="Hasan Kayar" title = "12. Pitek Günleri Kordinatörü" src = {Hasan} major = "Elektrik Mühendisliği"
                    linked = "http://linkedin.com/in/hasan-kayar8a84791b6" mail = "hasankayar01.11@gmail.com"/>
                </Col>
                <Col xs ={7} md="auto">
                    <PerCard name="Utkan Orakcı" title = "Tanıtım Kordinatörü" src = {Utkan} major = "Elektrik Mühendisliği"
                    linked = "https://www.linkedin.com/in/utkan-orakc%C4%B1-34bb3521b" mail = "utkanorakci@outlook.com"/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};      
export default WhoWeAre;