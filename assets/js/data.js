const U=(i,w=800)=>`https://images.unsplash.com/${i}?auto=format&fit=crop&w=${w}&q=70`;
const CR=[
["Nadia Putri","nadiaputri","Beauty","Instagram",125,"photo-1494790108377-be9c29b29330","Jakarta"],
["Rafael Adrian","rafaeladrian","Fashion","Instagram",89,"photo-1500648767791-00dcc994a43e","Bandung"],
["Clara Michelle","claramichelle","Food","TikTok",210,"photo-1438761681033-6461ffad8d80","Surabaya"],
["Dimas Pratama","dimaspratama","Technology","YouTube",75,"photo-1507003211169-0a1dd7228f2d","Jakarta"],
["Alya Safira","alyasafira","Beauty","TikTok",180,"photo-1534528741775-53994a69daeb","Bandung"],
["Kevin Mahendra","kevinmahendra","Gaming","YouTube",95,"photo-1531746020798-e6953c6e8e04","Medan"],
["Jessica Tan","jessicatan","Travel","Instagram",145,"photo-1544005313-94ddf0286df2","Bali"],
["Fajar Ramadhan","fajarramadhan","Lifestyle","TikTok",65,"photo-1506794778202-cad84cf45f1d","Yogyakarta"],
["Olivia Amanda","oliviaamanda","Fashion","Instagram",320,"photo-1524504388940-b1c1722653e1","Jakarta"],
["Reza Akbar","rezaakbar","Technology","YouTube",110,"photo-1472099645785-5658abf4ff4e","Jakarta"],
["Celine Putri","celineputri","Food","Instagram",98,"photo-1517841905240-472988babdf9","Semarang"],
["Andre Wijaya","andrewijaya","Travel","TikTok",155,"photo-1463453091185-61582044d556","Bali"]
].map((a,i)=>({id:i+1,name:a[0],user:a[1],cat:a[2],plat:a[3],f:a[4],img:a[5],loc:a[6],er:(3.2+(i*7%30)/10).toFixed(1)}));
const PJ=[
["Glow Up Your Day","Lumea Skin","Beauty",2025,"photo-1522335789203-aabd1fc54bc9","A morning-routine series that turned skincare into a daily ritual people filmed themselves doing."],
["Everyday Moves","Stride Atelier","Fashion",2025,"photo-1490481651871-ab68de25d43d","Street-cast creators wore one capsule collection through ordinary city days."],
["Taste The Moment","Kopi Senja","Food & Beverage",2024,"photo-1504674900247-0877df9cc836","Food creators chased the first sip, the first bite and the story behind both."],
["Beyond The Ordinary","Nova Devices","Technology",2025,"photo-1518770660439-4636190af475","Honest hands-on films that showed a new phone line in real, unglamorous use."],
["Your Style, Your Story","Maison Rue","Fashion",2024,"photo-1469334031218-e382a71b716b","Ten creators styled the same jacket ten ways and told why it mattered to them."],
["Better Every Day","Habitly","Lifestyle",2024,"photo-1511707171634-5f897ff02aa9","Small-habit challenges documented across thirty days by everyday creators."],
["Explore More","Wanderly","Travel",2025,"photo-1488646953014-85cb44e25828","A travel-booking launch told through unplanned detours and local tips."],
["Play Beyond Limits","Volt Arena","Gaming",2024,"photo-1542751371-adc38448a05e","Live streams and a weekend tournament built around a new gaming peripheral line."]
].map((a,i)=>({id:i+1,name:a[0],brand:a[1],cat:a[2],year:a[3],img:a[4],desc:a[5]}));
const SV=[["Influencer & KOL Marketing","We match brands with relevant creators for campaigns that feel authentic and earn real engagement.","Matching brands with the right voices, so campaigns feel authentic and earn real engagement instead of passing views.",["Influencer discovery","Creator selection","Campaign planning","Collaboration management","Campaign evaluation"],"photo-1611162617213-7d7a39e9b1d7"],
["Creator Management","We discover, develop, and grow long-term relationships with talented creators.","Helping creators grow their presence, build their personal brand, and unlock collaboration opportunities.",["Creator discovery","Talent relationship management","Personal branding","Brand collaboration opportunities","Creator development"],"photo-1598550476439-6847785fcea6"],
["Content Production","We create scroll-stopping visual stories for social media and digital platforms.","Creating visually compelling content, built for the first second people give it on today's digital platforms.",["Photography","Videography","Short-form video","Social media content","Creative direction"],"photo-1492691527719-9d1e07e534b4"],
["Creative Campaign","We build campaign concepts and creative strategies that help brands stand out and get remembered.","Developing creative ideas and campaign strategies that make brands stand out.",["Campaign concept","Creative strategy","Content direction","Digital activation","Campaign execution"],"photo-1557804506-669a67965ba0"]];
