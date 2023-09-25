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
import Logo from '../components/navimg.png';

const WhoWeAre = () => {

  return (
    <div>
   
       
        <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" />
        </div>
        <div style={{ textAlign : "center", marginTop : 40, marginLeft: 150, marginRight: 150}}>
            <h1 style={{textAlign: "center", marginTop: 50}}>Who We Are?</h1>
            <hr/>
            ATATÜRK’ÜN GENÇLİĞE HİTABESİ
<br/>
   Ey Türk gençliği! Birinci vazifen; Türk istiklalini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir.<br/>

   Mevcudiyetinin ve istikbalinin yegâne temeli budur. Bu temel, senin en kıymetli hazinendir. İstikbalde dahi seni bu hazineden mahrum etmek isteyecek dâhilî ve haricî bedhahların olacaktır. Bir gün, istiklal ve cumhuriyeti müdafaa mecburiyetine düşersen, vazifeye atılmak için içinde bulunacağın vaziyetin imkân ve şeraitini düşünmeyeceksin. Bu imkân ve şerait, çok namüsait bir mahiyette tezahür edebilir. İstiklal ve cumhuriyetine kastedecek düşmanlar, bütün dünyada emsali görülmemiş bir galibiyetin mümessili olabilirler. Cebren ve hile ile aziz vatanın bütün kaleleri zapt edilmiş, bütün tersanelerine girilmiş, bütün orduları dağıtılmış ve memleketin her köşesi bilfiil işgal edilmiş olabilir. Bütün bu şeraitten daha elim ve daha vahim olmak üzere, memleketin dâhilinde iktidara sahip olanlar, gaflet ve dalalet ve hatta hıyanet içinde bulunabilirler. Hatta bu iktidar sahipleri, şahsi menfaatlerini müstevlilerin siyasi emelleriyle tevhit edebilirler. Millet, fakruzaruret içinde harap ve bitap düşmüş olabilir.

  <br/> Ey Türk istikbalinin evladı! İşte, bu ahval ve şerait içinde dahi vazifen, Türk istiklal ve cumhuriyetini kurtarmaktır. Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur.

  <br/>Mustafa Kemal Atatürk

Paylaş:  
 Save

        </div>
        <Container>
            <Row className="justify-content-md-evenly" style={{marginTop: 150}}>
                <Col md="auto">
                    <PerCard name="Ceyda Arda" title = "Başkan" src = {Ceyda} major = "Kimya Mühendisliği" 
                    linked = "https://www.linkedin.com/in/ceydarda/" mail = "c.arda1302@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col md="auto">
                    <PerCard name="Kübra Serdar" title = "Başkan Yardımcısı" src = {Kubra} major = "Elektronik Haberleşme Mühendisliği"
                    linked = "https://www.linkedin.com/in/k%C3%BCbra-serdar-b2653920a/" mail = "kubraserdarrrr@gmail.com"/>
                </Col>
                <Col md="auto">
                    <PerCard name="Edanur Çiftçi" title = "Finansal Koordinatör" src = {Eda} major = "Metalurji Malzeme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/edanur-ciftci" mail = "edanuurc@gmail.com" insta = "https://instagram.com/edanurrc?igshid=NzZlODBkYWE4Ng=="/>
                </Col>
                <Col md="auto">
                    <PerCard name="Muhammet Musata Şirin" title = "Genel Sekreter" src = {Mami} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/muhammet-mustafa-sirin/" mail = "muhammetmsirin@gmail.com" insta = "https://instagram.com/mhammetsrn?igshid=MzRlODBiNWFlZA=="/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard name="Merve Çağrı " title = "Kurul Üyesi" src = {Merve} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/mervecagri" mail = "mervecagri14@gmail.com"/>
                </Col> 
                <Col  md="auto">
                    <PerCard name="Uygar Mehmet Öztürk" title = "Teknik Projeler Direktörü" src = {Uygar} major = "Elektrik Mühendisliği" 
                    linked = "https://www.linkedin.com/in/uygarozturk/" mail = "m.uygarozturk@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard name="Beril İsarlar" title = "CS Komite Başkanı" src = {Beril} major = "Bilgisayar Mühendisliği"
                    linked = "https://www.linkedin.com/in/beril-isalar-40a1ba256/" mail = "isalarberil@gmail.com"/>
                </Col>
                <Col  md="auto">
                    <PerCard name="Sude Mumcuoğlu" title = "AESS Komite Başkanı" src = {Sude} major = "Metalurji Malzeme Mühendisliği"
                    linked = "https://www.linkedin.com/in/sude-mumcuo%C4%9Flu-804369252/" mail = "sudemumcuoglu@gmail.com"/>
                </Col>
                <Col  md="auto">
                    <PerCard name="Zeynep Erdoğan" title = "EA Komite Başkanı" src = {Zeynep} major = "Biyomedikal Mühendisliği"
                    linked = "https://www.linkedin.com/in/zeynep-erdo%C4%9Fan-a50283228" mail = "zeynep.erdogann219@gmail.com"/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard name="Sabahaddin Aksakal" title = "PES Komite Başkanı" src = {Sabahattin} major = "Elektrik Mühendisliği"
                    linked = "https://www.linkedin.com/in/sabahaddin-aksakal" mail = "sabahaddinaksakal217@gmail.com"/>
                </Col>
                <Col  md="auto">
                    <PerCard name="Beyza Ayaz" title = "WIE Komite Başkanı" src = {Beyza} major = "Endüstri Mühendisliği"
                    linked = "https://www.linkedin.com/in/beyza-ayaz-90511b23a" mail = "ayazbeyza212@gmail.com"/>
                </Col>
                <Col  md="auto">
                    <PerCard name="Veli Ersöz" title = "KÖK Temsilcisi" src = {Veli} major = "Biyomedikal Mühendisliği"
                    linked = "https://www.linkedin.com/in/veli-ers%C3%B6z-24990622b" mail = "veliersozkou@gmail.com" insta = "https://instagram.com/vel.dora.e?igshid=OGQ5ZDc2ODk2ZA=="/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col  md="auto">
                    <PerCard name="Hasan Kayar" title = "12. Pitek Günleri Kordinatörü" src = {Hasan} major = "Elektrik Mühendisliği"
                    linked = "http://linkedin.com/in/hasan-kayar8a84791b6" mail = "hasankayar01.11@gmail.com"/>
                </Col>
                <Col  md="auto">
                    <PerCard name="Utkan Orakcı" title = "Tanıtım Kordinatörü" src = {Utkan} major = "Elektrik Mühendisliği"
                    linked = "https://www.linkedin.com/in/utkan-orakc%C4%B1-34bb3521b" mail = "utkanorakci@outlook.com"/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};      
export default WhoWeAre;