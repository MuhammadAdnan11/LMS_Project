import React from 'react'
import './CourseVideos.css';
import Navbar from './Navbar';
import ScrollButton from './ScrollButton';
import Footer from './Footer';

export const CourseVideos = () => {

let listVideo = document.querySelectorAll('.video-list .vid ');
let mainVideo = document.querySelector('.main-video video ');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video=> {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});
    
    // let videoList = document.querySelectorAll('.video-list .vid');

    // videoList.forEach(video => {
    //     video.onclick = () => {
    //         let src = video.querySelector('.list-video').src;
    //         let title = video.querySelector('.title').innerHTML;
    //         document.querySelector('.main-video .mainvideo').src = src;
    //         document.querySelector('.main-video .mainvideo').play();
    //         document.querySelector('.main-video .mainvideo').innerHTML = title;
    //     };
    // });
    
    
    
    
    
    return (
      
        <>
            <Navbar/>
          <h3 className='heading'>Video Gallery</h3>
          <div className='container-fluid vdContainer' >
              <div className='main-video'>
                  <div className='video'>
                      <video src='./Videos/video1.mp4' controls muted autoPlay ></video>
                      <h3 className='title'>0.1. Video title goes here</h3>
                  </div>
              </div>
                                             
                <div className='video-list'>      
                                           
                  <div className='vid active'>
                        <video src='./Videos/video1.mp4' muted ></video>
                  
                      <h3 className='title'>0.1. Video title goes here</h3>
                  </div>

                  <div className='vid'>
                      <video src='./Videos/video2.mp4'  muted  ></video>
                      <h3 className='title'>0.2. Video title goes here</h3>
                  </div>

                  <div className='vid'>
                      <video src='./Videos/video3.mp4'  muted  ></video>
                      <h3 className='title'>0.3. Video title goes here</h3>
                  </div>

                  <div className='vid'>
                      <video src='./Videos/video4.mp4'  muted  ></video>
                      <h3 className='title'>0.4. Video title goes here</h3>
                    </div>
                    
                   
            </div>

          </div>

          
  <ScrollButton/>
   <Footer/>
          
      </>
    )
   
}
