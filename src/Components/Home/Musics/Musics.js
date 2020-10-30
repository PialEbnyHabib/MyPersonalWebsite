import React from 'react';

const Musics = () => {
    return (
        <div>
                <div className="row detail">
                     
                    <div className="col-md-12">
                        <h3 className="third">I'm also a Musician,here are some of my songs .</h3>
                        <iframe width="400" height="315" src="https://www.youtube.com/embed/jf9HqrTjYSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <br></br>
                    <div ><button type="button" class="btn btn-dark"><a className="seemore" target="blank" href="https://www.youtube.com/channel/UCryx1gV_ETJmxNKx3p7deNA?sub_confirmation=1">See more</a></button></div>
                    </div>
                    
                    
                    
                    
                </div>
        </div>
    );
};

export default Musics;   