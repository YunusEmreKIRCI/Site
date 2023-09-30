import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import Image from "react-bootstrap/Image"
import PerCard from "../components/PerCard";
import Uygar from '../images/Uygar.jpg';
import Logo from '../images/gan1i9i.jpeg';
import IhaLogo from '../images/İhaLogo.jpg';
import SuLogo from '../images/SualtiLogo.jpg';
import Sliderap1 from "../images/teknik/Tank1.png";
import Sliderap2 from "../images/teknik/Sualtıfinal.jpg";
import Sliderap3 from "../images/teknik/iha.png";
import Sliderap4 from "../images/teknik/Naut.jpg";
import Sliderap5 from "../images/teknik/Toplu.jpg";
import Sliderap6 from "../images/teknik/Toplu2.jpg";
import Sliderap7 from "../images/teknik/mekik666.png";
import Taha from "../images/Taha.jpg";
import Feyza from "../images/Feyza.jpg";
import Hüseyin from "../images/Hüseyin.jpg";
import Burak from "../images/Burak.jpg";
import Yigit from "../images/Yiğit.jpg";
import Kutay from "../images/Kutay.jpg";
import Melih from "../images/Melih.jpg";
import Emre from "../images/Emre.jpg";

const Turing = () => {
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
    {key : 4 , value : Sliderap4},
    {key : 5 , value : Sliderap5},
    {key : 6 , value : Sliderap6},
    {key : 7 , value : Sliderap7},
   
  ]
    return (
      <div>
         <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" width="600"/>
        </div>
        
      <Container style={{marginTop: 50}}>
      <Row className="justify-content-md-evenly">
        
        <Col xs={6} md={4}>
          <Image src = {IhaLogo} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src = {SuLogo} roundedCircle />
        </Col>
      </Row>
    </Container>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
            IEEE KOU Technic, 2019 yılında Kocaeli Üniversitesi’nin IEEE Kulübü’nün altında kurulmuştur. 
            IEEE KOU Technic’in ilk projesi bir 6x6 Rover aracıdır. Bu aracın şase ,elektronik kartları ve 
            yazılımları tamamen Technic altında çalışan öğrenciler tarafından yerli ve
            milli olarak tasarlanmış ve üretilmiştir. Katılacağı yarışmanın raporlama puanlandırmasında en 
            yakın rakibine 32 puan fark atarak en yüksek puanı almıştır fakat ülkemizde gerçekleşen Covid-19 salgınından ötürü yarışma ertelenmiştir 
            ve günümüzde hala düzenlenen bu yarışmanın puanlandırması yapmış olduğumuz araç esas alınarak tekrardan düzenlenmiştir. 2021-2022 döneminde ise 
            bu araç geliştirilerek insansız hareket kabiliyeti ve faydalı yük taşıma gibi özellikleri eklenerek Teknofest 2022’de finalist olarak Trabzon’da yarışmışlardır.
            <br/>
            <br/>
            2020-2021 senesinde ise gözü yükseklerde olan ekibimiz bir insansız hava aracı yapmayı hedef almıştır. Ekibimizin yapmış olduğu ve ismine Titrek verdikleri uçağın 
            kendine özgü görev mekanizması, huş ağacından yapılmış şasesi, aviyoniği, görüntü işleme çalışmaları ile Teknofest 2021’de dikkatleri üzerlerine çekmişlerdir. 
            Teknofest 2021’in serbest kategori insansız hava aracı yarışmasında finalist olarak yarışma hakkı kazanmıştır ve bunu ilk döneminde yaparak büyük bir başarı elde 
            etmişlerdir. 2021- 2022 senesinde ise ODTÜ ve Boeing’in birlikte düzenlemiş oldukları Uluslararası VTOL yarışması için C-KUS isimli dikey iniş kalkış yapma 
            kabiliyetine sahip uçağı geliştirmiştir. Dünya’nın dört bir tarafından katılımcıların katılmış olduğu bu yarışmada 5. olmuşlardır. Ekibimiz önümüzdeki dönemde 
            Teknofest Savaşan İHA yarışmasına katılacaktır. 
            <br/>
            <br/>
              Karada ve havada yarışlan ekibimiz denize
              de hakim olabilmek için Teknofest
              2022’nin ileri kategori insansız su altı aracı
              yarışmasına katılmaya karar vermiştir.
              Yerli, milli ve özgünlüğü hedefleyen
              takımımız ilk senesinde elektronik hız
              kontrolcüsü, güç dağıtım kartı tasarımı ve
              yazılımlarını yaparak büyük bir başarı elde
              etmişlerdir. Finalist olma hakkı kazanan
              ekibimiz gerekli maddi imkanların
              sağlanamaması nedeniyle yarışmadan
              çekilmek zorunda kalmışlardır.
              <br/>
              <br/>

              Yüksek motivasyon, ekip ruhu ve öğrenme
              aşkıyla çalışan, hava, kara ve deniz platformu
              için çeşitli projeler geliştiren ekiplerimiz üretmiş
              olduğu araçların geliştirilmesi ve üretimine
              2022-2023 sezonunda da yapmış oldukları
              çalışmalarını sergileyebilmek, diğer takımlarım
              yapmış oldukları gelişimleri takip edebilmek ve
              daha bir çok deneyimi kazanabilmek için ulusal
              ve uluslararası bir çok yarışmada boy
              göstermeyi hedeflemektedir.
           
            </Col>
          </Row>
        </Container>
        
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col  className = "justify-content-center align-items-center" lg={11}>
                  {/*Ana etkinlik sliderı bu şekilde tanımlanacak sadece yukarda fotoğrafları tanımlicaksınız*/}
            <Slider  photos = {SliderAPhotoList}/>

            </Col>
          </Row>
        </Container>

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
      
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly">
            <Col md="auto">
              {/*link resim bölüm rol verilecek who we are sayfasında var oradan alabilirsiniz*/}

              <PerCard name="Uygar Mehmet Öztürk" title = "Teknik Projeler Direktörü" src = {Uygar} major = "Elektrik Mühendisliği" 
                    linked = "https://www.linkedin.com/in/uygarozturk/" mail = "m.uygarozturk@gmail.com"/>
            </Col>
          </Row>

          <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col md="auto">
                    <PerCard name="Kübra Serdar" title = "Başkan Yardımcısı" src = {Taha} major = "Elektronik Haberleşme Mühendisliği"
                    linked = "https://www.linkedin.com/in/k%C3%BCbra-serdar-b2653920a/" mail = "kubraserdarrrr@gmail.com"/>
                </Col>
                <Col md="auto">
                    <PerCard name="Edanur Çiftçi" title = "Finansal Koordinatör" src = {Uygar} major = "Metalurji Malzeme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/edanur-ciftci" mail = "edanuurc@gmail.com" insta = "https://instagram.com/edanurrc?igshid=NzZlODBkYWE4Ng=="/>
                </Col>
                <Col md="auto">
                    <PerCard name="Muhammet Musata Şirin" title = "Genel Sekreter" src = {Emre} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/muhammet-mustafa-sirin/" mail = "muhammetmsirin@gmail.com" insta = "https://instagram.com/mhammetsrn?igshid=MzRlODBiNWFlZA=="/>
                </Col>
            </Row>
            <Row className="justify-content-md-evenly" style={{marginTop: 50}}>
                <Col md="auto">
                    <PerCard name="Kübra Serdar" title = "Başkan Yardımcısı" src = {Burak} major = "Elektronik Haberleşme Mühendisliği"
                    linked = "https://www.linkedin.com/in/k%C3%BCbra-serdar-b2653920a/" mail = "kubraserdarrrr@gmail.com"/>
                </Col>
                <Col md="auto">
                    <PerCard name="Edanur Çiftçi" title = "Finansal Koordinatör" src = {Kutay} major = "Metalurji Malzeme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/edanur-ciftci" mail = "edanuurc@gmail.com" insta = "https://instagram.com/edanurrc?igshid=NzZlODBkYWE4Ng=="/>
                </Col>
                <Col md="auto">
                    <PerCard name="Muhammet Musata Şirin" title = "Genel Sekreter" src = {Melih} major = "Elektronik Haberleşme Mühendisliği" 
                    linked = "https://www.linkedin.com/in/muhammet-mustafa-sirin/" mail = "muhammetmsirin@gmail.com" insta = "https://instagram.com/mhammetsrn?igshid=MzRlODBiNWFlZA=="/>
                </Col>
            </Row>
        </Container>
      </div>
    );
  };      
  
  export default Turing;