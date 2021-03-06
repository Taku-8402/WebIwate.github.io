var data = [
    { url:"../../onsen/onsen1.html", title:"つなぎ温泉", body:"つなぎ温泉：山影が美しく映える御所湖のほとりに、12軒のホテル・旅館が軒を並べる温泉地。湖畔には眺望のよい大型ホテルや風雅な旅館。湖と岩手山の美しい山並みを一望できる。" },
    { url:"../../onsen/onsen2.html", title:"ホテル紫苑", body:"ホテル紫苑：どのお部屋からも岩手山と御所湖が眺望できる宿。大浴場の続きには岩場を配した露天風呂が設けられ、心地のよい湖畔の風を受けながら入浴できる。" },
    { url:"../../onsen/onsen3.html", title:"花巻温泉", body:"花巻温泉：大正12年（1923）に、台温泉から引湯して開発された温泉。北東北の温泉リゾートとして全国にその名を知られている。温泉効能はリウマチ・神経痛など。" },
    { url:"../../onsen/onsen4.html", title:"ホテル花巻", body:"ホテル花巻：見晴らしの良さが自慢のひのき露天風呂は豊かな自然の移ろいを感じることができ、日ごろの疲れをいやすことできる。" },
    { url:"../../onsen/onsen5.html", title:"大沢温泉", body:"大沢温泉：約800年前に発見されたといわれる温泉。四季折々の山の景色と川の音、大自然を感じながらゆったり湯めぐりを楽しめる。" },
    { url:"../../onsen/onsen6.html", title:"山水閣", body:"山水閣：奥羽山脈の渓谷沿いに湧き出る東北有数の規模を誇る花巻温泉郷。周辺に広がる県立自然公園の四季折々の豊かな景色を楽しめる。" },
    { url:"../../onsen/onsen7.html", title:"鶯宿温泉", body:"鶯宿温泉：春にはカタクリの群生地や野草を楽しみながら鴬の鳴き声を聞くことができる。足湯の併設された「うぐいす湯の里公園」があり、新緑や紅葉などの四季を感じながら、やすらぎのひとときを過ごすことができる。" },
    { url:"../../onsen/onsen8.html", title:"ホテル偕楽園", body:"ホテル偕楽園：自然の息吹に包まれ、素朴な風情の中に日本情緒が漂う。効能豊かな湯は、開放的な大浴場と、日本庭園風の空間に造られた露天風呂とで楽しめる。緑深き裏山の景色を眺めながら、湯にじっくりと浸かることができる。" },
    { url:"../../onsen/onsen9.html", title:"志戸平温泉", body:"志戸平温泉：名湯秘湯が集中する豊沢川流域入口に位置する温泉地。古くから山あいの閑静な湯治場として知られてきたが、リゾート地に変貌しつつある真っ最中。四季折々の渓谷美がパノラマのように広がる雄大な景色を楽しめる。" },
    { url:"../../onsen/onsen10.html", title:"ホテル志戸平", body:"ホテル志戸平：ラウンジにはガラス一面に豊沢川と大自然を眺めることができる。ホテル自慢の種類豊富な大浴場と露天風呂がそろっており、四季折々に変化する豊沢川の渓流と美しい自然を眺め、多彩な湯めぐりを愉しめる。" },

    { url:"../../event/event1.html", title:"童話村ライトアップ", body:"童話村ライトアップ：色とりどりの発光ダイオード（ＬＥＤ）ライトが闇を照らし「どんぐりと山猫」「銀河鉄道の夜」などの情景を演出する。芝生広場にある高さ４メートルほどのどんぐりオブジェが人気を集めている。" },
    { url:"../../event/event2.html", title:"藤原の郷紅葉ライトアップ", body:"藤原の郷紅葉ライトアップ：桜の開花の時期にあわせて、日本建築の美の代表とされる寝殿造の建物を再現した「伽羅御所」や庭園などがライトアップされ、日中とはちがった幻想的な雰囲気となります。" },
    { url:"../../event/event3.html", title:"三陸花火大会", body:"三陸花火大会：2020年に国内最大級の規模で開催した三陸花火大会。2021年は、昨年同様の大規模な花火エンターテイメントショーに加えて、全国23社が腕を競い合う競技部門も追加されました。" },
    { url:"../../event/event4.html", title:"小岩井農場の紅葉", body:"小岩井農場の紅葉：日本最大級の民間総合農場「小岩井農場」では、例年10月下旬に紅葉がピークを迎え、11月上旬まで色づく木々と農場の風景を見ることができます。" },
    { url:"../../event/event5.html", title:"花巻温泉バラ園", body:"花巻温泉バラ園：約450種6,000株をこえる世界のバラが、四季折々に鮮やかな色彩と豊かな香りで園内を彩ります。夜はライトアップで装飾され、光で煌めく幻想的なナイトローズガーデンをお楽しみいただけます。" },
    { url:"../../event/event6.html", title:"盛岡さんさ踊り", body:"盛岡さんさ踊り：藩政時代から伝わる盆踊り「さんさ踊り」が市内の目抜き通りで４日間繰り広げられる。踊り手、笛、太鼓あわせて２万人の群舞となり、神輿やバトントワラー、マーチングバンドもパレードして祭りを盛り上げます。" },
    { url:"../../event/event7.html", title:"遠野まつり", body:"遠野まつり：遠野市最大のお祭りである「遠野まつり」には約60団体が参加し、遠野の郷土芸能である南部ばやし、しし踊り、神楽、さんさ踊り、田植え踊り、神輿などが披露されます。" },
    { url:"../../event/event8.html", title:"うごく七夕まつり", body:"うごく七夕まつり：思い思いに飾り付けした山車が、威勢のいいお囃子に合わせて勇壮に町を練り歩きます。夜の部は、日が落ちるとともに山車の飾りも変わって灯が燈り、幻想的な七夕がそれぞれに華やかさを競い合う華麗な七夕まつりです。" },
    { url:"../../event/event9.html", title:"日高火防祭", body:"日高火防祭：4月28日の前夜祭、29日の本祭と春の奥州に華やかな一大絵巻をくりひろげる日高火防祭。町組ごとに飾りたてられたはやし屋台が古趣あふれる音曲にあわせて街を練り歩きます。" },
    { url:"../../event/event10.html", title:"JA岩手農業まつり", body:"JA岩手農業まつり：農産物の豊かな実りに感謝して開催されるこの農業まつりは、農産物の品評会や餅つきや釜飯炊きなどのイベント、提携ファーマーズマーケットによる全国の農産物販売などが催される。" },
    
    { url:"../../kankou/kankou1.html", title:"龍泉洞", body:"龍泉洞は岩手県下閉伊郡岩泉町にある鍾乳洞です。日本三大鍾乳洞の一つとされ、洞内に住むコウモリと共に国の天然記念物に指定されています。" },
    { url:"../../kankou/kankou2.html", title:"猊鼻渓", body:"猊鼻渓は、国の史跡名勝天然記念物、名称指定県内第一号に指定され、日本百景の一つに数えられています。" },
    { url:"../../kankou/kankou3.html", title:"岩山展望台", body:"岩山展望台標高約３４０メートルの頂上にあり、市街地はもちろん、岩手産や八幡平を含む奥羽山系から北上山系まで一望でき迫力満点です。" },
    { url:"../../kankou/kankou4.html", title:"小岩井農場", body:"小岩井農場は、岩手県岩手郡雫石町と滝沢市にまたがって所在する日本最大の民間総合農場です。" },
    { url:"../../kankou/kankou5.html", title:"安比高原", body:"安比高原スキー場は、岩手県八幡平市にある日本有数の規模を誇るスキー場です。スキー場の他にもゴルフクラブやオールシーズンで楽しむことができます。" },
    { url:"../../kankou/kankou6.html", title:"盛岡八幡宮", body:"盛岡八幡宮：農業、工業、商業、学問、衣食住など人間生活の根源の神として、昔から地域の人々の多大なる崇敬を集めてきました。" },
    { url:"../../kankou/kankou7.html", title:"中尊寺金色堂", body:"中尊寺は、岩手県西磐井郡平泉町にある天台宗東北大本山の寺院で、２０１１年に世界文化遺産に登録されました。" },
    { url:"../../kankou/kankou8.html", title:"浄土ヶ浜", body:"浄土ヶ浜は三陸復興国立公園にある三陸を代表する景勝地です。海水浴の季節には多くの人で賑わう人気スポットです。" },
    { url:"../../kankou/kankou9.html", title:"いわてこどもの森", body:"奥中山地区の美しいブナ林に囲まれたいわて子どもの森は、「楽しさ」「感動」「発見」をとおして子どもの主体性や自立性を育む体験型の児童館です。" },
    { url:"../../kankou/kankou10.html", title:"盛岡手づくり村", body:"盛岡手づくり村は、盛岡地域地場産業振興センター・手づくり工房・南部曲り家の３つのゾーンで構成された複合施設です。" },

    { url:"../../omiyage/omiyage1.html", title:"かもめの玉子", body:"かもめの玉子：しっとりほくほくとした食感の黄味餡を、カステラ生地とホワイトチョコで包み上げた風味豊かなお菓子で、幅広い年代に愛されています。" },
    { url:"../../omiyage/omiyage2.html", title:"奥州ポテト", body:"奥州ポテト：口当たりの良いなめらかなカスタードクリームをさつま芋の王様、鳴門金時と良質の生クリームでできた生地で包んだ、とろけるスイートポテトです。" },
    { url:"../../omiyage/omiyage3.html", title:"盛岡冷麺", body:"盛岡三大麺として知られる「盛岡冷麺」。小麦粉とでんぷんで作られたつるっとした食感とコシの強い麺、酸味の効いたコクのあるスープが特徴です。そんな岩手のソウルフードをぜひご家庭でもお楽しみください。" },
    { url:"../../omiyage/omiyage9.html", title:"じゃじゃ麺", body:"盛岡じゃじゃ麺は冷麺、わんこそばと並んで盛岡三大麺として知られています。うどんやきしめんのような独特の平たい麺に、特製の肉味噌とキュウリ、ネギなどをかけたもので、麺を食べ終わった後は、卵と肉味噌、茹で汁をそそいでかき混ぜた「鶏蛋湯」として食べることもできます。" },
    { url:"../../omiyage/omiyage4.html", title:"岩谷堂羊羹", body:"岩谷堂羊羹：定番の逸品をはじめ、くるみ、ごま、季味までいろいろな羊羹があります。甘さにもコクがあったり、さっぱりとしていたりと様々です。お好みの羊羹をお楽しみください。" },
    { url:"../../omiyage/omiyage5.html", title:"小岩井農場チーズケーキ", body:"小岩井農場伝統の製法で作り上げた、こだわりのチーズケーキです。シンプルでありながら深い味わいをお楽しみください。「ベイクドチーズケーキSAHO」と「レアチーズケーキ」の2種類があります。" },
    { url:"../../omiyage/omiyage6.html", title:"前沢牛カレー", body:"ブランド牛である前沢牛のお肉をたっぷり使ったカレーです。ほろほろとしたお肉、そしてその旨味が詰まったカレーは普段とは一味違った特別感のある味わいとなっています。" },
    { url:"../../omiyage/omiyage7.html", title:"三陸海宝漬", body:"三陸海宝漬：三陸産のアワビ・いくら・めかぶを醤油ベースの出汁に漬け込んだ贅沢な商品です。柔らかく煮たアワビに、プチプチのいくら、粘りの強いめかぶといった三陸の恵みを一度に味わうことができます。" },
    { url:"../../omiyage/omiyage8.html", title:"南部せんべい", body:"南部せんべいの小麦と胡麻の味わいは、昔おばあちゃんが囲炉裏端で焼いていたせんべいの温もりを伝えてくれます。" },
    { url:"../../omiyage/omiyage10.html", title:"南部鉄器", body:"岩手の有名な伝統工芸品である南部鉄器。重量感と高級感のあるデザインが人気です。使ってもよし、飾ってもよしな南部鉄器をお土産としていかかでしょうか。" },

    { url:"../../gourmet/gourmet1.html", title:"わんこそば", body:"南部地方に伝わる「そば振る舞い」が原形といわれるわんこそば。茹でたてのそばをおいしく、たくさん食べていただこうというおもてなしの心から生まれた伝統の名物料理です。" },
    { url:"../../gourmet/gourmet2.html", title:"冷麺", body:"平壌生まれの冷麺が、盛岡に登場したのは昭和29年頃。本場・朝鮮半島出身者がふるさとに思いを馳せて、盛岡で冷麺を作ってみたのが盛岡冷麺の始まりです。" },
    { url:"../../gourmet/gourmet3.html", title:"じゃじゃ麺", body:"じゃじゃ麺：小麦から作られた、ゆでた温かい平麺の上にキュウリやネギ、特製肉みそを全体によく絡めて食べる作法が最大の特徴です。" },
    { url:"../../gourmet/gourmet4.html", title:"福田パン", body:"福田パンメニューは定番だけで50種類以上の中から好きなものを選べる。選ぶのに迷ったら人気No1のあんバターがおすすめ" },
    { url:"../../gourmet/gourmet5.html", title:"ジンギスカン", body:"遠野のジンギスカンは、羊肉を柔らかジューシーに焼きあげてからタレを付けるのが特徴です。" },
    { url:"../../gourmet/gourmet6.html", title:"前沢牛", body:"岩手県奥州市前沢区において最長期間、最終的に飼養された肥育牛から得られた、きめ細やかな霜降りと、しっとりした食感に優れた肉質が特徴の牛肉です。" },
    { url:"../../gourmet/gourmet7.html", title:"いわて短角牛", body:"いわて短角牛：脂肪分が少ないヘルシーな赤身肉で、とろけるような霜降りとはまったく違う、かみしめる食感と肉の旨さを味わう牛肉です。赤身が多いから量を食べても飽きがこない旨味が特徴です。" },
    { url:"../../gourmet/gourmet8.html", title:"雫石牛", body:"農家が長年試行錯誤を重ね、磨き抜かれた飼養技術で育て上げられた黒毛和牛。その中でも枝肉格付けランクA4・A5の上物のみ厳選されたのが雫石牛。" },
    { url:"../../gourmet/gourmet9.html", title:"ひっつみ", body:"ひっつみは古くから岩手でおふくろの味として親しまれている郷土料理です。水でこねた小麦粉を手で薄く延ばしたものを手でちぎり、鶏肉、ごぼう、にんじん、きのこなどを入れた醤油ベースの汁に入れて煮込んだ料理。" },
    { url:"../../gourmet/gourmet10.html", title:"釜石ラーメン", body:"釜石ラーメンといえば、琥珀色の透き通ったスープと極細縮れ麺が特徴です。この麺は程よいコシがあり、スープとの相性が良いといわれています。" },
    
  ];