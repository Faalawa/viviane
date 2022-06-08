import React from 'react';
import './Events.css';


const Events = () => {

    return(
        <div>
         <div>
          <img src="https://media.afrocharts.com/file/afrocharts-media/uploads/2019/3/Viviane-Chidid---No-Stress-afrocharts.jpg" alt="" />
         </div>
          <div>
          <fieldset>
              <legend>Up coming Concerts</legend>
              <img className="tour" src="https://i.scdn.co/image/619707b11f89ffe568942b27e2bc3015bcdb5c57"alt="" />
              <li><a href="https://festivaly.eu/en/artists/viviane-chidid/230415">Wuyuma Tour</a></li> 
              <br></br>
              <br></br>
              <img className="tour" src="https://images-na.ssl-images-amazon.com/images/I/61hveUjKyoL._SY445_SX342_QL70_ML2_.jpg" alt="" />
              <li><a href="https://festivaly.eu/en/artists/viviane-chidid/230415">Nangulma Tour</a></li> 
          </fieldset>
          </div>
          <div className="footer">
            <footer>
                <br></br>
                <p>Follow A Long!!!</p>
                <ul className="nav">
                    <li><a href="https://www.facebook.com/VivianeChididlOfficiel">Facebook</a></li> 
                    <li><a href="https://www.youtube.com/channel/UCYsdOXVmOjhT-LB2r9U35Mg">Youtube</a></li>
                    <li><a href="https://open.spotify.com/artist/237q6mAGCztUeAVYoQhn2Q?autoplay=true">Spotify</a></li>
                    <li><a href="https://www.amazon.com/Nangoulema/dp/B084KWR1YY">Amazon</a></li>
                    <li><a href="https://music.apple.com/us/artist/viviane-chidid/579362483">Apple</a></li>
                    <li><a href="https://www.deezer.com/us/artist/4101594?autoplay=true">Deezer</a></li>
                    <li><a href="https://www.instagram.com/vivianechidid.officiel/">Instagram</a></li>
                </ul>
                <br></br>
                <br></br>
            </footer>
          </div>
          
        </div>        
    );

}

export default Events;