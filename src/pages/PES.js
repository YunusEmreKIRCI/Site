//Merve Büyükfenercioğlu
import Container from 'react-bootstrap/Container';
//Ana logo
import Logo from '../images/pes/ieeekoupes_beyaz.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Sabahattin from '../images/Selo.jpg';
//Büyük etkinlik fotoğrafları
import Sliderap1 from "../images/pes/2.png";
import Sliderap2 from "../images/pes/pes.png";
import Sliderap3 from "../images/pes/pes1.png";
import Sliderap4 from "../images/pes/pes2.png";
import Sliderap5 from "../images/diğer etkinlikler/pes.png";

const PES = () => {
//1. Fotoğraf slider fotoğrafları
  const SliderAPhotoList = [
    {key : 1 , value : Sliderap1},
    {key : 2 , value : Sliderap2},
    {key : 3 , value : Sliderap3},
    {key : 4,  value : Sliderap4}
    
  ]
  const SliderAPhotoList2 = [
    {key : 1 , value : Sliderap5},
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
    
            IEEE PES (Power & Energy Society), IEEE'nin güç ve
              enerji alanında uzmanlaşmış bir komitesidir. PES,
              elektrik enerjisi, enerji sistemleri ve elektrik güç
              teknolojileri gibi konularla ilgilenen mühendisler ve
              araştırmacılar arasında bir platform sağlamayı amaçlar.
              Komite, güç sistemleri, enerji üretimi ve dağıtımı, enerji
              verimliliği, yenilenebilir enerji kaynakları, akıllı
              şebekeler gibi birçok konuda çalışmalar yapar ve bu
              alandaki araştırmaları destekler. Teknik konferanslar,
              seminerler, eğitim programları ve yayınlar aracılığıyla
              bilgi paylaşımını teşvik eder. Ayrıca endüstri liderleri,
              araştırmacılar ve mühendisler arasında etkileşimi
              arttıran ağ oluşturma fırsatları sunar. PES'in amacı,
              enerji sektöründe güncel sorunları ele almak, güç
              sistemlerinin güvenliğini, sürdürülebilirliğini ve
              verimliliğini arttırmak için çözümler üretmek ve
              geleceğin enerji sistemlerine yönelik inovasyonları
              teşvik etmektir. Enerji alanında kariyer yapmak isteyen
              mühendisler, araştırmacılar ve ilgilenen diğer
              profesyoneller için büyük bir değer sunan bir
              topluluktur. Enerji sektöründeki teknolojik ilerlemeleri
              yakından takip etmek, bilgi ve deneyim paylaşımı
              yapmak ve sektördeki en son gelişmeleri öğrenmek
              isteyenlere yönelik bir platform olarak faaliyet gösterir.
        
            </Col>
          </Row>
        </Container>

                 

        <h1 style={{textAlign : "center", marginTop: 50}}>Sektör günleri</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-center">
            <Col xs lg="11">
              
              {/* Komite ana etkinliğinin yazısı*/}
              Bu yıl onuncusunu düzenlemeyi planladığımız gelenekselleşmiş etkinliğimiz olan Sektör Günleri'ni 6-7 Aralık tarihlerinde gerçekleştirmeyi planlıyoruz. Katılımcılarıyla sadece elektrik ve elektronik alanında değil birçok alanda ilgi uyandıran bu salon etkinliği, sektöre dair güncel konuların ele alınacağı bir platform sunacak.
        
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
                    
          Tea&talk
          Etkinliğimizin amacı, salon etkinliklerinde bulunmayan daha samimi bir ortamı daha küçük çaplı bir etkinlikle sağlamak ve konuşmacılar ile öğrencileri daha kolay bir araya getirerek bilgi akışını kolaylaştırmaktır. Bu etkinlik, yaklaşık 30 katılımcı ile gerçekleştirilecektir. Bu sayede, katılımcılar arasında daha yakın bir etkileşim sağlanarak, daha kişisel ve interaktif bir deneyim sunulması hedeflenmektedir.
          
          Workshop
          Kulüp üyelerimize özellikle teknik açıdan deneyimi olmayan üyelerimize yönelik küçük projeler hazırlatarak, mühendislik yolunda sağlam bir temel oluşturmayı hedefliyoruz.
            <Slider  photos = {SliderAPhotoList2}/>

            </Col>
          </Row>
        </Container>

      

        <h1 style={{textAlign : "center", marginTop: 50}}>YÖNETİM KADROSU</h1>
        <Container style={{marginTop: 50}}>
          <Row className="justify-content-md-evenly">
          <Col  md="auto">
                    <PerCard name="Sabahaddin Aksakal" title = "PES Komite Başkanı" src = {Sabahattin} insta={"https://www.instagram.com/sabahaddin_akskl/"}/>
                </Col>
          </Row>
        </Container>
    </div>
  );
};      
export default PES;