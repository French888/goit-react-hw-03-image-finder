import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

export function ImagesGallery({items}){
    return(
        <ul className={style.ImageGallery}>
            {items.map(item=>(
                <li key={item.hits.id}>
                  <ImageGalleryItem hits={item.hits}/>
                </li>
            )
                
            
       )}
  
</ul>

    )
}