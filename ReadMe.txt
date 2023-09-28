Proje Hakkında:
1.Projeyi tabloda veri ekleme çıkarma yapılan ve kullanıcının olduğu bir site olarak düşündüm.
2.Sitede ekleme çıkarma yapabilmek için admin ya da user yetkilerine sahip olmak gerekiyor diye düşündüm.

Proje İşleyişi:
1.Öncelikle projemin iskeletini oluşturdum.Sırasıyla component,model,servis ve config dosyalarını ekledim.

3.Alertify için alertify.js kütüphanesinden yararlandım.Kütüphanenin script vs css dosyalarını Angulor.json ekledim. 
Servis yazıp custom hale getirdim.Bootstrap kütüphanesi indirip projeye tanıttım.

4.Login componentini ekledikten sonra html ve css kodlarını yazdım. (Bootstrap kullandım.)

5.App router ayarlarını yaptıktan sonra login componenti güncelledim.Ana sayfayaı ('') login component yaptım.

6.Layout Header component ekledim.Html ve css yazdım.Gerekli navigasyon işlemi olmadığı için yönlendirme yapmadım.

7.Login için servis,model ve interceptor yazdım. Bu servis fake API istek atıyor ve kullanıcı bilgilerini çekiyor.
Çekilen token bilgilerini ayrı user bilgilerini ayrı olarak localstorage kaydettim. 
Proje birden fazla component içermediği için Guard yapılanması kurmadım.
Bunun yerine kullanıcıya basit bir denetleme fonksiyonu (localstorage'da token var mı ? gibi) yazdım.
Uygulama ayağa kalktığında localstrogae'da gerekli bilgiler varsa login adımını atlayarak home sayfasına yönlendirdim.

7.Figma tasarımını home sayfası yaptım.

8.Bu sayfadaki tabloyu devexpress kütüphanesinden yararlanarak yaptım. Onun sunmuş olduğu ekleme,arama,dialag yöntemlerini kullandım.
Bütün bu işlemleri yaparken gerekli servisleri ve .ts dosyasında fonksiyonları yazdım.

9.Tüm sitenin responsive tasarımını düzenleyip bitirdim.


