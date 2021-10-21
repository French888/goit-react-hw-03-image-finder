import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
export function ImagesGallery(){
    return(
        <ul className={style.ImageGallery}>
  <ImageGalleryItem/>
</ul>

    )
}