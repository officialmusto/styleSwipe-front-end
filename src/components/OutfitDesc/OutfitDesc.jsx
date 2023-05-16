// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as outfitService from '../../services/outfitService'

// css
// import styles from './OutfitDesc.module.css'


const OutfitDesc = () => {
  const { outfitId } = useParams()
  const [outfit, setOutfit] = useState(null)

  useEffect(() => {
    const fetchOutfit = async () => {
      const data = await outfitService.show(outfitId)
      console.log(outfit)
      setOutfit(data)
    }
    fetchOutfit()
  }, [outfitId])

}

export default OutfitDesc;