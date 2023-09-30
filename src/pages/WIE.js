//Merve Üstünel
import Container from 'react-bootstrap/Container';

//Ana logo
import Logo from '../images/wie/ieeekouwie_beyaz.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "../components/Slider";
import PerCard from "../components/PerCard";
import Beyza from "../images/Beyza.jpg";

//Büyük etkinlik fotoğrafları
import Sliderap1 from '../images/wie/teatalk.jpg';
import Sliderap2 from '../images/wie/wie.png';
import Sliderap3 from '../images/wie/wie1.png';
import Sliderap4 from '../images/wie/wie2.png';


const WIE = () => {

    const SliderAPhotoList = [
        { key: 1, value: Sliderap4 },
        { key: 2, value: Sliderap2 },
        { key: 3, value: Sliderap3 },


    ]
    const SliderAPhotoList2 = [
        { key: 1, value: Sliderap1 },
    ]


    return ( 
        <div>

        { /*Logo için dosyada path verilerek tanımlanmış src içinde yukardaki logo pathi değişerek verilmeli gerisi aynı*/ } 
        <div style = {{ textAlign: "center", marginTop: 50}}>
        <img src = { Logo }
        alt = "Logo"
        width = "900" />
        </div> { /*Ana tanıtım yazısı konteynırı yazı değişecek yine yazıyı alacaksınız */ } 
        <Container style = {{ marginTop: 50}}>
        <Row className = "justify-content-md-center" >
        <Col xs lg = "11" >

        IEEE WIE(Women in Engineering), kadın ve erkeklerin bilim, teknoloji, matematik ve mühendislik alanlarında eşitliğini ön görür ve bu konularda çalışmalar yapan global gruplardan biridir.Kadın erkek eşitliği ile alakalı yaşanan problemlere değinip bu problemlerin çözümlerine odaklanır.Kadın ve erkek üyelerimiz ile birlik olarak hem kendi içimizdeki hem de çevremizdeki ön yargıları kırmayı amaçlayıp mühendislik kavramının cinsiyet kavramından bağımsız olduğunu vurgulayarak bizlere örnek olacak başarılı iş insanları ile bir araya gelip,
        kendimizi teknik ve sosyal anlamda geliştirmeyi hedefliyoruz.

        </Col> 
        </Row> 
        </Container>



        <h1 style = {{ textAlign: "center", marginTop: 50 } } > Why Not ? </h1> 
        <Container style = {{ marginTop: 50 }}>
        <Row className = "justify-content-md-center" >
        <Col xs lg = "11" >

        { /* Komite ana etkinliğinin yazısı*/ }
        IEEE KOU WIE ailesi olarak gelenekselleştirdiğimiz etkinliğimiz olan“ Why Not ? ”alanlarında başarılı, isimlerini oldukça duyduğumuz konukların katıldığı bir salon etkinliğidir.Her sene düzenlenen bu etkinlikte katılımcılarımız kalıplaşan cinsiyet algısını kırarak bizim bulunduğumuz noktadan kendilerinin geldikleri konuma kadar neler yaşadıklarını ve sosyal yaşantılarını etkileşimli şekilde anlatıp kendi tecrübelerini paylaşarak bizleri aydınlattıkları, her bölümden üniversite öğrencilerine iş hayatında kadın erkek eşitliğinin önemini ve cinsiyet algısının kırılmasında rol oynamamız gerektiğini belirtmek istediğimiz bir etkinliktir.

        </Col> 
        </Row> 
        </Container>

        <Container style = {{ marginTop: 50 }}>
        <Row className = "justify-content-center align-items-center" >
        <Col className = "justify-content-center align-items-center"
        lg = { 11 } > { /*Ana etkinlik sliderı bu şekilde tanımlanacak sadece yukarda fotoğrafları tanımlicaksınız*/ } 
        <Slider photos = { SliderAPhotoList}/>

        </Col> 
        </Row> 
        </Container>

        <h1 style = {{ textAlign: "center", marginTop: 50 }}> DİĞER ETKİNLİKLERİMİZ </h1> 
        <Container style = {{ marginTop: 50 }}>
        <Row className = "justify-content-center align-items-center" >
        <Col className = "justify-content-center align-items-center"
        lg = { 11 } > { /*diğer etkinlikler fotoğrafları verilecek*/ }


        Mor masa Bu etkinliğimizdeki temel amacımız üyelerimize teknik açıdan bir şeyler katabilecek küçük projeler yaparak, üyelerimize ekip çalışmasını aşılamak.Ekip arkadaşlarımızla bu sene geçtiğimiz senelerde gerçekleştirilen alarm devriyesi ve foto sensör gibi teknik bir proje gerçekleştirmeyi planlıyoruz.

        Teknik geziler Sektörde başarılı kurum ve kuruluşlara giderek çalışma hayatına başlamadan nasıl bir ortamda çalışacağımızı görebileceğimiz ve fikir sahibi olabileceğimiz bu gezilerde network oluşturup staj imkanı sağlayabilmeyi amaçlıyoruz

        <Slider photos = { SliderAPhotoList2 }/>

        </Col> 
        </Row> 
        </Container>



        <h1 style = {
            { textAlign: "center", marginTop: 50 } } > YÖNETİM KADROSU </h1> 
            <Container style = {
            { marginTop: 50 } } >
        <Row className = "justify-content-md-evenly justify-content-sm-center" >
        <Col xs={6} md = "auto" >
        <PerCard name = "Beyza AYAZ"
        title = "WIE Komite Başkanı"
        src = { Beyza }
        insta = { "https://www.instagram.com/byza.ayaz/" }
        major = "Endüstri Mühendisliği"
        /> 
        </Col> 
        </Row> 
        </Container>

        </div>
    );
};
export default WIE;