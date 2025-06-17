import React from 'react';
import { caseStudyCovers } from '../components/images';

function Home() {
    return (
        <div className="case-studies container-fluid">
            <h2 className="color-orange">CASE STUDIES</h2>
            <div className="card-container">
                <div className="card">
                    <div className="layer-1 card-body bg-purple">
                        <h3 className="card-title">RIGHT ON EDUCATION</h3>
                        <h4 className="card-text text-center">CENTRAL REDESIGN</h4>
                        <button type="button" className="btn btn-primary mx-auto d-block magenta-hover righton-btn" onClick={() => window.location.href='righton'}>
                            <h4 className="btn-text color-purple">See Project</h4>
                        </button>
                    </div>
                    <img className="mx-auto d-block card-img-bottom" src={caseStudyCovers.rightOn} alt="Right On Education project cover" />
                </div>                <div className="card">
                    <div className="layer-1 card-body bg-orange">
                        <h3 className="card-title">KIM'S DRAGON FOOD TRUCK</h3>
                        <h4 className="card-text text-center">MOBILE ORDERING WEBAPP</h4>
                        <button type="button" className="btn btn-primary mx-auto d-block pink-hover" onClick={() => window.location.href='kims-dragon'}>
                            <h4 className="btn-text color-orange">See Project</h4>
                        </button>
                    </div>
                    <img className="mx-auto d-block card-img-bottom" src={caseStudyCovers.kimsDragon} alt="Kim's Dragon Food Truck project cover" />
                </div>
                <div className="card">
                    <div className="layer-2 card-body bg-green">
                        <h3 className="card-title">RIVERFRONT WILMINGTON</h3>
                        <h4 className="card-text text-center">INTERACTIVE WEBSITE DESIGN</h4>
                        <button type="button" className="btn btn-primary mx-auto d-block blue-hover" onClick={() => window.location.href='riverfront'}>
                            <h4 className="btn-text color-green">See Project</h4>
                        </button>
                    </div>
                    <img className="mx-auto d-block card-img-bottom" src={caseStudyCovers.riverfront} alt="Riverfront Wilmington project cover" />
                </div>                <div className="card">
                    <div className="layer-2 card-body bg-blue">
                        <h3 className="card-title">LETTERBOXD MOVIE TILE</h3>
                        <h4 className="card-text text-center">MICROINTERACTION DESIGN</h4>
                        <button type="button" className="btn btn-primary mx-auto d-block purple-hover" onClick={() => window.location.href='letterboxd'}>
                            <h4 className="btn-text color-blue">See Project</h4>
                        </button>
                    </div>
                    <img className="mx-auto d-block card-img-bottom" src={caseStudyCovers.letterboxd} alt="Letterboxd movie tile project cover" />
                </div>
                <div className="card">
                    <div className="layer-3 card-body bg-orange">
                        <h3 className="card-title">TESSERA</h3>
                        <h4 className="card-text text-center">ANIMATED INTERACTION DESIGN</h4>
                        <button type="button" className="btn btn-primary mx-auto d-block pink-hover" onClick={() => window.location.href='tessera'}>
                            <h4 className="btn-text color-orange">See Project</h4>
                        </button>
                    </div>
                    <img className="mx-auto d-block card-img-bottom" src={caseStudyCovers.tessera} alt="Tessera project cover" />
                </div>
            </div>
        </div>
    );
}

export default Home;