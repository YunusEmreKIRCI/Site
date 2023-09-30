//Eyüp ve Devran
import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/ea/ieeekouea_beyaz.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Zeynep from "../images/Zeynep.jpg";
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/ea/ea.png";
import Sliderap2 from "../images/ea/ea1.png";
import Sliderap3 from "../images/ea/ea2.png";
import Sliderap4 from "../images/ea/ea2_.png";
const EA = () => {
  //1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
  ]
  const SliderAPhotoList2 = [
    {key : 1 , value : Sliderap4},
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
    
               IEEE EA
                      Educational activities (EA),
                      üniversite öncesi eğitime daha fazla
                      dikkat çekmek, eğitimdeki
                      problemlere çözüm odaklı çalışmalar
                      yapmak ve akabinde bunları
                      geliştirme amacı taşır. EA, vereceği
                      eğitimler, yapacağı çalışmalar
                      öncülüğünde öğrencilere bu alanları
                      sevdirmeyi, bilgilendirmeyi ve
                      onlarda merak uyandırmayı
                      amaçlamaktadır. Bunların
                      beraberinde IEEE ile yeni tanışan
                      kişiler için IEEE’nin topluma yansıyan
                      bir tarafı olacaktır.
        
            </Col>
          </Row>
        </Container>

                 

        <h1 style={{textAlign : "center", marginTop: 50}}>EA KAMPI</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
              {/* Komite ana etkinliğinin yazısı*/}
              Üyelerimize profesyonel hayata hazırlık ve kişisel gelişimi sağlamak amacıyla iş hayatlarında yetkinlik kazanmış 
              konuklarımız sayesin de gerekli eğitimler kapsamında; CV hazırlama teknikleri, mülakatsimülasyonları, 
              Microsoft Office eğitimleri ve workshoplar ile hem yetkinliklerini arttırıyor,yeni bakış açıları kazandırıyor 
              hem de üyeler arasındaki sosyalleşme ve kaynaşmayı artırma fırsatı sunuyor.
        
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
                    
        KÖY VE ÇEVRE OKULLARA DESTEK 
Kütüphane konusunda eksik olan köy okullarına ve orada eğitim gören öğrencilere 
çeşitli destekler ve kütüphane desteği yapmayı amaçlıyoruz.

HOUR OF CODE
Günümüzde “kod okuryazarlığı” önemli bir kavram olarak öne çıkıyor. 
Kod yazmanın inovatif düşünmeyi ve girişimciliği teşvik ettiğine inanan global code.org girişimi tüm dünyada herkesi kod yazmaya davet eden 
ve cesaretlendiren çeşitli etkinlikler düzenlenmesine öncülük ediyor. Genellikle ortaokul seviyesindeki öğrencilerle birlikte yaptığımız
 bu etkinlikle öğrencileri kod yazmaya ve bilişime heveslendirmeyi amaçlıyoruz. 
            <Slider  photos = {SliderAPhotoList2}/>

            </Col>
          </Row>
        </Container>

      

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly justify-content-sm-center">
       
              {/*link resim bölüm rol verilecek who we are sayfasında var oradan alabilirsiniz*/}

            <PerCard name="Zeynep Erdoğan" title = "EA Komite Başkanı" src = {Zeynep} insta ={"https://www.instagram.com/zeynperrdgnn/"} major= "Biyomedikal Mühendisliği"/>

           
          </Row>
        </Container>

    </div>
  );
};      
export default EA;
