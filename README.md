# IMAGE SEARCH ABSTRACTION LAYER API

<strong>live site:</strong>
https://image-search-api-makkbit.herokuapp.com/
<br>

<i>Made using nodejs, mongodb, expressjs, pugjs.</i>
<br>

For <a href="https://www.freecodecamp.com/challenges/image-search-abstraction-layer">Free Code Camp - API Challenges - Image Search Abstraction Layer
<a/>
<br>
<br>

<strong>User Stories:</strong>
<br>
1.  I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
<br>
2.  I can paginate through the responses by adding a ?offset=2 parameter to the URL.
<br>
3.  I can get a list of the most recently submitted search strings.
<br>
<br>

<strong>Example Usage</strong>
<br>
https://image-search-api-makkbit.herokuapp.com/imagesearch/mr robot?offset=10
<br>
<br>
https://image-search-api-makkbit.herokuapp.com/imagesearch/latest
<br>
<br>
https://image-search-api-makkbit.herokuapp.com/invalidPath
<br>
<br>

<strong>JSON response:</strong>
<br>
[
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=9y7s9uXMdOni16kja0RqGBPCwxy-KEiqlDriJccVnT0&v=1&r=http%3a%2f%2fwww.hollywoodreporter.com%2fsites%2fdefault%2ffiles%2f2015%2f04%2fmr_robot_promo.jpg&p=DevEx,5008.1",
      "alt_text":"USA Debuts 'Mr. Robot' Trailer (Exclusive Video) - Hollywood Reporter",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=eICIzL1J89fgwyNPwb2jkPe711hKLTgakXHHR5L6d9o&v=1&r=http%3a%2f%2fwww.hollywoodreporter.com%2flive-feed%2fusa-debuts-mr-robot-trailer-785931&p=DevEx,5007.1"
   },
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=pD9LZ9rg573Pc9HUvCsJTG4gpEFaBJmZMB33F8JG0xU&v=1&r=http%3a%2f%2fimages-cdn.moviepilot.com%2fimages%2fc_fill%2ch_900%2cw_1600%2ft_mp_quality%2fk89gl5kxuuvh49qzrys3%2fmr-robot-sets-a-new-rotten-tomatoes-record-mr-robot-602615.jpg&p=DevEx,5014.1",
      "alt_text":"mr-robot-sets-a-new-rotten-tomatoes-record-mr-robot-602615.jpg",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=r1KN3Vg-6VTrKAuJDqYbN65yaw1J-ksfVrRJJbxYbUE&v=1&r=http%3a%2f%2fmoviepilot.com%2fposts%2f2015%2f09%2f07%2fmr-robot-sets-a-new-rotten-tomatoes-record-3524214&p=DevEx,5013.1"
   },
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=7osZ6v0AkKYTxtQqvi-k0zCy7g8G9iDS7pkPIB8iMF0&v=1&r=http%3a%2f%2fd.fastcompany.net%2fmultisite_files%2ffastcompany%2fimagecache%2f1280%2fposter%2f2015%2f06%2f3047577-poster-p-1-mr-robot-on-usa.jpg&p=DevEx,5020.1",
      "alt_text":"Mr Robot is the hottest tv show – TV Reviewer",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=vLjAqsRpGuOxuepdr5Bv5qaTl6VpdR17pwQZ2U6CJ48&v=1&r=http%3a%2f%2fwww.tvreviewer.com%2f2015%2f07%2f29%2fmr-robot-is-the-hottest-tv-show%2f&p=DevEx,5019.1"
   },
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=p-mthYhalHx-ucccUaePn0f9zzm9RbQyfabgmHleQKk&v=1&r=http%3a%2f%2fwww.hollywoodreporter.com%2fsites%2fdefault%2ffiles%2f2014%2f12%2fmr_robot_tout.jpg&p=DevEx,5026.1",
      "alt_text":"USA's Hacker Drama 'Mr. Robot' Ordered to Series - The Hollywood ...",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=ootKGYFGQbA6S2v2fjQx50Eh_3HBPGs951gzv_joK5o&v=1&r=http%3a%2f%2fwww.hollywoodreporter.com%2flive-feed%2fusas-hacker-drama-mr-robot-759510&p=DevEx,5025.1"
   },
   {
      "image_url":"https://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=5_6UaquM6B58keiVtf1COEevY7S1JGqRmGoc2F-FtQA&v=1&r=https%3a%2f%2fpmcdeadline2.files.wordpress.com%2f2015%2f04%2fmrrobot-key-art.jpg%3fw%3d970&p=DevEx,5032.1",
      "alt_text":"USA Network’s ‘Mr. Robot’ Pilot Set For Digital, VOD Rollout ...",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=NirH1qIJDHHNCwmjOshs9GyyiksymIjYSB1F_AwY5iE&v=1&r=http%3a%2f%2fdeadline.com%2f2015%2f05%2fusa-network-mr-robot-pilot-digital-vod-rollout-1201420309%2f&p=DevEx,5031.1"
   },
   {
      "image_url":"https://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=Hw2XT-y5i-1Z3EIt5v66S9QBSwfEmZTXPlYYCGf2SqE&v=1&r=https%3a%2f%2fci3.googleusercontent.com%2fproxy%2frzZR5_7Gw8Fq9o_d1ZF-BL8FfTlMvg582pch-nsnYlQE1DfR4uaiOhryFiCX2dbCKvFOl_LGcv-pBiBXb_PNEbRkhUTkRA%3ds0-d-e1-ft%23http%3a%2f%2ftonyj.net%2fwp-content%2fuploads%2fmr-robot.jpg&p=DevEx,5038.1",
      "alt_text":"mr robot",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=3EuBBoCIgxD8pUAHNVsuysryitsdVKGBEiFmSFncrOQ&v=1&r=http%3a%2f%2fwww.patheos.com%2fblogs%2fpoptheology%2f2015%2f09%2fmr-robot-season-finale%2f&p=DevEx,5037.1"
   },
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=_XabyAxygnbD-ApVCBu45mEn19o_8B3L-mf30k0i7lU&v=1&r=http%3a%2f%2fjustgoodvibe.com%2fwp-content%2fuploads%2f2015%2f12%2fmr-robot-8.jpg&p=DevEx,5044.1",
      "alt_text":"Mr. Robot Wallpapers | Just Good Vibe",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=dp-djVP1D_xxWYgWcia_r3qF4mTHabgverw0rGX4tOk&v=1&r=http%3a%2f%2fjustgoodvibe.com%2fmr-robot-wallpapers%2f&p=DevEx,5043.1"
   },
   {
      "image_url":"https://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=HhKLPZAfqO_u3elcf1nblJrvakOaWbOqJQVWUMCfsh0&v=1&r=https%3a%2f%2ffanart.tv%2ffanart%2ftv%2f289590%2ftvposter%2fmr-robot-55682c155114b.jpg&p=DevEx,5050.1",
      "alt_text":"Mr. Robot | TV fanart | fanart.tv",
      "page_url":"https://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=wlePkf0d87T2IbHBqYVntDp6mdnt00qCR9SUbH5yp9g&v=1&r=https%3a%2f%2ffanart.tv%2fseries%2f289590%2fmr-robot%2f&p=DevEx,5049.1"
   },
   {
      "image_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=TWjEnsaxpmP0xtAJyrAxXWW_u3tJXwS0di2HiQ-8Qc0&v=1&r=http%3a%2f%2fwww.theworkprint.com%2fwp-content%2fuploads%2f2015%2f06%2fmrrobot_prelinear_aspot.jpg&p=DevEx,5056.1",
      "alt_text":"Mr. Robot’ Review: Rami Malek is Jack’s blackhat hack",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=uj9W00bTEzxEeJplN7LOdac-0MCv5jX4UuN--f6xvyM&v=1&r=http%3a%2f%2fwww.theworkprint.com%2fmr-robot-review-ep-1%2f123&p=DevEx,5055.1"
   },
   {
      "image_url":"https://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=epmodCF0eexoCCN8_UzIRK-7yA4Vfe4js7CMkEcRlj0&v=1&r=https%3a%2f%2fpmcvariety.files.wordpress.com%2f2015%2f08%2fmr-robot-finale-tv-review-usa.jpg%3fw%3d670%26h%3d377%26crop%3d1&p=DevEx,5062.1",
      "alt_text":"Mr. Robot’ Finale: Christian Slater on Twist about Elliot’s ...",
      "page_url":"http://www.bing.com/cr?IG=F3B54F01BEF14D8AAF7647742EF4A1BB&CID=160BD2362CEF62E23704DBD92DDE6301&rd=1&h=PJQU4Y5itl9oNZQHVB_BRjRvDtKhrZjJB5S9LKBLjxo&v=1&r=http%3a%2f%2fvariety.com%2f2015%2ftv%2fnews%2fmr-robot-finale-christian-slater-elliot-father-spoilers-1201581003%2f&p=DevEx,5061.1"
   }
]
<br>
<br>
<br>
[
   {
      "_id":"5856734fce4b470011c372ef",
      "term":"god",
      "when":"2016-12-18T11:30:23.390Z"
   },
   {
      "_id":"5856734ace4b470011c372ee",
      "term":"flowers",
      "when":"2016-12-18T11:30:18.031Z"
   },
   {
      "_id":"58567307ce4b470011c372ed",
      "term":"mr robot",
      "when":"2016-12-18T11:29:11.514Z"
   },
   {
      "_id":"58567258ce4b470011c372ec",
      "term":"lol cats",
      "when":"2016-12-18T11:26:16.583Z"
   },
   {
      "_id":"58567239ce4b470011c372eb",
      "term":"wwe",
      "when":"2016-12-18T11:25:45.408Z"
   }
]
<br>
<br>
<br>
{"error":"invalid api request, please read readme file"}








 
