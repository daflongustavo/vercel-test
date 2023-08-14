import React from 'react'

const Video = () => {
  return (
    <div className='p-4 flex '>
      <div className='w-4/6'>
        <h1 className='text-4xl mb-6'>Bootcamp | Aula 1</h1>
        <iframe width="960" height="540" src="https://www.youtube.com/embed/i-5nYErMVsk" title="PyCharm - Configurações e Como Funciona" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p className='mt-4'>Descrição da aula, explicação, materiais de apoio e etc.</p>
    </div>
    </div>

  )
}

export default Video