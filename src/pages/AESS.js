//Ömer ve Kutay
import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/ieeekouaess_beyaz.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import { IoLogoInstagram } from 'react-icons/io5';
import Sude from "../images/Sude.jpg";
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/aess/aess.png";
import Sliderap2 from "../images/aess/aess1.png";
import Sliderap3 from "../images/aess/aess2.png";
import Sliderap5 from "../images/aess/aess3.png"
import Sliderap6 from "../images/aess/aess4.png"


const AESS = () => {
  //1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
  ]

  const SliderAPhotoList3 = [
    {key : 1 , value : Sliderap5},
    {key : 2 , value : Sliderap6},
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
    
            AESS, havacılık ve elektronik sistemler, havacılık ile ilgili uçuş simülasyon sistemleri, havacılık elektroniği ve temel aerodinamiğe dayanan yenilikçi ve dinamik bir IEEE teknik topluluğudur. Topluluk; uzay, elektronik ve savunma endüstrisini temel alarak meraklılarına ve kendini bu alanlarda geliştirmek isteyenlere eşsiz fırsatlar sunar. IEEE AESS olarak misyonumuz doğrultusunda yenilikçi projeler üretir, bu projeleri yapmak için gerekli eğitimleri verir ve teknik seminerler düzenleriz. 
        
            </Col>
          </Row>
        </Container>

                 

        <h1 style={{textAlign : "center", marginTop: 50}}>DEF-SUM</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
              {/* Komite ana etkinliğinin yazısı*/}
              İlkini gerçekleştirdiğimiz Savunma Zirvesi etkinliğimizi geliştirip daha kapsamlı bir hale getirip Aralık ayında ikincisini düzenlemeyi hedefliyoruz. Bu alana ilgisi olan üyelerimizi bilgilendirip sektördeki insanlarla da tanışmayı hedefliyoruz.
        
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
                      <h2>TECH&TALK</h2>
                      <br/>
                      Havacılık, uzay ve savunma sanayii alanında çalışan ve 
                      tecrübelerini bizimle paylaşacak yetkin kişiler ile Kasım ve 
                      Mart aylarında olmak üzere 2 tane tech&talk etkinliği planlıyoruz.
                      <br/>
                      <br/>
                      <h2>TEKNİK GEZİ</h2>
                      <br/>
                      Üyelerimizin gelecekte çalışacakları ortamları önceden görebilmeleri için planladığımız, sektör hakkında çeşitli bilgiler elde edecekleri ve çeşitli deneyimlere sahip olacakları Teknik gezileri gerçekleştirmeyi planlıyoruz

            </Col>
          </Row>
        </Container>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col  className = "justify-content-center align-items-center" lg={11}>
                  {/*Ana etkinlik sliderı bu şekilde tanımlanacak sadece yukarda fotoğrafları tanımlicaksınız*/}
            <Slider  photos = {SliderAPhotoList3}/>

            </Col>
          </Row>
        </Container>
        
        

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center justify-content-center">
           
              {/*link resim bölüm rol verilecek who we are sayfasında var oradan alabilirsiniz*/}

            <PerCard name="Sude Mumcuoğlu" title = "AESS Komite Başkanı" src = {Sude} insta ={"https://www.instagram.com/sudemumcuoglu/"} 
            linked = "https://www.linkedin.com/in/sude-mumcuo%C4%9Flu-804369252/" mail = "sudemumcuoglu@gmail.com" major = "Metalurji Malzeme Mühendisliği"/>

            
          </Row>
        </Container>
        <div style={{textAlign: "center", marginTop: 50}}>
            <h3 style={{textAlign : "center", marginTop: 50}}>Komite Sosyal Medya Hesaplarımız</h3>
            <hr/>
            <a href = "https://www.instagram.com/ieeekouea/">
              <IoLogoInstagram size = "28"/>
            </a>
        </div>   
    </div>
  );
};       
export default AESS;