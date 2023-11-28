"use client";
import Reveal from 'reveal.js';
import Markdown from "reveal.js/plugin/markdown/markdown";
import { useEffect } from 'react';

import '/node_modules/reveal.js/dist/reveal.css';
import '/node_modules/reveal.js/dist/theme/black.css';


export default function Slide(){

        useEffect(() => {
                Reveal.initialize({
                    controls:true,
                    width:1000,
                    height:1000,
                    margin: 0.1,
                    display:true,
                    plugins: [ Markdown ]
                });
            }, []);
    return(
        <>
            <div className="reveal">
            <div className="slides">
                <section>robot 22</section>
                                  <section data-state="make-it-pop">
                                      <section>Objectifs</section>
                                      <section>Prerequis</section>
                                  </section>
            </div>
        </div>
        </>    
    )
}