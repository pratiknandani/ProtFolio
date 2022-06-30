'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "66d9e9799f6e7bef2ce07caac08c9232",
".git/config": "699600edfff39d5973e837f491e4638f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "df163801cc9722ada139cf70d01f5a07",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a26a1f354b398f7a951b009a32d2088f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fcb86c334b6316f10c8bb6747a328e7",
".git/logs/refs/heads/main": "5905b035413f6768e082e9caccb3686d",
".git/logs/refs/remotes/origin/main": "d54c3e1b09897759f65feea73661d1e2",
".git/MERGE_HEAD": "bdb5e0d056bbb2dd7f178b67d1c7bdfd",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "31ff1939ea35402ac2e4a8b1b41a407f",
".git/objects/00/5d8eec8771717b042627325043371b723d50cd": "6ab4148f3deb3b885a504c88b02b0e18",
".git/objects/01/03f64ff7d2b79785ba2d2c784daf278ea05888": "66f731e1ac520631fef9ea2c16019fbd",
".git/objects/01/2fd8ba698aa26fa46019f6dd336a5664d6cc29": "2bb1efd7e911ff4600faa9429a1f6564",
".git/objects/02/4a355cf5299a2f6e64f9e8ddcaca3eb762031d": "d629bbed349ec0b5cee95907e2a4d5fc",
".git/objects/06/43990edb83ba8f5db3720a1f5b275e67e7c019": "3024406cbee032134a0cb88221d29e5a",
".git/objects/0a/a76f4cc6c99466be20d4cf73a6dbcffee1e622": "2bfee0ed309b216d2423c00313a50a06",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/9841f3b852fc2c24491720be52843ec71ae248": "fb0631566a2ff4cab52ccf94248471e4",
".git/objects/18/9f13d456ed3ed1d7294c2b95fc203936310e36": "eaa60e46da0fb52820f7811b492298b8",
".git/objects/1b/569bbd4eb779450f2f7c72755de5f1d9ad41f1": "d2ca5c2f0cf9d1e5503a0d54b9d09858",
".git/objects/1b/9453e81cc5b93b2b84894d49e4052f78a75ea8": "8add4692243e43817eec4f275ef6d0c7",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
".git/objects/28/b20fc8b0f55862c173d0e6ac91789f96c25f15": "e103b48525ead8e57b53aa47b1e59a9e",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/29/98e44beaf134cc0c58b37d0c657b1e005a8ee8": "dc0c92c63e30d159ca4a2046637aef3c",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/e47ebbd2d5c026b2c9ed86850f135e4447790e": "126a3c8e43008633ca436388580bbc73",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2e/a258c526fd7e53942b9fdb6002e3d2db97a072": "2d9324928c473ece632d6a11ee2ed2d8",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/2928f5696eaa56458e2496184d74b46433f950": "74fc4afbcb5c3b7a8e08de9d5c2ae0cd",
".git/objects/34/492ce749b65cd4c75ae0991764bbd22e7b343a": "3fda8dd67c300cc364d98de51c917ea8",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/38/cebe31a3aa5dcddbeced9d756206da61d84ace": "fc32760862f153050a3e24e79da4b34c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/173f6f738d97de3bcd96fae1ac360ed45ebaa5": "d84698e68c8cea58e4beaf2bccf5cdd9",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/11e26f742de2aa1849b69e5eed6deb2cea7d7c": "a1758f7eed308c3ef2aaf56b53e38a52",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/59/30e73ba2d614e2b6fab566f5d7cb3cc2dcb692": "8c0fe40d594997101d34f7c107142ca4",
".git/objects/5f/864ab771ef5260fb5cbd49c6c7038c16e0d149": "93f5bb96ec4ca77e8bf2c8d361ab8759",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/fa59b6e1dc6b2e3835053a7150bff31ec0237e": "8c4d744ab62bf803a50be28827bb0bcd",
".git/objects/62/4982560f7179752c2bd05e81f64df8a790e757": "61e1888291718d6b5be4f6631b77a2e0",
".git/objects/64/aeb9c6d31184346bc032d923f3ad7623491eb8": "fcffaa666f0ae1404960f96c8d1a1b2d",
".git/objects/65/db9b3d89861951cf907b7fa112e02b16420fd6": "2547c71a464df208c75df91f35c1aec7",
".git/objects/66/b6d7aa056e8da531ed3637868b58c9bbff2aee": "41c33427fe8c417867f4fe6c69f5fa0a",
".git/objects/67/54077a959202b8d916c63aa2ff8ac746a545f3": "d27f5d77714efd56597540771b6d8b8e",
".git/objects/68/83bb88e3e488f5f4c4b69d7a1b3297e52bf62f": "b9b8ffe865e86b5c852a82962dddf104",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/9ebf54fbe6086f908fdc6342003c925cc4ad46": "8beb46908d5b12662264650cd47e8449",
".git/objects/69/c8343d0cf6d51a5ce99645b62f03cf249e6132": "4b24a8c94476bf73a67f29b21d80e159",
".git/objects/6b/795bb9eb31022578a2e32ae0454d29746b260e": "494ccf998bbdc5793957932243682852",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/70/a35ae9488d3f2c330b8d4d0c263abc817d88da": "52b5e2b5b9eea81656e7e0fdfe76820e",
".git/objects/71/26719b90f8c42da013f9f63159a826eff7116e": "9819a8473256185dd1b1d4a85df2a7e6",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/8bfd689c89446a2c225be80b17c6cbfd8c1afc": "453b1720e412d9b48f969a4a254ad5c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7e/9540712c397860e3cc8f281d22edd90bf9053a": "f1e7ac253ed1089f177219985532b89c",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/26b7516882e70113f4f79386efc3f0d5bb6ec9": "ba0cb2ec1cfa8476bf15c517ca98f4b8",
".git/objects/92/899a42c9bdfb3ed5696ff6549d247c24b5f3e9": "b46e74198fe731e6b15bc2d5671fdfd0",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/7860f0479409f53417dce049d1d621e8843985": "52ae840130fe0f482ea1815765a7920a",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9f/63e71d8542e9dc1f9ae292b78248c93c71359c": "f3db0f2e6faa3c4743b0ad949a6a659c",
".git/objects/a0/bcc7b9af8104092d4660a81522f3deeed8c1f2": "55db449504584f670a4f4e4e9c159a1e",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8ebcd8ab68b7ab14363f9c33bafcb86c624021": "659a0f628fb092070e46fe138c761e84",
".git/objects/a2/3d53c5f00a2880ea9824a5ade8f621d5c9ab7b": "193c345bba50af015b83c8e1ad51ecf4",
".git/objects/a2/bc87099a62e4274d8ef0fac0c88fb52a8a31d9": "f5acee21120af973c6e7e9bfa7a2aff9",
".git/objects/a2/c9f2f21393dbc4e3bf97efe693d049fdb31aa3": "6d80ec12ef83d20f2c3529851002dfc2",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ac/267c02e11d8ca34ba20b0b5f597aeffae694ae": "0ac02f9418869993ae8249744cab6534",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ae/00a773c2dab127f9cbd267cea7bc627cf1edcc": "73f16b3e3082ccb78935c9f1e8edbf6d",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b5/ccd30d51e163880d33ac7adf48ee4775eebede": "fc025d864c0fa86b3e6041b282ea1fb4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bb/6729ec9210c164155f765a2c700325ac2f0cb0": "c57eed4790407278758b71c36f63c244",
".git/objects/bb/d5e534f24e2c9c55047acc18dd8b730021bdbb": "2b8e010f800f61e68bb724997a92fbaf",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/4a22391b1cefc120e3b8ff4acda129e1fb6e48": "fbe05b65fc1fcb1f4162f33a85c851f1",
".git/objects/be/25726c384ada0ce5967cef00933e0ba18851ba": "9bea4a563976016e9e0b2753dc0a957d",
".git/objects/be/67d5210a37411ceb519c992a6542e40c400131": "4ff358d3a630e857082f9feb3bffb7d1",
".git/objects/c0/d214b662e7a4bb6a2f80a16ee58118e7a1ca52": "8d39a4f28844a389c19987b4548f9edd",
".git/objects/c1/1b8dbf772b30067ed0d39d2b6475741e011b5b": "74828f1137cdbe324e50cac041144ff7",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/323072e8aca455c3cd24982178696039514364": "97cdc3e5b246da769f66635651daa2fb",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c7/0de9138df9c79e0b19434cf43bd9fd841e14af": "35591ba447cba95b0f770e11596d98c1",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cb/be633686be8fee78ee37a50eb89045fbb8f7fe": "0d314d48943ce8045bc1ce005389de60",
".git/objects/cc/9fdc2be509cc89e95da504491ad871271e370c": "22f1d19556e6fd626436bf7e5602021c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/5c09c3121450d9fc954020d94a105f8f8a420c": "90a4f4a9f18d4125042c7a666cdef10e",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d3/9993bb923f0140932c1d3dd8d9b6256a6bcd81": "b2307f41d708f2a373763b9e7717140c",
".git/objects/d6/7d77cacd910242c9bdee3589ddd2dea0fcbeb4": "b5c70980238d5c32d9642019c5121aa2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/db/7032933226e95d655e9beeeb89ef7e9c68897d": "162b5ac6b5d877e29d0b3a54e2ea0420",
".git/objects/dc/aeaf16e225d496920468ea9dac50a0a2374908": "23dee4e6121984e0b67b8f43cbdfc6d6",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/216a763862fa5cbf7a515ec161694c988082c0": "3293db74c0b20393ac3a97ad8fb8417d",
".git/objects/fa/6ab3dc3a5454702ebad8229c1e8ee3682ce36f": "955e929ebaa37264ea90608d5df9787e",
".git/objects/fb/be89d920243bca7384f03fee982a0a28665ee6": "dd4eb79d8f1760acd4bf9a924fc9483c",
".git/objects/fe/3b630e8156c6ffca0533d6e0b813ee33ca229e": "f25c1b643d026adb6ce69a187103de3e",
".git/objects/fe/5c351b792b2556241a7069cdd4edd9c5aba13f": "711678ff1cfdef64234c019a9c78a855",
".git/ORIG_HEAD": "b74de1a43e76adea5be4e383a6b41a6f",
".git/refs/heads/main": "b74de1a43e76adea5be4e383a6b41a6f",
".git/refs/remotes/origin/main": "b74de1a43e76adea5be4e383a6b41a6f",
"assets/AssetManifest.json": "c29e0716cb96202e6e0fc7ca25a5733c",
"assets/assets/1.png": "908d931f00ff00925b16ee353196a032",
"assets/assets/cui.png": "5bfe6d5835d4939d7b99fe95bba38fbb",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "8a50b602aa79b19775c22d02a290f51f",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/mob.png": "d1f26a979fb188d62346bfec07919cb5",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "f6a785f897143f1095e7034e13a0b4d9",
"assets/assets/projects/crypto.png": "f4a2a2f569cbfb6eb9eadee229e3e962",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/procryptoB.png": "e3eecd9393c8cc98c10d8d3470a86364",
"assets/assets/projects/protfolio.png": "4dc14f31f81b9a4cf89a21f91363838d",
"assets/assets/projects/protfolioB.png": "fc45f467e6edb2693e99601f17493698",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/web.png": "eec3fde05c3697de256dd519c54fd364",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "02263291608a1d9cea5ab84a4761f06d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "6f9103e391025deff03166ad14d0450c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0006a24e16e3103ab30b39696b3d9980",
"/": "0006a24e16e3103ab30b39696b3d9980",
"main.dart.js": "f5c57dae5273187a3f273e1a7dc00b0d",
"manifest.json": "eb9d7edea85af7232379ccfec3971bc2",
"version.json": "8f5cf3b0f48fbc2d0d5b1799740aa1ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
