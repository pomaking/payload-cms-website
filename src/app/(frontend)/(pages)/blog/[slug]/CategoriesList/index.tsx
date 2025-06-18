import { Fragment } from 'react'
import Link from 'next/link'
import { Label } from '@components/Label/index.js'
import { Media } from '@components/Media/index.js'
import { Post } from '@root/payload-types.js'
import classes from './index.module.scss'
export const CategoriesList: React.FC<{
  categories: Post['categories']
}> = props => {
  const { categories } = props
  if (!categories || categories?.length === 0) {
    return null
  }
  return (
    <div className={classes.categorySlot}>
      <span className={classes.label}>Tag{`${categories.length > 1 ? 's' : ''}`}</span>
      {categories?.map((category, index) => (
        <Fragment key={index}>
          {category && typeof category !== 'string' && (
            <Fragment>
                <Link
                  className={classes.categoryLink}
                  href={`/blog/tag/${category?.slug}`}
                  rel="noopener noreferrer"
                >
                  <div className={classes.category}>
					<div className={classes.categoryInfo}>
						<span>{`${category?.title || 'None'}`}</span>
					</div>
				  </div>
                </Link>
            </Fragment>
          )}
        </Fragment>
      ))}
    </div>
  )
}
