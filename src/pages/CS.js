import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/csLogo.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Beril from "../images/Beril.jpg";
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/21.png";
import Sliderap2 from "../images/16.png";
import Sliderap3 from "../images/BurcuEsmersoy.jpg";
import Deney from "../images/Deney5.jpg";
const CS = () => {
  //1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
    {key : 4 , value : Deney},
  ]
  return (
    <div>       
      {/*Logo için dosyada path verilerek tanımlanmış src içinde yukardaki logo pathi değişerek verilmeli gerisi aynı*/}
        <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" width="900"/>
        </div>
        {/*Ana tanıtım yazısı konteynırı yazı değişecek yine yazıyı alacaksınız */}
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
    
               IEEE CS, bilgisayar bilimleri ve mühendisliğinde
            bilgi, ilham ve işbirliği için önde gelen bir
            kaynaktır. Dünya çapındaki üyeleri ortak bir
            noktada buluşturan Computer Society,
            profesyonel kariyerlerinin her aşamasında
            gerekli araçları sağlayarak teknolojiyi geliştiren
            bireyleri desteklemektedir. 60.000'den fazla
            üyeye hizmet veren IEEE Computer Society,
            araştırmacıları, eğitimcileri, yazılım
            mühendislerini, BT uzmanlarını, işverenleri ve
            öğrencileri içeren küresel bir teknoloji liderleri
            topluluğu için güvenilir bilgi, ağ oluşturma ve
            kariyer geliştirme kaynağıdır.
        
            </Col>
          </Row>
        </Container>

                 

        <h1 style={{textAlign : "center", marginTop: 50}}>F5 HAFTASI</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
              {/* Komite ana etkinliğinin yazısı*/}
              Komitenin geleneksel etkinliğidir.
              Kasım veya Aralık ayında bir haftada
              gerçekleşir.
              <br/>
              <br/>
              5 gün boyunca farklı konuklar davet edilir.
              Konuklarla yüzyüze soru-cevap etkinliği
              gerçekleştirilir.
              <br/>
              <br/>
              Böylece üyeler kendilerine tecrübe katmış
              olur
        
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

        
        

        <h1 style={{textAlign : "center", marginTop: 50}}>DİĞER ETKİNLİKLERİMİZ</h1>
        

        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col className = "justify-content-center align-items-center" lg={11}>
                      {/*diğer etkinlikler fotoğrafları verilecek*/}

            <Slider  photos = {SliderAPhotoList}/>

            </Col>
          </Row>
        </Container>

      

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly">
            <Col md="auto">
              {/*link resim bölüm rol verilecek who we are sayfasında var oradan alabilirsiniz*/}

            <PerCard name="Beril İsalar" title = "CS Komite Başkanı" src = {Beril} insta ={"https://www.instagram.com/beril_isalar/"}/>

            </Col>
          </Row>
        </Container>

    </div>
  );
};      
export default CS;
