import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import Single from '../../../components/Banner/Sections/Single'
import ProductDescription from '../../../components/Product/Sections/ProductDescription'
import ProductCharacteristics from '../../../components/Product/Sections/ProductCharacteristics'

import Sku from '../components/sku/Sku'
import ProductDetailsIndex from '../components/detail/Detail'
import ProductReview from '../components/reviews/Reviews'
import Finalization from '../components/finalization/Finalization'
import Amount from '../components/amount/Amount'
import Warnings from '../components/warnings/Warnings'
import Freight from '../components/freights/Freights'
import Tickets from '../components/tickets/Tickets'
import ProductQuestionAds from '../components/questions/Questions'


import { getProductData } from '../../../api'
import { generateBreadcrumb } from '/src/utils/productUtils'

import 'react-tabs/style/react-tabs.css'
import ProductTop from '../sections/productTop'
import ProductBottom from '../sections/productBottom'


/**
 *
 * @returns
 */

function ProductIndexPage() {
  const { id } = useParams()
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductData({
          productId: id
        })
        setProductData(data)

        console.log('!!!', data)
      } catch (error) {
        console.error('Ocorreu um erro:', error)
      }
    }
    fetchData()
  }, [id])

  const images = [
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1018/250/150/'
    },
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1015/250/150/'
    },
    {
      original: 'https://via.placeholder.com/900x900',
      thumbnail: 'https://picsum.photos/id/1019/250/150/'
    }
  ]

  return (
    <div className='product'>
        <ProductTop />
        <ProductBottom />
        <Single banner={productData?.bannerFooter} />
    </div>
  )
}

export default ProductIndexPage
