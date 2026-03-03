'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5f00f5ca9f67dbd38b89fff534e32e48",
".git/config": "5d1e78e802c23b1c0197f24e967ba16a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7bcfb005e5902215ffb3043791facd5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90140e8df783ef318dc20dbd71c0deeb",
".git/logs/refs/heads/gh-pages": "90140e8df783ef318dc20dbd71c0deeb",
".git/logs/refs/remotes/origin/gh-pages": "69ef7bf9d48eaa7f54dde197b08a27fb",
".git/objects/00/8464faaecaf20a761739a61da2278be62b4963": "e2ed73a72524d9691d9962b645cab6e1",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/03/d6e78ad9bd1a162e508f2c143cfc6d53be5399": "769815ec7aefb1df61c1019e7761b2d3",
".git/objects/07/f61eb20eb47b8af4693ac5201ab9a7747f3bc8": "a438a57ab79e1a89e62239110aebd9dd",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/0f/672dd92095ca603af32101f58423449c656124": "4accd5ffba05e80f82175147074d3724",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/11/5ab55e6900d976ebefe6baa6c031773d646786": "6299b4dc93a5037595fc92bfcd5e2be1",
".git/objects/11/e0c26c5f789d0c7ccf5da6184d16066278292b": "6dfc9ce2fa083b7a56a7aacf562f5aab",
".git/objects/13/57156c569abb1dd97d7e91a3aacfa227737e89": "1f71d60e2f4de4e470b7e9ff8fe6efb7",
".git/objects/13/73e64adcfbfaf2c3541e1d6d312e79277ad25a": "a9298b7a0aa6b532380c279524e16897",
".git/objects/16/a713cd4acb532755ec6e9768f4e1b47c60aa1f": "5fa1cd90119fa6ec3538e85378349c86",
".git/objects/16/ea9552bb7ad860c2c1fac0cdc1f40537943b5a": "725796b88856fde2e8edc07ff990307d",
".git/objects/19/6eaa431b50a472f3886cb057d9a4fb83e792ee": "2b6818348797f0521048c433c9db9bbc",
".git/objects/1a/9a40c836917a16a81d7119c11cdedec72f5472": "d6eb32aa28012e0f7c70a0bea972582d",
".git/objects/1a/9b7f1f73b8ef2a99265c9331c84abc552ccbef": "efefacc2eadd71908c3b275d0c5817ad",
".git/objects/1b/a7ba239c9fcbd69572b2999822cf80fe2e38b0": "180b3e066114e98f8eeb0c7595086072",
".git/objects/1e/6a5b64c1bb6451f5c6f4215e865062315fe15f": "6d2a74410b770aa0458bc7d976cd8e6a",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/25/fe9c84fa3b75cbcd28e73dcfc55b3726aff35d": "01a7d8e8b848d4207e22405e43fefc11",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/2e/f25eaa5e7dfad52e6b3439ff2090906abffe23": "2089d69cb7a25bbe1c6accce59f806cd",
".git/objects/2f/749e7b2104e971bcf12afd3b872d350b73c707": "f45fabac4c65dabb9ed9c6e8ad0bb172",
".git/objects/33/45858a0e4a84d02a382ce30a53d6538a786271": "9db8e2b25ed630cbb4bb37c86fb22a63",
".git/objects/33/853ac28be3b68eb02d1201757e0be84ed5ae29": "bc45ef1d30e142b0559f8bb92ce6b2ce",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "58bbee4cfca6eb3866162df2cb4a8652",
".git/objects/35/0be25c5c4709b1476f00501ff7fab0b78aa857": "3caca278417c2b678c7ac45ba2727211",
".git/objects/3a/656f80e675b43f7dea7d8b9eff52e881aa3b15": "38927bedca87c1711722c8f36fbdecf7",
".git/objects/3a/99adaa33308c414be664c3044030124212a8a2": "f1151c78ae83fbf4ce1c3430ff83f265",
".git/objects/3a/e0fd109d382ea162f8f4f6f5b4a9516081fb20": "fa424dd60df37aff30a2095e9362d96d",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "475ff51a832dac51d969b1617aeaa289",
".git/objects/3d/5752fd0da14c4e808a87c7127df3d183029674": "b5c217c323a0c83d3c7ad996511207db",
".git/objects/3d/84bbbfd65166e58d70502be03ed3ab79c7b437": "aec76f2d700079f1c381322c567b8522",
".git/objects/3e/f67d195b7eaa014dc3dc43d0b1e631799403ba": "44cd1723d75963e07747c08f319bbcd2",
".git/objects/42/0e3a90c95ab80c4af1e7479b1cd4ca0aa7d3a5": "96d7d16bc71b736d0eb3be429c140c6e",
".git/objects/42/452d981402a229d92c61e4e077ec2ad73e42a1": "5f5842cb34b470436e8cd859999b9868",
".git/objects/42/d5d9fa81676fd62cb2f0c49f695dd8d4b3f69a": "e45f69cd7f333334f011db5cca9d051c",
".git/objects/42/dfe261616bacce670a0d948dfc91a2f24a9345": "890f3480ab9f1b570588a56c9ce1c3cb",
".git/objects/43/bccfa13ffce65960644b89162016a63c1a3e4e": "34b575abe0b88f1114d6f172233bc0c9",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/5d53549ede22c852a059c1184426f8c56ae060": "84be967b818f104bcef7da032a521ce1",
".git/objects/48/7bf78c098b4b2b28a18799a41f9c3fb11f8d23": "b3056e149582e72b1e7fd7da181cc48e",
".git/objects/4a/473f49061a3238830a65702218cdb3a7adc407": "84b94c67b3457292418c928859ede75a",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4c/00afd06a3b068c55887121d317fc800015248e": "240ff4623bf83052dfabf27cc1df14e9",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/50/39b337f399026845f33ed6c8ebec0a4a731c37": "421240ccf817bee5920637fe0bbb60e1",
".git/objects/50/de41c8315c248a4b380111aeb4d8faa5ac5a40": "b8583ff2d9af57a0745d7845cf867d55",
".git/objects/51/5ee182574ffd41dc0270947822fe72b4b38855": "bf314cd0d03a4eea2ada968c0f335715",
".git/objects/52/22270a7d6d6705064be04e2013c8530a662dd8": "821490165d9e7241e7c36ff46483ce4b",
".git/objects/56/268e12a16e2f96a16014c26eec0ff258d22d7f": "21758058f47c0421c925d65ef968c1f1",
".git/objects/56/d8088ed7f4477da1f074fe53dd3bf72d1d51ac": "d71fc63a34393fa4496595990f59c143",
".git/objects/56/e9bec617e0405030049a1ffbd291460c6ca234": "87bbe6f6bc16c214a51c2700a8964bd2",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/5a/aa1963b675b8aa112f6c654e9a501c35915e5b": "2f909371a7651160971a78c5547f22ab",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/0071f82afee7f7943eff80aaa768b811697898": "555ac6f461b12cc78ac0b51b7dfe0498",
".git/objects/62/296d773fa1d5dd38e9b10b9a0ea89e6d3c311b": "f7a02655504c0e6c26391cd117ea4493",
".git/objects/62/6880fa22dc42d4956007c8e2005d595e71e932": "39fa7439cc06b7f8c8e9f3ed32c0d25b",
".git/objects/62/f7efef3e119dd643bef647d2a0c01a4731f568": "e84d0071366297a869882f5b1166c18f",
".git/objects/63/846b61ee12de9f05325d8e34b51c875b4fbff0": "faa544b41c6446336e6ff96d629ce939",
".git/objects/64/8ce8287e2e8f2a276ce7c786aae928cbe1f34b": "bc513fb913ff4d9fdeb917e3b07c062f",
".git/objects/67/5cebc243d42797261cffca3ec537a9aa1dc694": "f2cba3f8ba8adf612c054a52622eb486",
".git/objects/68/13c283ca41adf261f0e92755d43b7281d9372e": "5a1924c63e68802b0a43b5f99f080b3c",
".git/objects/68/3365e13985bb43842c38462e159797d03713db": "9d7233c43cc9f34792a999b7fe304585",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/812aa1272303a508087feb0cf7e7702770027e": "2c2d5f85bdbeda5b8f7e44ecb62de181",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/71/21844ceb664726c51f74ab9b06f7ffb31cfd36": "c183f21b8571fbd449b8d83a26115b78",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/7b186606abebf243503056c9b18492abf37b59": "08d1dfdeeee30f924ef27a2183fd87ba",
".git/objects/77/ccba8b1659786b6540166e864146b02447beb7": "c2a2b8d94f8934115db073a1087d479d",
".git/objects/78/4f8541e2311331babf9ec1c58646bda7439f13": "8824c9fb2d174fed6b1101fad1f4dc1f",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/79/1526791e1f78d12a74203949d6e6aa3b88af1f": "cbd6029709b31385dbb48e4166a26629",
".git/objects/7a/79793e73e61eabe24c699674a66579e559c36d": "8a82c1077973660be49e07f9127a0895",
".git/objects/7b/854f6b2167729c4c95ccbb92da265c1bb9c0b7": "5b402a0a3b4dc046aab818fbae032eda",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/7d/5eab6c4960ed8fc1fc6e2991a897b1bf29f8cf": "275d107f9b031ba5d5f3c2578ded05af",
".git/objects/7e/6c1c2d0c543b2f883dfa8031825d421008a466": "98ad0efdfcfa2ebab888808ffe3dc4b1",
".git/objects/7e/fc32ca48405b30db4c33e5974454499d3e548c": "0943ffddee14d0db409d292e8c7bf03d",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/7f/e8a2e6c6b63e437f8d0ec6bd221c9f7ff6142b": "475caa72c6ec295bf3031b1fe1d6b27a",
".git/objects/81/1a91b955117cf80ec800cffe541e0933ff67aa": "4c15bc72dc8395a4ff5d83c7f80d3552",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/83/2dcc802af589f76d617abbed930739d05c3e6e": "bb96747db0acb88529a1cf98a849d386",
".git/objects/84/35f5e6f3222ae8235cef70cff07c7f88321de0": "acfe475354d2750d436736a1474aae96",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/85/009e095d341288092c90b836b09bfa668a3f96": "b76269da774b1ed679e55b6c0ce01904",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "e561c5cd64c79e50085bedcb8cd31377",
".git/objects/86/93959dad261647da131b77aab79f15f3bfd2ad": "a1eb35ca2aa385f7dfa8bd6234243eff",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/60cb4710c533c52302d47ab695cc619d7a021e": "6ca2be84c1ad765390e55f22074241b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0b1dadb3c93b41b06bd88f4b8eb8c2d027bc67": "c31fd20c1e2e3b1ef0067223b6022257",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8d/aa9561db42017ab5d850fec325ab23bc4a9be2": "c58e3306900ea1f28a74b6993f1d9938",
".git/objects/8d/e49b6fbc1944c8d2081e13736eae8980e72254": "a32b73fefec6fe7d64a9a80bc4b21768",
".git/objects/8f/43cb3f83f072f28e3e419015f6fb9441193098": "3826f0d408536f996f85052d2a750c4d",
".git/objects/90/4d60b7f842e3450ae892e540c7008b2cd6e1a0": "8e1e5408fac0a99a17a0a3768dd1561f",
".git/objects/97/01adb3e6d4d381957980443dc8acc5ede20f8a": "90026a6f56a49b6003f7df2cf4815c80",
".git/objects/97/d92ec0a313413fb0b0e5f05f14a735025aefb4": "192dcea7cea6a7fc107b6ec8790f5a66",
".git/objects/98/d1a0ebc4adc11da5a8497b6b18acc5379ce062": "3cf54c6c3f5edb4486634cf126413e0e",
".git/objects/a2/0ca22b5c6763a7d7cc0e2143a8d0be2832641c": "47c2f83d89cc03dea4e356bf0dc64a83",
".git/objects/a2/566df2af15060e7ee0dd21440ec35d85abcaba": "1632a7e9708d043bba63dbd84c0737eb",
".git/objects/a8/fc5cf4900a6de65200f57ad6586f5b85cf2b71": "0a813ea7495ad71411a4839b7eece533",
".git/objects/ae/4722d72b3b6140397186e9093d2accdf388850": "f03041646d45da171824e3f472b4ff83",
".git/objects/af/5b6bd2cbd10efad3c3e598177d13b902833b23": "36d0e87d860a241b7fb4debe8cb43e70",
".git/objects/b1/4abf25f5b170605877ae8464bf47b2fcdd9690": "889e5f8f2c3b8b54f995bde135dead26",
".git/objects/b1/5a85f4b1fff6fcab8d0d8e0429d51ed72c0f4d": "6ca15d1c53052698929b42b34d5161c9",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/b3/63552e2e589ac9bee44d8ac24c27cf49d846ca": "c413422fcf506380ecd603bf36227af2",
".git/objects/b3/655cc21baf82256bb2f7ff5e5608bd5a2bf08f": "0186f2e44fada6088d10cb291b22d1c6",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b6/b152e963a450ccc08e8e19804e143c097afb4b": "7539e6006e13ba0e76d9ed133963b819",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e9119db93250250978846981b7579e9f99290": "b6b91bde17907bf19ff7e05561f8f25e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/539a5883ac2e7f42ab3da40ffe157a746a53e1": "469c52a38a649abec41ac70a888889c9",
".git/objects/ba/73cd57ac1566c0c01f067b6eee3f56aa6bb773": "ed555e923bce263541671e381247eadf",
".git/objects/ba/c6bcfc9f099c0a594a0751c3d5ed204f226efc": "af0c364f35e002187b95f9e38b74e9d9",
".git/objects/ba/fd6b10f90f2841c229b848186f618109dfb728": "d2537d950559193ee041ef4b0f86aa14",
".git/objects/bb/5a8ecdd586138319638c178680af3dfed5b631": "9843516cad2c8b3575bd8c97dbd9b949",
".git/objects/bc/be282658918ea0060a8b17d74ee7c48c9d563f": "2616f58949ead2c80dd8e6b438e4eec0",
".git/objects/bc/d92ee9bc10a04d69a9576ed859beeea7c06ca9": "d5e9e56f3df950dae914b2b967e8a7d1",
".git/objects/bd/cde20c0d8035c2c0bbbb3bd4ea8ebb6813ca50": "2cce0e30db3875512d2259b23db31c66",
".git/objects/bf/8cd59e988795bc4dae97dcbe9a8e191a70c196": "583363f28e784536af3b43d7252bc8f1",
".git/objects/c2/c0cdd2c48cb91409759044fc21d221ce9302da": "af7b6efa2823167ec5a4c3c8498bf461",
".git/objects/c3/37a5783744a9bb3364a70b194ecaa8cde1c04c": "3ad03f090fda79ba9559e51c82b8250a",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/a87b0c79cb3eb65d7a7345e5dd5df02de1343b": "f3475b69a8799eae86fda5ce8906dbd0",
".git/objects/c6/4a8b9991757575f2ebdd0d46f2fc0336fa9c5e": "6795aa4841db387ba5c4bf3f68223ee7",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c8/0093e8dc233c41f962ba604a1c93665f77fca5": "c186deb56c10247fb8081db7f39af18a",
".git/objects/c8/3f97988e0ddb1ee5b387cfe002e7b10fe2b1cb": "59f84cc802fe2a189a5e3892979067a4",
".git/objects/c8/e02601e996cb0aad9b4a1c2a16337d485e588c": "1dfc2c1a68757c3019f68bfc1f0824ee",
".git/objects/ca/ec49b16923336e86afb33dd47dda95933bfed9": "e915f778d8fa628a30aa48bef868d59b",
".git/objects/cb/2928bc8fc4163d7dbd848c2280209ff1eea61d": "9968d3cf5ef06efe20d10bb381aef63f",
".git/objects/cc/d7a3ba30efdc032e6abfc830a5d9073c3e4af1": "b67793fd19cbfc44aca675c20e53eeb3",
".git/objects/cd/e1c18123d35f1acb777f68bbed423b2c16e91c": "2c6bb741c7a857e5fb7be8c51b010824",
".git/objects/cf/b3dacf84b78b66bb2728b889f46faefb59969d": "28163e51a475d14f126febf1e239f0d2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/95e2806a069a8b6863d5e1755e5d37ebaeb538": "26999ce129cbca9064b7435a1331ee72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/cb63c4640f757055fcbf0d52da72209c088bda": "ffaa0584d39bffba22e52a8a6d2b2519",
".git/objects/db/6e8e438d3c8aaef8fcc0bd7a4adbf0bc9eb635": "c7561ee280d823c21de55b929e418061",
".git/objects/df/e41e45f477c459eaeb5f8dda8342910242f2cf": "958e2386ce0f95f71b918e41420e8231",
".git/objects/e0/ab36ec2bc133ce18d4ce2844011bc7d6e90253": "306fd9160751e3fa3e82e3e0410588c3",
".git/objects/e0/c78cbb8264854d6c2ce6305a816df62f029f25": "1a62e4603c0c6ba39dd380a18b76c639",
".git/objects/e2/0021468391ce5d425209cc60b95e176b6ec6f3": "e77610e0ad7fdc53bf2b3243d7e9799b",
".git/objects/e2/4796d812c4e5c97cec0783fb9c0f910c0fb591": "26e23fca776466bec9a26a9e48f8db5b",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e4/eff842ed727f0a5d705e8260c2c2bdb0a6009d": "9eedd6e67944bb34586c1836ffb46a0e",
".git/objects/e5/7a08325bb4bb23e2edc6144c6388bc97dcca0c": "7e8e2e521ca7afebb91fd57d82ca63b1",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/b8dfb1b2a60bd50538bec9f876511b9cac21e3": "1dbb21d11a4fea32e6c514023fd279f4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/ea/fdb2fbb154bdadacef591e1d0a5cc45f9a24d7": "83c88526206c0fc572517bdd54942e47",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/eb/754e19d298ffc7ada881625e01e82130c82f17": "482d13dd7dabda67a50d24434d9a3a4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/45fb915030f88b1c73252daa3fb6a197af8cdf": "53100db7d031241fcc1028541910113b",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/ee/42520872f2ae8161c394941fa9f37df8a3c43e": "b5ccdeb896bfd49c93e601f05814450b",
".git/objects/ee/a6883e2e2a8dcf3466fc15a16a8404eef246bb": "510aac33adbacbce41010cf0185bfbc7",
".git/objects/f1/a57fa4736fb4768986d7766e221d6ce82ba0e2": "5544aa32f8ced2a2cae8a699aa67c09b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/f3/aada42ec168d2aaedb7cee91749da58eed978d": "9fc147841fe7660eeae7be41eb66f095",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/44fc4e9a1e2f3c88738d07bc959a085bccc504": "fd65d1099dd096eb80fc22b4d668b102",
".git/objects/fa/5b04c32475f9cdec9a81f6c47ad208c7b313a0": "d3e2f2374146210ac9c15252497ede5c",
".git/objects/fb/760bbf17f4632cc2b0e1433cb08c8330d1961b": "04cb71749e34beda2adb76bce21f143b",
".git/objects/fd/b2cab34e0380e172675c63393fc9553a23178a": "dc4e49128b8e43dcd914b9185dd5f489",
".git/refs/heads/gh-pages": "929036bdda4dcb3102cd9db5d586e99c",
".git/refs/remotes/origin/gh-pages": "929036bdda4dcb3102cd9db5d586e99c",
"assets/AssetManifest.bin": "508600641938f2977b48bb285d1ff8ed",
"assets/AssetManifest.bin.json": "115d66668813b62e4e867f1838123018",
"assets/AssetManifest.json": "682e61757134f3c1f768ae39130d26ea",
"assets/assets/curriculum.json": "4e42c3cc9056b7909b5ee3a957fe6483",
"assets/assets/excel_web/dist/assets/index-Ee9A-V15.js": "620e5f1067cafa4be1bafa8967ae4b99",
"assets/assets/excel_web/dist/assets/index-uY9H4Hhg.css": "888f7f28dfba39ef84fbb6efda4f1da8",
"assets/assets/excel_web/dist/index.html": "8cd72ab58d4024b2ecc92669bbfffda7",
"assets/assets/excel_web/dist/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/images/appdev.png": "6970233870514a771c36ae1a614277c2",
"assets/assets/images/ar.png": "be3ec0da025680aa77a347ccf52f5202",
"assets/assets/images/chatai.png": "3c8fbc671fac19490f0685ee13c5053e",
"assets/assets/images/edu.jpg": "22cd06fdd98525d6ff0c8403397761c3",
"assets/assets/images/emmi.png": "9b15beca74a167a9cc4273de9177110c",
"assets/assets/images/emmi_vibe.png": "fd24a5defe2a1ee10826475465510f3a",
"assets/assets/images/excel.png": "3edfff6c056d123206f7771445954d9e",
"assets/assets/images/imagegen.png": "f1767f76d2141ec7856293c84a0f2331",
"assets/assets/images/imgnobgnew.png": "3abe66a270a7204346d081430a0e4a63",
"assets/assets/images/java.jpg": "4e49a9b89f4d5a8d6291c7098c084181",
"assets/assets/images/javaflow.png": "79ca447a47a19a3242c0716e977187ce",
"assets/assets/images/javaflownobg.png": "b05537ae3d3e2cb26cafb3997818a616",
"assets/assets/images/littleemmi.png": "bfabc1de1dc1d095507b97e0fbb2490d",
"assets/assets/images/mit.png": "903e59505a46cdebaf318cdef7754513",
"assets/assets/images/mitnobg.png": "67822bb6e2b64d36a2b24584bce5b546",
"assets/assets/images/posemodel.png": "a683c01d6bc84494c60f0d1be0068e34",
"assets/assets/images/posemodelnobg.png": "438d937560083082b672ee6de7262bba",
"assets/assets/images/ppt.png": "451a4c3922ac31a9ae1ce4f29d872930",
"assets/assets/images/pyflow.png": "6fb17368ab10e3f1993d21e3a8c2961f",
"assets/assets/images/pyflownobg.png": "eb1610f06bda6a18e9f4ce32a5a9a833",
"assets/assets/images/python.jpg": "2b4aab3c71d4f5fc332195b9a58f81d4",
"assets/assets/images/pythonide.png": "5b48fc0cf90a1d897acddec340b14ca9",
"assets/assets/images/qubiq_logo.png": "2c0f09f32aedfcc055efc10262a58b76",
"assets/assets/images/qubiq_music.png": "170de8c8246d358a671cb17092fd0d69",
"assets/assets/images/quiz.png": "f62f3a6f81fa18930e9cf79c1cb82d01",
"assets/assets/images/soundgen.png": "45e386008fad83859ec4747d2de6d087",
"assets/assets/images/soundmachine.png": "16024beba82ccc527a8c2e4ad0354603",
"assets/assets/images/soundmachinenobg.png": "e89cbe6c2b3243d154d192f0ddad8d5d",
"assets/assets/images/suno.png": "d93115ff3b86df4cedf7ca18c66c52e7",
"assets/assets/images/word.png": "5b621df54b59b3feb1dba3f9e370f752",
"assets/assets/mobilenet_feature.tflite": "d8065bc96469fdc4f3fdb05b878c6bbc",
"assets/assets/qubiq_web/assets/qubiq_audio_index.css": "b212a5f9d20e59582146c4f79f0c33b8",
"assets/assets/qubiq_web/assets/qubiq_audio_index.js": "4a64597805b97fdbc361457b7bf8ba14",
"assets/assets/qubiq_web/qubiq_audio.html": "c6cd5ea7d0cb879ed28f0c7b9cb03e98",
"assets/assets/qubiq_web/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/teachable/audio/assets/teachable-index-BGmzvaFY.css": "bfc93e613cae479d19e5086e6702e363",
"assets/assets/teachable/audio/assets/teachable-index-CSoxMe9Y.js": "dd7c6a6ed1cf019a3ed064d0aaafe5b9",
"assets/assets/teachable/audio/teachable.html": "b4060fa8bda7571e0d49300c954f1f8d",
"assets/assets/teachable/audio/teachable.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/teachable/image/assets/teachable-index-BGmzvaFY.css": "bfc93e613cae479d19e5086e6702e363",
"assets/assets/teachable/image/assets/teachable-index-CSoxMe9Y.js": "dd7c6a6ed1cf019a3ed064d0aaafe5b9",
"assets/assets/teachable/image/teachable.html": "b4060fa8bda7571e0d49300c954f1f8d",
"assets/assets/teachable/image/teachable.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/teachable/pose/assets/index-ECK0Mmts.css": "e586c8475b5af3378f61029027e9f0df",
"assets/assets/teachable/pose/assets/index-XQNdh-LO.js": "db6af44e77b5d22e4567ba7f1a17fc4f",
"assets/assets/teachable/pose/index.html": "830aca036fc9aefdb8900b8dbb5aa3e5",
"assets/assets/teachable/pose/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/web/dist/assets/index-BbfzEzEM.js": "be7b0bd387eee74ea95bd2136eef13a9",
"assets/assets/web/dist/assets/index-DDzBPqJa.css": "9743d2234c34801c45f5e140bd9b5bef",
"assets/assets/web/dist/index.html": "487b5cc9126145496813c478f57a5c92",
"assets/assets/web/dist/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/assets/word_web/word/app.js": "f9606ee1f57c756ed3052849af7058dd",
"assets/assets/word_web/word/index.html": "d5e56ad89cbef2ea3f3d48d257fc1695",
"assets/assets/word_web/word/styles.css": "fdce066064f49b5715b36133d9e90b84",
"assets/assets/www/app.js": "882132fbb745aebe2e301e351d14100a",
"assets/assets/www/assets/index-JKwT_vHL.css": "b2869228b5bd578957755a7390feedb7",
"assets/assets/www/assets/index-xPsAilHw.js": "111e169d61286ada9fdbe08c528dd5b7",
"assets/assets/www/blocks/custom_blocks.js": "74f11a227719857a5b9f59faa95a9341",
"assets/assets/www/blocks/python-blocks.js": "130bc6b9fd6167f252ef8c8f363f519b",
"assets/assets/www/index.css": "7ef2b3032f48a1b62a02228b581f8c84",
"assets/assets/www/index.html": "589672197c109ede4b7fd0366ca4a8b9",
"assets/assets/www/index_MIT.html": "ed0e7826e59a535bbbe03f30a16569dd",
"assets/assets/www/lib/blockly/blockly_compressed.js": "91b86ffca1735da33b289594f0e5d759",
"assets/assets/www/lib/blockly/blocks_compressed.js": "3e55b2fd165638573822ea8fbeba8563",
"assets/assets/www/lib/blockly/en.js": "b74d93a75ae5c2f3aeefb73de7ece67b",
"assets/assets/www/lib/blockly/python_compressed.js": "3e31ba03b3173fbc8fe7fe7d246de504",
"assets/assets/www/lib/codemirror/codemirror.min.css": "c1da630111dc87f804761ecc75f89eac",
"assets/assets/www/lib/codemirror/codemirror.min.js": "3b00a21bbc8f3a1fa7df392628c92364",
"assets/assets/www/lib/codemirror/dracula.min.css": "19d0dc0eb99d49abba3a33f0f8af6bec",
"assets/assets/www/lib/codemirror/python.min.js": "79e417cc0d775fc28c736ef58c2c499b",
"assets/assets/www/lib/skulpt/ai_ds_mocks.js": "1d41b45d95c5b9b3374ddbf7e8cbe8d2",
"assets/assets/www/lib/skulpt/chart.min.js": "e6452e2b454b091f857a45cce7624eae",
"assets/assets/www/lib/skulpt/mysql_mock.js": "6b34fa072edaf5b530e6d769229685bf",
"assets/assets/www/lib/skulpt/plt_wrapper.js": "e30f5b3d81b30cbb912da33da818f88f",
"assets/assets/www/lib/skulpt/skulpt-matplotlib.min.js": "8910723c226e403cfd5c58462367f0d7",
"assets/assets/www/lib/skulpt/skulpt-stdlib.js": "be285bb759236c932341cf829a9d9016",
"assets/assets/www/lib/skulpt/skulpt.min.js": "be0f5bfffc12e985fbea2870d1b2b8e8",
"assets/assets/www/vite.svg": "8e3a10e157f75ada21ab742c022d5430",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "98e79ada1b60849f1b3e6f1e09df48fd",
"assets/lib/Resources/BlocksStructure/blueCmd.svg": "e079a89c5b339a89ae8998ccb396d924",
"assets/lib/Resources/little_emmi.svg": "487ab1892de482fa27b3402403632c36",
"assets/lib/Resources/loopIcons/repeat.png": "ae59a298a7286ade441f71bd1737f28e",
"assets/lib/Resources/loopIcons/Repeat.svg": "f789f09e48ee71778c37cc04742c49f1",
"assets/lib/Resources/loopIcons/repeatblock.png": "cf7e8d958603b49cd76e8e484829b1ad",
"assets/lib/Resources/loopIcons/repeatsvg.svg": "5b289d6530e201f13609db51b56e1e4e",
"assets/lib/Resources/MovementIcons/Back.svg": "b4b097fd8fb8ca59661146f17059e523",
"assets/lib/Resources/MovementIcons/Down.svg": "07c35685af21a1b5db6b7e174ce28123",
"assets/lib/Resources/MovementIcons/Foward.svg": "40639951cf2637cc6cb76c764c83d4f0",
"assets/lib/Resources/MovementIcons/Up.svg": "52c56b22a278277fc22e5864162a6259",
"assets/NOTICES": "2e878f3bb07b8c24ca0f73ec715475fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "302041f1f1df83bb8d37e803497ba3ae",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7dbfb8644027857005bb4acdbad5dfc7",
"/": "7dbfb8644027857005bb4acdbad5dfc7",
"main.dart.js": "43506057aff890b4bf40223b594a86c7",
"manifest.json": "cc4cc267db3e13a3ffb9937d25766847",
"version.json": "70073abd017641a548a16de01bccc9dd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
