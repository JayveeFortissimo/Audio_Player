const audio = document.querySelector('audio');
//Call for title of music
const title = document.querySelector('.title');
const createTitle = document.createElement('h5')

const img = document.querySelector('.imgs');
const createImage = document.createElement('img');

createImage.setAttribute('src','Honeys.jpg');
img.appendChild(createImage);
//For title append child
createTitle.textContent = "Honey"
title.appendChild(createTitle)

//call for body
const body = document.querySelector('body');

//next and rewind button
const next = document.querySelector('.next');
const rewind = document.querySelector('.back');


//Fetch data and change the music
let list = 1;

//For constant music background pic of Honey Works
body.style.backgroundImage = `url(Honeys.jpg)`
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';
body.style.backgroundPosition='center';
body.style.backgroundAttachment = 'fixed';

const getAudio = async () =>{

   try{
      const response = await fetch("playlist.json");
      const data = await response.json();
        getMusic(data)

   }catch(error){
      console.log(error)
   }

}

getAudio();

const getMusic = (datas) =>{


   next.addEventListener('click',()=>{
      

   const playlist = datas.playlist;

   const tracks = playlist.find(inso => inso.id === list);
   if(tracks){
      console.log(tracks)
        audio.setAttribute('src',`${tracks.img}`);
        createImage.setAttribute('src',`${tracks.image}`);
        img.appendChild(createImage);
        createTitle.textContent = `${tracks.title}`
        body.style.backgroundImage = `url(${tracks.image})`
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition='center';
        body.style.backgroundAttachment = 'fixed';
       audio.load();
       audio.play();
   }

     list = (list>= 6) ? 1:list +1;
   
   })


   //back button

   rewind.addEventListener('click',()=>{
      const playlist = datas.playlist;

      const tracks = playlist.find(inso => inso.id === list);
      if(tracks){
         console.log(tracks)
           audio.setAttribute('src',`${tracks.img}`);
           createImage.setAttribute('src',`${tracks.image}`);
        img.appendChild(createImage);
        createTitle.textContent = `${tracks.title}`;
        body.style.backgroundImage = `url(${tracks.image})`
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition='center';
        body.style.backgroundAttachment = 'fixed';
          audio.load();
          audio.play();
      }
   
        list = (list<=0) ? 6:list -1;
   })

}
///

/////////////////////////////////////////or Play Button
const playing = document.querySelector('.play');
//For Play Button
const createplaybutton = document.createElement('span');
createplaybutton.setAttribute('class','material-icons');
createplaybutton.textContent = 'play_arrow'
playing.appendChild(createplaybutton);




let plays = true;

const play = document.querySelector('.play').addEventListener('click',()=>{
   if(plays){
      audio.play();
      createplaybutton.textContent = 'stop';

   }else{
      audio.pause();
      createplaybutton.textContent = 'play_arrow'
   }

   plays = !plays
  
});


