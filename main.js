const LinksSocialMedia = {
  github: 'Leandro2306',
  youtube: 'UC5RMoOU75fx75j1W1m78ziA',
  instagram: 'leandrolima',
  facebook: 'leandro.limaS',
  twitter: 'leandrolima'
}
function socialName (){
  document.getElementById('userName').
  textContent = 'Leandro Lima'
}
socialName()

function changeSocialMediaLinks () {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') 
   li.children[0].href = `https://${social}.com/$
   {LinksSocialMedia[social]}` 
  }
}
changeSocialMediaLinks ()

//consumindo a API:
function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

 fetch (url) //pegou o conteudo da url
 .then (response => response.json()) // guardou em uma variavel 'response' => jogou num arquivo JSON.
 .then (data => {
   userName.textContent = data.name //substituindo os dados atuais pelos dados que estão no objeto JSON data
   userBio.textContent = data.bio //trocando biografia
   userLink.href = data.html_url //trocando link
   userImage.src = data.avatar_url // trocando foto
   userLogin.textContent = data.login //trocando login
 })
}
getGitHubProfileInfos ()

