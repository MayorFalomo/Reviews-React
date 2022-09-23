import React, {useState} from 'react'
import "./Slider.css"
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

const Slider = () => {

      const carousels =  [
    {
    id: 1,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    position: "WEB DEVELOPER",
    comment: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
          },
    
    {
    id: 2,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Anna Johnson",
    position: "WEB DESIGNER",
    comment: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
          },
    
    {
    id: 3,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    position: "INTERN",
    comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
          },
    {
    id: 4,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    position: "THE BOSS",
    comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    ]
    
    const [current, setCurrent] = useState(0)
    
    let newArray = carousels[current]

    const nextBtn = () => {
        setCurrent(current + 1)

        if (current >= carousels.length - 1) {
            setCurrent(0)
        }
    }

    const prevBtn = () => {
        setCurrent(current - 1)

        if (current <= carousels.length + 1) {
            setCurrent(0)
        }
    }

    const randomBtn = () => {
        let randomNumber = Math.floor(Math.random() * 3)
        
        setCurrent(randomNumber)
    }

  return (
      <div className='container'>
          <div className='position'>
          <h1>Our Reviews</h1>
              <div className='line'></div>
              </div>
          <div className='card'>
              <div className='imagery'>
                  <img src={newArray.image} alt="img" />
              </div>
          <h2>{newArray.name}</h2>
          <span>{newArray.position} </span>
          <p>{newArray.comment}</p>
          <div className='nextPrevBtn'>
              <button className='prev' onClick={prevBtn}><FaAngleLeft /></button>
              <button className='next' onClick={nextBtn} ><FaAngleRight/></button>
          </div>
              <button className='surpriseBtn' onClick={randomBtn}>Surprise Me</button>
          </div>
    </div>
  )
}

export default Slider