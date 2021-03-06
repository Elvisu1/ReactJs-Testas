import React from "react";
import css from './Categories.module.css'
import poster from '../assets/img/posters.jpg'
import apparel from '../assets/img/apparel.jpg'
import stickers from '../assets/img/stickers.jpg'
import cups from '../assets/img/cups.jpg'
import calendars from '../assets/img/calendars.jpg'

function Categories(){
    return(

        <div className={css.div}>

                <h1 className={css.h1}>CATEGORIES</h1>

<div className={css.imgCards}>
    <div >
        <img className={css.img} src={poster}/>
        <p className={css.p}>POSTERS</p>

    </div>
    <div >
        <img className={css.img} src={apparel}/>
        <p className={css.p}>APPAREL</p>

    </div>
    <div >
        <img className={css.img} src={stickers}/>
        <p className={css.p}>STICKERS</p>

    </div>
    <div >
        <img className={css.img} src={cups}/>
        <p className={css.p}>CUPS</p>

    </div>
    <div >
        <img className={css.img} src={calendars}/>
        <p className={css.p}>CALENDARS</p>

    </div>
</div>

        </div>

    )
}
export default Categories
