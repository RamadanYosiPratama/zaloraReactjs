import React from 'react';
import Navbar from './state/state';
import Isi from './props/props';
import './styles/style.css';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <Isi menu11="TERBARU" menu12="ZALOCAL" menu13="PAKAIAN"
        menu14="SEPATU" menu15="TAS" menu16="JAM & AKSESORIS"
        menu17="BAJU MUSLIM" menu18="SPORTS" menu19="BATIK"
        menu110="BEAUTY" menu111="BRANDS" menu112="FLAGSHIP STORES"
        menu113="SALE"

        menu21={require('./img/103.PNG')}
        menu22={require('./img/a-z.PNG')}
        menu23={require('./img/30-hari.PNG')}
        menu24={require('./img/tanda-tanya.PNG')}
        menu25={require('./img/hp.PNG')}

        content1={require('./img/996x500_HERO_BASEUPTO70EXTRA20_UNISEX.gif')}
        content2={require('./img/gambar-bawah.PNG')}
        content3={require('./img/996x250_LPDESKTOP_NOWONZALORAKIDSFASHION.jpg')}
        content4={require('./img/996x40_SKINNYBANNER_HOMEPAGE_1111ZAP_BNI.jpg')}

        brands1={require('./img/logo_brand/r4_zalora.jpg')}
        brands2={require('./img/logo_brand/r4_somethingborrowed_revised.jpg')}
        brands3={require('./img/logo_brand/436x248_mobile_brands_cottonon.jpg')}
        brands4={require('./img/logo_brand/r4_mango.jpg')}
        brands5={require('./img/logo_brand/436x248_mobile_brands_keds.jpg')}
        brands6={require('./img/logo_brand/436x248_mobile_brands_levis.jpg')}
        brands7={require('./img/logo_brand/436x248_mobile_brands_puma.jpg')}
        brands8={require('./img/logo_brand/adidas_local_logo_28oct.png')}
        brands9={require('./img/logo_brand/casio_r4_revised.jpg')}
        brands10={require('./img/logo_brand/137x83_vans_20170905rev.png')}
        brands11={require('./img/logo_brand/r4_riverisland_20171117.jpg')}
        brands12={require('./img/logo_brand/guess_436x248.jpg')}
        brands13={require('./img/logo_brand/r4_nike.jpg')}
        brands14={require('./img/logo_brand/436x248_KANKENVC10.jpg')}

        model1={require('./img/322x300_HOMEPAGE_ALLUNDER188K_WOMEN.jpg')}
        model2={require('./img/322x300_HOMEPAGE_KEMEJADIBAWAH249_MEN.jpg')}
        model3={require('./img/322x300_HOMEPAGE_CROSSBODYBAGS70OFF_WOMEN.jpg')}

        modelp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus accusamus, modi
        eius recusandae aspernatur magni aut mollitia officia, sapiente rerum hic? Eum magnam earum
    assumenda pariatur eligendi quidem accusamus."
      />
    </div>
  );
}

export default App;