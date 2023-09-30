//Beril Başkanım
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Container from 'react-bootstrap/Container';
import Logo from "../images/pitek/ieeekoupitek_beyaz1.png";
import Hasan from "../images/Hasan.jpg";
import Sliderap1 from "../images/pitek/3.png";
import Sliderap2 from "../images/pitek/pitek1.png";
import Sliderap3 from "../images/pitek/pitek2.png";
import Sliderap4 from "../images/pitek/pitek.png";

const PITEK = () => {

  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
    {key : 4 , value : Sliderap4},

    
  ]
 
  return (
    <div >
      <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" width="900"/>
        </div>
        <h1 style={{textAlign : "center", marginTop: 50}}>PİTEK GÜNLERİ</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
    
             IEEE Kocaeli’nin en büyük salon etkinliği
             olan PİTEK Günleri’nin geçtiğimiz sene
             11.sini düzenledik. Ford Otosan, Baykar,
             Aselsan, Türk Havacılık ve Uzay Sanayii
            (TUSAŞ) gibi firmalardan üst düzey
             yetkilileri ağırladığımız bu etkinlikte hem
             konuklarımızın firmaları hakkında bilgi
             edindik hem de konuklarımızın kariyerleri
             boyunca kazandıkları tecrübelerinden
             faydalanma imkânı bulduk. Bunun yanı
             sıra sosyal konuk olarak etkinliğimize
             davet ettiğimiz Dijital İçerik Üreticisi ve
             Youna Paper kurucusu Ecmel Soylu ile
             güzel bir söyleşi yaparak kendi girişimini
             kurmuş bir kişinin ne gibi sorunlar
             yaşadığını ve bu sorunlarla nasıl başa
             çıktığını öğrendik. 2023 - 2024
             döneminde düzenleyeceğimiz 12. PİTEK
             Günleri etkinliği için çalışmalarımıza tüm
             hızıyla devam ediyoruz.
        <br/>
        <br/>
             PİTEK (Profesyonel İş ve
             Teknoloji) Günleri, her alandan
             insanları iş hayatına hazırlamayı
             ve kariyerlerinde fark
             yaratmalarını sağlamayı hedefler.
             Sektörden mühendisler,
             yöneticiler ve girişimciler ile
             gençleri buluşturarak onların
             kıymetli deneyimleri hakkında
             bilgi sahibi olmamızı sağlar.
        
            </Col>
          </Row>
        </Container>

        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col  className = "justify-content-center align-items-center" lg={11}>
              
            <Slider  photos = {SliderAPhotoList}/>

            </Col>
          </Row>
        </Container>


        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly">
            <Col md="auto">

            <PerCard name="Hasan Kayar" title = "12. Pitek Günleri Koordinatörü" src = {Hasan} linked = "http://linkedin.com/in/hasan-kayar8a84791b6"
            mail = "hasankayar01.11@gmail.com" major = "Elektrik Mühendisliği"/>

            </Col>
          </Row>
        </Container>



     
    </div>
  );
};      
export default PITEK;