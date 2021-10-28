import style from './ImageGalleryItem.module.css'

export function ImageGalleryItem({hits:{ webformatURL, largeImageURL}}){
    return(
        <li className={style.ImageGalleryItem}>
  <img src={webformatURL} alt="" width="640" className={style.ImageGalleryItem-image}/>
</li>

    )
}