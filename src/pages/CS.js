import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/csLogo.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Beril from "../images/Beril.jpg";
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/cs/cs.png";
import Sliderap2 from "../images/cs/cs1.png";
import Sliderap3 from "../images/cs/cs2.png";
import Sliderap4 from "../images/cs/bilisim_vadisi_saykal.jpg";
import Sliderap5 from "../images/cs/bilisim_vadisi_saykal_toplu.jpg";
import Sliderap6 from "../images/cs/Bilisim_vadisi.jpg";
import Sliderap7 from "../images/cs/geek_night.jpg";
import { IoLogoInstagram } from 'react-icons/io5';

const CS = () => {
  //1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
    
  ]
  const SliderAPhotoList2 = [
    {key : 1 , value : Sliderap4},
    {key : 2 , value : Sliderap5},
    {key : 3 , value : Sliderap6},
    {key : 4 , value : Sliderap7},
  ]
  return (
    <div>       
      {/*Logo için dosyada path verilerek tanımlanmış src içinde yukardaki logo pathi değişerek verilmeli gerisi aynı*/}
        <div style={{textAlign: "center", marginTop: 50}}>
            <img src={Logo} alt="Logo" style = {{width : '100%'}}/>
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
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
            <h2>Geeks Night</h2>
            <br/>
                Bu formatımız geçen yıl olduğu gibi bu yılda devam edecek. YouTube üzerinden canlı
                gerçekleştirdiğimiz formatımıza daha çok yurtdışı 
                bağlantılı konuklarımızı davet edip onlaarla soru 
                cevap etkinliği düzenleyeceğiz.
            <br/>            
            <br/>
            <h2>Teknik Eğitimler</h2>
            <br/>
            Üyelerimize hem bölümdeki derslerine yardımcı olacak hem 
            de kariyer gelişimlerini olumlu yönde etkileyecek şekilde 
            eğitimler düzenleyeceğiz. Bu sayede birlikte öğrenip akademik 
            hayatımıza katkı saylayacağız.
            <br/>
            <br/>
            <h2>Teknik Geziler</h2>
            <br/>
            Üyelerimize mezun olmadan önce çalışacakalrı ortam hakkında bilgi 
            vermek ve okulda alınan teorik bilginin uygulamaya nasıl dönüştüğünü göstermek 
            amacıyla teknik geziler düzenleyeceğiz.
            </Col>
          </Row>
        </Container>

        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col className = "justify-content-center align-items-center" lg={11}>
                      {/*diğer etkinlikler fotoğrafları verilecek*/}

            <Slider  photos = {SliderAPhotoList2}/>

            </Col>
          </Row>
        </Container>

      

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
       
        <Container  style={{marginTop: 50}}>
          <Row className="justify-content-md-center justify-content-sm-center">
           
              {/*link resim bölüm rol verilecek who we are sayfasında var oradan alabilirsiniz*/}

            <PerCard name="Beril İsalar" title = "CS Komite Başkanı" src = {Beril} insta ={"https://www.instagram.com/beril_isalar/"} 
            linked = "https://www.linkedin.com/in/beril-isalar-40a1ba256/" mail = "isalarberil@gmail.com" major = "Bilgisayar Mühendisliği"/>

          </Row>
        </Container>
        <div style={{textAlign: "center", marginTop: 50}}>
            <h3 style={{textAlign : "center", marginTop: 50}}>Komite Sosyal Medya Hesaplarımız</h3>
            <hr/>
            <a href = "https://www.instagram.com/ieeekoucs/">
              <IoLogoInstagram size = "28"/>
            </a>
        </div>    
    </div>
  );
};      
export default CS;
