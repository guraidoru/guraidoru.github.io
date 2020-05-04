let pair = new Map()

pair.set('ｼ','あ')
pair.set('ｼｺ','い')
pair.set('ｼｺｼ','う')
pair.set('ｼｼｺ','え')
pair.set('ｺｼ','お')
pair.set('ｺｼｺ','か')
pair.set('ｺｼｼ','き')
pair.set('ｵﾅ','く')
pair.set('ﾅｵ','け')
pair.set('ｦﾅ','こ')
pair.set('ﾅｦ','さ')
pair.set('ｵﾅｵ','し')
pair.set('ﾅｵｵ','す')
pair.set('ｵﾅﾅ','せ')
pair.set('ｵｵﾅ','そ')
pair.set('ｵｵｵ','た')
pair.set('ｦﾅｦ','ち')
pair.set('ﾅｦｦ','つ')
pair.set('ｦﾅﾅ','て')
pair.set('ｦｦﾅ','と')
pair.set('ｦｦｦ','な')
pair.set('ｼｺｼｺ','に')
pair.set('ｼｼｺｺ','ぬ')
pair.set('ｺｺｼｼ','ね')
pair.set('ｼｺｺｼ','の')
pair.set('ｺｼｼｺ','は')
pair.set('ｼｼｼｺ','ひ')
pair.set('ｺｺｺｼ','ふ')
pair.set('ｵﾅﾆ','へ')
pair.set('ｵﾆﾅ','ほ')
pair.set('ｦﾅﾆ','ま')
pair.set('ｦﾆﾅ','み')
pair.set('ﾋﾞｭ','む')
pair.set('ｭﾋﾞ','め')
pair.set('ﾋﾞｭﾙ','も')
pair.set('ﾙｭﾋﾞ','や')
pair.set('ｲｸ','ゆ')
pair.set('ｲｸﾞ','よ')
pair.set('ﾋﾞｭﾙﾙ','ら')
pair.set('ﾋﾞｭｯ','り')
pair.set('ｲｸﾞｯ','る')
pair.set('ﾃﾞｭﾙﾙ','れ')
pair.set('ﾋﾟｭｯ','ろ')
pair.set('ｲｸﾞｩｯ','ん')

let npair = new Map()
ito = Array.from(pair.keys())
itj = Array.from(pair.values())
for(var i = 0; i < pair.size; i++){
  npair.set(itj[i],ito[i])
}


function toJp(law){
  laws = law.split(' ')
  let japs = []
  let jap = ""
  for(var i = 0; i < laws.length; i++){
    if(laws[i].indexOf('"') != -1){
      laws[i] = laws[i].replace('"', '')
      japs.push(pair.get(laws[i]))
      japs.push('"')
    } else {
      japs.push(pair.get(laws[i]))
    }
  }
  jap = japs.join('')
  return jap
}
function toOn(law){
  laws = law.split('')
  let onas = []
  let ona = ""
  for(var i = 0; i < laws.length; i++){
    if(laws[i].indexOf('"') != -1){
      laws[i] = laws[i].replace('"', '')
      onas.push('"')
    } else {
      onas.push(npair.get(laws[i]))
    }
  }
  ona = onas.join(' ')
  return ona
}

function onclicktrans(){
  if(document.getElementById("sel").value == "oj"){
    document.getElementById("textarea2").value = toJp(document.getElementById("textarea1").value)
  } else {
    document.getElementById("textarea2").value = toOn(document.getElementById("textarea1").value)
  }
}

function copyToClipboard(){
  document.getElementById("textarea2").select()
  document.execCommand("Copy")
}

function tweetresult() {
  let tw_contents = document.getElementById("textarea2").value
  let url = "https://guraidoru.github.io/onanigo/"
  window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja")
}
