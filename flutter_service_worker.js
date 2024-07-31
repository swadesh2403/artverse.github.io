'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b215a86af853efd342d57af96bba28d2",
"assets/AssetManifest.bin.json": "c03a8daeff06ca6e27396195f646017d",
"assets/AssetManifest.json": "63a53bbc0661f82bb53f168ed0c54181",
"assets/assets/fonts/caviar_dreams.ttf": "fd2d0a4d699ed411275cb14ef35dec7d",
"assets/assets/fonts/lobster.otf": "c54655e3a9b664ca3bc6b752cf534251",
"assets/assets/fonts/sans_bold.ttf": "e2ebf780f846271f822b52d26d24af1d",
"assets/assets/fonts/sans_regular.ttf": "d2d3b740e46522981f945573253b0a1a",
"assets/assets/fonts/sans_semibold.ttf": "ae9703e4b4c70169e32fee2647ddf51e",
"assets/assets/fonts/scripto.ttf": "b6a38d0c0c0afdea4c636f4d32b1882e",
"assets/assets/fonts/waltograph.ttf": "ef6f8e5937cde4dd88d6b51d1b023ed9",
"assets/assets/icons/app_logo.png": "cbfbe56c0445c5c6d57dc2cf380d0154",
"assets/assets/icons/app_logo2.png": "40798e3cc6289e91c4519a3411489604",
"assets/assets/icons/app_logo_white.png": "fdf6279c19bca45cfb9d54aafe3af4e4",
"assets/assets/icons/chat.gif": "51f7796b7a71c88f5e75fbc8bc1ca0af",
"assets/assets/icons/chat.png": "9f33bd9d820e30afe6d0fd3c8841ddaf",
"assets/assets/icons/facebook.png": "ac65533df079a192ce511d1c1e5889d6",
"assets/assets/icons/faq.mp4": "3eaf5994f40cd40cc4f7a13dd76b9a8b",
"assets/assets/icons/google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/icons/logo.png": "bf7217a463ac468f834c1c4cdafae807",
"assets/assets/icons/messages.png": "afa97de9ae5709842a30358c59ef2fba",
"assets/assets/icons/nav_cart.gif": "1a3cbfb75719ca20041d8dee0e176db5",
"assets/assets/icons/nav_category.gif": "079500f8581554f99767ae25daa074f8",
"assets/assets/icons/nav_gallery.gif": "56062b523e7fc75ec65dc0af8f1ccdff",
"assets/assets/icons/nav_home.gif": "ef597b75f760d7507de575f0fb1abd41",
"assets/assets/icons/nav_profile.gif": "eead6e802b25a64b54a073f68e176927",
"assets/assets/icons/nav_profile.png": "78b53d7158f8ef8c1595f3493f90f3c1",
"assets/assets/icons/nav_sketch.gif": "d6d4ac93d805a0513b432b868b8995b6",
"assets/assets/icons/order.png": "4268c502251ef35d24afc32892de5ef9",
"assets/assets/icons/orders.png": "3639b858d6c5730b8e6705b62324772c",
"assets/assets/icons/send.png": "638f62014c1e7a071fd487ce0570a5ae",
"assets/assets/icons/splash_bg.png": "7fd62d66f6ca61185880ff80b00f0eb5",
"assets/assets/icons/twitterx.png": "b9055c369fa7a145c67021df10235075",
"assets/assets/images/about.png": "72118e0d6aa76816b499dd781b2f6c19",
"assets/assets/images/anime_1.jpeg": "9f18aeb15fd8c4769ecd11e63b6fc802",
"assets/assets/images/anime_2.jpeg": "9a20e3f629299a02786ac8c022e0e92d",
"assets/assets/images/anime_3.jpeg": "9b695a989a146a31d91668f21ff22eb2",
"assets/assets/images/bg.avif": "911ac40d1fc7c1fddd153bf6e5859494",
"assets/assets/images/blogs.png": "1954418668af2248d0cd63601a3160d6",
"assets/assets/images/cod.png": "77ebb04d352c7cb340b6877965a9c4e6",
"assets/assets/images/coffee_1.jpeg": "9fedd2b2bf5b17d95077f24257622502",
"assets/assets/images/coffee_2.jpeg": "e27823c53c0f7051041d36ba1786d259",
"assets/assets/images/coffee_3.jpeg": "e8f3144d1b404089a6c331133c95d704",
"assets/assets/images/coffee_4.jpeg": "306e2b527e8a0b6d2e781101e6068b1d",
"assets/assets/images/gallery_1.jpeg": "c942edf71d53a7f53e6a6c9d7088cf2e",
"assets/assets/images/gallery_2.jpeg": "476608d9e94c4b0541f9af442939981f",
"assets/assets/images/gallery_3.jpeg": "4bc54d644767dfb1c35826f619432b88",
"assets/assets/images/gallery_4.jpeg": "218330e2f940beec8f897fbf3d970920",
"assets/assets/images/gallery_5.jpeg": "fcbeec5ef51681c0d9399444ef0adda1",
"assets/assets/images/gallery_6.jpeg": "adc94964e8ac2c0745387df88ed783bd",
"assets/assets/images/gallery_7.jpeg": "9f18aeb15fd8c4769ecd11e63b6fc802",
"assets/assets/images/ik.jpg": "41b4102baaf15f676c0f7e52e0a50dcc",
"assets/assets/images/illustration.png": "f08e18fd38543f3be3c3c74752f61f2d",
"assets/assets/images/illustration1.png": "1e04bf114051ec99fb1c9497d87e7ab4",
"assets/assets/images/login_bg.png": "54dfdbf239db98d0309357c75e673351",
"assets/assets/images/mandala_1.jpeg": "c8b301ed6e5f301f4fc5b2fabfac1ba3",
"assets/assets/images/mandala_2.jpeg": "358bc7829e78bd62e3b7239a6c9f6c6d",
"assets/assets/images/mandala_3.jpeg": "3429c34ce9555d032134e8399f621f90",
"assets/assets/images/mandala_4.jpeg": "8a5141ac0c9571f7606ea81b4cdb8204",
"assets/assets/images/mandala_5.jpeg": "3156440ce1b87a2b64a1c504d313f8da",
"assets/assets/images/mandala_6.jpeg": "615f63dc9223f49c7dac9aae39610a50",
"assets/assets/images/mandala_7.jpeg": "ebda2310e83d19b4034d146080656987",
"assets/assets/images/mandala_8.jpeg": "327ec759fea8d8b623a5464f89b40d72",
"assets/assets/images/mobilecase_1.jpeg": "94bcd054cb7c7c378f993366bd576f50",
"assets/assets/images/mobilecase_2.jpeg": "188596e69fd61993485d0db142d144bd",
"assets/assets/images/mobilecase_3.jpeg": "119b09cfff6397c016ac1afc76070897",
"assets/assets/images/my_img.jpeg": "072f2ed5122cb13a26c131ae4388af15",
"assets/assets/images/p5.jpeg": "0ff9a98aa9ea502a0865481d78b302a4",
"assets/assets/images/painting_1.jpeg": "476608d9e94c4b0541f9af442939981f",
"assets/assets/images/painting_10.jpeg": "87a64d612d918749d511fe0736324911",
"assets/assets/images/painting_11.jpeg": "55a30b0fd45b04fd39130731351aa1db",
"assets/assets/images/painting_2.jpeg": "f667b1f0c999b28fe14d81be9bef3546",
"assets/assets/images/painting_3.jpeg": "bbbf8dbc080bf281f288dadd0fafcf76",
"assets/assets/images/painting_4.jpeg": "ed18c6858fbf1e56b477d7b2d0ceb72a",
"assets/assets/images/painting_5.jpeg": "654b77541fe14e75dc5d3675b17a81c6",
"assets/assets/images/painting_6.jpeg": "d21f6ed2c58b09d00f87976460087aee",
"assets/assets/images/painting_7.jpeg": "581f992a26bd969ded46e0ff49c80150",
"assets/assets/images/painting_8.jpeg": "27decb10194b9157e91efcdf0ae2b713",
"assets/assets/images/painting_9.jpeg": "367e1e7e7bd1e99499d993c8ad16d731",
"assets/assets/images/paypal.png": "6bd92b7d7baefa09484e1b84f963700f",
"assets/assets/images/paytm.png": "d37f2d3934af075aa9b1dc0ead070e3c",
"assets/assets/images/profile_image.png": "6680ff70c1b77524a6727ef109fc073f",
"assets/assets/images/resin_1.jpeg": "e6a12570f338046f7d1dbdcfcfa1c31f",
"assets/assets/images/resin_2.jpeg": "23a3ed767adc816d0ef3ab3a31e90c20",
"assets/assets/images/resin_3.jpeg": "74aa4ec48a6791fb45d49af7099b3e2f",
"assets/assets/images/resin_4.jpeg": "8564ff859b822bcc6cae8e042470a15f",
"assets/assets/images/resin_5.jpeg": "f22d69cb3943236366787d1adc61791b",
"assets/assets/images/resin_6.jpeg": "d42ff144986c93c15c2127ef58333a35",
"assets/assets/images/resin_7.jpeg": "522858479676f652bce221f83ad16b44",
"assets/assets/images/resin_8.jpeg": "ed911f01307781a6fe62457a92c39b39",
"assets/assets/images/session_1.png": "1631fed3c6c16821d8a3afa4681ec76f",
"assets/assets/images/session_2.png": "d57904f6e951080a321ddfc84eb354ef",
"assets/assets/images/session_3.png": "a7487813c1c54d08746cb02ca146dbec",
"assets/assets/images/session_4.png": "759d5695637603def588de4f3686c070",
"assets/assets/images/session_5.png": "a4ce93a336d710cbed91a78bdea334b4",
"assets/assets/images/session_6.png": "27fe73ba759b6a0fef1bbe532194614b",
"assets/assets/images/session_7.png": "6b8e81ce88615bb1d363405ab7378f61",
"assets/assets/images/sketch1.jpeg": "0a0a0a2a648f2be013693e0f3967d235",
"assets/assets/images/sketch10.jpeg": "4b8712359532d766abbf744fb65d85ef",
"assets/assets/images/sketch2.jpeg": "70b2074c2f72eb1fba1042816c2d5202",
"assets/assets/images/sketch3.jpeg": "b85fea34349be6ba7012e8408c898538",
"assets/assets/images/sketch4.jpeg": "c942edf71d53a7f53e6a6c9d7088cf2e",
"assets/assets/images/sketch5.jpeg": "00e24334114913ce18e52fc6bdfd139a",
"assets/assets/images/sketch6.jpeg": "405d977c7aba1eb04b096dc57f8b551c",
"assets/assets/images/sketch7.jpeg": "715a98f416a28e6f4cbf9ef2b88c5ca0",
"assets/assets/images/sketch8.jpeg": "e2ba259baf6c2e05edfbcc0c3415bc6d",
"assets/assets/images/sketch9.jpeg": "053e5c661cf8c3b2713a44e6552e732a",
"assets/assets/images/slider_1.png": "7b5df6d2ea8cdb4894f8120347334a75",
"assets/assets/images/slider_2.png": "12d040b964b956ec508a9fcccb377623",
"assets/assets/images/slider_3.png": "a1623bee106c860c8a73b5b2e459f125",
"assets/assets/images/slider_4.png": "910d7dc9a60ced77018f6fd911cd9430",
"assets/assets/images/tutorials.gif": "a8dcecbadce9944a16569c0fa462bf6e",
"assets/assets/images/tutorials.mp4": "75030d50110da44d6b6cb2e1f0497051",
"assets/assets/images/tutorials.png": "d20ef53c6aea3295b5368c758be6e0ee",
"assets/assets/images/WhatsApp%2520Image%25202023-12-25%2520at%252012.27.50%2520PM%2520(1).jpeg": "4dab4b9d79e572526ade4fb801a10675",
"assets/FontManifest.json": "7a7e199ba295ab754bd8c6ee2bd7922e",
"assets/fonts/MaterialIcons-Regular.otf": "9c9ae0b2debada01393bbfd7c184a0a1",
"assets/NOTICES": "f36d9cf5e4051df0e84341414b41cab4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e392ed6ea1256230201cb3377b58ea45",
"/": "e392ed6ea1256230201cb3377b58ea45",
"main.dart.js": "a71d16985491707afba8d5d1faf1f617",
"manifest.json": "fbd3867450665588b85086c3f218666a",
"version.json": "ed3d457c6ecfa9a39f45a287530fe777"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
