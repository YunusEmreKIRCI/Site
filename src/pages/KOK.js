//Ezgi ve İclal
import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/ieeekoukök_beyaz.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Veli from "../images/Veli.jpg";
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/diğer etkinlikler/WhatsApp Görsel 2023-09-21 saat 16.24.52.jpg";
import Sliderap2 from "../images/diğer etkinlikler/gala.jpg";

const KOK = () => {
  //1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},

  ]
  const SliderAPhotoList2 = [
    {key : 1 , value : Sliderap2},
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

               Kardeş Öğrenci Kolları Projesi (KÖK), IEEE

                Türkiye'nin öğrenci kulüpleri arasındaki
                iletişimi ve bilgi paylaşımını geliştirmeyi
                amaçlayan bir girişimdir. Bu proje, öğrenci
                kulüplerini bir araya getirerek ortak çalışmayı
                teşvik eder ve akademik, teknik ve sosyal
                açıdan hem bireysel hem de kurumsal olarak
                güçlü bir yapı oluşturmayı hedefler. Ayrıca,
                Türkiye'deki en önemli ve başarılı öğrenci ağı
                olan IEEE Türkiye Öğrenci Kolları'nın bir
                parçası olarak tanınır. Kardeş Öğrenci Kolları
                Projesi, farklı zamanlarda düzenlenen
                etkinliklerle öğrenci kulüpleri arasındaki
                etkileşimi canlı tutmayı amaçlar. Bu proje,
                öğrenciler arasında popüler ve ilgi çekici bir
                konumda bulunarak öğrencilerin dikkatini
                çeker.


            </Col>
          </Row>
        </Container>



        <h1 style={{textAlign : "center", marginTop: 50}}>GALA</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">

              {/* Komite ana etkinliğinin yazısı*/}
              Her sene başı yapılan bu gala gecemizde
              hedefimiz yeni üyelerimizi aramıza katmak ve
              eski üyelerimizle kaynaştırmak, kulübün sosyal
              anlamda zenginliğini göstermek ve eğlenceli
              vakit geçirmektir. Resmi kıyafetlerle katılım
              sağladığımız bu gala yemeğinde karaoke, çeşitli
              oyunlar ve çekilişler gerçekleştirip sonrasında
              ise after partimizle etkinliğimizi noktalayacağız

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




        <h1 style={{textAlign : "center", marginTop: 50}}>DİĞER ETKİNLİKLERİMİZ</h1>


        <Container style={{marginTop: 50}}>
          <Row className="justify-content-center align-items-center">
            <Col className = "justify-content-center align-items-center" lg={11}>
                     
                    Lokal kongre
IEEE KOÜ olarak yeni üyelerimize komite ve
koordinatörlüklerimizin sene içerisindeki
planlarını ve kulübe katacağı değerlerin
anlatıldığı dönemin ilk büyük etkinliğidir. Amaç
üyelerin sene içerisindeki işleyiş hakkında bilgi
sahibi olmasıdır.

Diğer ekinliklerimiz

Kamp, piknik, turnuvalar(bilgisayar oyunları,futbol, voleybol), kamp.


            <Slider  photos = {SliderAPhotoList2}/>

            </Col>
          </Row>
        </Container>



        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly">
            <Col md="auto">
             

            <PerCard name="Veli Ersöz" title = "KOK Komite Başkanı" src = {Veli} insta ={"https://www.instagram.com/vel.dora.e/"} major = "Biyomedikal Mühendisliği" />

            </Col>
          </Row>
        </Container>

    </div>
  );
};
export default KOK;
